import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import SignIn from './components/SignInUp/SignIn';
import Navbar from '../src/components/Home/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signIn' element={<SignIn></SignIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
