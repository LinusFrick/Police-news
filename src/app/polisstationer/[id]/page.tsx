'use client';
import { useParams } from "next/navigation";
import { PoliceStations } from "@/models/stations";

const GetStation = async () => {
    const params = useParams();
    const id = params.id;

    const res = await fetch(`https://polisen.se/api/policestations/${id}`);
    if(!res.ok){
        throw new Error('failed to fetch station');
    }

    return res.json();
}

export default async function Page(){
    
    const data: PoliceStations  = await GetStation();

    return(
        <div>
            <h1>{data.name}</h1>
            <p>{data.location.name}</p>

            <h2>Öppningstider</h2>
            {data.services.map((service, index) => (
                <div key={index}>
                    <h3>{service.name}</h3>
                    {service.openingHours.map((openingHour, hourIndex) => (
                        <p className="flex m-0" key={hourIndex}>
                            Datum: {openingHour.date}
                            {openingHour.isClosed ? (
                                <span>- Stängt</span>
                            ): <div className="flex">
                                <p>Öppnar:{openingHour.from}</p>
                                <p>Stänger: {openingHour.to}</p>
                            </div>}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}