export class LoginModel {
    email: string;
    name: string;
    dateOfBirth: string;
    socialLoginUsed: number;
    profileImage: string;
    constructor(){
      this.email = '';
      this.name = '';
      this.dateOfBirth = '';
      this.socialLoginUsed = 0;
      this.profileImage = '';
    }
}
