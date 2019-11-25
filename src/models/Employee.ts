import Person from "../db/Person";
import IEmployee from "../interfaces/IEmployee";

export async function getAdminEmployees() {
  return await Person.findAll({ where: { isAdmin: true } });
}

export async function getEmployee(id: number) {
  return await Person.findByPk(id);
}

export async function createEmployee(employee: IEmployee) {
  return await Person.create(employee);
}
