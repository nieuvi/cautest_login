Feature: Test API for cart

    # Scenario: Get all carts
    #     Given The API server is running --all carts
    #     When I send a GET request to the API server --all carts
    #     Then I receive a 200 response --all carts

    # Scenario: Get a single cart
    #     Given The API server is running --single cart
    #     When I send a GET request to "/5" endpoint --single cart
    #     Then I receive a response body with id 5 --single cart

    # Scenario: Limit results
    #     Given The API server is running --limit carts
    #     When I send a GET request to "?limit=5" endpoint --limit carts
    #     Then I receive a response with 5 carts --limit carts

    # Scenario: Sort results descrease
    #     Given The API server is running --sort carts
    #     When I send a GET request to "?sort=desc" endpoint --sort carts
    #     Then I receive a response body with id 7 at first --sort carts

    # Scenario: Get carts in a date range
    #     Given The API server is running --date range
    #     When I send a GET request to "?startdate=2020-02-25&enddate=2020-03-01" endpoint --date range
    #     Then I receive a response body in date range --date range

    # Scenario: Get user cart
    #     Given The API server is running --user cart
    #     When I send a GET request to "/user/2" endpoint --user cart
    #     Then I receive a response body with userid 2 --user cart

    # Scenario: Add new cart
    #     Given The API server is running --add cart
    #     When I send a POST request to that server --add cart
    #     Then I receive a 200 response --add cart
    #     And I receive a new cart in response body --add cart
        
    Scenario: Update a cart
        Given The API server is running --update cart
        When I send a PUT request to "/7" endpoint --update cart
        Then I receive a 200 response --update cart
        And I receive a updated cart --update cart