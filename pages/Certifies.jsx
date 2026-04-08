import { useState, useEffect } from "react"
import obtenerInfoFormacion from "../utils/obtenerInfoFormacion"

import useCert from '../hooks/useCert'
import Modal from "../components/modal"
import Spin from "../components/Spin"

const Certifies = () => {

    const [formaciones, setFormaciones] = useState([]);
    const {setOpen, open} = useCert()
    const [selectedFormation, setSelectedFormation] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        (async ()=>{

            try {
                const InfoFormacion = await obtenerInfoFormacion();
                setFormaciones(InfoFormacion.certifies);
                setLoading(false)
                                
            } catch (error) {

                setFormaciones('');
                setFormaciones(error.message)
            }
        
        })()

    },[])

    return (
        <>
            {
                loading && <Spin />
            }

            {
                formaciones.some(f=>f.tipo == 'A') ?
                    <div className="flex flex-col  items-center rounded-xl bg-indigo-700 p-5 shadow-sm shadow-indigo-400 mb-10">
                        <span className="text-gray-200 font-semibold text-5xl p-2.5"> Títulos </span>

                        {
                            formaciones.map(
                                formacion => 
                                formacion.tipo == 'A' ? 
                                <div key={formacion.id} className=" w-200 mb-5 text-gray-200 grid grid-cols-2 border border-white rounded-lg p-2">
                                    <div className="">
                                        <p className="font-semibold text-xl">{formacion.nombre}</p>
                                        <p>{formacion.entidad}</p>
                                    </div>

                                    <div className="p-5 flex flex-row-reverse gap-4">
                                        <a href={formacion.siteUrl} target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                                className="size-6   hover:text-gray-950"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" 
                                                />
                                            </svg>
                                        </a>                            
                                        
                                        <a href='#' onClick={()=>{
                                            setSelectedFormation(formacion)
                                            setOpen(true)                                

                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                                className="size-6 hover:text-gray-950"
                                            >  
                                                <path strokeLinecap="round" strokeLinejoin="round" 
                                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" 
                                                />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>    
                                        </a>
                                    </div>
                                </div>  
                                : null
                            )
                        }
                    </div> : null
            }

            {
                formaciones.some(f=>f.tipo == 'B') 
                    ? 
                        <div className="flex flex-col  items-center rounded-xl bg-indigo-700 p-5 shadow-sm shadow-indigo-400 mb-10">
                                <span className="text-gray-200 font-semibold text-5xl p-2.5"> Certificados </span>
                            {                
                                formaciones.map(formacion=>(
                                    formacion.tipo=='B' 
                                    ?
                                        <div key={formacion.id} className=" w-200 mb-5 text-gray-200 grid grid-cols-2 border border-white rounded-lg p-2">
                                            <div className="">
                                                <p className="font-semibold text-xl">{formacion.nombre}</p>
                                                <p>{formacion.entidad}</p>

                                            </div>

                                            <div className="p-5 flex flex-row-reverse gap-4">
                                                <a href={formacion.siteUrl} target="_blank" rel="noopener noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}             stroke="currentColor"                 className="size-6 hover:text-gray-950"
                                                    >

                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" 
                                                        />
                                                    </svg>
                                                </a>                            
                                                
                                                <a href='#' onClick={()=>{
                                                    setSelectedFormation(formacion)
                                                    setOpen(true)                                

                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-gray-950">  
                                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" 
                                                    />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>    
                                                </a>                          

                                                

                                            </div>                    

                                        </div>  
                                    : null
                                    
                                ))
                            }                    
                        </div> 
                    : null
            }

            

            {
                open && <Modal 
                certificado={selectedFormation} />
            }

        </>
        
    )
}

export default Certifies