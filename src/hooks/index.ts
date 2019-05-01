import {Observable, from} from 'rxjs'
import {register} from './twitter'

export function initiate(): Observable<number> {
  register().subscribe()

  return from([10, 20, 30])
}
