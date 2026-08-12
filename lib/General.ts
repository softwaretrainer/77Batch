//To Provide all re-usable functions / methods related to the entire project
import { global } from "../lib/Global";
export class general extends global {
    //user defined functions/ methods
async openApplication(){
  await this.page.goto(this.url);
  console.log("Application is opened successfully");
}
async login(){
  await this.page.locator(this.textbox_loginname).fill(this.username);
  await this.page.locator(this.textbox_password).fill(this.password);
  await this.page.locator(this.button_login).click();
  console.log("Login is done successfully");
}
async logout(){
  await this.page.locator(this.link_logout).click();
  console.log("Logout is done successfully");
}
async addEmployee(){
  let frame = this.page.frameLocator(this.frame_empInfo);
  await frame.locator(this.button_add).click();
  await frame.locator(this.textbox_firstname).fill(this.employeefirstname);
  await frame.locator(this.textbox_lastname).fill(this.employeelastname);
  await frame.locator(this.button_save).click();
  console.log("Employee is added successfully");
}
async waitStmt(){
  await this.page.waitForTimeout(3000);
  console.log("Waitied for 3 seconds ");
}
}