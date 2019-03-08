import { Injectable } from '@angular/core';

import {CHARACTERS} from './mock-data';
import { Observable,of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AdventureTimeService {

  constructor() { }


getCharacters(): Observable<any[]>{

return of(CHARACTERS);

}

getColums(): string[]{

return["firstname","lastname","email","id","phonenumber","designation","DOB"]


};


}
