// App and Redux interfaces

export interface AppState {
  user: string;
  repo: string;
  status: 'failOne' | 'failTwo' | 'failThree' | 'success' | null;
}