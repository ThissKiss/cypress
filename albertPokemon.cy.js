describe('покупки покемона', function () {
  it('Позитивный кейс авторизации  с верными данными покупки', function () {
    cy.visit('https://pokemonbattle.me/shop');
    cy.get(':nth-child(1) > .auth__input').type('www.altra007@mail.ru');
    cy.get('#password').type('albanaH090');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get(':nth-child(4) > .shop__button').click();
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2200000000000012');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1124');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('TEST');
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    cy.contains('Покупка прошла успешно').should('be.visible');
    cy.get('.payment__adv').click();
    cy.wait(3000);
      })
  it('Позитивный кейс авторизации  с отменой покупки', function () {
    cy.visit('https://pokemonbattle.me/shop');
    cy.get(':nth-child(1) > .auth__input').type('www.altra007@mail.ru');
    cy.get('#password').type('albanaH090');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get(':nth-child(10) > .shop__button').click();
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4444000000001111');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1124');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('TEST');
    cy.get('.pay-btn').click();
    cy.get('.payment__defolt-decline').click();
    cy.wait(3000);
 })
    it('автотест на потоврный код', function () {
    cy.visit('https://pokemonbattle.me/shop');
    cy.get(':nth-child(1) > .auth__input').type('www.altra007@mail.ru');
    cy.get('#password').type('albanaH090');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get(':nth-child(10) > .shop__button').click();
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2200000000000012');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1124');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('TEST');
    cy.get('.pay-btn').click();
    cy.wait(46000);
    cy.get('.payment__span-defolt').click();
    cy.get('.payment__defolt-decline').click();
    cy.wait(3000);
  });
});
