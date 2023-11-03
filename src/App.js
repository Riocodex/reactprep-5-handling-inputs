import "./App.css"
import {useState} from "react";
function App() {
  const [objData, setObjData] = useState()
  const [inputs, setInputs] = useState({})
  const [myInputs, setMyInputs] = useState({})
  const [good, setGood] = useState(false);



  // const getInputs = (value,name)=>{
  //   let data = {[name]:value};
  //   setObjData({...objData,...data})
  // }

  // const getInputs = (data)=>{
  //     let { name, value } = data.target;
  //     let input = {[name]:value};
  //     setInputs({...inputs, ...input});  
  // }
  // console.log(inputs);
  const submit = (event)=>{
    console.log( objData);
    event.preventDefault();
  }

  const showInputs =()=>{
    console.log(inputs)
  }

  const submitter=(event)=>{
    console.log(myInputs)
    event.preventDefault();
    setGood(true);
  }


  const getInputs = (data)=>{
    let {name, value} = data.target;
    let myData = {[name]:value};
    setMyInputs({...myInputs,...myData});
  }

  return (
    <div className="App">
      {/* -------USING FORMS AND INPUTHANDLING ----------- */}
      {/* <form>
      <input 
      type="text" 
      placeholder="Write your name"
      name="name"
      onChange={(event)=> getInputs(event.target.value,event.target.name)}/>

      <br/>

    <input 
      type="number" 
      placeholder="Write your age"
      name="age"
      onChange={(event)=> getInputs(event.target.value,event.target.name)}/>
      <br/>

    <input 
      type="text" 
      placeholder="Write your hobbies"
      name="hobbies"
      onChange={(event)=> getInputs(event.target.value,event.target.name)}/>
      <br/>

    <input 
      type="date" 
      placeholder="Write a date"
      name="date"
      onChange={(event)=> getInputs(event.target.value,event.target.name)}/>
      <br/>

    <button type="submit" onClick={submit}>Submit</button>
    <button type="reset">Reset</button>

      </form> */}

      <form onSubmit={submitter}>
        <input type="text" placeholder="write your name" name="name" onChange={getInputs} /><br/>
        <input type="text" placeholder="write your age" name="age" onChange={getInputs}  /><br/>
        <input type="text" placeholder="write your skills" name="skills" onChange={getInputs}  /><br/>

       {good ?(<p>your name is {myInputs.name} and your skills are in {myInputs.skills} at thhe age of {myInputs.age}</p>):(<p></p>)}

        <button type="submit">click</button>
      </form>

      
    </div>


  );
}

export default App;
