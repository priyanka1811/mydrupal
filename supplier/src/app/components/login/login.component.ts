import { OnInit, Component, Input, Output } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
 
import { AlertService,  AuthenticationService} from '../../services/index';
import { UserService } from '../../services/index';
import { User } from '../../models/index';
 
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.name, this.model.password)
            .subscribe(
                data => {
                    this.loading = false;
                    this.router.navigate([this.returnUrl]);                    
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}