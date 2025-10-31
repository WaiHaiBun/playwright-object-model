import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";

test("test", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.goToLoginPage();
  await Login.login("tomsmith", "SuperSecretPassword!");

  //   await page.goto("https://the-internet.herokuapp.com/login");
  //   await page.getByRole("textbox", { name: "Username" }).click();
  //   await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");
  //   await page.getByRole("textbox", { name: "Password" }).click();
  //   await page
  //     .getByRole("textbox", { name: "Password" })
  //     .fill("SuperSecretPassword!");
  //   await page.getByRole("button", { name: " Login" }).click();
});
