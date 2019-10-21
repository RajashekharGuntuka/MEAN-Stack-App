import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, user);
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(map(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map