import ColourChange from "./Components/ColourChange";
import APICall from "./Components/APICall";
import ChangeName from "./Components/ChangeName";
import Counter from "./Components/Counter";
import Events from "./Components/Events";
import Parent from "./Components/Parent";
import Timer from "./Components/Timer";
import Toggle from "./Components/Toggle";
import BrowserTab from "./Components/BrowserTab";
import RealTime from "./Components/RealTime";
import Memoo from "./Components/Memoo";
import Input from "./Components/Input";
import UseMemo from "./Components/Usememo";
import Usecallback from "./Components/Usecallback";
import UseRef from "./Components/UseRef";
import StateManagerRef from "./Components/StateManagerRef";
import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

import Home from "./Components/Home";
import Clock from "./Components/Clock";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Header from "./Components/Header";
import ModalComponent from "./Components/ModalComponent";
import Activetabs from "./Components/Activetabs";
import Slideshow from "./Components/Slideshow";
import FetchComments from "./Components/FetchComments";
import OTPGenerator from "./Components/OTPGenerator";
import Navbar from "./Components/Navbar";
// import Admin from "./Components/Admin";
// import Dashboard from "./Components/Dashboard";

const Admin = React.lazy(() => import("./Components/Admin"))
const Dashboard = lazy(() => import("./Components/Dashboard"))


function App() {
  return (
    <>
      <Navbar />
      {/* <OTPGenerator /> */}
      {/* <FetchComments /> */}
      {/* <Slideshow /> */}
      {/* <Activetabs /> */}
      {/* <ModalComponent /> */}
      {/* <Provider store={appStore}>
        <h1 className="text-3xl">Hello from App</h1> 
        <Routes>
          <Route element= {<Header />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<Clock />} path="/clock" />
          <Route element={<Suspense fallback="Admin page Loading...." > <Admin /> </Suspense>} path="/admin" />
          <Route element={<Suspense fallback="Dashboard page Loading...." > <Dashboard /> </Suspense>} path="/dashboard" />
        </Routes>
      </Provider> */}
      {/* <Events /> */}
      {/* <ChangeName name="Rohini" /> */}
      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <Toggle /> */}
      {/* <ColourChange /> */}
      {/* <Parent /> */}
      {/* <APICall /> */}
      {/* <BrowserTab /> */}
      {/* <RealTime /> */}
      {/* <Memoo dog = "Doggy" /> */}
      {/* <Input /> */}
      {/* <UseMemo /> */}
      {/* <Usecallback /> */}
      {/* <UseRef />
      <StateManagerRef /> */}
    </>
  )
}

export default App;