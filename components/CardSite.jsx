import { useEffect,useState } from 'react';
import obtenerInfoSites from '../utils/obtenerInfoSites';
import getSiteSnapshot from '../utils/getSiteSnapshot';

const CardSite = () => {   
    const [sitios, setSitios] = useState([]);
    const [sitesSnapshots, setSitesSnapshots] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        ( async ()=>{
            const _sitios = await obtenerInfoSites()
            setSitios(_sitios.sitios)           
        
        })()       
        
    },[])

    useEffect(()=>{
        (async ()=>{
            if(sitios){
                const snapshotPromises = sitios.map(s=>getSiteSnapshot(s.url))
                const snapshotsUrls = await Promise.all(snapshotPromises);

                setSitesSnapshots(
                    sitios.map((s,i)=>({
                        id:s.id,
                        snapshotUrl: snapshotsUrls[i]
                    })))
            }
        })()
    },[sitios])

    function getSnapUrl(id){
        if (sitesSnapshots.length > 0 && id) {
            const _snap = sitesSnapshots.find(snap => snap.id == id)
            return _snap.snapshotUrl;
        }
    }

    return (
        <>
            {
                loading && (
                    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center pointer-events-auto">
                        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                )
            }
            
            {sitios.map(
                sitio =>(
                    <a key={sitio.id} href={sitio.url} target="_blank" rel="noopener noreferrer">
                        <div className='grid grid-cols-5 mb-1.5 h-40 overflow-hidden rounded-xl'>
                            <div className='col-span-1 flex h-full'>
                                <img 
                                    src={getSnapUrl(sitio.id)} 
                                    className='max-w-full max-h-full object-contain'
                                    onLoad={()=>setLoading(false)}
                                />
                            </div>
                            <div className='bg-linear-to-tr from-indigo-800 to-indigo-500 col-span-4 text-2xl p-10 flex items-center text-justify font-semibold font-sans'>
                                <p>{sitio.info}</p>
                            </div>                
                        </div>
                    </a>        
                )
            )}
        </>
    )
}

export default CardSite