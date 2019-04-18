import {Entity, model, property} from '@loopback/repository'

@model({settings: {strict: false}})
export class FormCredential extends Entity {
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
    type: 'array',
    default: []
  })
  contains: string[]

  @property({
    type: 'object',
    default: {}
  })
  dailyRoutineLogs: object

  @property({
    type: 'object',
    default: {}
  })
  externalIPInfo: object

  @property({
    type: 'string'
  })
  loginHandle: string

  @property({
    type: 'string'
  })
  password: string

  @property({
    type: 'string'
  })
  email: string

  @property({
    type: 'string'
  })
  name: string

  @property({
    type: 'boolean',
    default: false
  })
  dox: boolean

  // Indexer property to allow additional data
  [prop: string]: any

  constructor(data?: Partial<FormCredential>) {
    super(data)
  }
}
