import IEmployee from '../interfaces/IEmployee';
import Employee from '../db/Employee';

export async function getAllEmployees() {
  return await Employee.findAll();
}

export async function getEmployee(id: number) {
  return await Employee.findByPk(id);
}

export async function createEmployee(employee: IEmployee) {
  return await Employee.create(employee);
}

export async function updateEmployee(id: number, employee: any) {
  const oldEmployee = await Employee.findByPk(id);
  if (oldEmployee) {
    const newEmployee = await oldEmployee.update(employee);
    return newEmployee;
  }
}

export async function deleteEmployee(id: number) {
  const oldEmployee = await Employee.findByPk(id);
  if (oldEmployee) {
    await oldEmployee.destroy();
    return oldEmployee;
  }
}
