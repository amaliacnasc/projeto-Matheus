
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainContainer from './components/mainContainer/MainContainer';
import Projects from './components/projects/projects';
import Servicos from './components/services/Servicos';
import About from './components/about/About';
import FinalCTA from './components/finalCta/FinalCTA';
import Rodape from './components/footer/rodape';
import Titulo from './components/projects/titulo'
import Methodology from './components/methodology/Methodology'

function App() {
  return (
    <div>
    
      <MainContainer></MainContainer>
      <Titulo></Titulo>
      <Projects></Projects>
      <Servicos></Servicos>
      <Methodology></Methodology>
      <FinalCTA></FinalCTA>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
