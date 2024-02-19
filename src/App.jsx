import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./atsiskaitymas_lt/pages/MainPage";
import { PageNotFound } from "./atsiskaitymas_lt/pages/PageNotFound";
import { RegistrationPage } from "./atsiskaitymas_lt/pages/RegistrationPage";
import { Reviews } from "./atsiskaitymas_lt/pages/Reviews";
import { BookSearch } from "./atsiskaitymas_lt/pages/BookSearch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/mainpage" element={<MainPage />}></Route>
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/booksearch" element={<BookSearch />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <p>App.jsx Test</p>
    </>
  );
}

export default App;
