import {Request, RestBindings, get, ResponseObject} from '@loopback/rest'
import {inject, Context, BindingScope} from '@loopback/context'

let count: number = 0

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: ResponseObject = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'}
            },
            additionalProperties: true
          }
        }
      }
    }
  }
}

/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/ping', {
    responses: {
      '200': PING_RESPONSE
    }
  })
  ping(): object {
    count++
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: `Hello from LoopBack <count:${count}>`,
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers)
    }
  }
}

const appCtx = new Context('application')
appCtx
  .bind('controllers.PingController')
  .toClass(PingController)
  .inScope(BindingScope.SINGLETON)
