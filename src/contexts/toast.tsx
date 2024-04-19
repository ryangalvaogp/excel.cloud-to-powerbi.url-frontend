import { createContext, ReactNode, useRef } from 'react';
import { useContext, useState, useEffect } from 'react';
import { CToaster } from '@coreui/react';
import { ContentToast } from '../utils/alert';

export interface ContextProviderProps {
    children: ReactNode;
};

type ToasterContextData = {
    Toaster(): JSX.Element
    addToast: (title: string, type: "success" | "alert" | "error", text?: string) => void
};

export const ToasterContext = createContext({} as ToasterContextData);
export function ToasterContextProvider({ children }: ContextProviderProps) {
    const [toast, setToast] = useState(0)
    const toaster = useRef();

    function closeToasts() {
        setToast(0);
    }

    useEffect(() => {
        setTimeout(closeToasts, 5000)
    }, [toast])

    function Toaster() {
        console.log("asd");
        
        return <CToaster //@ts-ignore
            // ref={toaster} //@ts-ignore
            push={toast}
            placement="top-end" />
    }

    function addToast(
        title: string,
        type: "success" | "alert" | "error",
        text?: string) {
            
            
        //@ts-ignore
        return setToast(ContentToast({ title, type, text }));
    }

    return (
        <ToasterContext.Provider value={
            {
                Toaster,
                addToast
            }
        }>
            {children}
        </ToasterContext.Provider>
    );
}

export const useToast = () => {
    return useContext(ToasterContext);
};
