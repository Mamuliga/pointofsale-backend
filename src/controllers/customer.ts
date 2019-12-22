import { Router } from "express";
import {
  getCustomer,
  createCustomer,
  getAllCustomers,
  findByIdAndUpdate,
  deleteCustomer
} from "../models/Customer";
import {Customer} from "./apiShapes/Customer"
import { CREATE_EMPLOYEE_REQUEST_BODY ,UPDATE_EMPLOYEE_REQUEST_BODY,DELETE_EMPLOYEE_REQUEST_BODY} from "./validators/employee";
import requestValidator from "../middleware/requestValidator";

const employeeRoute = Router();

employeeRoute.get("/", async (req, res) => {
  try {
    const employees = await getAllCustomers();
    if (!employees.length) res.status(204).json([]);
    res.status(200).json(employees.map((employee) => Customer(employee)));
  } catch (ex) {
    console.log(ex);
    res.status(res.statusCode || 400).json({
      error: ex.message
    });
  }
});

employeeRoute.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await getCustomer(parseInt(id) || 0);
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
  "/",
  requestValidator({ reqBodyValidator: CREATE_EMPLOYEE_REQUEST_BODY }),
  async (req, res) => {
    const { id } = req.params;
    try {
      const employee = await createCustomer(req.body);
      if (!employee) throw new Error("Unable to create the Employee");
      res.status(201).json(employee);
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message
      });
    }
  }
);



employeeRoute.put("/:id",async (req,res)=>{
  requestValidator({ reqBodyValidator: UPDATE_EMPLOYEE_REQUEST_BODY });
  const { id } = req.params;
  try {
  const employee = await findByIdAndUpdate(parseInt(id),{}) ;
  if (!employee) throw new Error("Unable to update the Employee");
      res.status(201).json(employee);
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message
      });
    }
})

employeeRoute.delete("/:id",async (req,res)=>{
  requestValidator({ reqBodyValidator: DELETE_EMPLOYEE_REQUEST_BODY });
  const { id } = req.params;
  try {
  const employee = await deleteCustomer(parseInt(id)) ;
  if (!employee) throw new Error("Unable to delete the Employee");
      res.status(201).json(employee);
    } catch (ex) {
      console.log(ex);
      res.status(res.statusCode || 400).json({
        error: ex.message
      });
    }
})

export default employeeRoute;
