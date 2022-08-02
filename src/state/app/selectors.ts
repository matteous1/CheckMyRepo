import { AppState } from '../../models/app';

const getUser = (state: AppState) => state.user;

const getRepo = (state: AppState) => state.repo;


const selectors = {
  getUser,
  getRepo,
}

export default selectors;
