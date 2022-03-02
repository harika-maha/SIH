var hospitals = [
  {
    name: "Pristyn Care",
    emergencyBeds: 80,
    generalBeds: 100,
  },
  {
    name: "Apollo",
    emergencyBeds: 50,
    generalBeds: 50,
  },
];

const table = document.querySelector("table");
const eBedsInput = document.querySelector(".EBeds input");
const gBedsInput = document.querySelector(".GBeds input");

const updateButton = document.querySelector(".update button");

//To be performed for all the hospitals:

updateButton.addEventListener("click", function () {
  const eIn = eBedsInput.value;
  const gIn = gBedsInput.value;
  if ((eIn || gIn) && eIn >= 0 && gIn >= 0) {
    hospitals[0].emergencyBeds = Number(eIn);
    hospitals[0].generalBeds = Number(gIn);
    document.querySelector(".right-side .total-em p").textContent =
      hospitals[0].emergencyBeds;
    document.querySelector(".right-side .total-gen p").textContent =
      hospitals[0].generalBeds;
    document.querySelector(".right-side .total-total p").textContent =
      Number(eIn) + Number(gIn);
  } else {
    alert("No Change has been made");
  }
  eBedsInput.value = gBedsInput.value = "";
});
