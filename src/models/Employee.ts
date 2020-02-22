import IEmployee from "../interfaces/IEmployee";
import Employee from "../db/Employee";

export async function getAllEmployees() {
  return await Employee.findAll();
}

export async function getEmployee(id: number) {
  return await Employee.findByPk(id);
}

export async function createEmployee(employee: IEmployee) {
  return await Employee.create(employee);
}

export async function findByIdAndUpdate(id: number, employee: any) {
  const oldemp = await Employee.findByPk(id);
  if (oldemp) {
    const newemp = await oldemp.update(employee);
    return newemp;
  }
}

export async function deleteEmployee(id: number) {
  const oldemp = await Employee.findByPk(id);
  if (oldemp) {
    await oldemp.destroy();
    return oldemp;
  }
}
