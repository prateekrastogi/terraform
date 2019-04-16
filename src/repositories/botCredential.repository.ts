import {DefaultCrudRepository} from '@loopback/repository'
import {BotCredential} from '../models'
import {MongoLocalDataSource} from '../datasources'
import {inject} from '@loopback/core'

export class BotCredentialRepository extends DefaultCrudRepository<
  BotCredential,
  typeof BotCredential.prototype.id
> {
  constructor(
    @inject('datasources.mongoLocal') dataSource: MongoLocalDataSource
  ) {
    super(BotCredential, dataSource)
  }
}
