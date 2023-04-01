import { Observable } from 'rxjs';

export interface HellosService {
  hello(data: any): Observable<any>;
}
