import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { SearchTitlePipe } from './search-title/search-title';
import { SearchTitleFiltratePipe } from './search-title-filtrate/search-title-filtrate';
@NgModule({
    declarations: [SafeHtmlPipe,
        SearchTitlePipe,
        SearchTitleFiltratePipe,
    ],
    imports: [],
    exports: [SafeHtmlPipe,
        SearchTitlePipe,
        SearchTitleFiltratePipe,
    ]
})
export class PipesModule { }
