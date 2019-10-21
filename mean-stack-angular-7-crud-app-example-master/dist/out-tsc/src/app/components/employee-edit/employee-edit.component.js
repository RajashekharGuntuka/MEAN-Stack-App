import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormBuilder, Validators } from "@angular/forms";
var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(fb, actRoute, apiService, router) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.router = router;
        this.submitted = false;
        this.EmployeeProfile = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        this.updateEmployee();
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.getEmployee(id);
        this.editForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
    };
    // Choose options with select-dropdown
    EmployeeEditComponent.prototype.updateProfile = function (e) {
        this.editForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(EmployeeEditComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeEditComponent.prototype.getEmployee = function (id) {
        var _this = this;
        this.apiService.getEmployee(id).subscribe(function (data) {
            _this.editForm.setValue({
                name: data['name'],
                email: data['email'],
                designation: data['designation'],
                phoneNumber: data['phoneNumber'],
            });
        });
    };
    EmployeeEditComponent.prototype.updateEmployee = function () {
        this.editForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            designation: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
    };
    EmployeeEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editForm.valid) {
            return false;
        }
        else {
            if (window.confirm('Are you sure?')) {
                var id = this.actRoute.snapshot.paramMap.get('id');
                this.apiService.updateEmployee(id, this.editForm.value)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/employees-list');
                    console.log('Content updated successfully!');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    EmployeeEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-employee-edit',
            templateUrl: './employee-edit.component.html',
            styleUrls: ['./employee-edit.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ActivatedRoute,
            ApiService,
            Router])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());
export { EmployeeEditComponent };
//# sourceMappingURL=employee-edit.component.js.map