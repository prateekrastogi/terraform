import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository'
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody
} from '@loopback/rest'
import {User} from '../models'
import {UserRepository} from '../repositories'

export class GithubController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository
  ) {}

  @post('/users', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: {'x-ts-type': User}}}
      }
    }
  })
  async create(@requestBody() user: User): Promise<User> {
    return await this.userRepository.create(user)
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'User model count',
        content: {'application/json': {schema: CountSchema}}
      }
    }
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where
  ): Promise<Count> {
    return await this.userRepository.count(where)
  }
}
