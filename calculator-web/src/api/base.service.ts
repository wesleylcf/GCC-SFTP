import axios from "axios";

export class BaseApiService {
  protected apiUrl: string;
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async post<ExpectedResponse>(...params: Parameters<typeof axios.post>) {
    const [endpoint, _data, config] = params;
    try {
      const response = await axios.post<ExpectedResponse>(
        `${this.apiUrl}/${endpoint}`,
        _data,
        config
      );
      return response.data as ExpectedResponse;
    } catch (e) {
      // Backend specific error processing to make it presentable to users if necessary.
      throw e;
    }
  }
}
