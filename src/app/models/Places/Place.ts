import { Geometry } from "./Geometry";

export class Place {
    id: string;
    placeId: string;
    opening_hours: string;
    name: string;
    rating: number;
    types: string[];
    price_level: number;
    user_ratings_total: number;
    vicinity: number;
    geometry: Geometry;
}