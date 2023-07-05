import { SosEvent } from "@/models/sos-events";

export default async function Home() {
  const events: SosEvent = await getData();
  return (
    <div>
      <div className="flex flex-col gap-6">
        {events.map((item: SosEvent) => (
        <div key={item.id} className="border">
          <h1>{item.name}</h1>
          <p>{item.summary}</p>
        </div>
      ))}
    </div>
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