import './styles.css'
import walletImg from '../../assets/Wallet.png'
import payImg from '../../assets/Paycheque.png'
import money from '../../assets/Paper Money 1.png'
export default function Wallet(){
    return(
        <div className='Wallet'>
            <h1>Carteira de Conversão</h1>
            <div className='wallet-items'>
                <div className='wallet-item'>
                    <img src={walletImg} alt="" />
                    <span>
                    <h2>Meu saldo</h2>
                    <p>R$ 4.685,65</p>
                    </span>
                </div>
                <div className='wallet-item'>
                <img src={payImg} alt="" />
                <span>
                    <h2>Disponível para empréstimo</h2>
                    <p>R$ 35.000,00</p>
                    </span>
                </div>
                <div className='wallet-item'>
                <img src={money} alt="" />
                <span>
                    <h2>Gastos do mês</h2>
                    <p>R$ 2.085,25</p>
                    </span>
                </div>
            </div>
        </div>
    )
}