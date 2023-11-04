import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 
import AppRoutes from './Pages/AppRoutes';
function App() {
  return (
    <div className="App">
      <AppRoutes/>
      <ToastContainer style={{ width: "90%", left: 'auto' , top : '0.5rem' }} />
    </div>
  );
}

export default App;
