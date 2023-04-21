import axios, { AxiosResponse } from 'axios';

import { HTTPResponse, HTTPService } from '@common/data/protocols';

export class AxiosHTTPService implements HTTPService {
  async get<ResponseBodyType = any>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url,
        method: 'get',
        headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }

  async post<RequestBodyType = any, ResponseBodyType = any>(
    url: string,
    body?: RequestBodyType,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url,
        method: 'post',
        data: body,
        headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }

  async put<RequestBodyType = any, ResponseBodyType = any>(
    url: string,
    body?: RequestBodyType,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url,
        method: 'put',
        data: body,
        headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }

  async patch<RequestBodyType = any, ResponseBodyType = any>(
    url: string,
    body?: RequestBodyType,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url,
        method: 'patch',
        data: body,
        headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }

  async delete<ResponseBodyType>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<HTTPResponse<ResponseBodyType>> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url,
        method: 'delete',
        headers,
      });
    } catch (error) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
