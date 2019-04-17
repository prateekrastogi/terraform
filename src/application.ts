import {BootMixin} from '@loopback/boot'
import {ApplicationConfig} from '@loopback/core'
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer'
import {RepositoryMixin} from '@loopback/repository'
import {RestApplication} from '@loopback/rest'
import * as path from 'path'
import {MySequence} from './sequence'
import {
  AuthenticationComponent,
  AuthenticationBindings
} from '@loopback/authentication'
import {MyAuthStrategyProvider} from './providers/auth-strategy.provider'

export class LoopbackNextLeanStarterApplication extends BootMixin(
  RepositoryMixin(RestApplication)
) {
  constructor(options: ApplicationConfig = {}) {
    super(options)

    // Set up the custom sequence
    this.sequence(MySequence)

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'))

    // Customize @loopback/rest-explorer configuration here
    this.bind(RestExplorerBindings.CONFIG).to({
      path: '/explorer'
    })
    this.component(RestExplorerComponent)

    this.bind(AuthenticationBindings.STRATEGY).toProvider(
      MyAuthStrategyProvider
    )
    this.component(AuthenticationComponent)

    this.projectRoot = __dirname
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true
      }
    }
  }
}
