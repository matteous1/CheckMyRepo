import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import User from './User';
import Repo from './Repo';
import Confirmation from './Confirmation';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/repo" element={<Repo />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>    
  )
}

export default AppRoutes