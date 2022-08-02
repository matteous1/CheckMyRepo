import store from '../store';
export type RootState = ReturnType<typeof store.getState>

const getUser = (state: RootState) => state.app.user

const getRepo = (state: RootState) => state.app.repo

const getStatus = (state: RootState) => state.app.status

const selectors = {
  getUser,
  getRepo,
  getStatus,
}

export default selectors
