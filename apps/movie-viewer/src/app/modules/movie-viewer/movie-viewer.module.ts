import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieViewerComponent } from './movie-viewer.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { MovieViewerRoutingModule } from './movie-viewer-routing.module';

@NgModule({
	declarations: [MovieViewerComponent, ListComponent, DetailsComponent],
	imports: [CommonModule, MovieViewerRoutingModule],
})
export class MovieViewerModule {}

