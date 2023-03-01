import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header, Footer } from './core/components';
import MainRoutes from './core/components/routes/MainRoutes';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

import './conf/translation';
import { Provider } from 'react-redux';
import store from './core/redux/store';

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <BrowserRouter>
          <Header></Header>
          <MainRoutes />
          <Footer></Footer>
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
