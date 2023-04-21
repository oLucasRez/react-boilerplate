export function makeAPIURL(path: string) {
  const apiURL = `${process.env.API_URL}${path}`;

  return apiURL;
}
