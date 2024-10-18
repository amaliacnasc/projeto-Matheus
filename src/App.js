
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainContainer from './components/mainContainer/MainContainer';
import Projects from './components/projects/projects';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      <Projects></Projects>
    </div>
  );
}

export default App;
