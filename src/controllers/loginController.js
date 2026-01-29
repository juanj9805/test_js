import * as LoginView from "./../views/loginView.js";
import * as Model from "./../models/model.js";

const login = async function (data) {
  const users = await Model.getData("users");

  const found = users.find(
    (user) =>
      user.name === data.nameInput &&
      user.email === data.emailInput &&
      user.rol === data.rolSelect,
  );
  console.log(found);

  if (!found) return;
  window.location.href = "admin.html";
};

login(LoginView.submitForm(login));
