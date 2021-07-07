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
    ratePrice = 0,
    yearlyPrice = 0,
    monthlyPrice = 0;

  totalPrice.value -= downPayment.value;
  rate.value /= 100;
  yearlyPrice = totalPrice.value / years.value;
  ratePrice = yearlyPrice * rate.value;
  yearlyPrice += ratePrice;
  monthlyPrice = (yearlyPrice / 12).toFixed(2);

  totalPrice.value = "";
  downPayment.value = "";
  rate.value = "";
  years.value = "";

  output.textContent = ` ${monthlyPrice} /month`;
});

// Assignment B

const form2 = document.querySelector(".complex-installment-form");

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("submited");
  // geting inputs values

  let totalPrice = document.querySelector("#assignment-b-totalPrice"),
    downPayment = document.querySelector("#assignment-b-downPayment"),
    monthlyPayments = document.querySelector("#assignment-b-monthly"),
    rate = document.querySelector("#assignment-b-rate"),
    yearsOutput = document.querySelector(".years-num"),
    ratePrice = 0,
    yearlyPrice = 0;

  totalPrice.value -= downPayment.value;
  yearlyPrice = monthlyPayments.value * 12;
  ratePrice = (yearlyPrice * rate.value) / 100;
  yearlyPrice += ratePrice;
  yearsOutput.textContent = ` ${(totalPrice.value / yearlyPrice).toFixed(
    1
  )} years`;

  totalPrice.value = "";
  downPayment.value = "";
  monthlyPayments.value = "";
  rate.value = "";
});
