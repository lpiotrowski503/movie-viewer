import { map, Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { List } from '../../../../interfaces/list.interface';
import { MovieViewerFasade } from '../../movie-viewer.fasade';

@Component({
	selector: 'movie-viewer-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
	public activeId$: Observable<string | undefined>;
	public items$: Observable<List['results']>;

	constructor(private movieViewerFasade: MovieViewerFasade) {
		this.items$ = this.movieViewerFasade.selectMoviesList();
		this.activeId$ = this.movieViewerFasade.selectMovieDetails().pipe(map(({ id }) => id));
	}

	public ngOnInit(): void {
		this.movieViewerFasade.loadMovies();
	}
}

