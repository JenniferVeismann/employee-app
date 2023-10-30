import { FastifyInstance, RouteOptions } from "fastify";
import * as employeesModel from "../models/employees.model";
import { EmployeeBodyType, IdParamsSchema, IdParamsType } from "./schemas";

export default function (fastify: FastifyInstance): RouteOptions {
  return {
    method: "PUT",
    url: "/api/employees/:id",
    schema: {
        params: IdParamsSchema,
      },
      
    handler: async (request, reply) => {
        const params = request.params as IdParamsType;
        const employeeBody = request.body as EmployeeBodyType;

      try {
        const id = await employeesModel.updateEmployee(fastify, params.id, employeeBody);
        reply.code(201).send({id});
      } catch (error) {
        reply.code(500).send({ error: (error as Error).message });
      }
    },
  };
}