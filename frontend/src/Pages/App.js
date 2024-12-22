import '../styles/App.css';
import Header from '../Components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';
import HomePage from '../Components/HomePage'; // Extract the home page content to a separate component
import Register from './Register';
import RegisterPage from '../Components/Registerpage';
import Explore from './Explore';
import AddEvent from './Addevent';
import AddEventstep2 from './Addeventstep2';
import AddEventstep3 from './Addeventstep3';
import HowItWorks from "./HowItWorks"
import Footer from '../Components/Footer';
import Seller1 from "./Seller1"
import ContactUs from './ContactUs'
import Event_Page from"./Event_Page"


const tickets = [
  { id: 1, name: "Diljit", price: 10000, details: "fffhewjfkjfbeiuwfkjewfgffiu", image: "image_url" },
  { id: 2, name: "Karan", price: 10000, details: "fffhewjfkjfbeiuwfkjewfgffiu", image: "image_url" },
  { id: 3, name: "Arjit Singh", price: 10000, details: "fffhewjfkjfbeiuwfkjewfgffiu", image: "image_url" },
  // Add more items as needed
];


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Header'>
        <Header />
        </div>

        <div className="Routes">
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path='/Addevent' element={<AddEvent />} />
          <Route path="/addevent_2" element={<AddEventstep2 />} />
          <Route path="/addevent_3" element={<AddEventstep3 />} />
          <Route path="/HowItWorks" element={<HowItWorks/>} />
          <Route path ="/Seller1" element= {<Seller1/>}/>
          <Route path="/Event/:id" element={<Event_Page />} />
          <Route path ="/ContactUs" element= {<ContactUs/>}/>
          
        </Routes>
        </div>
        <Footer/>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;

