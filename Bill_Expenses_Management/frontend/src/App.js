import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddABill from "./components/AddABill";

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path="/add" exact component={AddABill} />
      {/*<Route path='/card' exact component={AddCard} />
      <Route path='/card/update' exact component={EditCard} />
      <Route path='/view' exact component={PaymentHistory} />
  */}
    </div>
    </Router>
   
  );
}

export default App;
