import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule as NgRxStoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MovieViewerEffects } from '../modules/movie-viewer/movie-viewer.effects';
import { MovieViewerReducer } from '../modules/movie-viewer/movie-viewer.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NgRxStoreModule.forRoot({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			movieViewer: MovieViewerReducer,
		}),
		EffectsModule.forRoot([MovieViewerEffects]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
	],
})
export class StoreModule {}

