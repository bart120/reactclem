import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './core/components';
import MainRoutes from './core/components/routes/MainRoutes';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <MainRoutes />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
