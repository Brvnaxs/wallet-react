import './styles.css'
import logo from '../../../assets/icone trybe.png'

function App() {
 

  return (
    <div className="NavBar">

        <img src={logo} alt="Logomarca"/>

        <p className="T">T</p>
        <p className="X">X</p>
        <p className="wallet">WALLET</p>
        <button className="button-1">Comece agora</button>


    

    </div>

    
  )
}


export default App