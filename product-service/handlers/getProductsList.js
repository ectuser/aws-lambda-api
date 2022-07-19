'use strict';
const fs = require('fs').promises;

module.exports = async () => {
  const data = await fs.readFile('./mocks/products.json');
  const products = JSON.parse(data);
  return {
    statusCode: 200,
    body: JSON.stringify(products),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
};
