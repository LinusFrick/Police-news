export interface OpeningHour {
    name: string;
    date: string;
    isClosed: boolean;
    from: string;
    to: string;
}

export interface Service {
    openingHours: OpeningHour[];
    name: string;
}

interface Location {
    name: string;
    gps: string;
}

export interface PoliceStations {
    id: number;
    name: string;
    Url: string;
    location: Location;
    services: Service[];
}


