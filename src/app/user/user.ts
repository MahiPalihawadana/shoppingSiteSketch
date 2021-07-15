export class User {
    exp: number;
    constructor(
        public firstName: String,
        public lastName: String,
        public email: String,
        public password: String,
        public confirmPassword: string
    ) { }
}