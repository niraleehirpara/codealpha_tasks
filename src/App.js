import './App.css';

function App() {


  function calculateAge() {



    var birthdate=new Date(document.getElementById("birthdate").value);
    var today=new Date();
    var age=today.getFullYear() - birthdate.getFullYear();
    var monthDiff=today.getMonth() - birthdate.getMonth();
    if(monthDiff < 0 || (monthDiff ==  0 && today.getDate() < birthdate.getDate()))
    {
      age--;
    }
   
    alert( "Your age is: " + age +  " years");
   
  }

  return (
    <div className="App">
      <h2 className="title">Age Calculator</h2>
      <p className="instruction">Enter your birthdate:</p>
      <input type="date" id="birthdate" className="input"></input>
      <button onClick={calculateAge} className="button">Calculate Age</button>
 
    </div>
  );
}

export default App;
