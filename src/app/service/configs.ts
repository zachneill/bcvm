import {User} from "../model/user";
import {Injectable} from "@angular/core";

// Comment out the config you don't need

// PRODUCTION / HTTPS

export enum Configs {
  saveUrl = 'https://bcvm.zachneill.com/save',
  supplyUrl = 'https://bcvm.zachneill.com/supply/',
  machinesUrl = 'https://bcvm.zachneill.com/machines',
  loginUrl = 'https://bcvm.zachneill.com/login',
  createAccountUrl = 'https://bcvm.zachneill.com/create',
  userUrl = 'https://bcvm.zachneill.com/user/',
  updateUserUrl = 'https://bcvm.zachneill.com/updateUser',
}

// LOCAL / HTTP

// export enum Configs {
//   saveUrl = 'http://localhost:8080/save',
//   supplyUrl = 'http://localhost:8080/supply/',
//   machinesUrl = 'http://localhost:8080/machines',
//   loginUrl = 'http://localhost:8080/login',
//   createAccountUrl = 'http://localhost:8080/create',
//   userUrl = 'http://localhost:8080/user/',
//   updateUserUrl = 'http://localhost:8080/updateUser',
// }

@Injectable({providedIn: "root"})
export class Global {
  public currentUser: User = new User()
  public loggedIn: boolean = false
  public success: any = {
    saveSuccessful: "Save successful!",
    updateSuccessful: "Update successful!",
    accountCreated: "Account created!"
  }
  public error: any = {
    serverError: "Server error logging in... Refresh?",
    unauthenticRequest: "Unauthentic request detected",
    userAlreadyExists: "Username already exists",
    incompleteFields: "Please complete all fields",
    passwordMismatch: "Passwords do not match"
  }
}
