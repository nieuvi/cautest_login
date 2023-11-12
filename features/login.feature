Feature: Cautest Login

#Verify logic login
    # Scenario: Verify that the user logins successfully when entering valid email and valid password
    #     Given User enters valid email and valid password
    #     When User clicks on the "Sign in" button
    #     Then User should be redirected to the dashboard
    #         | Welcome to |

    # Scenario: Verify that user logins unsuccessfully when entering valid email and invalid password
    #     Given User enters valid email and invalid password
    #     When User clicks on the "Sign in" button --password
    #     Then User should see an error message --password
    #         | Your login attempt was not successful, please try again. |

    # Scenario: Verify that user logins unsuccessfully when entering invalid email and valid password
    #     Given User enters invalid email and valid password
    #     When User clicks on the "Sign in" button --username
    #     Then User should see an error message --username
    #         | Your login attempt was not successful, please try again. |

    # Scenario: Verify that user logins unsuccessfully when entering invalid email and invalid password
    #     Given User enters invalid email and invalid password
    #     When User clicks on the "Sign in" button --invalid
    #     Then User should see an error message --invalid
    #         | Your login attempt was not successful, please try again. |

# Verify validation
    # Scenario: Verify that user logins unsuccessfully when leaving the username blank
    #     Given User enters valid password
    #     Then User should see an error message under username field --username blank
    #         | Please fill out this field. |

    # Scenario: Verify that user logins unsuccessfully when leaving the password blank
    #     Given User enters valid email
    #     When User clicks on the "Sign in" button --password blank
    #     Then User should see an error message --password blank
    #         | Your login attempt was not successful, please try again. |

    # Scenario: Verify that the error validation is displayed when entering username with wrong email format
    #     Given User enters email with wrong format in username field
    #     Then User should see an error message under username field
    #         | Please enter your email address |

# Verify "Forgotten Password?" hyperlink
    Scenario: Verify that the "Forgotten Password?" hyperlink is clickable
        Given User enters valid email --hyperlink
        When User clicks on the "Forgotten Password?" hyperlink
        Then The "Forgotten Password" form should be displayed

# Verify "Sign up" hyperlink
    Scenario: Verify that the user can access the organisation form to sign up
        Given User clicks on the "Sign up" hyperlink --organisation
        When User chooses the "Organisation" option
        Then The "Organisation" form should be displayed
    
    # Scenario: Verify that the user can access the individual form to sign up
    #     Given User clicks on the "Sign up" hyperlink --individual
    #     When User chooses the "Individual" option
    #     Then The "Individual" form should be displayed