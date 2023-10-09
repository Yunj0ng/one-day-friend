import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartPage, DetailPage,HomePage, ShowPage, NotFoundPage, FaqPage } from '@pages/index.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/show" element={<ShowPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
