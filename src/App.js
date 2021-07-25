import Paper from '@material-ui/core/Paper';
import Navbar from './components/Navbar';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ParticlesBg from './components/ParticlesBg';
import Contact from './components/Contact';
import About from './components/About';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <Paper square style={{ height: '100vh', width: '100vw', backgroundColor: 'var(--textPrimary)' }}>
      <Navbar />
      <ParticlesBg style={{ zIndex: '-1' }} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Home} />
        </Switch>
      </AnimatePresence>
    </Paper>

  );
}

export default App;
