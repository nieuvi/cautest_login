Feature: Test API with product

    Scenario: Get all products
        Given The API server is running
        When I send a GET request to that API server
        Then I receive a 200 response

    Scenario: Get a single product
        Given The API server is running --single
        When I send a GET request to "/1" endpoint --single
        Then I receive a 200 response --single
        And I receive a response body contain:
            | title | Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops |

    Scenario: Limit results
        Given The API server is running --limit
        When I send a GET request to "?limit=5" endpoint --limit
        Then I receive a response body containing 5 products

    Scenario: Add new product
        Given The API server is running --add 
        When I send a POST request to the API server --add
        Then I receive a response body having a added product with id 21 and contains: --add
            | title | test product |
    
    Scenario: Update a product
        Given The API server is running --update 
        When I send a PUT request to "/7" endpoint --update
        Then I receive a response body having a updated product with id 7 and contains: --update
            | title | test product | 