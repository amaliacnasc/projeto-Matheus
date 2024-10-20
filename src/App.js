
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainContainer from './components/mainContainer/MainContainer';
import Projects from './components/projects/projects';
import Servicos from './components/services/Servicos';
import About from './components/about/About';
import FinalCTA from './components/finalCta/FinalCTA';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
      <Projects></Projects>
      <Servicos></Servicos>
      <About></About>
      <FinalCTA></FinalCTA>
    </div>
  );
}

export default App;
