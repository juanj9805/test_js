import * as LoginView from "./../views/loginView.js";
import * as Api from "../services/api.js";

const login = async function (data) {
  const users = await Api.getData("users");

  const found = users.find(
    (user) =>
      user.name === data.nameInput &&
      user.email === data.emailInput &&
      user.rol === data.rolSelect,
  );

  if (!found) return;

  if (found.rol === "admin") {
    window.location.href = "admin.html";
  }

  if (found.rol === "user") {
    window.location.href = "index.html";
  }
};

login(LoginView.submitForm(login));
