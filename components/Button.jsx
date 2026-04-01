
const Button = ({textoBoton, archivo}) => {
  return (
    <button 
        className="border
        border-indigo-800 rounded-md p-2
        bg-indigo-800
        hover:cursor-pointer
        hover:bg-indigo-500
        active:bg-indigo-800"
    
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