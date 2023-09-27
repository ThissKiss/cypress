describe('автотесты формы логина', function () {
  it('Позитивный кейс авторизации верного логина и пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Авторизация прошла успешно').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.wait(3000);
   })

  it('автотест на проверку логики восстановления пароля:', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.wait(3000);
   })

it('негативный кейс авторизации верного логина и  неверного пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLosdsa');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.wait(3000);
 })

it('негативный кейс авторизации не верного логина и верного пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('gern@dolniv.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.wait(3000);
 })

it('негативный кейс авторизации не верного логина и верного пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.wait(3000);
 })

it('Напиши проверку на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.contains('Такого логина или пароля нет').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.wait(3000);
  });
});

