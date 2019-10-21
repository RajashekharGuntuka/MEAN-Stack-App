import { async, TestBed } from '@angular/core/testing';
import { EmployeeEditComponent } from './employee-edit.component';
describe('EmployeeEditComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EmployeeEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EmployeeEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=employee-edit.component.spec.js.map