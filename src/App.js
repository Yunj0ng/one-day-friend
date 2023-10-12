import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CartPage,
  DetailPage,
  HomePage,
  ShowPage,
  NotFoundPage,
  FaqPage,
} from "@pages/index.js";
import { ThemeProvider } from "@mui/material/styles";
import { SeletedContextProvider } from "@context/SeletedContext.jsx";
import { SettingContextProvider } from "@context/SettingContext.jsx";
import { UserContextProvider } from "@context/UserContext";
import { OderContextProvider } from "@context/OderContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import theme from "@styles/muiStyles.jsx"

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SettingContextProvider>
            <UserContextProvider>
              <OderContextProvider>
                <SeletedContextProvider>
                  <ThemeProvider theme={theme}>
                  <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/show" element={<ShowPage />} />
                    <Route path="/faq" element={<FaqPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                  </ThemeProvider>
                </SeletedContextProvider>
              </OderContextProvider>
            </UserContextProvider>
          </SettingContextProvider>
        </LocalizationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
