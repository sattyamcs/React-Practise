import ReactProps from "./Component/ReactProps"
import './App.css'
import UseEffect from "./Component/UseEffect";
import UseState from "./Component/UseState";
import ReactState from "./Component/ReactState";
import ReactStateClass from "./Component/ReactStateClass";
import ReactToggle from "./Component/ReactToggle";
import ReactForms from "./Component/ReactForms";
import ReactUseRef from "./Component/ReactUseRef";
import FormValidation from "./Component/FormValidation";
function App() {
//This function is passing as props and when it called its called like Data();
  function reactProps(){
    alert("Hello this is react props")
  }
  return (
    <>
    {/* <ReactProps Data={reactProps} name={{name:"Sattyam",Profession:"Engineer"}}/> */}
    {/* <UseState/> */}
    {/* <UseEffect/> */}
    {/* <ReactState/> */}
    {/* <ReactStateClass/> */}
    {/* <ReactToggle/> */}
    <ReactForms/>
    {/* <ReactUseRef/> */}
    <FormValidation/>
    </>
  );
}

export default App;
