import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSongListLoaded, selectSongsList } from '../../state';

@Component({
  selector: 'adt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  songs$ = this.store.select(selectSongsList);
  loaded$ = this.store.select(selectSongListLoaded);
  constructor(private store: Store) {}
}
