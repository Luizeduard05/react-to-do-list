import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const IModal = ({ show, handleClose, handleConfirm, taskDescription }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmação</Modal.Title>
            </Modal.Header>
            <Modal.Body>Você tem certeza que deseja deletar a tarefa: "{taskDescription}"?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Deletar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default IModal;