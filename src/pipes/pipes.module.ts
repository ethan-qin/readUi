import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { SearchTitlePipe } from './search-title/search-title';
import { SearchTitleFiltratePipe } from './search-title-filtrate/search-title-filtrate';
import { TimePipe } from './time/time';
@NgModule({
	declarations: [SafeHtmlPipe,
    SearchTitlePipe,
    SearchTitleFiltratePipe,
    TimePipe],
	imports: [],
	exports: [SafeHtmlPipe,
    SearchTitlePipe,
    SearchTitleFiltratePipe,
    TimePipe]
})
export class PipesModule {}
