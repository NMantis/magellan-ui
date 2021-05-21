import { Geometry } from "./Geometry";

export class Place {
    id: string;
    placeId: string;
    opening_hours: string;
    name: string;
    rating: number = 0;
    types: string[] = [];
    price_level: number;
    user_ratings_total: number;
    vicinity: number;
    geometry: Geometry;

    constructor(data?: Place) {
        Object.assign(this, data);
    }

    hasFood?() {
        return this.types.includes('food')
    }

    hasDrinks?() {
        return this.types.includes('bar')
    }

    hasCoffee?() {
        return this.types.includes('cafe')
    }
}