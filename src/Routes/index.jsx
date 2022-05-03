import React from "react";
import Home from "../Pages/Home";
import Hero from "../Pages/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":heroID" element={<Hero />} exact />
      </Routes>
    </BrowserRouter>
  );
}
