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

function App() {
  return (
    <>
      <h1>Hello from App</h1>
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
      <UseRef />
      <StateManagerRef />
    </>
  )
}

export default App;