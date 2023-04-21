import { AuthenticateUsecase } from '@auth/domain/usecases';

import { RemoteAuthenticate } from '@auth/data/usecases';

import { makeAPIURL, makeAxiosHTTPService } from '@common/main/factories';

export function makeRemoteAuthenticate(): AuthenticateUsecase {
  const apiURL = makeAPIURL('/login');
  const httpService = makeAxiosHTTPService();

  const remoteAuthenticate = new RemoteAuthenticate(apiURL, httpService);

  return remoteAuthenticate.usecase;
}
