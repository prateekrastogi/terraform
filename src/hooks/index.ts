import {Observable, from} from 'rxjs'

export function initiate(): Observable<number> {
  return from([10, 20, 30])
}
