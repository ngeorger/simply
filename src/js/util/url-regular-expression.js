export default (url) =>
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*(?:\+?[\/\w \.-]*)*)\/?$/.test(
    url
  ); //eslint-disable-line
