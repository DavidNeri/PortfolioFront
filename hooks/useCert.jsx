import { useContext } from "react";
import CertContext from "../context/certProvider";

const useCert = () =>{
    return useContext(CertContext)
}

export default useCert
