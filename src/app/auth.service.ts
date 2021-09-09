import { Injectable } from '@angular/core';
import { NgZone } from '@angular/core';
import { User } from './shared/services/user';
import { Auth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {}

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['home']);
    });
  }

  IsLogged() {
    return this.afAuth.currentUser;
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['home']);
        console.log(result);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut();
  }
}
