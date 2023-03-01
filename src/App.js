import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './core/components';
import MainRoutes from './core/components/routes/MainRoutes';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

import './conf/translation';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <Header></Header>
        <MainRoutes />
        <Footer></Footer>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
