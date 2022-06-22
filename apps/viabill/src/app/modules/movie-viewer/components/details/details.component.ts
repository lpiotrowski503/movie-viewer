import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'apps/viabill/src/app/interfaces/list.interface';
import { Subscription, Observable } from 'rxjs';
import { MovieViewerFasade } from '../../movie-viewer.fasade';

@Component({
	selector: 'viabill-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit, OnDestroy {
	public details$: Observable<Item>;
	public labels = {
		title: 'Title:',
		homepage: 'Home page:',
		overview: 'Overview:',
	};
	private _sub: Subscription = new Subscription();

	constructor(private route: ActivatedRoute, private movieViewerFasade: MovieViewerFasade) {
		this.details$ = this.movieViewerFasade.selectMovieDetails();
	}

	public ngOnInit(): void {
		this._sub.add(
			this.route.params.subscribe((params) => {
				params['id'] && this.movieViewerFasade.loadMovieDetails(params['id']);
			})
		);
	}

	public ngOnDestroy(): void {
		this._sub.unsubscribe();
	}
}

