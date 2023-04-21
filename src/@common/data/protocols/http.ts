export interface HTTPRequest<BodyType, HeadersType> {
  body?: BodyType;
  headers?: HeadersType;
}

export enum HTTPStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface HTTPResponse<BodyType> {
  statusCode: HTTPStatusCode;
  body?: BodyType;
}

export interface HTTPService {
  get<ResponseBodyType = any>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>>;
  post<ResponseBodyType = any, RequestBodyType = any>(
    url: string,
    body?: RequestBodyType,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>>;
  put<ResponseBodyType = any, RequestBodyType = any>(
    url: string,
    body?: RequestBodyType,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>>;
  patch<ResponseBodyType = any, RequestBodyType = any>(
    url: string,
    body?: RequestBodyType,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>>;
  delete<ResponseBodyType = any>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>>;
}
