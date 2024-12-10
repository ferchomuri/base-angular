export class ServerMessage {
  code: number;
  message: string;
  redirectionURL: string;
  service: string;
  data: any;

  constructor() {
    this.code = 0;
    this.message = '';
    this.redirectionURL = '';
    this.service = '';
    this.data = null;
  }
}
