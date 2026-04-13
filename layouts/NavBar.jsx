
const NavBar = () => {


    return (        
            <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-slate-800/70 backdrop-blur-md border border-slate-700 
                rounded-xl shadow-lg px-6 py-3 flex justify-between items-center z-50">
                
                <h1 className="text-white font-semibold">David Christian Neri</h1>

                <div className="flex gap-6 text-slate-300">                
                    <a className="hover:text-white" href="/">Inicio</a>
                    <a className="hover:text-white" href="/formacion">Certificaciones</a>
                    <div className="relative group">
        
                        <span className="cursor-pointer hover:text-white">
                                Download
                        </span>

                        <ul
                            className="absolute left-0 mt-2 w-48 bg-slate-800 border border-slate-700
                            rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100
                            group-hover:visible transition-all duration-200">

                            <li>
                                <a href="/pdf/David Christian Neri - Curriculum Vitae.pdf"
                                    download='David Christian Neri - Curriculum Vitae.pdf' 
                                    className="block px-4 py-2 hover:bg-slate-700">
                                    Curriculum Vitae
                                </a>
                            </li>

                            <li>
                                <a href="/pdf/David Christian Neri - Resume.pdf"
                                    download='David Christian Neri - Resume'
                                    className="block px-4 py-2 hover:bg-slate-700">
                                    Resume
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            
        )
}

export default NavBar