
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
    templateUrl: 'auth.component.html',
})
export class AuthComponent {
    public username: string;
    public password: string;
    public errorMessage: string;
    constructor(private router: Router) { }

    authenticate(form: NgForm) {
        if (form.valid) {
            this.router.navigateByUrl("/admin/main");
        } else {
            this.errorMessage = "Form Data Invalid";
        }
    }
}
