import { test, expect } from "@playwright/test";
import { listUsersRespSchema, type UserDetails } from "../schemas/reqres";
import { userData } from "../data/user";

test("Assignment 1", async ({ request }) => {
  const response = await request.get("/api/users?page=2", {
    headers: { "x-api-key": "reqres-free-v1" },
  });

  const responseBody = await response.json();
  expect(() => {
    listUsersRespSchema.parse(responseBody);
  }).not.toThrow();

  // Assert response "total_pages" equal to 2
  expect(responseBody.total_pages).toEqual(2);

  // Assert if the status code is equal to 200
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Assert if the user with id=10 has an email equal to byron.fields@reqres.in
  const targetUser = responseBody.data.find(
    (user: UserDetails) => user.id === userData.id
  );
  expect(targetUser.email).toEqual(userData.email);
});
