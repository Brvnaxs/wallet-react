import Expenses from '../../Components/Expenses/index'
import ExpensesCard from '../../Components/ExpensesCard/index'
import Wallet from '../../Components/Wallet/index'
import { useParams } from "react-router-dom"
import './styles.css'

export default function Dashboard(){
    const {email} = useParams();
    return(
        <div className='Dashboard'>
           <Wallet username={email}/>
           <Expenses />
           <ExpensesCard />
        </div>
    )
}