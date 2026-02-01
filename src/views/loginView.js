export function getFormData() {
  return {
    nameInput: document.querySelector("#nameInput").value.trim(),
    emailInput: document.querySelector("#emailInput").value.trim(),
    rolSelect: document.querySelector("#rolSelect").value.trim(),
  };
}

export const submitForm = function (handler) {
  const form = document.querySelector("#form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = getFormData();
    console.log(data);

    handler(data);
  });
};
