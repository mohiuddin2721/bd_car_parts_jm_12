import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import SignIn from './components/SignInUp/SignIn';
import Navbar from '../src/components/Home/Navbar';
import SignUp from './components/SignInUp/SignUp';
import Purchase from './components/Home/Purchase';
import RequireAuth from '../src/components/SignInUp/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>
      }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
