import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router, private userService: UserService){
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        
        let returnUrl = localStorage.getItem('returUrl');
        router.navigateByUrl(returnUrl);
      } 
    });
  }
}
