import Expenses from '../../Components/Expenses/index'
import ExpensesCard from '../../Components/ExpensesCard/index'
import Wallet from '../../Components/Wallet/index'
import './styles.css'

export default function Dashboard(){
    return(
        <div className='Dashboard'>
           <Wallet />
           <Expenses />
           <button className='dashboard-button'>Adicionar despesas</button>
           <ExpensesCard />
        </div>
    )
}