import './App.css';
import { Box } from "@chakra-ui/react";
import Navbar from './components/user/navbar/Navbar';
import Routing from './routing/Routing';
import Footer from './components/user/footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Box mt={{ base: 12, md: 20 }}>
      <Routing/>
      </Box>
     <Footer/>
    </div>
  );
}

export default App;
