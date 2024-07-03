import './ListaTarefa.css'

import logoLixeira from '../assets/lixeira.png'
import logoEdit from '../assets/lapis.png'

const ListaTarefa = ({ tarefa, editar, deletar }) => {
    return (
        <>
            <div className="lista-tarefa">
                <div className="column-tarefa">
                    <label>
                        <input
                            type="checkbox"
                        />
                        {tarefa}
                    </label>
                    <div className="icons">
                        <img src={logoEdit} alt="Editar" onClick={editar} />
                        <img src={logoLixeira} alt="Deletar" onClick={deletar} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaTarefa

