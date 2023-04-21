import { AuthenticateModel, AuthenticateUsecase } from '@auth/domain/usecases';
import {
  InvalidCredentialsError,
  UnexpectedError,
} from '@common/domain/errors';

import { HTTPService, HTTPStatusCode } from '@common/data/protocols';

export class RemoteAuthenticate {
  constructor(
    private readonly url: string,
    private readonly httpService: HTTPService,
  ) {}

  usecase: AuthenticateUsecase = async (params) => {
    const httpResponse = await this.httpService.post<AuthenticateModel>(
      this.url,
      params,
    );

    switch (httpResponse.statusCode) {
      case HTTPStatusCode.ok:
        return httpResponse.body;
      case HTTPStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  };
}
