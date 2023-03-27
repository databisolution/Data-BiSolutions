import './App.css';
import Navbar from './component/Navbar';
import MainPage from './component/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './component/Contact';
import Produit from './component/Produit';
import Technologies from './component/Technologies'
import Partenaires from './component/Partenaires'
import Apropos from './component/Apropos'
import PlanDActions from './component/PlanDAction'
import NotFound from './component/NotFound'
import Footer from './component/Footer';

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
