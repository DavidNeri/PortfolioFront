const obtenerInfoSites = async () =>{
    return(
        fetch(`${import.meta.env.VITE_BACK}/infosites`)
        .then(response => {
            // network failure, request prevented
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }   
    
            return Promise.reject(new Error(response.statusText));
        })
        .then(response => response.json())
    ) 
}


export default obtenerInfoSites