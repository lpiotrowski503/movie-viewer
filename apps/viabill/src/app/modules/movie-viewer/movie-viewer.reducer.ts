import { environment } from 'apps/viabill/src/environments/environment';
import { MovieViewer } from '../../interfaces/list.interface';
import * as MovieViewerActions from './movie-viewer.actions';

const initialState: MovieViewer = {
	items: {},
	details: {},
};

export function MovieViewerReducer(state: MovieViewer = initialState, action: MovieViewerActions.Actions): MovieViewer {
	switch (action.type) {
		case MovieViewerActions.MovieViewerActionTypes.LOAD_LIST_SUCCESS:
			return { ...state, items: action.response };

		case MovieViewerActions.MovieViewerActionTypes.LOAD_ITEM_SUCCESS:
			console.log(1, environment.basePath);
			console.log(2, action.response);
			return {
				...state,
				details: {
					...action.response,
					poster_url: `${environment.baseImageUrl}/w500${action.response.poster_path}`,
					// poster_url: `${environment.basePath}/${environment.version}${action.response.poster_path}?${
					// 	'api_key=' + environment.apiKey
					// }`,
				},
			};

		default:
			return state;
	}
}

