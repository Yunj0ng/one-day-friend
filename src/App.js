import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CartPage,
  DetailPage,
  HomePage,
  ShowPage,
  NotFoundPage,
  FaqPage,
  SearchPage
} from "@pages/index.js";
import { ThemeProvider } from "@mui/material/styles";
import { SeletedContextProvider } from "@context/SeletedContext.jsx";
import { SettingContextProvider } from "@context/SettingContext.jsx";
import { UserContextProvider } from "@context/UserContext";
import { OderContextProvider } from "@context/OderContext";
import { LoadingContextProvider } from "@context/LoadingContext";
import { SearchContextProvider } from "@context/SearchContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import theme from "@styles/muiStyles.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LoadingContextProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SettingContextProvider>
              <SearchContextProvider>
                <UserContextProvider>
                  <OderContextProvider>
                    <SeletedContextProvider>
                      <ThemeProvider theme={theme}>
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/detail/:id" element={<DetailPage />} />
                          <Route path="/cart" element={<CartPage />} />
                          <Route path="/show" element={<ShowPage />} />
                          <Route path="/search" element={<SearchPage />} />
                          <Route path="/faq" element={<FaqPage />} />
                          <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                      </ThemeProvider>
                    </SeletedContextProvider>
                  </OderContextProvider>
                </UserContextProvider>
              </SearchContextProvider>
            </SettingContextProvider>
          </LocalizationProvider>
        </LoadingContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
