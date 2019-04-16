import {Count, CountSchema, repository, Where} from '@loopback/repository'
import {post, param, get, getWhereSchemaFor, requestBody} from '@loopback/rest'
import {Context, BindingScope, inject} from '@loopback/context'
import {BotCredential} from '../models'
import {BotCredentialRepository} from '../repositories'
import {
  AuthenticationBindings,
  UserProfile,
  authenticate
} from '@loopback/authentication'

export class GithubController {
  constructor(
    @repository(BotCredentialRepository)
    public userRepository: BotCredentialRepository,
    @inject(AuthenticationBindings.CURRENT_USER)
    private user: UserProfile
  ) {}

  @authenticate('BasicStrategy')
  @post('/users', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: {'x-ts-type': BotCredential}}}
      }
    }
  })
  async create(@requestBody() user: BotCredential): Promise<BotCredential> {
    return await this.userRepository.create(user)
  }

  @authenticate('BasicStrategy')
  @get('/users/count', {
    responses: {
      '200': {
        description: 'User model count',
        content: {'application/json': {schema: CountSchema}}
      }
    }
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(BotCredential)) where?: Where
  ): Promise<Count> {
    return await this.userRepository.count(where)
  }
}

const appCtx = new Context('application')
appCtx
  .bind('controllers.GithubController')
  .toClass(GithubController)
  .inScope(BindingScope.SINGLETON)
