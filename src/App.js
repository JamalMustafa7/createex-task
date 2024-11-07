import './App.css';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import {Footer} from './Components/Footer/Footer'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
