import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NavBarComponent from "./navbar/navbar";
import ExpansesComponent from "./pages/expanses/expanses";
import AboutUsComponent from "./pages/aboutUs/aboutUs";
import SignComponent from "./pages/sign/signIn";
import SignUpComponent from "./pages/sign/signUp";
import HomeComponent from "./pages/home/home";
import React from "react";
import {useState,useEffect} from 'react';
import ErrorComponent from "./errorComponent/errorComponent";

const tabs = ["home","expenses","about_Us"];

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/expenses"></Navigate>,errorElement:<ErrorComponent /> },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <HomeComponent></HomeComponent>
      </div>
    ),
    path: "/home",
    errorElement:<ErrorComponent />,
  },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <ExpansesComponent></ExpansesComponent>
      </div>
    ),
    path: "/expenses",
    errorElement:<ErrorComponent />,
  },

  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <AboutUsComponent></AboutUsComponent>
      </div>
    ),
    path: "/about_Us",
    errorElement:<ErrorComponent />,
  },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <SignComponent></SignComponent>
      </div>
    ),
    path: "/sign_In",
    errorElement:<ErrorComponent />,
  },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <SignUpComponent></SignUpComponent>
      </div>
    ),
    path: "/sign_Up" ,
    errorElement:<ErrorComponent />,
  }
]);

export const buttonContext=React.createContext()

function App() {
  const [visible, setVisible] = useState();

  useEffect(() => {
    if(visible){
      setVisible(true);
    }
    else{setVisible(false);}

  }, [visible]);

  return (
    <buttonContext.Provider value={{visible,setVisible}}>
      
      <RouterProvider router={router} ></RouterProvider>
      
    </buttonContext.Provider>
    
  );
}

export default App;
