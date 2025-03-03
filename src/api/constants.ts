const api = "https://kmlt-back.vercel.app";

export const API_ROUTES = {
  SITES: `${api}/sites`,
  TESTS: `${api}/tests`,
  TEST: (id: string) => `${api}/tests/${id}`,
};
