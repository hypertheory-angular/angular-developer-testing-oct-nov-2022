import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectSongListErrored,
  selectSongListLoaded,
  selectSongsList,
} from '../../state';
import { SongsCommands } from '../../state/actions/song.actions';

@Component({
  selector: 'adt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  songs$ = this.store.select(selectSongsList);
  loaded$ = this.store.select(selectSongListLoaded);
  errored$ = this.store.select(selectSongListErrored);
  constructor(private store: Store) {}

  retry() {
    this.store.dispatch(SongsCommands.load());
  }
}
