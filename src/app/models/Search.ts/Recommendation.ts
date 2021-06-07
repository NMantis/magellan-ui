import { Place } from "../Places/Place";

export class Recommendation {
    id: string;
    places: Place[];

    constructor(data: RecommendationDTO) {
        this.id = data.id;
        this.places = data.quickSearchResponse.result.map(result => new Place(result.place, result.correlation));
        this.places = this.places.sort((a, b) => b.correlation - a.correlation);
    }
}

export interface RecommendationDTO {
    id: string;
    quickSearchResponse: {
        result: [{
            correlation: number;
            place: Place;
        }]
    }
}

