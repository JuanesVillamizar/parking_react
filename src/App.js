import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Start from "./pages/Start";
import Entry from "./pages/Entry";
import Exit from "./pages/Exit";
import AllCars from "./pages/AllCars";
import Consult from "./pages/Consult";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
          <Layout>
              <Switch>
                  <Route path='/Entry' component={Entry}/>
                  <Route path='/Exit/:plate' component={Exit}/>
                  <Route path='/ConsultCar' component={Consult}/>
                  <Route path='/AllCars' component={AllCars}/>
                  <Route exact path='/' component={Start}/>
                  <Route component={NotFound}/>
              </Switch>
          </Layout>
      </Router>
  );
}

export default App;
