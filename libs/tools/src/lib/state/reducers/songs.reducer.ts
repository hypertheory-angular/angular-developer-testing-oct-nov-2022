import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  SongsCommands,
  SongsDocuments,
  SongsEvents,
} from '../actions/song.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export interface SongListState extends EntityState<SongEntity> {
  loaded: boolean;
  errored: boolean;
}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState({
  loaded: false,
  errored: false,
});

export const reducer = createReducer(
  initialState,
  on(SongsCommands.load, (s) => ({ ...s, errored: false })),
  on(SongsEvents.error, (s) => ({ ...s, errored: true })),
  on(SongsDocuments.songs, (s, a) => adapter.setAll(a.payload, s)),
  on(SongsDocuments.songs, (s) => ({ ...s, loaded: true })),
);
