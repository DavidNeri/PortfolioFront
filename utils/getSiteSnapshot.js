async function getSiteSnapshot(url){
    return(
        fetch(`http://localhost:3000/preview`,
        {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                url:url
            })
        },
        
    )
        .then(response => {
            // network failure, request prevented
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response);
            }       
    
            return Promise.reject(new Error(response.statusText));
        })
        .then(async result => {            
            const blob = await result.blob()
            const SpanshotUrl = URL.createObjectURL(blob);
            return SpanshotUrl
        })        
    )
}

export default getSiteSnapshot