// Assignment A

const form = document.querySelector(".installment-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // geting inputs values

  let totalPrice = document.querySelector("#totalPrice"),
    downPayment = document.querySelector("#downPayment"),
    rate = document.querySelector("#rate"),
    years = document.querySelector("#years"),
    output = document.querySelector(".monthly-payment-num"),
    monthsCount = 0,
    monthlyPrice = 0;

  let totalPriceValue = parseInt(totalPrice.value),
    downPaymentValue = parseInt(downPayment.value),
    rateValue = parseInt(rate.value),
    yearsValue = parseInt(years.value);

  totalPriceValue -= downPaymentValue;
  rateValue *= yearsValue;
  rateValue += 100;
  rateValue /= 100;
  totalPriceValue *= rateValue;
  monthsCount = yearsValue * 12;
  monthlyPrice = (totalPriceValue / monthsCount).toFixed(2);

  totalPrice.value = "";
  downPayment.value = "";
  rate.value = "";
  years.value = "";

  output.textContent = ` ${monthlyPrice} /month`;
});

// Assignment B

/*
 
const form2 = document.querySelector(".complex-installment-form");

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  // geting inputs values

  let totalPrice = document.querySelector("#assignment-b-totalPrice"),
    downPayment = document.querySelector("#assignment-b-downPayment"),
    monthlyPayments = document.querySelector("#assignment-b-monthly"),
    rate = document.querySelector("#assignment-b-rate"),
    yearsOutput = document.querySelector(".years-num"),
    ratePrice = 0,
    yearlyPrice = 0;

  let totalPriceValue = parseInt(totalPrice.value),
    downPaymentValue = parseInt(downPayment.value),
    monthlyPaymentsValue = parseInt(monthlyPayments.value),
    rateValue = parseInt(rate.value);

  console.log(totalPriceValue);
  console.log(downPaymentValue);
  console.log(monthlyPaymentsValue);
  console.log(rateValue);

  totalPriceValue -= downPaymentValue;
  console.log(totalPriceValue);
  yearlyPrice = monthlyPaymentsValue * 12;
  console.log(yearlyPrice);

  // ratePrice = (yearlyPrice * rate.value) / 100;
  // yearlyPrice += ratePrice;

  // yearsOutput.textContent = ` ${(totalPrice.value / yearlyPrice).toFixed(
  //   1
  // )} years`;

  // totalPrice.value = "";
  // downPayment.value = "";
  // monthlyPayments.value = "";
  // rate.value = "";
});

 */
