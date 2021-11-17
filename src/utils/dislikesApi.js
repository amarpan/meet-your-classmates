import tokenService from "./tokenService";

const BASE_URL = "/api/";

export function createDislike(id) {
  return fetch(`${BASE_URL}posts/${id}/dislikes`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Login to dislike something");
  });
}

export function removeDislike(id) {
  return fetch(`${BASE_URL}dislikes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Login to remove a dislike");
  });
}
