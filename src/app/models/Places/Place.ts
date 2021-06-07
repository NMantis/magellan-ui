import { Geometry } from "./Geometry";

export class Place {
    id: string;
    placeId: string;
    opening_hours: any;
    name: string;
    phone: string;
    rating: number = 0;
    types: string[] = [];
    price_level: number;
    user_ratings_total: number;
    vicinity: number;
    place_id?: string;
    correlation?: number;
    geometry: Geometry;

    constructor(data?: Place, correlation?: number) {
        Object.assign(this, data);

        if(correlation) {
            this.correlation = Number((correlation * 100).toFixed(1));
        }
    }

    hasFood?() {
        return this.types.includes('food');
    }

    hasDrinks?() {
        return this.types.includes('bar');
    }

    hasCoffee?() {
        return this.types.includes('cafe');
    }
}