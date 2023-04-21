import { AccountModel } from '@auth/domain/models';

import { Usecase } from '@common/utils/types';

export type AuthenticateParams = {
  email: string;
  password: string;
};

export type AuthenticateModel = AccountModel;

export type AuthenticateUsecase = Usecase<
  AuthenticateParams,
  AuthenticateModel
>;
