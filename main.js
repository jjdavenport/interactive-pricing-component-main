const slider = document.getElementById("slider");
const toggleSwitch = document.getElementById("toggle-switch");
const pageViews = document.getElementById("page-views");
const price = document.getElementById("price");
const month = document.getElementById("month");
let checked = false;

toggleSwitch.addEventListener("click", () => {
  checked = toggleSwitch.checked;
  monthYear(checked);
  sliderDisplay();
  priceDisplay();
});

const views = ["10K", "50K", "100K", "500K", "1M"];
const priceMonthly = [8, 12, 16, 24, 36];
const priceYearly = [6, 9, 12, 18, 27];

function monthYear(checked) {
  if (checked === true) {
    month.innerText = "Year";
  } else {
    month.innerText = "Month";
  }
}

slider.addEventListener("input", () => {
  sliderDisplay();
  priceDisplay();
});

function sliderDisplay() {
  const sliderVal = slider.value;
  const sliderRange = Math.floor(sliderVal / 25);
  const sliderText = views[sliderRange];
  pageViews.textContent = sliderText;
}

sliderDisplay();

function priceDisplay() {
  const sliderVal = slider.value;
  const sliderRange = Math.floor(sliderVal / 25);
  sliderText = priceMonthly[sliderRange];
  price.innerText = sliderText;
  if (checked === true) {
    let sliderText = priceYearly[sliderRange];
    price.innerText = sliderText;
  }
}

priceDisplay();
