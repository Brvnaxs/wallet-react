import Header from '../../Components/Header/index'
import Step from '../../Components/Step/Index'
import './styles.css'
export default function Home(){
    return(
        <div className='PageOne'>
            <Header />
            <div className='page-one-text'>
                <p className='p-one'>
                    Em apenas alguns cliques, conseguimos prever o quanto seu dinheiro vale
                </p>
                <h1>CRIPTOMOEDA SEGURANÇA EXCHANGE</h1>
                <p className='p-two'>
                tudo em um só lugar, no alcance de sua tela, palma da mão ou em seu banco favorito. Sim, onde você quiser seja aonde for 24horas por dia.
                </p>
                <button className='start'>Comece agora</button>
            </div>
            <div className='steps'>
                <Step />
                <Step />
                <Step />
                <Step />
            </div>
        </div>
    )
}