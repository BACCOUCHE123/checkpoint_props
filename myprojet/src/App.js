
import './App.css';
import Profile from './profile/Profile';
import Image from './profile/Image';
import HandleName from './profile/HandleName';


function App() {
  
  const profession= "etudiente en GOMYCODE"
  const alertMe=()=> {
    alert('Baccouche Marwa')
  }

  return (
    
    <div className="App">
      <Profile  pro={profession}/>
      <Image>this my picture</Image>
      <HandleName alertMe={alertMe}/>
    
      
    </div>
  );
}

export default App;
