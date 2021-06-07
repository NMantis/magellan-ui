import { Place } from "../Places/Place";

export class Reccomendation {
    id: string;
    places: Place[];

    constructor(data: ReccomendationDTO) {
        this.id = data.id;
        this.places = data.quickSearchResponse.result.map(result => new Place(result.place, result.correlation));
        this.places = this.places.sort((a, b) => a.correlation - b.correlation);
    }
}

export interface ReccomendationDTO {
    id: string;
    quickSearchResponse: {
        result: [{
            correlation: number;
            place: Place;
        }]
    }
}

