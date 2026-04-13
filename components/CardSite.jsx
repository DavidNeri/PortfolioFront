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
                                <div className='grid grid-cols-5 mb-1.5 h-40 overflow-hidden rounded-xl 
                                                hover:shadow-blue-500/20 hover:shadow-md'> 

                                    <div className='col-span-1 flex h-full bg-gray-300'>
                                        <img src={`/img/sites/${sitio.id}.png`}
                                            className='max-w-full max-h-full object-contain border border-slate-700'
                                        />
                                                

                                    </div>
                                    <div className='bg-linear-to-br from-slate-900 to-slate-800 
                                        col-span-4 text-2xl 
                                        flex items-center text-justify font-semibold 
                                        font-sans hover:bg-slate-700 transition
                                        shadow-lg p-4
                                        border border-slate-700'>

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