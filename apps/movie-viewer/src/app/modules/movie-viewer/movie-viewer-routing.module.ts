import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { MovieViewerComponent } from './movie-viewer.component';

const routes: Routes = [
	{
		path: '',
		component: MovieViewerComponent,
		children: [
			{
				path: ':id',
				component: DetailsComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MovieViewerRoutingModule {}

