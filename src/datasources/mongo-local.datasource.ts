import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mongo-local.datasource.json';

export class MongoLocalDataSource extends juggler.DataSource {
  static dataSourceName = 'mongoLocal';

  constructor(
    @inject('datasources.config.mongoLocal', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
