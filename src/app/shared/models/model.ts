export class LoginModel {
    email: string;
    name: string;
    dateOfBirth: string;
    socialLoginUsed: number;
    profilePic: string;
    designation:string;
    appUserId: any;
    constructor(){
      this.email = '';
      this.name = '';
      this.dateOfBirth = '';
      this.socialLoginUsed = 0;
      this.profilePic = '';
      this.designation = '';
      this.appUserId = null;
    }
}
