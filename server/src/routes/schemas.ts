import { Static, Type } from "@sinclair/typebox";

export const EmployeeBodySchema = Type.Object({
  name: Type.String(),
  title: Type.String(),
  tribe_id: Type.Integer(),
});

export const TribeSchema = Type.Object({
  id: Type.Integer(),
  name: Type.String(),
  department: Type.String()
});

export const EmployeeRequestSchema = Type.Object({
  name: Type.String(),
  title: Type.String(),
  tribe: TribeSchema,
});

export const IdParamsSchema = Type.Object({
  id: Type.Integer(),
});

export const searchQuerySchema = Type.Object({
  name: Type.Optional(Type.String()),
  title: Type.Optional(Type.String()),
  tribe: Type.Optional(Type.String()),
});

export type searchQueryType = Static<typeof searchQuerySchema>;
export type EmployeeBodyType = Static<typeof EmployeeBodySchema>;
export type IdParamsType = Static<typeof IdParamsSchema>;
export type EmployeeRequestSchema = Static<typeof EmployeeRequestSchema>;