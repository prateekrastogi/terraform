import {Entity, model, property} from '@loopback/repository'

@model({settings: {strict: false}})
export class BotCredential extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string

  @property({
    type: 'string',
    required: true
  })
  realm: string

  @property({
    type: 'string',
    required: true
  })
  name: string

  @property({
    type: 'string',
    required: true
  })
  email: string

  @property({
    type: 'string',
    required: true
  })
  password: string

  @property({
    type: 'boolean',
    default: false
  })
  dox: boolean

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any

  constructor(data?: Partial<BotCredential>) {
    super(data)
  }
}
