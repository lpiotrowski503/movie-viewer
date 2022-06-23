import * as MovieViewerActions from './movie-viewer.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { LoadListSuccess, LoadListError, LoadItemSuccess, LoadItemError } from './movie-viewer.actions';
import { ApiService } from '../../services/api.service';
import { Item, List } from '../../interfaces/list.interface';

@Injectable({ providedIn: 'root' })
export class MovieViewerEffects {
	constructor(private actions$: Actions, private apiService: ApiService) {}

	@Effect()
	loadListEffect = this.actions$.pipe(
		ofType(MovieViewerActions.MovieViewerActionTypes.LOAD_LIST),
		switchMap(() =>
			this.apiService.getMovies().pipe(
				map((response: List) => new LoadListSuccess(response)),
				catchError((error: Error) => of(new LoadListError(error)))
			)
		)
	);

	@Effect()
	loadItemEffect = this.actions$.pipe(
		ofType(MovieViewerActions.MovieViewerActionTypes.LOAD_ITEM),
		switchMap(({ id }) =>
			this.apiService.getMovieDetails(id).pipe(
				map((response: Item) => new LoadItemSuccess(response)),
				catchError((error: Error) => of(new LoadItemError(error)))
			)
		)
	);
}

