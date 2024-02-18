import axios from "axios";

export class BaseApiService {
  protected apiUrl: string;
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  /**
   * Takes in the same parameters as axios.post
   * @param url Endpoint to be appended to the apiUrl of the current service. Should start without '/'
   * @param data Forwarded to axios.post
   * @param config Forward to axios.post
   */
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
      // Backend specific error processing
      throw e;
    }
  }
}
