//login
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//event listener for sign up form with php
const sign_up_form = document.querySelector("#sign-up-form");
sign_up_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const name = document.querySelector("#name").value;
    const data = {
        email,
        password,
        name,
    };
    fetch("signup.php", {
        method: "POST",
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data);
            window.location.href = "index.php";
        }
        }).catch((err) => {
        console.log(err);
        }
        );

    }
);

//event listener for sign in form with php
const sign_in_form = document.querySelector("#sign-in-form");
sign_in_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const data = {
        email,
        password,
    };
    fetch("signin.php", {
        method: "POST",
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data);
            window.location.href = "index.php";
        }
        }).catch((err) => {
        console.log(err);
        }
        );

    }
);

