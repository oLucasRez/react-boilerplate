import { AxiosHTTPService } from '@common/infra/http';

export function makeAxiosHTTPService() {
  const axiosHTTPService = new AxiosHTTPService();

  return axiosHTTPService;
}
