import { useContext, useState } from 'react'
import './styles.css'
import { ExpenseContext } from '../Context/ExpenseContext'

export default function Expenses(){
    const [descricao, setDescricao] = useState() 
    const [tag, setTag] = useState() 
    const [valor, setValor] = useState() 
    const [metodo, setMetodo] = useState() 
    const [moeda, setMoeda] = useState() 
    const {expense, setExpense} = useContext(ExpenseContext)
    function HandleExpense() {
        setExpense((current) => [...current, {
            "descricao": descricao,
            "metodo": metodo,
            "valor": valor,
            "moeda": moeda,
            "cambio": "",
            "valor-convertido": ""
        }])
    }

    return(
        <div className='expenses-container'>
        <div className='Expenses'>
            <div className='expenses-item descricao'>
                <h2>Descrição de despesa</h2>
                <input type="text" onChange={e => setDescricao(e.target.value)} />
            </div>
            <div className='expenses-item categoria'>
                <h2>Categoria de despesas</h2>
                <input type="text" onChange={e => setTag(e.target.value)}/>
            </div>
            <div className='expenses-item valor'>
                <h2>Valor</h2>
                <input type="text" onChange={e => setValor(e.target.value)}/>
            </div>
            <div className='expenses-item metodo'>
                <h2>Método de pagamento</h2>
                <input type="text" onChange={e => setMetodo(e.target.value)}/>
            </div>
            <div className='expenses-item moeda'>
                <h2>Moeda</h2>
                <input type="text" onChange={e => setMoeda(e.target.value)}/>
            </div>
        </div>
        <button className='dashboard-button'onClick={HandleExpense}>Adicionar despesas</button>
        </div>
    )
}