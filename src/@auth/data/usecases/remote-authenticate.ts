import { Authenticate } from '@auth/domain/usecases';
import {
  InvalidCredentialsError,
  UnexpectedError,
} from '@common/domain/errors';

import { HTTP } from '@common/data/protocols';

export type Model = Authenticate.Model;

export class Usecase implements Authenticate.Usecase {
  constructor(
    private readonly url: string,
    private readonly httpClient: HTTP.Client<Model>,
  ) {}

  async exe(params: Authenticate.Params): Promise<Authenticate.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HTTP.StatusCode.ok:
        return httpResponse.body;
      case HTTP.StatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
