export class APIResponce {
  data;
  message;
  statuscode;
  res;
  constructor(res, data, message, statuscode = 200) {
    this.res = res;
    this.data = data;
    this.message = message;
    this.statuscode = statuscode;
  }
  json() {
    this.res
      .status(this.statuscode)
      .json({ data: this.data, message: this.message });
  }
}
export class APIError {
  data;
  message;
  statuscode;
  res;
  constructor(res, data, message, statuscode = 500) {
    this.res = res;
    this.data = data;
    this.message = message;
    this.statuscode = statuscode;
  }
  json() {
    this.res
      .status(this.statuscode)
      .json({ data: this.data, message: this.message });
  }
}
