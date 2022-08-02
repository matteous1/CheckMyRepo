// App and Redux interfaces

// 0 default
// 1 wrong user or repo
// 2 not conntected
// 3 api error
// 4 success
export type Status = 0 | 1 | 2 | 3 | 4
export interface AppState {
  user: string;
  repo: string;
  status: Status;
}