import './App.css';
import Header from './header';
import About from './about';
import PreviousWork from './previousWork';
import Seperator from './seperator';
import Content from './contact';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <div className="App">
      <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color='0, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
      />
        <Header />
        <Seperator />
        <About />
        <Seperator />
        <PreviousWork />
        <Seperator />
        <Content />
        <Seperator />
    </div>
  );
}

export default App;
