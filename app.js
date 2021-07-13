// Assignment A

const form = document.querySelector(".installment-form");

const calculateMonthlyPayments = (totalPrice, downPayment, rate, years) => {
  parseInt(totalPrice);
  parseInt(downPayment);
  parseInt(rate);
  parseInt(years);

  totalPrice -= downPayment;
  rate *= years;
  rate += 100;
  rate /= 100;
  totalPrice *= rate;
  const monthsCount = years * 12,
    monthlyPrice = (totalPrice / monthsCount).toFixed(2);

  return monthlyPrice;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // geting inputs values

  let totalPrice = document.querySelector("#totalPrice"),
    downPayment = document.querySelector("#downPayment"),
    rate = document.querySelector("#rate"),
    years = document.querySelector("#years"),
    output = document.querySelector(".monthly-payment-num");

  output.textContent = ` ${calculateMonthlyPayments(
    totalPrice.value,
    downPayment.value,
    rate.value,
    years.value
  )} /month`;

  totalPrice.value = "";
  downPayment.value = "";
  rate.value = "";
  years.value = "";
});

// Assignment B

const form2 = document.querySelector(".complex-installment-form");

const calculateInstallmentYears = (
  totalPrice,
  downPayment,
  monthlyPayments,
  rate
) => {
  totalPrice = parseInt(totalPrice);
  downPayment = parseInt(downPayment);
  monthlyPayments = parseInt(monthlyPayments);
  rate = parseInt(rate);

  totalPrice -= downPayment;
  rate += 100;
  rate /= 100;
  totalPrice *= rate;
  let yearlyPrice = totalPrice / monthlyPayments;

  return ` ${parseFloat((yearlyPrice /= 12)).toPrecision(2)} years`;
};

form2.addEventListener("submit", (e) => {
  e.preventDefault();

  let totalPrice = document.querySelector("#assignment-b-totalPrice"),
    downPayment = document.querySelector("#assignment-b-downPayment"),
    monthlyPayments = document.querySelector("#assignment-b-monthly"),
    rate = document.querySelector("#assignment-b-rate"),
    yearsOutput = document.querySelector(".years-num");

  yearsOutput.textContent = calculateInstallmentYears(
    totalPrice.value,
    downPayment.value,
    monthlyPayments.value,
    rate.value
  );

  totalPrice.value = "";
  downPayment.value = "";
  monthlyPayments.value = "";
  rate.value = "";
});
