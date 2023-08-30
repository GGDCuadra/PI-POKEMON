import { Link } from "react-router-dom"
import styleLanding from "./LandingPage.module.css"
import imageLogo from './pokemonLogo.png'

const LandingPage = () => {
    return ( 
        <div className={styleLanding.container}>
            <div className={styleLanding.titleContainer}>
                <img src={imageLogo} alt="Hola" />  
                <h1> Wiki</h1>
            </div>
            
            <button><Link className={styleLanding.buttonText} to='/home'>Ingresar</Link> </button>
        </div>
    )
}

export default LandingPage;