
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainContainer from './components/mainContainer/MainContainer';
import Projects from './components/projects/projects';
import Servicos from './components/services/Servicos'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      <Projects></Projects>
      <Servicos></Servicos>
    </div>
  );
}

export default App;
