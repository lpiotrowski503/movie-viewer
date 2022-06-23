export interface Item {
	id?: string;
	title?: string;
	homepage?: string;
	overview?: string;
	poster_path?: string;
	poster_url?: string;
	vote_average?: number;
	vote_count?: number;
	genres?: { name: string }[];
}

export interface List {
	results?: Item[];
	page?: number;
	total_pages?: number;
	total_results?: number;
}

export interface Label {
	name: string;
	key: keyof Item;
	isLinkType?: boolean;
	isTextType?: boolean;
	isTextArrayType?: boolean;
	arrayProperty?: string;
}

export interface MovieViewer {
	items: List;
	details: Item;
	labels: Label[];
}

