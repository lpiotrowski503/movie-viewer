import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/movie-viewer', pathMatch: 'full' },
	{
		path: 'movie-viewer',
		loadChildren: () => import('./modules/movie-viewer/movie-viewer.module').then((m) => m.MovieViewerModule),
	},
	{ path: '**', redirectTo: '/movie-viewer' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

