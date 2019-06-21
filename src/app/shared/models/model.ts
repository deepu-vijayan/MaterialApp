export class LoginModel {
    email: string;
    name: string;
    dateOfBirth: string;
    socialLoginUsed: number;
    constructor(){
      this.email = '';
      this.name = '';
      this.dateOfBirth = '';
      this.socialLoginUsed = 0;
    }
}
