/*
  title: http-client.js
  author: ngi bujri
  date: february 22 2023
  description: book app demonstrating api calls
*/

export class HttpClient {
  async get(url, params = "") {
    url = new URL(url);
    url.search = new URLSearchParams(params);
    const res = await fetch(url.toString(), {
      method: "GET",
    });

    return res.json();
  }
}
