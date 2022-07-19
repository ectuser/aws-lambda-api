const fs = require('fs').promises;
const getProductsList = require('../handler').getProductsList;
const getProductsById = require('../handler').getProductsById;

describe('handler', () => {
  describe('getProductsList', () => {
    it('should return list of products', async () => {
      const data = [{ "id": "test 3", "test title": "test Smartphone", "price": 1000, "count": 10, "description": "test Description" }];
      const strData = JSON.stringify(data);
      jest.spyOn(fs, 'readFile').mockResolvedValue(strData);
  
      result = await getProductsList({});
  
      expect(result).toEqual({
        statusCode: 200,
        body: strData,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
    });
  });

  describe('getProductsById', () => {
    it('should return product by id', async () => {
      const data = [
        { "id": "test 3", "test title": "test Smartphone", "price": 1000, "count": 10, "description": "test Description" },
        { "id": "test 4", "test title": "test 4", "price": 4000, "count": 10, "description": "test Description" }
      ];
      const strData = JSON.stringify(data);
      jest.spyOn(fs, 'readFile').mockResolvedValue(strData);

      result = await getProductsById({pathParameters: {id: 'test 4'}});
  
      expect(result).toEqual({
        statusCode: 200,
        body: JSON.stringify({ "id": "test 4", "test title": "test 4", "price": 4000, "count": 10, "description": "test Description" }),
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
    });

    it('should return not found if product by id was not found', async () => {
      const data = [
        { "id": "test 3", "test title": "test Smartphone", "price": 1000, "count": 10, "description": "test Description" },
        { "id": "test 4", "test title": "test 4", "price": 4000, "count": 10, "description": "test Description" }
      ];
      const strData = JSON.stringify(data);
      jest.spyOn(fs, 'readFile').mockResolvedValue(strData);

      result = await getProductsById({pathParameters: {id: '5'}});
  
      expect(result).toEqual({
        statusCode: 404,
        body: 'Product not found',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
    });
  });
});
