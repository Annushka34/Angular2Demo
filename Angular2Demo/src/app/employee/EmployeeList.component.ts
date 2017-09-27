import { Component } from '@angular/core';
@Component({
   // moduleId: module.id,
    selector: 'list-template',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})


export class EmployeeListComponent {
    //employees: any[] =
    //[
    //    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '23/12/2003' },
    //    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5500, dateOfBirth: '13/12/2000' },
    //    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '10/12/1998' },
    //    { code: 'emp104', name: 'July', gender: 'Female', annualSalary: 6300, dateOfBirth: '10/02/1996' }
    //];
    employees: any[];
    constructor() {
    this.employees=
    [
        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '23/12/2003' },
        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5500, dateOfBirth: '13/12/2000' },
        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '10/12/1998' },
        { code: 'emp104', name: 'July', gender: 'Female', annualSalary: 6300, dateOfBirth: '10/02/1996' },
        ];
    }

    getEmployees():void {
        this.employees =
            [
                { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '23/12/2003' },
                { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5500, dateOfBirth: '13/12/2000' },
                { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '10/12/1998' },
                { code: 'emp104', name: 'July', gender: 'Female', annualSalary: 6300, dateOfBirth: '10/02/1996' },
                { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 5998, dateOfBirth: '20/08/1996' }
            ];
    }
    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}