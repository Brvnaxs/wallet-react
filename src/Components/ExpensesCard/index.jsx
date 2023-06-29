import { useContext } from 'react';
import './styles.css';
import { ExpenseContext } from '../Context/ExpenseContext';

export default function ExpensesCard() {
    const { expense, setExpense } = useContext(ExpenseContext)

    
    return (
        <div className='ExpensesCard'>
            <div className='expenses-card-header'>
                <span className='expenses-span'>Descrição</span>
                <span className='expenses-span'>TAG</span>
                <span className='expenses-span'>Método de Pagamento</span>
                <span className='expenses-span'>Valor</span>
                <span className='expenses-span'>Moeda</span>
                <span className='expenses-span'>Câmbio utilizado</span>
                <span className='expenses-span'>Valor convertido</span>
                <span className='expenses-span'>Moeda de conversão</span>
                <span>Editar/Excluir</span>
            </div>
            <div className='expenses-user-card'>
                <span className='expenses-user'>Restaurante</span>
                <span className='expenses-user'>Lazer</span>
                <span className='expenses-user'>Pix</span>
                <span className='expenses-user'>R$ 80,00</span>
                <span className='expenses-user'>USD</span>
                <span className='expenses-user'>$ 4,82</span>
                <span className='expenses-user'>R$ 412,68</span>
                <span className='expenses-user'>Real</span>
                <span className='expenses-user'>editar</span>
            </div>
            {
                expense.map(exp => {
                    return (
                        <div className='expenses-user-card'>
                            <span className='expenses-user'>{exp.descricao}</span>
                            <span className='expenses-user'>{exp.metodo}</span>
                            <span className='expenses-user'>{exp.valor}</span>
                            <span className='expenses-user'>{exp.moeda}</span>
                            <span className='expenses-user'>$ {exp.cambio}</span>
                            <span className='expenses-user'>R$ </span>
                            <span className='expenses-user'>Real</span>
                            <span className='expenses-user'>Editar/Excluir</span>
                        </div>
                    )
                })
            }
        </div>
    )
}