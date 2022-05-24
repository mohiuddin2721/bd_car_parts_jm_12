import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import SignIn from './components/SignInUp/SignIn';
import Navbar from '../src/components/Home/Navbar';
import SignUp from './components/SignInUp/SignUp';
import Purchase from './components/Home/Purchase';
import RequireAuth from '../src/components/SignInUp/RequireAuth';
import Blog from './components/others/Blog';
import MyPortfolio from './components/others/MyPortfolio';
import NotFound from './components/Shared/NotFound';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
