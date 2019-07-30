export class LoginModel {
    email: string;
    name: string;
    dateOfBirth: string;
    socialLoginUsed: number;
    profilePic: string;
    constructor(){
      this.email = '';
      this.name = '';
      this.dateOfBirth = '';
      this.socialLoginUsed = 0;
      this.profilePic = '';
    }
}
