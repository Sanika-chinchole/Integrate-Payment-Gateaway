import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Home';
import PaymentsSuccess from './PaymentSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentsSuccess />} />
      </Routes>
    </Router>
   
  );
}

export default App;
