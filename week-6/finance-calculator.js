// Title: finance-calculator.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;

  static calculateFutureValue(monthlyPayment, rate, years) {
    // get number of months given years
    const months = years * this.MONTHS_IN_YEAR;
    // calculate interest rate
    const interestRate = 1 + rate / 100;
    // calculate current worth
    const presentValue = monthlyPayment * months;
    // calculate future value
    const futureValue = presentValue * Math.pow(interestRate, months);

    return futureValue.toFixed(2);
  }

  static convertToCurrency(field) {
    // create formatter for USD
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return currencyFormatter.format(field);
  }
}
