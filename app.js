const contactForm = document.getElementById("contact-form");
const employerContact = document.getElementById("employer-contact");
const noData = document.getElementById("no-data");

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const mobileNumber = document.getElementById("mobile-no");
const emailId = document.getElementById("email");
const dateOfBirth = document.getElementById("date");
const address = document.getElementById("address");

const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");

let employeesArray = [];

const render = () => {
  employerContact.innerHTML = "";
  if (employeesArray.length > 0) {
    noData.style.display = "none";
    employerContact.style.display = "block";
    for (let detail of employeesArray) {
      let employerDetail = `
    <div class="emp-container">
              <div>
                <div class="emp emp-name">
                  <i class="fa-solid fa-user"></i>
                  <h2>${detail.firstName}"+"${detail.lastName}</h2>
                </div>
  
                <div class="emp-contact">
                  <div class="emp emp-number">
                    <i class="fa-solid fa-phone"></i>
                    <p>${detail.mobileNumber}</p>
                  </div>
                  <div class="emp emp-email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>${detail.emailId}</p>
                  </div>
                </div>
              </div>
              <div class="contact-img">
                <img
                  src="./images/avatar.png"
                  alt="contact-img"
                  class="img-con"
                />
              </div>
            </div>
  
            <div class="emp emp-dob">
              <i class="fa-regular fa-calendar-days"></i>
              <p>${detail.dateOfBirth}</p>
            </div>
  
            <div class="emp emp-address">
              <i class="fa-solid fa-location-dot"></i>
              <p>${detail.address}</p>
            </div>
  
            <div class="buttons">
              <button class="btn edit-btn">EDIT</button>
              <button class="btn delete-btn" id="delete-btn">DELETE</button>
            </div>`;

      employerContact.innerHTML += employerDetail;
    }
  } else {
    noData.style.display = "block";
    employerContact.style.display = "none";
  }
};
render();
// if (employeesArray.length > 0) {
  deleteBtn.addEventListener("click", () => {
    console.log("shsh")
    const newEmployeesArray = employeesArray.filter((d) => d.id !== detail.id);
    console.log(newEmployeesArray);
  });
// }

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    firstName.value == "" ||
    lastName.value == "" ||
    mobileNumber.value == "" ||
    emailId.value == "" ||
    dateOfBirth.value == "" ||
    address.value == ""
  ) {
    alert("input field is empty");
  } else {
    employeesArray.push({
      id: employeesArray.length + 1,
      firstName: firstName.value,
      lastName: lastName.value,
      mobileNumber: mobileNumber.value,
      emailId: emailId.value,
      dateOfBirth: dateOfBirth.value,
      address: address.value,
    });

    render();

    firstName.value = "";
    lastName.value = "";
    mobileNumber.value = "";
    emailId.value = "";
    dateOfBirth.value = "";
    address.value = "";
  }
});
