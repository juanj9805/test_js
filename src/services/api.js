import * as Config from "../config/config.js";

const baseUrl = Config.baseUrl;

export const sendData = async function (endpoint, data) {
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  // json-server may return empty body
  const text = await response.text();
  return text ? JSON.parse(text) : null;
};

// export const sendData = async function (endpoint, data) {
//   try {
//     const response = await fetch(`${baseUrl}/${endpoint}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   } catch (err) {}
// };

export const getData = async function (endpoint) {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} and ${data.status}`);

    return data;
    // return response.json()
  } catch (err) {
    alert(err);
  }
};

export const getDataById = async function (endpoint, id) {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}/${id}`);
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} and ${data.status}`);

    return data;
    // return response.json()
  } catch (err) {
    alert(err);
  }
};

export const putData = async function (endpoint, data) {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`${data.message} and ${data.status}`);

    return response.json();
    // return response.json()
  } catch (err) {
    alert(err);
  }
};
