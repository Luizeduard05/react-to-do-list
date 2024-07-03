import React, { createContext, useState } from 'react';

// Criação do contexto
export const AlertContext = createContext();

// Provedor do contexto
export const AlertProvider = ({children}) => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    // Função para ativar o Alerta
    const handleAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    return(
        <AlertContext.Provider value={{ showAlert, alertMessage, handleAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

