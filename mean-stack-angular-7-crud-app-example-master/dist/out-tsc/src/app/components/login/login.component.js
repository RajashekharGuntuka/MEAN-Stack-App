import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    var _a;
    LoginComponent = tslib_1.__decorate([
        Component({
            templateUrl: './login.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AuthenticationService !== "undefined" && AuthenticationService) === "function" ? _a : Object, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map