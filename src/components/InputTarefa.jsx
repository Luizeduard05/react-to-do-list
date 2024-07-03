import './InputTarefa.css';

import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaTarefa from './ListaTarefa';
import { AlertContext } from '../context/AlertContext';
import IModal from '../ui-react/IModal';

const InputTarefa = () => {
    const [input, setInput] = useState("");
    const [tarefas, setTarefas] = useState([
        { id: uuidv4(), description: "Estudar Hooks React" },
        { id: uuidv4(), description: "Passear com o dog" },
    ]);
    const [editando, setEditando] = useState(null);
    const [show, setShow] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const { handleAlert } = useContext(AlertContext);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setTaskToDelete(index);
        setShow(true);
    };

    const handleConfirm = () => {
        if (taskToDelete !== null) {
            const novasTarefas = [...tarefas];
            novasTarefas.splice(taskToDelete, 1);
            setTarefas(novasTarefas);
            setTaskToDelete(null);
            handleAlert("Tarefa deletada com sucesso!")
        }
        handleClose();
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddTarefa = () => {
        if (!input.trim()) return;

        if (editando !== null) {
            setTarefas(tarefas.map((tarefa, index) =>
                index === editando ? { ...tarefa, description: input } : tarefa
            ));
            handleAlert("Tarefa atualizada com sucesso!");
            setEditando(null);
        } else {
            setTarefas([...tarefas, { id: uuidv4(), description: input }]);
            handleAlert("Tarefa adicionada com sucesso!");
        }
        setInput('');
    };

    const editTarefa = (index) => {
        setInput(tarefas[index].description);
        setEditando(index);
    };

    return (
        <>
            <div className="add-tarefa">
                <input
                    type="text"
                    placeholder='Digite sua nova tarefa'
                    required
                    value={input}
                    onChange={handleChange}
                />
                <button onClick={handleAddTarefa}>{editando !== null ? "Salvar" : "Add"}</button>
            </div>
            {tarefas.length === 0 ? (
                <p>Não há nenhuma tarefa cadastrada.</p>
            ) : (
                tarefas.map((tarefa, index) => (
                    <ListaTarefa
                        key={tarefa.id}
                        tarefa={tarefa.description}
                        editar={() => editTarefa(index)}
                        deletar={() => handleShow(index)}
                    />
                ))
            )}
            {taskToDelete !== null && (
                <IModal
                    show={show}
                    handleClose={handleClose}
                    handleConfirm={handleConfirm}
                    taskDescription={tarefas[taskToDelete].description}
                />
            )}
        </>
    );
};

export default InputTarefa;

