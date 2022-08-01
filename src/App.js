import './App.css';
import AnotherComponent from './components/AnotherComponent';
import FirstComponent from './components/FirstComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
        <h1>É os cria</h1>
        <FirstComponent />
        <AnotherComponent />
        <Images />
        <Hooks />
        <List />
        <RenderCond x={5} />
        <Fragment />
        <Container>
          <h1>Este é o filho do container</h1>
        </Container>
    </div>
  );
}

export default App;
