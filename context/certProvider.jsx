import { createContext, useState } from "react"

const CertContext = createContext();

const CertProvider = ({children}) => {
        const [open, setOpen] = useState(false);

    return (
        <CertContext.Provider
            value={{
                open,
                setOpen
            }}
        >
            {children}

        </CertContext.Provider>
    )
}

export {
    CertProvider
}
export default CertContext