export class BaseApiService {
  protected apiUrl: string;
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}
