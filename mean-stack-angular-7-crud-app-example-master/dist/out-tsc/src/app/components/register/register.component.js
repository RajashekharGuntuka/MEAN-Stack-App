import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    var _a;
    RegisterComponent = tslib_1.__decorate([
        Component({
            templateUrl: './register.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AuthenticationService !== "undefined" && AuthenticationService) === "function" ? _a : Object, Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map