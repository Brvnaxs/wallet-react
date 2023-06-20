import './styles.css'
import seta from '../../assets/Group 1.png'
export default function Step(){
    return(
        <div className='Step'>
            <div className='step-sect-one'>
            <img src={seta} alt="" />
                <div className='step-index'>01</div>
            </div>
            <div className='step-text'>
            <h2 className='step-h2'>Criptomoeda</h2>
            <p className='step-p'>
                Moeda digital ou virtual protegida por criptografia, que torna quase impossível falsificar ou gastar o dobro. Saiba mais e confira nossas condições.
            </p>
            </div>
        </div>
    )
}