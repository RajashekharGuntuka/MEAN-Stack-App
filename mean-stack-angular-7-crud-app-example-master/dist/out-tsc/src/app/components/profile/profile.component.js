import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
    };
    var _a;
    ProfileComponent = tslib_1.__decorate([
        Component({
            templateUrl: './profile.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AuthenticationService !== "undefined" && AuthenticationService) === "function" ? _a : Object])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map