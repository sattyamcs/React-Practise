import ReactProps from "./Component/ReactProps"
import './App.css'
import UseEffect from "./Component/UseEffect";
import UseEffect2 from './Component/UseEffect2'
import UseState from "./Component/UseState";
import ReactState from "./Component/ReactState";
import ReactStateClass from "./Component/ReactStateClass";
import ReactToggle from "./Component/ReactToggle";
import ReactForms from "./Component/ReactForms";
import ReactUseRef from "./Component/ReactUseRef";
import FormValidation from "./Component/FormValidation";
import ControlledUncontrolled from "./Component/Controlled&Uncon";
import HighOrderComp from "./Component/HighOrderComp";
import ReactUseMemo from "./Component/ReactUseMemo";
import ContextAPI from "./Component/ContextAPI";
function App() {
//This function is passing as props and when it called its called like Data();
  function reactProps(){
    alert("Hello this is react props")
  }
  return (
    <div className="container">
    {/* <ReactProps Data={reactProps} name={{name:"Sattyam",Profession:"Engineer"}}/> */}
    {/* <UseState/> */}
    {/* <UseEffect/> */}
    {/* <UseEffect2/> */}
    {/* <ReactState/> */}
    {/* <ReactStateClass/> */}
    {/* <ReactToggle/> */}
    {/* <ReactForms/> */}
    {/* <ReactUseRef/> */}
    {/* <FormValidation/> */}
    {/* <ControlledUncontrolled/> */}
    {/* <HighOrderComp/> */}
    {/* <ReactUseMemo/> */}
    <ContextAPI/>
    </div>
  );
}

export default App;
