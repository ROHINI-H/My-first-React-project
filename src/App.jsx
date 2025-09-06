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
// import Admin from "./Components/Admin";
// import Dashboard from "./Components/Dashboard";

const Admin = React.lazy(() => import("./Components/Admin"))
const Dashboard = lazy(() => import("./Components/Dashboard"))

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <Routes>
        <Route element={ <Home /> } path="/" />
        <Route element={ <Suspense fallback="Admin page Loading...." > <Admin /> </Suspense> } path="/admin" />
        <Route element={ <Suspense fallback="Dashboard page Loading...." > <Dashboard /> </Suspense> } path="/dashboard" />
      </Routes>

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