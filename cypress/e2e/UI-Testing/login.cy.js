/// <reference types="cypress" />
import loginPage from "../../support/pages/login.page";

describe('login', () => {
    before(() => {
        cy.fixture("credentials").then((data)=>{
            globalThis.data = data
        })
    });
    it('Successfully login with valid data', () => {
        loginPage.launchUrl()
        loginPage.loginData({username: data.login.validDataSet.username, password: data.login.validDataSet.password})
        loginPage.verifyDashboard()
    });

    it('Failed login with invalid username', () => {
        loginPage.launchUrl()
        loginPage.loginData({username: data.login.invalidDataSet1.username, password: data.login.invalidDataSet1.password})
        loginPage.verifyInvalidCredentials()
    });

    it('Failed login with invalid password', () => {
        loginPage.launchUrl()
        loginPage.loginData({username: data.login.invalidDataSet2.username, password: data.login.invalidDataSet2.password})
        loginPage.verifyInvalidCredentials()
    });

    it('Failed login with empty username', () => {
        loginPage.launchUrl()
        loginPage.loginData({username: data.login.invalidDataSet3.username, password: data.login.invalidDataSet3.password})
        loginPage.verifyErrorMessage()
    });

    it('Failed login with empty password', () => {
        loginPage.launchUrl()
        loginPage.loginData({username: data.login.invalidDataSet4.username, password: data.login.invalidDataSet4.password})
        loginPage.verifyErrorMessage()
    });
});