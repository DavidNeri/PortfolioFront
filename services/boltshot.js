async function getSnapBoltshot(url){
    const API_KEY = import.meta.env.VITE_BOLSHOT_API_KEY
    const response = await fetch(`https://api.boltshot.dev/capture?url=${url}&apiKey=${API_KEY}&viewportWidth=800&viewportHeight=600&returnFile=false`)  
     const data = await response.json();
     
     return data.data.imageData
}

export default getSnapBoltshot