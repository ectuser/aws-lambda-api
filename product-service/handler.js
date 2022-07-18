'use strict';
const fs = require('fs').promises;

module.exports.getProductsList = async (event) => {
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

module.exports.getProductsById = async (event) => {
  const data = await fs.readFile('./mocks/products.json');
  const products = JSON.parse(data);
  const product = products.find((el) => el.id === event.pathParameters.id);
  if (product) {
    return {
      statusCode: 200,
      body: JSON.stringify(product),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
  } else {
    return {
      statusCode: 404,
      body: 'Product not found',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
  }
};
