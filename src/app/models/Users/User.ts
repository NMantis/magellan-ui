import { Favorite } from "./Favorite";

export class User {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password?: string;
    gender: string;
    dateOfBirth: Date;
    age?: number;
    favourites: Favorite[];
}