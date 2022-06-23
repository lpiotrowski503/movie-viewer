import { Action } from '@ngrx/store';
import { Item, List } from '../../interfaces/list.interface';

export enum MovieViewerActionTypes {
	LOAD_LIST = '[MovieViewer] load list',
	LOAD_LIST_SUCCESS = '[MovieViewer] load list success',
	LOAD_LIST_ERROR = '[MovieViewer] load list error',

	LOAD_ITEM = '[MovieViewer] load item',
	LOAD_ITEM_SUCCESS = '[MovieViewer] load item success',
	LOAD_ITEM_ERROR = '[MovieViewer] load item error',
}

export class LoadList implements Action {
	readonly type = MovieViewerActionTypes.LOAD_LIST;
}

export class LoadListSuccess implements Action {
	readonly type = MovieViewerActionTypes.LOAD_LIST_SUCCESS;
	constructor(public response: List) {}
}

export class LoadListError implements Action {
	readonly type = MovieViewerActionTypes.LOAD_LIST_ERROR;
	constructor(public error: Error) {}
}

export class LoadItem implements Action {
	readonly type = MovieViewerActionTypes.LOAD_ITEM;
	constructor(public id: string) {}
}

export class LoadItemSuccess implements Action {
	readonly type = MovieViewerActionTypes.LOAD_ITEM_SUCCESS;
	constructor(public response: Item) {}
}

export class LoadItemError implements Action {
	readonly type = MovieViewerActionTypes.LOAD_ITEM_ERROR;
	constructor(public error: Error) {}
}

export type Actions = LoadList | LoadListSuccess | LoadListError | LoadItem | LoadItemSuccess | LoadItemError;

