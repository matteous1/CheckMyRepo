import store from '../store'
export type RootState = ReturnType<typeof store.getState>

const getUser = (state: RootState) => state.app.user;

const getRepo = (state: RootState) => state.app.repo;

const getStatus = (state: RootState) => state.app.status;

const getStatusError = (state: RootState) => state.app.statusError;

const selectors = {
  getUser,
  getRepo,
  getStatus,
  getStatusError,
}

export default selectors;
