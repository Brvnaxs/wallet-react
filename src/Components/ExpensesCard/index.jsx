import './styles.css';

export default function ExpensesCard(){
    return(
        <div className='ExpensesCard'>
            <div className='expenses-card-header'>
                <span className='expenses-span'>Descrição</span>
                <span className='expenses-span'>Tag</span>
                <span className='expenses-span'>Método de Pagamento</span>
                <span className='expenses-span'>Valor</span>
                <span className='expenses-span'>Moeda</span>
                <span className='expenses-span'>Câmbio utilizado</span>
                <span className='expenses-span'>Valor convertido</span>
                <span className='expenses-span'>Moeda de conversão</span>
                <span>Editar/Excluir</span>
            </div>
        </div>
    )
}