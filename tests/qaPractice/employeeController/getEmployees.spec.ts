import { request, test, expect } from "@playwright/test";
import { z } from "zod";

const getEmployeesSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string(),
  email: z.string(),
});

const getEmployeeSchemaList = z.array(getEmployeesSchema);

test("GET /v1/employees", async ({ request }) => {
  const response = await request.get("http://localhost:8887/api/v1/employees", {
    headers: {
      accept: "*/*",
    },
  });

  const result = getEmployeeSchemaList.safeParse(await response.json());

  expect(response.status()).toBe(200);

  if (!result.success) {
    console.error("Schema Validation Error: ", result.error.message.toString());
  }

  expect(result.success).toBe(true);
  console.log(result);
});
