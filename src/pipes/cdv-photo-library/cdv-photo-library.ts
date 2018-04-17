import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the CdvPhotoLibraryPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'cdvPhotoLibrary',
})
export class CdvPhotoLibraryPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string) {
    return url.startsWith('cdvphotolibrary://') ? this.sanitizer.bypassSecurityTrustUrl(url) : url;
  }
}
