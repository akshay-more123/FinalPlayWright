Feature: Ecommerce validations

  Scenario: placing the order
    Given a login with Ecommerce application with valid "akshaymore@gmail.com" and "More@1234"
    When search a product and add "ADIDAS ORIGINAL" to cart
    Then verify "ADIDAS ORIGINAL" is display in add to cart
    When Enter a valid details and placed the order
    Then verify place order is present in order history
