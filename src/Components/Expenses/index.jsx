import './styles.css'

export default function Expenses(){
    return(
        <div className='Expenses'>
            <div className='expenses-item descricao'>
                <h2>Descrição de despesa</h2>
                <input type="text" />
            </div>
            <div className='expenses-item categoria'>
                <h2>Categoria de despesas</h2>
                <input type="text" />
            </div>
            <div className='expenses-item valor'>
                <h2>Valor</h2>
                <input type="text" />
            </div>
            <div className='expenses-item metodo'>
                <h2>Método de pagamento</h2>
                <input type="text" />
            </div>
            <div className='expenses-item moeda'>
                <h2>Moeda</h2>
                <input type="text" />
            </div>
        </div>
    )
}