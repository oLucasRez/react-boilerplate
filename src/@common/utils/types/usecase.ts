export interface Usecase<ParamsType, ReturnType> {
  (params: ParamsType): Promise<ReturnType>;
}
