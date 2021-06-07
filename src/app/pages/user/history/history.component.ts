import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Recommendation } from 'src/app/models/Search.ts/Recommendation';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history: Recommendation[];
  selectedRec = new FormControl('');

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .pipe(first())
      .subscribe(({ history }) => {
        this.history = history;
        this.selectedRec.setValue(history[0]);
      });
  }

  get selection() {
    return this.selectedRec.value;
  }
}
