const baseUrl = `http://localhost:7070`;
const usersUrl = `${baseUrl}/users`;
const signinUrl = `${usersUrl}/register`;
const loginUrl = `${usersUrl}/login`;

async function signup() {
  checkValues();
}
const checkValues = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let age = document.getElementById("age").value;
  let cnf_pass = document.getElementById("cnfpass").value;

  let obj = {
    name: name,
    email: email,
    password: password,
    age: age,
  };
  password == cnf_pass ? Postusers(obj) : alert("Check Your Password");
};

const Postusers = async (obj) => {
  try {
    const res = await fetch(signinUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (res.ok) {
      alert("Sign Up Successfully");
    } else {
      alert("Not registered");
    }
  } catch (error) {
    console.log(`Error in Posting`);
  }
};

async function login() {
  check_login_input_values();
}

let check_login_input_values = () => {
  let login_email = document.getElementById("login_email").value;
  let login_pass = document.getElementById("login_pass").value;

  let login_obj = {
    email: login_email,
    password: login_pass,
  };
  console.log(login_obj);
  login_user(login_obj);
};

let login_user = async (obj) => {
  let res = await fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  if (res.ok) {
    let token = await res.json();
    console.log(token)
    localStorage.setItem("accessToken", token.token);
    if (token.token) {
      window.location.href = "index.html";
    }
  }
};
