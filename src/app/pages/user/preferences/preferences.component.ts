import { Component, OnInit } from '@angular/core';
import { Favorite } from 'src/app/models/Users/Favorite';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  favorites: Favorite[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.favorites(true).subscribe(resp => this.favorites = resp);
  }

}
