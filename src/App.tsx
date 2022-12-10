import About from './components/About';
import Home from './components/Home';
import Loading from './components/Loading';
import Posts from './components/Posts';

function App() {
  return (
    <div>
        <Loading />
        <About />
        <Home />
        <Posts />
    </div>
  );
}

export default App;
