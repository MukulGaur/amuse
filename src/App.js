import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Componnts/Home';
import About from './Componnts/About';
import Contact from './Componnts/Contact';
import Qa from './Componnts/Qa';
import NavBar from './Componnts/NavBar';
import Ticket from './Componnts/Ticket';
import InsertTicket from './Componnts/InsertTicket';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/qa' component={Qa} />
          <Route path='/ticket' component={Ticket} />
          <Route path='/insertticket' component={InsertTicket} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
