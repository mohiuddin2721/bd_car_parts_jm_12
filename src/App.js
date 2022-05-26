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
import MyProfile from './components/Dashboard/MyProfile';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import AddProducts from './components/Dashboard/AddProducts';
import ManageOrders from './components/Dashboard/ManageOrders';
import ManageItems from './components/Dashboard/ManageItems';

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
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='addProduct' element={<AddProducts></AddProducts>}></Route>
          <Route path='manageOrders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='manageItems' element={<ManageItems></ManageItems>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
