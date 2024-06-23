
import './App.css';
import { Footer } from './components/Footer.js';
import { Header } from './components/Header.js';
import {AllRoutes} from './routes/AllRoutes.js'

function App() {
  return (
    <div>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
