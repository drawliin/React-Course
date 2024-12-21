import Student from './Student.jsx';
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import FormComponent from "./formComponents.jsx";
import MyComponent2 from "./MyComponent2.jsx"
import ColorPicker from "./ColorPickerApp.jsx";
import WeatherApp from "./Weather App/WeatherApp.jsx";
import Object_in_State from "./Object_in_State.jsx";
import List_of_Objects from "./List_of_Objects.jsx";
import ToDoList from "./To do list App/toDoList.jsx";
import UseEffectComp from "./UseEffectComp.jsx";
import DigitalClockApp from "./Digital Clock App/DigitalClockApp.jsx";
import ComponentA from './UseContextApp/ComponentA';
import UseRefComp from './UseRefComp.jsx';
import StopWatchApp from './Stop Watch App/StopWatchApp.jsx';
import Ref from './Ref.jsx';
import Context from './Context/Context.jsx';



function App() {

  return(
    <>
      <Student name='Jamal Eddine dibiaza' age={18} 
      isStudent={true} />
      <Student name='Ahmed Gamal' age={20} isStudent={false} />
      
      <hr></hr>
      <MyComponent/>

      <hr/>
      <Counter/>

      <hr/><br/>
      <FormComponent/>

      <hr/><br/>
      <MyComponent2/>

      <hr/><br/>
      <ColorPicker/>

      <hr/><br/>
      <WeatherApp/>

      <hr/><br/>
      <Object_in_State/>
      
      <hr/><br/>
      <List_of_Objects/>

      <hr/><br/>
      <ToDoList/>

      <hr/><br/>
      <UseEffectComp/>

      <hr/><br/>
      <DigitalClockApp/>

      <hr/><br/>
      <ComponentA/>

      <hr/><br/>
      <UseRefComp/>

      <hr/><br/>
      <StopWatchApp/>

      <hr/><br/>
      <Ref/>
      
      
      <hr/><br/>
      <Context/>

    </>
  );
}

export default App;
