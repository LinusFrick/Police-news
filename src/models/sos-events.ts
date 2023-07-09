export interface SosEvent {
    id: number,
    datetime: string,
    name: string,
    summary: string,
    url: string,
    type: string,
    location: {
        name: string,
        gps: string,
    },
};
