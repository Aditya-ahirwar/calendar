import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import styled from 'styled-components'
import Navbar from './components/Navbar.jsx'
import Left from './components/Left.jsx'
import Calendar from './components/calendar/Calendar.jsx';


const Container = styled.div`
display : flex;
flex-direction : row;
height : 86vh;

`

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Container>
        <Left style = {{flex : 1}}/>
        <Calendar/>
      </Container>

    </BrowserRouter>
  );
}

export default App;


