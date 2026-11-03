import { useEffect, useState } from 'react';
import obtenerInfoSites from '../utils/obtenerInfoSites';
//import getSiteSnapshot from '../utils/getSiteSnapshot';
//import getSnapBoltshot from '../services/boltshot';
import Spin from './Spin';

const CardSite = () => {   
    const [sitios, setSitios] = useState([]);
    //const [sitesSnapshots, setSitesSnapshots] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        ( async ()=>{
            const _sitios = await obtenerInfoSites()            
            setSitios(_sitios.sitios)
            setLoading(false)
        })()       
        
    },[])

    /*useEffect(()=>{
        (async ()=>{
            await getSnapBoltshot("https://google.com")
        })()
    })*/

   /* useEffect(()=>{
        (async ()=>{
            if(sitios){
                const snapshotPromises = sitios.map(s=>getSnapBoltshot(s.url))
                const snapshotsUrls = await Promise.all(snapshotPromises);
                console.log(snapshotsUrls);

                setSitesSnapshots(
                    sitios.map((s,i)=>({
                        id:s.id,
                        snapshotUrl: snapshotsUrls[i]
                    })))
            }
        })()
    },[sitios])*/

    /*function getSnapUrl(id){
        if (sitesSnapshots.length > 0 && id) {
            const _snap = sitesSnapshots.find(snap => snap.id == id)
            console.log("snap");
            console.log(_snap.imageData);
            return _snap.snapshotUrl;
        }
    }*/

    return (
        <>
        {
            loading && <Spin /> 
        }
            {
                
                    sitios.map(                            
                        sitio =>(   
                            
                            
                                <a key={sitio.id} href={sitio.url} target="_blank" rel="noopener noreferrer">
                                <div className='mb-1.5 mt
                                    w-[300px]
                                    h-[450px] 
                                    overflow-hidden
                                    rounded-md 
                                    border border-slate-700
                                    hover:shadow-blue-500/20 hover:shadow-md
                                    hover:bg-slate-700 transition'> 

                                    <figure className='h-3/5  bg-slate-800/70 backdrop-blur-md  border-b-slate-700'>

                                        <img src={`/img/cards/${sitio.bg__image}.png`}
                                            className='
                                            
                                            rounded-t-md
                                            object-center
                                            object-contain
                                            h-full
                                            w-full
                                            '
                                        />
                                                

                                    </figure>

                                    
                                    <div className='h-100                                         
                                        text-center
                                        font-sans 
                                        shadow-lg p-4
                                        '>
                                        <p>{sitio.info}</p>
                                    </div>                
                                </div>
                                </a>        
                            
                            
                            
                            
                        )
                    )
            }
        </>
    )
}

export default CardSite