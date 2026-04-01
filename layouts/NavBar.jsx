import Button from "../components/Button"

const NavBar = () => {
    return (
        <nav className="bg-gray-950 fixed  ml-0.5 w-full top-0 border-b border-gray-500 border-default">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 text-gray-300 text-md font-semibold font-sans">

                <a href="/formacion" className="flex items-center space-x-3 rtl:space-x-reverse  hover:text-indigo-500 active:text-indigo-800">
                    <img src="/img/selfie.jpg" className="h-7 rounded-md" alt="David Neri"/>
                    <span>{'    '} David Neri</span>
                </a>

                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse  hover:text-indigo-500 active:text-indigo-800">
                    <span className="self-center text-2xl text-heading font-semibold whitespace-nowrap ">
                        Portflio
                    </span>
                </a>
                

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 space-x-5" >

                    <Button 
                        textoBoton='Descargar CV'
                        archivo={{
                            url:'/pdf/David Christian Neri - Curriculum Vitae.pdf',
                            nombre:'David Christian Neri - Curriculum Vitae.pdf'  
                        }}
                    />   
                        
                    <Button 
                        textoBoton='Download Resume'
                        archivo={{
                            url: '/pdf/David Christian Neri - Resume.pdf',
                            nombre:'David Christian Neri - Resume.pdf'
                        }}                        
                    />                     
                    
                </div>

            </div>
        </nav>

    )
}

export default NavBar