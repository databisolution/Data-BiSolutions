import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact';
import Produit from './components/Produit';
import Technologies from './components/Technologies'
import Partenaires from './components/Partenaires'
import Apropos from './components/Apropos'
import PlanDActions from './components/PlanDAction'
import NotFound from './components/NotFound'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/planAction' element={<PlanDActions />}></Route>
          <Route path='/produit' element={<Produit />}></Route>
          <Route path='/technologies' element={<Technologies />}></Route>
          <Route path='/partenaires' element={<Partenaires />}></Route>
          <Route path='/contact' element={<Contact />}></Route> 
          <Route path='/aPropos' element={<Apropos />}></Route> 
          <Route path='*' element={<NotFound />}/>
          <Route exact path='/' element={<MainPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
