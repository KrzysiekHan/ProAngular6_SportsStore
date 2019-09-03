
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';
import { AuthService } from '../model/auth.service';

@Component({
    templateUrl: 'auth.component.html',
})
export class AuthComponent {
    public username: string;
    public password: string;
    public errorMessage: string;
    constructor(private router: Router, private auth: AuthService) { }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.auth.authenticate(this.username, this.password)
            .subscribe(response => {
                if  (response) {
                    this.router.navigateByUrl('/admin/main');
                }
            });
        } else {
            this.errorMessage = 'Form Data Invalid';
        }
    }
}
