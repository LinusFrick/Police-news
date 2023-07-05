interface OpeningHour {
    name: string;
    date: string;
    isClosed: boolean;
    from: string;
    to: string;
}

interface Service {
    openingHours: OpeningHour[];
    name: string;
}

interface Location {
    name: string;
    gps: string;
}

interface Stations {
    id: number;
    name: string;
    Url: string;
    location: Location;
    services: Service[];
}


