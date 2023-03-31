export type Method = 'post' | 'get' | 'put' | 'delete';

export interface Request<BodyType, HeadersType> {
  url: string;
  method: Method;
  body?: BodyType;
  headers?: HeadersType;
}

export enum StatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface Response<BodyType> {
  statusCode: StatusCode;
  body?: BodyType;
}

export interface Client<ResponseBodyType> {
  request: <RequestBodyType, HeadersType>(
    data: Request<RequestBodyType, HeadersType>,
  ) => Promise<Response<ResponseBodyType>>;
}
