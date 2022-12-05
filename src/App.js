import './App.css'
import { useState , useEffect} from 'react';
import AllBooks from './Component/AllBooks/AllBooks';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import QustionAns from './Component/QustionAns/QustionAns';

function App() {
  const notify = () => toast.success("Congratulation your Activity Completed!",{position:toast.POSITION.BOTTOM_RIGHT});
  const[books , setBooks] = useState([]);
          
      
      
          useEffect(() => {
              fetch('fackData.json')
              .then(res => res.json())
              .then(data => setBooks(data))
              
          }, []);
  
  return (
    <div>
      <AllBooks books={books} Notify={notify} ></AllBooks>
      <QustionAns></QustionAns>
    </div>
    
    
  )
  }
export default App;
