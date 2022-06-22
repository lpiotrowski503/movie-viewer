import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadList, LoadItem } from './movie-viewer.actions';
import { AppState } from '../../store/app.state';
import { Item, List } from '../../interfaces/list.interface';

@Injectable({
	providedIn: 'root',
})
export class MovieViewerFasade {
	constructor(private store: Store<AppState>) {}

	public loadMovies(): void {
		this.store.dispatch(new LoadList());
	}

	public selectMoviesList(): Observable<List['results']> {
		return this.store.select((state) => state.movieViewer.items.results);
	}

	public loadMovieDetails(id: string): void {
		this.store.dispatch(new LoadItem(id));
	}

	public selectMovieDetails(): Observable<Item> {
		return this.store.select((state) => state.movieViewer.details);
	}
}

