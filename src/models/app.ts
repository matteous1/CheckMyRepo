// App and Redux interfaces

export interface AppState {
  user: string;
  repo: string;
  status: 'fail' | 'success' | null;
  statusError: string;
}