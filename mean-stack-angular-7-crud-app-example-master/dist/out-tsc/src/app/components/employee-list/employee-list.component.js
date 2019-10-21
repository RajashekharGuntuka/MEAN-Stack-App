import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from './../../service/api.service';
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(apiService) {
        this.apiService = apiService;
        this.Employee = [];
        this.readEmployee();
    }
    EmployeeListComponent.prototype.ngOnInit = function () { };
    EmployeeListComponent.prototype.readEmployee = function () {
        var _this = this;
        this.apiService.getEmployees().subscribe(function (data) {
            _this.Employee = data;
        });
    };
    EmployeeListComponent.prototype.removeEmployee = function (employee, index) {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.apiService.deleteEmployee(employee._id).subscribe(function (data) {
                _this.Employee.splice(index, 1);
            });
        }
    };
    EmployeeListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-employee-list',
            templateUrl: './employee-list.component.html',
            styleUrls: ['./employee-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
export { EmployeeListComponent };
//# sourceMappingURL=employee-list.component.js.map