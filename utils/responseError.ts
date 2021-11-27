export class ResponseError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "ResponseError";
    Object.setPrototypeOf(this, ResponseError.prototype);
  }
}
