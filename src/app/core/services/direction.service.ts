import { Injectable } from '@angular/core';
import { Language, Direction } from '../enums';

@Injectable({ providedIn: 'root' })
export class DirectionService {
  changeDocumentDirection(lang: string) {
    if (lang === Language.Arabic) {
      document.documentElement.dir = Direction.RTL;
      document.documentElement.lang = Language.Arabic;
    } else {
      document.documentElement.dir = Direction.LTR;
      document.documentElement.lang = Language.English;
    }
  }
}
