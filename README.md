## FE URL:
https://d31vfpmw4lhe5l.cloudfront.net/

## API endpoints:

- /products - https://cvxt08pab8.execute-api.us-east-1.amazonaws.com/products
- /products/{id} - https://cvxt08pab8.execute-api.us-east-1.amazonaws.com/products/1

## What has been done:

- [x] Product-service serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct
- [x] The getProductsList OR getProductsById lambda function returns a correct response (POINT1)
- [x] The getProductsById AND getProductsList lambda functions return a correct response code (POINT2)
- [x] Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. AND POINT1 and POINT2 are done
- [x] Async/await is used in lambda functions
