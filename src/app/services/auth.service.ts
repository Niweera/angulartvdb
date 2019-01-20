import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }

  
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
}

}

