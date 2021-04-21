describe('TreeView', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('items are selectable', () => {
    cy.get('[data-cy=tree-item]')
      .click()
      .should('match', '[data-cy-is-selected=true]');
  });

  it("items are expandable", () => {
    cy.get("[data-cy=tree-item] [data-cy=expand]").click();
    cy.get("[data-cy=tree-item-children] [data-cy=tree-item]")
      .its("length").should("eq", 20);
  });
})