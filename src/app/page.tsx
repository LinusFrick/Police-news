import { SosEvent } from "../models/sos-events";

export default async function Home() {
  const events: SosEvent = await getData();
  return (
    <div className="flex flex-col gap-6">
      {
        events.map((item: SosEvent) => {
          const eventInfo = item.name.split(',');
          const dateAndTime = eventInfo[0].trim();
          const typeOfReport = eventInfo[1].trim();

        
          const viewLocationUrl = `https://www.google.com/maps/search/?api=1&query=${item.location.gps}`;
          return(
            <div key={item.id} className="p-3">
              <h1>{item.location.name}</h1>
              <h4>{dateAndTime}</h4>
              <h6>{typeOfReport}</h6>
              <p className="mb-0">{item.summary}</p>
              <a href={viewLocationUrl} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-location-arrow"></i></a>
            </div>
          )
        })
      }
    </div>
  )
}

async function getData(){
    const res = await fetch('https://polisen.se/api/events');
    if(!res.ok){
        throw new Error('failed to fetch events');
    }

    return res.json();
}