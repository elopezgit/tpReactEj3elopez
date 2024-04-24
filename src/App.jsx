import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Informacion from './components/Informacion';
import SaludoState from './components/SaludoState';

function App() {
  

  return (
    <main className=' container my-5'>
    <Informacion mensaje = 'My friend!' ></Informacion>
    <SaludoState></SaludoState>
    </main>
    
  )
}

export default App
