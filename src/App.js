import './App.css';
import CourseList from './Components/CourseList';
import NavBar from './Components/NavBar';
import {useEffect} from 'react'
import { setTotal } from './Control/CardSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(setTotal())
  }, [cartItems, dispatch])
  
  return (
    <div className="App">
      <NavBar/>
      <CourseList/>
    </div>
  );
}

export default App;
