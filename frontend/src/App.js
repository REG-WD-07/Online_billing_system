import './App.css';
import Header from './components/Header';
import PayBill from './components/PayBill';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';
import PaymentHistory from './components/PaymentHistory';



function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path='/add' exact component={PayBill} />
      <Route path='/view' exact component={PaymentHistory} />
      <Route path='/card' exact component={AddCard} />
      <Route path='/update' exact component={AddCard} />
    
      
      <Route path='/get' exact component={EditCard} />
    </div>
    </Router>
   
  );
}

export default App;
