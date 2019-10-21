import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import { UserService } from '../../shared/user.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  userDetails;
  Employee:any = [];

  constructor(private apiService: ApiService,private userService: UserService, private router: Router) { 
    this.readEmployee();
  }

  ngOnInit() { 
    this.userService.getUserProfile().subscribe(
    res => {
      this.userDetails = res['user'];
    },
    err => { 
      console.log(err);
      
    }
  );
}

  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })    
  }

  removeEmployee(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )    
    }
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


}