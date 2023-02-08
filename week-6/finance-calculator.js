// Title: finance-calculator.js
// Author: ngi bujri
// Date: 7 february 2023
// Description: app demonstrating data validation and complex class types

export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;

  // function to calculate future value given monthly payment, interest, and number of years
  static calculateFutureValue(monthlyPayment, rate, years) {
    // calculate number of months
    const months = years * this.MONTHS_IN_YEAR;
    const interestRate = 1 + rate / 100;
    const presentValue = monthlyPayment * months;
    const futureValue = presentValue * Math.pow(interestRate, months);

    return futureValue.toFixed(2);
  }

  static convertToCurrency(field) {
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return currencyFormatter.format(field);
  }
}
