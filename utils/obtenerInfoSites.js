const obtenerInfoSites = async () =>{
    return(
        fetch('http://localhost:3000/infosites')
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