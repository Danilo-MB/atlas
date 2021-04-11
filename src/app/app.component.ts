import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService,
    private spinnerService: NgxSpinnerService) {

    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);

        let returnUrl = localStorage.getItem('returUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }

  ngOnInit(): void {
    this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000)
  }


}
