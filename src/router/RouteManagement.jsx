import React, { Suspense, useEffect } from "react";
import LoadingComponent from "../component/loadingComponent/loadingComponent";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePages from "../pages/homePages/HomePages";
import Portofolio from "../pages/Portofolio/Portofolio";
import AboutUs from "../pages/aboutUs/AboutUs";
import CreateProduct from "../pages/createProduct/CreateProduct";
import LoginPage from "../pages/loginPages/LoginPage";
import FormComponent from "../pages/form/FormComponent";
import Calculator from "../pages/calculator/Calculator";
import LayoutComponent from "../component/layouts/layoutComponent";
import LandingPages from "../pages/landingPages/LandingPages";
import Tingkatan from "../pages/tingkatan/Tingkatan";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={<LoadingComponent />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            <Route path="/home" element={<HomePages />} />
            <Route path="/form" element={<FormComponent />} />
            <Route path="/create-product" element={<CreateProduct/>} />
            <Route path="/create-product/:id" element={<CreateProduct/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/about-us/:id" element={<AboutUs/>} />
            <Route path="/landing-pages" element={<LandingPages/>} />
            <Route path="/tingkatan" element={<Tingkatan/>}/>
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;
