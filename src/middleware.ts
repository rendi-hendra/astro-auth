// src/middleware/logger.ts
import { type MiddlewareHandler } from "astro";
import { parse } from "cookie";
import axios from "axios";

// http://localhost:3000/api/users/current

export const onRequest: MiddlewareHandler = async (
  { request, redirect },
  next,
) => {
  const response = await next();
  return response;
};
