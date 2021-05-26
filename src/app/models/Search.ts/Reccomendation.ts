import { Place } from "../Places/Place";

export class Reccomendation {
    id: string;
    places: Place[];

    constructor(data: ReccomendationDTO) {
        this.id = data.id;
        this.places = data.quickSearchResponse.result.map(result => new Place(result.place, result.correlation));
    }
}

export interface ReccomendationDTO {
    id: string;
    places: Place[];
    quickSearchResponse: {
        result: [{
            correlation: number;
            place: Place;
        }]
    }
}

