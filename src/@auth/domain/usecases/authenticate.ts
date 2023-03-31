import { Account } from '@auth/domain/models';

export type Params = {
  email: string;
  password: string;
};

export type Model = Account.Model;

export interface Usecase {
  exe(params: Params): Promise<Model>;
}
