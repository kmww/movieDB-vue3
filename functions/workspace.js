const axios = require("axios");
const { API_KEY } = process.env;

exports.handler = async function (event) {
  const payload = JSON.parse(event.body);
  const { title, year, i, id } = payload;
  const url = id
    ? `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&y=${year}&page=${i}`;

  const { data } = await axios.get(url);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
