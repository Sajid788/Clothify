
import './App.css';
import Footer from './components/user/footer/Footer';
import Navbar from './components/user/navbar/Navbar';

import Routing from './routing/Routing';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routing/>
     <Footer/>
    </div>
  );
}

export default App;
