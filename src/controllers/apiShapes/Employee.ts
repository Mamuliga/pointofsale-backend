import { canEmployeeLogIn } from '../../utilities/authHelper';

export function Employee(employee: any) {
  return {
    id: employee && employee.id,
    firstName: employee && employee.firstName,
    lastName: employee && employee.lastName,
    phoneNo: employee && employee.phoneNo,
    gender: employee && employee.gender,
    bankAccount: employee && employee.bankAccount,
    canLogIn: canEmployeeLogIn(employee),
    isFirstTimeLogin: employee && !employee.password
  };
}
