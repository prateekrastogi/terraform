import {DefaultCrudRepository} from '@loopback/repository'
import {FormCredential} from '../models'
import {MongoLocalDataSource} from '../datasources'
import {inject} from '@loopback/core'

export class FormCredentialRepository extends DefaultCrudRepository<
  FormCredential,
  typeof FormCredential.prototype.id
> {
  constructor(
    @inject('datasources.mongoLocal') dataSource: MongoLocalDataSource
  ) {
    super(FormCredential, dataSource)
  }
}
