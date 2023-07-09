import { PoliceStations } from '../../models/stations';
import Link from 'next/link';

async function getStations(){
    const res = await fetch('https://polisen.se/api/policestations');
    if(!res.ok){
        throw new Error('failed to fetch stations');
    }

    return res.json();
}

export default async function Page(){
    const stations: PoliceStations = await getStations();


    return (
        <div className="d-flex flex-column align-items-center">
            <div>polisstationer</div>
            <div className="flex flex-col gap-6">
        {stations.map((item: PoliceStations) => (
        <div key={item.id} className="border">
            <Link href={`/polisstationer/${item.id}`}>
                <h1>{item.name}</h1>
            </Link>
          <p>{item.location.name}</p>
        </div>
      ))}
    </div>
        </div>
    );
};