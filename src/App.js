import { React, Suspense } from "react";
import CardDetailsForm from "./Card";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="card" element={<CardDetailsForm />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
