import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartPage, DetailPage,HomePage, ShowPage, NotFoundPage, FaqPage } from '@pages/index.js';
import { SeletedContextProvider } from "@context/SeletedContext.jsx";
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SeletedContextProvider>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/show" element={<ShowPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </SeletedContextProvider>
        </LocalizationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
