import { Api } from "../components/Api.js";

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_cohort_01",
  headers: {
    authorization: "eec28881-3af1-4bc7-8205-97cb48fed523",
  },
});
