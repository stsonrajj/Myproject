import logo from './logo.svg';
import './App.css';
 import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './webpages/Home';
 import Footer from './components/Footer';
// import Hero from './components/Hero';
// import SingleProperty from './components/SingleProperty';
// import PropertyList from './components/PropertyList';
// import BestSellerList from './components/BestSellerList';
import SortedProperty from './components/SortedProperty';
import Sort from './components/Sort';
import Item from './components/Item';
import List from './components/List';
import SortedPropertyPage from './webpages/SortedPropertyPage';
import PropertyPage from './webpages/PropertyPage';
import PropertyDescription from './components/PropertyDescription';
import LogIn from './components/LogIn';
import Registration from './components/Registration';
import { DashBoard } from './webpages/DashBoard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ListPage from './webpages/ListPage';
import PropertyDescriptionPage from './webpages/PropertyDescriptionPage';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LogIn />} />
      <Route path="sign-up" element={<Registration />} />
      <Route path="propertylisting" element={<ListPage />} />
      <Route path="propertylisting/:variable" element={<ListPage />} />
      <Route path="propertysorting/:id" element={<SortedPropertyPage />} />
      <Route path="description/:name" element={<PropertyDescriptionPage />} />
      <Route path="/dashboard" element={<DashBoard/>} />
    </Routes>
  </BrowserRouter>
  {/* <PropertyDescriptionPage /> */}
    </div>
  );
}

export default App;
