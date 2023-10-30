import { FastifyInstance } from "fastify";
import deleteEmployeesId from "./delete-employees-id";
import getEmployees from "./get-employees";
import getEmployeesId from "./get-employees-id";
import getEmployeeReport from './get-employees-report';

import getTribe from "./get-tribe-id";
import getTribes from "./get-tribes";
import postEmployees from "./post-employees";
import putEmployee from "./put-update-employee";

export default async function (fastify: FastifyInstance) {
  fastify.route(getEmployees(fastify));
  fastify.route(getEmployeesId(fastify));
  fastify.route(deleteEmployeesId(fastify));
  fastify.route(postEmployees(fastify));
  fastify.route(getTribes(fastify));
  fastify.route(getTribe(fastify));
  fastify.route(getEmployeeReport(fastify));
  fastify.route(putEmployee(fastify));


}
