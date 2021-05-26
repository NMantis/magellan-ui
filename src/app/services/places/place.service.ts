import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Place } from 'src/app/models/Places/Place';
import { Filters } from 'src/app/models/Filters';
import { Reccomendation, ReccomendationDTO } from 'src/app/models/Search.ts/Reccomendation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getAllPlaces(filters: Filters): Observable<Place[]> {
    const params = filters.toParams();
    return this.http.get<Place[]>(`${this.baseUrl}/api/places/all`, { params });
  }

  recommendations(id: string): Observable<Reccomendation> {
    const params = new HttpParams().set('searchId', id);
    const respString = JSON.stringify(reccomendation);
    const resp = new Reccomendation(JSON.parse(respString));

    return this.http.get<ReccomendationDTO>(`${this.baseUrl}/api/search/quick/search`, { params })
      .pipe(map(resp => new Reccomendation(resp)))
  }

}


const reccomendation = {
  "id": "60a901668a0d8c69df266c29",
  "userId": "5f88979c12f792000121172b",
  "quickSearchResponse": {
    "result": [
      {
        "placeId": 1,
        "name": "Radisson Blu Park Hotel Athens",
        "correlation": 0.9999999999999999,
        "place": {
          "id": 1,
          "geometry": {
            "location": {
              "lat": 37.9188306,
              "lng": 23.7011375
            },
            "viewport": {
              "northeast": {
                "lat": 37.9201207802915,
                "lng": 23.7024289802915
              },
              "southwest": {
                "lat": 37.9174228197085,
                "lng": 23.6997310197085
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
          "name": "POSEIDON ATHENS HOTEL",
          "rating": 4.3,
          "reference": "ChIJL84-4Be8oRQRYEnCXGpqIbk",
          "scope": "GOOGLE",
          "types": [
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "Λεωφόρος Ποσειδώνος 72, Παλαιό Φάληρο",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJL84-4Be8oRQRYEnCXGpqIbk",
          "price_level": 0,
          "user_ratings_total": 1042
        }
      },
      {
        "placeId": 1,
        "name": "Bits and Bytes",
        "correlation": 0.8660254037844385,
        "place": {
          "id": 1,
          "geometry": {
            "location": {
              "lat": 37.9188306,
              "lng": 23.7011375
            },
            "viewport": {
              "northeast": {
                "lat": 37.9201207802915,
                "lng": 23.7024289802915
              },
              "southwest": {
                "lat": 37.9174228197085,
                "lng": 23.6997310197085
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
          "name": "POSEIDON ATHENS HOTEL",
          "rating": 4.3,
          "reference": "ChIJL84-4Be8oRQRYEnCXGpqIbk",
          "scope": "GOOGLE",
          "types": [
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "Λεωφόρος Ποσειδώνος 72, Παλαιό Φάληρο",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJL84-4Be8oRQRYEnCXGpqIbk",
          "price_level": 0,
          "user_ratings_total": 1042
        }
      },
      {
        "placeId": 1,
        "name": "The Athenian Callirhoe Exclusive Hotel",
        "correlation": 0.5,
        "place": {
          "id": 1,
          "geometry": {
            "location": {
              "lat": 37.9188306,
              "lng": 23.7011375
            },
            "viewport": {
              "northeast": {
                "lat": 37.9201207802915,
                "lng": 23.7024289802915
              },
              "southwest": {
                "lat": 37.9174228197085,
                "lng": 23.6997310197085
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/lodging-71.png",
          "name": "POSEIDON ATHENS HOTEL",
          "rating": 4.3,
          "reference": "ChIJL84-4Be8oRQRYEnCXGpqIbk",
          "scope": "GOOGLE",
          "types": [
            "lodging",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
          ],
          "vicinity": "Λεωφόρος Ποσειδώνος 72, Παλαιό Φάληρο",
          "opening_hours": {
            "open_now": true
          },
          "place_id": "ChIJL84-4Be8oRQRYEnCXGpqIbk",
          "price_level": 0,
          "user_ratings_total": 1042
        }
      }
    ]
  },
  "dateCreated": "2021-05-22T13:04:37.943+0000"
}