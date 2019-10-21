import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api';
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    // Create
    ApiService.prototype.createEmployee = function (data) {
        var url = this.baseUri + "/create";
        return this.http.post(url, data)
            .pipe(catchError(this.errorMgmt));
    };
    // Get all employees
    ApiService.prototype.getEmployees = function () {
        return this.http.get("" + this.baseUri);
    };
    // Get employee
    ApiService.prototype.getEmployee = function (id) {
        var url = this.baseUri + "/read/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(map(function (res) {
            return res || {};
        }), catchError(this.errorMgmt));
    };
    // Update employee
    ApiService.prototype.updateEmployee = function (id, data) {
        var url = this.baseUri + "/update/" + id;
        return this.http.put(url, data, { headers: this.headers }).pipe(catchError(this.errorMgmt));
    };
    // Delete employee
    ApiService.prototype.deleteEmployee = function (id) {
        var url = this.baseUri + "/delete/" + id;
        return this.http.delete(url, { headers: this.headers }).pipe(catchError(this.errorMgmt));
    };
    // Error handling 
    ApiService.prototype.errorMgmt = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map