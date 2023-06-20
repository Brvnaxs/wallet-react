import Expenses from '../../Components/Expenses/index'
import Wallet from '../../Components/Wallet/index'
import './styles.css'

export default function Dashboard(){
    return(
        <div className='Dashboard'>
           <Wallet />
           <Expenses />
        </div>
    )
}