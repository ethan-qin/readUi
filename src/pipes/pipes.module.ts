import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html/safe-html';
import { SearchTitlePipe } from './search-title/search-title';
import { SearchTitleFiltratePipe } from './search-title-filtrate/search-title-filtrate';
import { CdvPhotoLibraryPipe } from './cdv-photo-library/cdv-photo-library';
@NgModule({
    declarations: [SafeHtmlPipe,
        SearchTitlePipe,
        SearchTitleFiltratePipe,
    CdvPhotoLibraryPipe,
    ],
    imports: [],
    exports: [SafeHtmlPipe,
        SearchTitlePipe,
        SearchTitleFiltratePipe,
    CdvPhotoLibraryPipe,
    ]
})
export class PipesModule { }
