import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
var routes = [
    { path: '', pathMatch: 'full', component: EmployeeLoginComponent },
    { path: 'create-employee', component: EmployeeCreateComponent },
    { path: 'edit-employee/:id', component: EmployeeEditComponent },
    { path: 'employees-list', component: EmployeeListComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map