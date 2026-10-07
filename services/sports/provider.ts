export type SportsProviderMethodResult<T> = {
  ok: boolean;
  data: T;
  message?: string;
  error?: string;
};

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
  getH2H(): Promise<SportsProviderMethodResult<any[]>>;
  getNews(): Promise<SportsProviderMethodResult<any[]>>;
  getOdds(): Promise<SportsProviderMethodResult<any[]>>;
  getCompetitions(): Promise<SportsProviderMethodResult<any[]>>;
}

export class NoopSportsProvider implements SportsProvider {
  private readonly unavailableMessage = 'Configure uma API esportiva no painel administrativo para começar a receber dados reais.';

  async getTeams() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getTeam() {
    return { ok: false, data: null, message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getMatches() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getMatch() {
    return { ok: false, data: null, message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getLiveMatches() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getStandings() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getStatistics() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getLineups() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getEvents() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getH2H() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getNews() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }

  async getOdds() {
    return { ok: false, data: [], message: 'Odds não disponíveis.', error: this.unavailableMessage };
  }

  async getCompetitions() {
    return { ok: false, data: [], message: 'Dados não disponíveis.', error: this.unavailableMessage };
  }
}

export const sportsProvider = new NoopSportsProvider();
