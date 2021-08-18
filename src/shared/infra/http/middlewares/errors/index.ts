

export default class AppError {
  constructor(
    public message: string,
    public status: number = 400) { }
}
