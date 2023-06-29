import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./pages/BlogList";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "./assets/index.scss";
import Details from "./pages/Details";
import News from "./pages/News";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeContext } from "./context/ThemeContext";
import Dashboard from "./pages/admin/Dashboard";
import Auth from "./pages/admin/Auth";
import CreateBlog from "./pages/admin/update/CreateBlog";
import EditBlog from "./pages/admin/update/EditBlog";

const App = () => {
  const [mode] = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector("body").className = mode;
  });
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/admin/dashboard/edit/:id"  element={<EditBlog />} ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin/dashboard/add" element={<CreateBlog />}></Route>
          <Route path="/blogs" element={<BlogList />}></Route>
          <Route path="/blogs/:id" element={<Details />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin" element={<Auth />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
