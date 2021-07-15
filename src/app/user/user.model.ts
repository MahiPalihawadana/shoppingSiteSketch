export class User {
  reset(arg0: {}) {
    throw new Error();
  }
  exp: number;
  globalStateChanged: any;
  constructor(
    public firstName: String,
    public lastName: String,
    public email: String,
    public password: String,
    public confirmPassword: string
  ) { }
}
