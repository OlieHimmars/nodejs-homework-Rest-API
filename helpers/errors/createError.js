class statusCode {
  static messages = {

    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict",
  };

  static createError(status, message = statusCode.messages[status]) {
    const error = new Error(message);
    error.status = status;
    return error;
  }
}

module.exports = { createError };