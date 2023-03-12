const message = function () {
  const name = document.querySelector("#username");
  const password = document.querySelector("#password");
  const emailField = document.querySelector("#email-field");
  const genderMale = document.querySelector("#male");
  const genderFemale = document.querySelector("#female");
  const phoneNum = document.querySelector("#phone");
  const success = document.querySelector("#success");
  const caution = document.querySelector("#caution");

  if (name.value === "" || emailField.value === "" || password.value === "") {
    caution.style.display = "block";
  } else {
    setTimeout(() => {
      name.value = "";
      emailField.value = "";
      password.value = "";
      genderMale.value = "";
      genderFemale.value = "";
      phoneNum.value = "";
    }, 6000);

    success.style.display = "block";
  }

  setTimeout(() => {
    success.style.display = "none";
    danger.style.display = "none";
  }, 5000);
};
