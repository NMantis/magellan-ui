import { Place } from "../Places/Place";

export class Recommendation {
    id: string;
    dateCreated: Date;
    places: Place[];

    constructor(data: RecommendationDTO) {
        this.id = data.id;
        this.dateCreated = data.dateCreated;
        this.places = data.quickSearchResponse.result.map(result => new Place(result.place, result.correlation));
        this.places = this.places.sort((a, b) => b.correlation - a.correlation);
    }
}

export interface RecommendationDTO {
    id: string;
    dateCreated: Date;
    quickSearchResponse: {
        result: [{
            correlation: number;
            place: Place;
        }]
    }
}

