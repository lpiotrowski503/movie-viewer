import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Item, List } from '../interfaces/list.interface';

interface Options {
	page?: number;
}

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	private _getEndPoint(endPoint: string, options?: Options): string {
		return `${environment.basePath}/${environment.version}/${endPoint}?${'api_key=' + environment.apiKey}${
			options?.page ? '&page=' + options.page : ''
		}`;
	}

	public getMovies(page: number = 1): Observable<List> {
		return this.http.get<List>(this._getEndPoint('discover/movie', { page }));
	}

	public getMovieDetails(id: string): Observable<Item> {
		return this.http.get<Item>(this._getEndPoint(`movie/${id}`));
	}
}

