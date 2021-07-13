import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/models/Places/Place';
import { Favorite } from 'src/app/models/Users/Favorite';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'recommendation-card',
  templateUrl: './recommendation-card.component.html',
  styleUrls: ['./recommendation-card.component.scss']
})
export class RecommendationCardComponent implements OnInit {

  @Input()
  place: Place;  
  
  @Input()
  favorites: Favorite[];
  
  zero = 0;
  duration = 1;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  rate(update: Favorite) {
    this.favorites.forEach(f => {
      if(f.placeId == update.placeId) {
        f.rating = update.rating;
      } else {
        this.favorites.push(update);
      }
    })

    this.userService.updateFavorites(this.favorites).subscribe(console.log);
  }
}
