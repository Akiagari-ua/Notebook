type TErrorHandler = {
  type: string;
  message: string;
};

class CustomErrors extends Error {
  public type: string;
  public message: string;

  constructor({ type, message }: TErrorHandler) {
    super();
    this.type = type;
    this.message = message;
  }
}

export default CustomErrors;
