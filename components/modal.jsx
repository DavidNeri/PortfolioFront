import { useEffect, useState } from 'react';
import useCert from '../hooks/useCert'

const Modal = ({certificado}) => {
    const {setOpen} = useCert();
    const [exntensionArchivo, setExtensionArchivo] = useState('')

    useEffect(()=>{
        (()=>{
            setExtensionArchivo(()=>{
                const nombre = certificado.archivo.toString();
                const extension = nombre.split('.').pop();
                return extension
            })
        })()
    })
    
    return ( 
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-40"
            onClick={(e)=>{
                if(e.target === e.currentTarget){
                    setOpen(false)
                }
                
            }}
        >

            <div className=" bg-gray-200 w-11/12 h-11/12 rounded-t-lg">
                {
                    exntensionArchivo == 'jpg' ?
                    <div className='h-full w-full p-6'>
                        <img src={`/img/${certificado.archivo}`} className='h-full w-full object-contain' /> 
                    </div>
                        
                    : exntensionArchivo == 'pdf' ?
                    <div className='h-full w-full p-6'>
                        <iframe 
                            src={`/pdf/${certificado.archivo}`}   
                            type="application/pdf"
                            className='h-full w-full object-contain'
                        />
                    </div>
                        
                    : null

                }

                <footer className='bg-slate-900 rounded-b-lg p-5 border-gray-200 border-8 text-white'>
                    <p className='text-lg'><span className='font-semibold'>Nombre: </span>{certificado.nombre} </p>
                    <p className='text-lg'><span className='font-semibold'>Entidad emisora: </span>{certificado.entidad} </p>

        
                    <p className='text-lg'>
                        <span className='font-semibold'>
                            URL Certificado:
                        </span>
                        <a href={certificado.certUrl} target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer hover:underline hover:text-blue-600 hover:font-semibold'>

                            {certificado.certUrl}
                            
                        </a>
                    </p>

                    <p className='text-lg'>
                        <span className='font-semibold'>
                            URL Sitio:
                        </span>
                        <a href={certificado.siteUrl} target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer hover:underline hover:text-blue-600 hover:font-semibold'>

                            {certificado.siteUrl}
                            
                        </a>
                    </p>


                    
                </footer>
            </div>                
        </div>
    )
}

export default Modal




