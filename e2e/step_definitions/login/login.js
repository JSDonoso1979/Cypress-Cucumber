import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given("Im on the login page", () => {
    cy.visit("https://www.saucedemo.com")
})

When("I type a registered my usern name and password", () => {
    cy.get('[data-test="username"]').clear().type("standard_user")
    cy.get('[data-test="password"]').clear().type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
}) 

Then("I have a successfull login", () => {
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
})