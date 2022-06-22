export interface Item {
	id?: string;
	title?: string;
	homepage?: string;
	overview?: string;
	poster_path?: string;
	poster_url?: string;
}

export interface List {
	results?: Item[];
	page?: number;
	total_pages?: number;
	total_results?: number;
}

export interface MovieViewer {
	items: List;
	details: Item;
}

