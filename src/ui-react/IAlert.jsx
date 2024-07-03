import './IAlert.css';

import React, { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import { AlertContext } from '../context/AlertContext';


const IAlert = () => {
    const { showAlert, alertMessage } = useContext(AlertContext);

    return (
        <>
            {showAlert && (
                <Alert className='container-alert' variant="success">
                    {alertMessage}
                </Alert>
            )}
        </>
    );
};

export default IAlert;

