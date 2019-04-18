import {Observable, from} from 'rxjs'
import {register} from './github'

export function initiate(): Observable<number> {
  return from([10, 20, 30])
}
