import { Router } from 'express';
import {
  getEmployee,
  createEmployee,
  getAdminEmployees
} from '../models/Employee';
import { CREATE_EMPLOYEE_REQUEST_BODY } from './validators/employee';
import requestValidator from '../middleware/requestValidator';

const employeeRoute = Router();

employeeRoute.get('/admins', async (req, res) => {
  try {
    const AdminEmployees = await getAdminEmployees();
    if (!AdminEmployees.length) {
      res.status(204).json([]);
      return;
    }
    res.status(200).json(AdminEmployees);
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

employeeRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await getEmployee(parseInt(id) || 0);
    if (!employee) res.status(204).json({});
    res.status(200).json(employee);
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

employeeRoute.post(
  '/',
  requestValidator({ reqBodyValidator: CREATE_EMPLOYEE_REQUEST_BODY }),
  async (req, res) => {
    const { id } = req.params;
    try {
      const employee = await createEmployee(req.body);
      if (!employee) throw new Error('Unable to create the Employee');
      res.status(201).json(employee);
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message
      });
    }
  }
);

export default employeeRoute;
