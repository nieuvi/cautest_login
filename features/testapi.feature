Feature: Test API with product

    Scenario: Get all products
    Given The API server is running
    When I send a GET request to that API server
    Then I receive a 200 response