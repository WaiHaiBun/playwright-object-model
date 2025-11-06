import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();
const apiKey = process.env.API_KEY || "";

test("API DELETE Request", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/215");
  expect(response.status()).toBe(204);
});

test("API PUT Request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/215", {
    headers: {
      "x-api-key": apiKey,
    },
    data: {
      name: "Albus",
      job: "Bunny",
    },
  });

  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("Bunny");

  console.log(await response.json());

  //   { name: 'Albus', job: 'Bunny', updatedAt: '2025-11-06T06:07:42.757Z' }
});

test("API POST Request", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/users", {
    headers: {
      "x-api-key": apiKey,
    },
    data: {
      name: "Albus",
      job: "Teacher",
    },
  });

  expect(response.status()).toBe(201);

  const text = await response.text();
  expect(text).toContain("Albus");

  console.log(await response.json());
  //
  //   name: 'Albus',
  //   job: 'Teacher',
  //   id: '181',
  //   createdAt: '2025-11-06T05:55:08.402Z'
  //
});

test("API GET Request", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/1", {
    headers: {
      "x-api-key": apiKey,
    },
  });
  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("George");

  console.log(await response.json());
});
