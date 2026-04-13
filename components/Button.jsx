
const Button = ({textoBoton, archivo}) => {
  return (
    <button 
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer"
    
        onClick={()=>{
            const link = document.createElement('a');
            link.href =archivo.url;
            link.download = archivo.nombre;
            link.click()
        }}>
        {textoBoton}
    </button>
  )
}

export default Button