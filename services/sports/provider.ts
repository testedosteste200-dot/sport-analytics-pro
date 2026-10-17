export type SportsProviderMethodResult<T> = { ok: boolean; data: T; message?: string; error?: string };

export interface SportsProvider {
  getTeams(): Promise<SportsProviderMethodResult<any[]>>;
  getTeam(id: string): Promise<SportsProviderMethodResult<any | null>>;
  getMatches(): Promise<SportsProviderMethodResult<any[]>>;
  getMatch(id: string): Promise<SportsProviderMethodResult<any | null>>;
  getLiveMatches(): Promise<SportsProviderMethodResult<any[]>>;
  getStandings(): Promise<SportsProviderMethodResult<any[]>>;
  getStatistics(): Promise<SportsProviderMethodResult<any[]>>;
  getLineups(): Promise<SportsProviderMethodResult<any[]>>;
  getEvents(): Promise<SportsProviderMethodResult<any[]>>;
  getH2H(id?: string): Promise<SportsProviderMethodResult<any[]>>;
  getNews(): Promise<SportsProviderMethodResult<any[]>>;
  getOdds(): Promise<SportsProviderMethodResult<any[]>>;
  getCompetitions(): Promise<SportsProviderMethodResult<any[]>>;
}

type ApiResponse = { matches?: any[]; competitions?: any[]; teams?: any[]; standings?: any[]; matchesPlayed?: number; [key: string]: any };

/**
 * football-data.org v4 adapter.
 * Configure FOOTBALL_DATA_API_TOKEN on the server. Never expose this token as NEXT_PUBLIC_*.
 * The API provides fixtures, scores, standings, teams, scorers and head-to-head data;
 * detailed corners/fouls/xG/cards statistics are not consistently included in its coverage.
 */
export class FootballDataProvider implements SportsProvider {
  private readonly baseUrl = 'https://api.football-data.org/v4';
  private readonly token = process.env.FOOTBALL_DATA_API_TOKEN;

  private async request<T>(path: string): Promise<SportsProviderMethodResult<T>> {
    if (!this.token) return { ok: false, data: null as T, message: 'API não configurada.', error: 'Defina FOOTBALL_DATA_API_TOKEN nas variáveis de ambiente do servidor.' };
    try {
      const response = await fetch(this.baseUrl + path, {
        headers: { 'X-Auth-Token': this.token, Accept: 'application/json' },
        next: { revalidate: 60 },
      });
      if (!response.ok) {
        const message = response.status === 403
          ? 'O plano da football-data.org não permite este recurso ou competição.'
          : response.status === 429
            ? 'Limite de requisições da football-data.org atingido. Tente novamente mais tarde.'
            : 'football-data.org respondeu com HTTP ' + response.status + '.';
        return { ok: false, data: null as T, message, error: message };
      }
      return { ok: true, data: await response.json() as T };
    } catch {
      return { ok: false, data: null as T, message: 'Não foi possível consultar football-data.org.', error: 'Falha de rede ao consultar o provedor.' };
    }
  }

  async getCompetitions() {
    const result = await this.request<ApiResponse>('/competitions');
    return { ...result, data: result.ok ? result.data.competitions ?? [] : [] };
  }

  async getMatches() {
    const from = new Date().toISOString().slice(0, 10);
    const to = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const result = await this.request<ApiResponse>('/matches?dateFrom=' + from + '&dateTo=' + to);
    return { ...result, data: result.ok ? result.data.matches ?? [] : [] };
  }

  async getLiveMatches() {
    const result = await this.request<ApiResponse>('/matches?status=IN_PLAY');
    return { ...result, data: result.ok ? result.data.matches ?? [] : [] };
  }

  async getMatch(id: string) {
    return this.request<any>('/matches/' + encodeURIComponent(id));
  }

  async getTeam(id: string) {
    return this.request<any>('/teams/' + encodeURIComponent(id));
  }

  async getTeams() {
    const result = await this.getMatches();
    if (!result.ok) return { ...result, data: [] };
    const teams = new Map<string, any>();
    for (const match of result.data) {
      for (const team of [match.homeTeam, match.awayTeam]) {
        if (team?.id != null) teams.set(String(team.id), team);
      }
    }
    return { ok: true, data: Array.from(teams.values()) };
  }

  async getStandings() {
    const competitions = await this.getCompetitions();
    if (!competitions.ok) return { ...competitions, data: [] };
    const codes = (competitions.data ?? []).map((competition: any) => competition.code).filter(Boolean).slice(0, 8);
    const results = await Promise.all(codes.map((code: string) => this.request<ApiResponse>('/competitions/' + encodeURIComponent(code) + '/standings')));
    const standings = results.filter((result) => result.ok).flatMap((result) => result.data.standings ?? []);
    return { ok: results.some((result) => result.ok), data: standings, message: results.some((result) => result.ok) ? undefined : 'Classificações indisponíveis para as competições acessíveis.' };
  }

  async getH2H(id?: string) {
    if (!id) return { ok: false, data: [], message: 'Informe o ID da partida para consultar o histórico do confronto.' };
    const result = await this.request<any>('/matches/' + encodeURIComponent(id) + '/head2head?limit=10');
    if (!result.ok) return { ...result, data: [] };
    const matches = result.data.matches ?? result.data.head2head?.matches ?? [];
    return { ok: true, data: matches.map((match: any) => ({ ...match, homeGoals: match.score?.fullTime?.home ?? match.score?.regularTime?.home ?? null, awayGoals: match.score?.fullTime?.away ?? match.score?.regularTime?.away ?? null })) };
  }

  async getEvents() {
    const result = await this.getMatches();
    if (!result.ok) return { ...result, data: [] };
    return { ok: true, data: result.data.flatMap((match: any) => (match.goals ?? []).map((goal: any) => ({ ...goal, matchId: match.id, homeTeam: match.homeTeam?.name, awayTeam: match.awayTeam?.name }))) };
  }

  // football-data.org v4 does not provide full match-level xG, corners, fouls and card statistics
  // as a standard universal endpoint. Return empty data rather than manufacturing statistics.
  async getStatistics() { return { ok: true, data: [], message: 'Estatísticas detalhadas (xG, escanteios, faltas e cartões) não estão disponíveis de forma universal neste provedor.' }; }
  async getLineups() { return { ok: true, data: [], message: 'Escalações dependem da cobertura e do plano da competição.' }; }
  async getNews() { return { ok: true, data: [], message: 'Notícias não são fornecidas por football-data.org.' }; }
  async getOdds() { return { ok: true, data: [], message: 'Odds dependem de cobertura/plano específico e não são expostas aqui.' }; }
}

export class NoopSportsProvider implements SportsProvider {
  private readonly unavailableMessage = 'Configure FOOTBALL_DATA_API_TOKEN nas variáveis de ambiente do servidor.';
  async getTeams() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getTeam() { return { ok: false, data: null, message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getMatches() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getMatch() { return { ok: false, data: null, message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getLiveMatches() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getStandings() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getStatistics() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getLineups() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getEvents() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getH2H() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getNews() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
  async getOdds() { return { ok: false, data: [], message: 'Odds não disponíveis.', error: this.unavailableMessage }; }
  async getCompetitions() { return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage }; }
}

export const sportsProvider: SportsProvider = process.env.FOOTBALL_DATA_API_TOKEN
  ? new FootballDataProvider()
  : new NoopSportsProvider();
