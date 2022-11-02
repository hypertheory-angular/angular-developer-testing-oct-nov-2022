import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SongsDocuments } from '../actions/song.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

export interface SongListState extends EntityState<SongEntity> {
  loaded: boolean;
}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState({
  loaded: false,
});

export const reducer = createReducer(
  initialState,
  on(SongsDocuments.songs, (s, a) => adapter.setAll(a.payload, s)),
  on(SongsDocuments.songs, (s) => ({ ...s, loaded: true })),
);
