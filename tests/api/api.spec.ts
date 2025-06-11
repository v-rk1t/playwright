import { test, expect } from "@playwright/test";

test("Assignment 1", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2", {
    headers: { "x-api-key": "reqres-free-v1" },
  });
  const responseBody = await response.json();

  // Assert response "total_pages" equal to 2
  expect(responseBody.total_pages).toEqual(2);

  // Assert if the status code is equal to 200
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Assert if the user with id=10 has an email equal to byron.fields@reqres.in
  const targetUser = responseBody.data.find((user) => user.id === 10);
  expect(targetUser.email).toEqual("byron.fields@reqres.in");
});
