import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SongsDocuments } from '../actions/song.actions';

export interface SongEntity {
  id: string;
  title: string;
  artist: string;
  album?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SongListState extends EntityState<SongEntity> {}

export const adapter = createEntityAdapter<SongEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(SongsDocuments.songs, (s, a) => adapter.setAll(a.payload, s)),
);
