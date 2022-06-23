import { environment } from 'apps/movie-viewer/src/environments/environment';
import { MovieViewer } from '../../interfaces/list.interface';
import * as MovieViewerActions from './movie-viewer.actions';

const initialState: MovieViewer = {
	items: {},
	details: {},
	labels: [
		{
			name: 'Title:',
			key: 'title',
			isTextType: true,
		},
		{
			name: 'Genres:',
			key: 'genres',
			isTextArrayType: true,
			arrayProperty: 'name',
		},
		{
			name: 'Vote average:',
			key: 'vote_average',
			isTextType: true,
		},
		{
			name: 'Vote count:',
			key: 'vote_count',
			isTextType: true,
		},
		{
			name: 'Home page:',
			key: 'homepage',
			isLinkType: true,
		},
		{
			name: 'Overview:',
			key: 'overview',
			isTextType: true,
		},
	],
};

export function MovieViewerReducer(state: MovieViewer = initialState, action: MovieViewerActions.Actions): MovieViewer {
	switch (action.type) {
		case MovieViewerActions.MovieViewerActionTypes.LOAD_LIST_SUCCESS:
			return { ...state, items: action.response };

		case MovieViewerActions.MovieViewerActionTypes.LOAD_ITEM_SUCCESS:
			return {
				...state,
				details: {
					...action.response,
					poster_url: `${environment.baseImageUrl}/w500${action.response.poster_path}`,
				},
			};

		default:
			return state;
	}
}

