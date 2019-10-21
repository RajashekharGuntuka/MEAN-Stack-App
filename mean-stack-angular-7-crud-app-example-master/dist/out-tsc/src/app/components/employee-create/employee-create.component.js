import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, NgZone } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
var EmployeeCreateComponent = /** @class */ (function () {
    function EmployeeCreateComponent(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.submitted = false;
        this.EmployeeProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
        this.mainForm();
    }
    EmployeeCreateComponent.prototype.ngOnInit = function () { };
    EmployeeCreateComponent.prototype.mainForm = function () {
        this.employeeForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
    };
    // Choose designation with select dropdown
    EmployeeCreateComponent.prototype.updateProfile = function (e) {
        this.employeeForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(EmployeeCreateComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.employeeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.employeeForm.valid) {
            return false;
        }
        else {
            this.apiService.createEmployee(this.employeeForm.value).subscribe(function (res) {
                console.log('Employee successfully created!');
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/employees-list'); });
            }, function (error) {
                console.log(error);
            });
        }
    };
    EmployeeCreateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-employee-create',
            templateUrl: './employee-create.component.html',
            styleUrls: ['./employee-create.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            NgZone,
            ApiService])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());
export { EmployeeCreateComponent };
//# sourceMappingURL=employee-create.component.js.map