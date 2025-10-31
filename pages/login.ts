import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  //   public page;
  //   public username_textbox;
  //   public password_textbox;
  //   public login_button;

  readonly page: Page;
  readonly username_textbox: Locator;
  readonly password_textbox: Locator;
  readonly login_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username_textbox = page.getByRole("textbox", { name: "Username" });
    this.password_textbox = page.getByRole("textbox", { name: "Password" });
    this.login_button = page.getByRole("button", { name: " Login" });
  }
  async goToLoginPage() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
  async login(username: any, password: any) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}
