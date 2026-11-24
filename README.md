# DCIT26 - Laboratory Exercise 3: React Props and Component Communication

Name: James Tamayo  
Project: CvSU Mini Store (Mini Product Catalog)  

## Guide Questions

### 1. What is the difference between props and state?
Props are values sent from a parent component down to a child component, and the child can only read them. State is data that belongs to the component itself and can change while you use the app, like when the cart count goes up after clicking a button.

### 2. Why can a child component not modify the props it receives?
React passes data in one direction, from parent to child, so props are read-only. If a child component could change its own props, it would mess up the parent's data and make bugs way harder to find.

### 3. How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?
Even though props only go downward, we can pass a function from App down to ProductCard. When the Add to Cart button is clicked, ProductCard calls that function and sends back the product title, which lets App know what was clicked and update the cart message.

### 4. Why is the key prop required when rendering a list with .map()? What could happen if it is missing or duplicated?
React uses the key prop to give each card a unique ID so it can keep track of which item changed, got added, or was removed. If keys are missing or duplicated, React can get confused when updating the screen and mix up the cards.

### 5. What does the children prop allow you to do that a normal prop does not?
Normal props only let you pass values inside attributes like title or price, while children lets you put actual HTML or JSX tags directly inside the opening and closing ProductCard tags. That made it easy to add custom "New" or "Sale" badges to specific cards without changing the main card code.
