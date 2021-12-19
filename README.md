# E-commerce UI (excercise)

In this excercise i had created a E-commerce product page with a functional cart, buttons, and image product view.


---DISCLAIMER---
The purpose of this excercise is not interact with the backend or make a funtional Auth. Just make a funtional UI with react.

# Coding process
## 1. Making the skeleton of the UI

The first step that i did was understand the differents components from the design mockups, and how the interact with each other.
For the product page i used grid and divided the page in two columns, one for the imageviewer component, and the other for the product description.
for the header it was very simple added the Logo image, added the anchors tags for links, then the cart it had to be a component, and the profile image with an img tag.


## 2. Styles

For styles i used SASS preprocessor, and made a styles file for every component in particular.

## 3. Logic
The logic it's based on the mockups interpretations, 
for example the Cart component when it's clicked open the cart detail and show the products added to the cart.
The button located at the bottom of the description of the product "AddtoCart", when it's clicked add the products according to the quantity selected on the counter besides of it.
The comunication it's by the react Provider desing pattern where i had a context component who provide global states, for component comunication.


# How to start the app in your local enviroment

You need to clone this repo

### `git clone https://github.com/LeoCaprile/e-commerce-UI-.git`

then inside the folder where you clone it.

### `npm start`

and it's done.