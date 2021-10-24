import ReactDOM from 'react-dom';
import { Suspense, lazy, useState } from 'react';
import './styles.css';
import Overlay from './layout/Overlay';
import { FadeIn, LeftMiddle } from './layout/styles';

// import Leaves from './Leaf';
const Leaves = lazy(() => import('./Leaf'));

function App() {
  const [speed, set] = useState(1);
  return (
    <>
      <Suspense fallback={null}>
        <Leaves speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </LeftMiddle>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
