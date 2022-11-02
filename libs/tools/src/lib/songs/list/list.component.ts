import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSongsList } from '../../state';

@Component({
  selector: 'adt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  songs$ = this.store.select(selectSongsList);
  constructor(private store: Store) {}
}
