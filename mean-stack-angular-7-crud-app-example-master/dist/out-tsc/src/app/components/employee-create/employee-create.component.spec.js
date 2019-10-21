import { async, TestBed } from '@angular/core/testing';
import { EmployeeCreateComponent } from './employee-create.component';
describe('EmployeeCreateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EmployeeCreateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EmployeeCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=employee-create.component.spec.js.map