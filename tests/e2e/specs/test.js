// https://docs.cypress.io/api/table-of-contents

describe("Currency converter", () => {
  before(() => {
    cy.visit("/");
  });

  it("Currency is converting from one to another", () => {
    cy.get("[class*=EbCurrencyConverterWidget_result_]").should((element) => {
      const resultValue = parseFloat(element.text().split(" ")[2]);
      expect(resultValue, "Result must be number").to.not.be.NaN;
    });
    cy.get("[class*=EbCurrencyConverterWidget_rate_] > span").should(
      "not.be.NaN"
    );
  });

  it("User can't input values with >2 decimals", () => {
    cy.get("input[class*=EbCurrencyConverterWidget_input]")
      .invoke("val", "25.56")
      .trigger("input");
    cy.get("input[class*=EbCurrencyConverterWidget_input]")
      .invoke("val", "25.564")
      .trigger("input");
    cy.get("input[class*=EbCurrencyConverterWidget_input]")
      .invoke("val")
      .should("eq", "25.56");
  });

  it("On wrong currency value error is shown", () => {
    cy.get("[class*=EbCurrencyConverterWidget_form] > :nth-child(2)")
      .invoke("val", "KPW")
      .trigger("change");

    cy.get("[class*=EbCurrencyConverterWidget_rate_] > span").contains("-");
    cy.get("[class*=EbCurrencyConverterWidget_error_]").contains(
      "One of currencies not found"
    );
  });
});
