# Kipsu Code Challenge

## Instructions
To run this program simply navigate to the directory in terminal.
first `npm install` all dependencies.
then run `npm start`
the server will be hosted at http://localhost:8080/

## Design Decisions
1. This project was built with ES6, this was both due to the usefulness of arrow functions
(maintaining the context of 'this') as well as import. I felt that ES6 import was best for handling
the data that was supplied. this way I could directly interact with the infromation without making new variables
and making the programs data easier to update in a non-technical way. This did involve a very minor change from .json to .js and the adding of an export default to the top of the files. If this was not acceptable I alternatively would have made an api call.
2. I created a helpers.js file which housed utility functions. this was done both to keep the code more modular and to help reduce the possibility for repeating code in the future. These are two functions that could very easily be used elsewhere in the application and now are reusable with simply two lines of code to import and call.
3. the style prop for react components is one that I usually do with an imported css file and webpacks styleloader instead of a .js object. In this case i chose .js for the ability to call object assign. This assigning that takes place allows for fully dynamic css classes with immediate DOM updates to be called in congruence with a boolean on any JSX component.
4. methods to create dropdowns by populating JSX option tags intead of calling .map inside the JSX render method. This is purely my preference. Most people use .map inside the render method to loop over an array and print it to the DOM, similair to an ng-repeat. I find creating a seperate method and using a for loop to push each bit of data into its own jsx object much neater and a better use of compartmentalizing the different components making better use of reacts modularity.
5. The data for each guest appears on the DOM after selection from the dropdown. This was implemented after the realization that a custom message would be easier to create from having access to the same information that populated the templates. This way there is a reference when typing out the message. this was done with linking between the dropdown index and the json index, tied into the state, this information can immediately update on the DOM
6. the dropdowns appear one by one, then finally the submit button, this was to keep a logical order and negate the need for error handling with form submission. On selection of any dropdown, the placeholder vanishes so that it can not be reselected and the state of the component changes to show the next section. Setting the selections index to the state so that it is directly linked to the data index of the json object. This was also done for immediate DOM updating on change of a selection. This can be seen when the user decides to change the guest selection.
7. The submit button only appears after at least five characters have been typed when creating a custom message. This was something added that could be expanded upon, but it was mainly to keep linear with the button only appearing after a dropdown had been selected for the alternate method.

## Language Chosen and Why
I chose to write this program in Javascript ES6 and React. I did this for a wide variety of reasons. Firstly, I want to show my eagerness and desire to learn. React is my newest and weakest language, respectively, but it is also my favorite javascript framework, I have divulged well over 80 hours of my own time learning it over the past three weeks. I also made this decision because Reacts use of JSX and handling of state and components. Given that this project entails, in the theoretical future, very vast amounts of data; React makes the most sense to me. Its seamless handling of state to update the virtualDOM as data changes is unmatched in efficiency and could be key in performance if this app was scaled up. The placing of this selection inside of a React component also creates the possibility for reusability. By exporting the component It can then be imported and implemented with only two lines of code anywhere in the application. Eliminating the need for the messy copy and pasting of code if this email template system was to appear elsewhere in the application. I also made the React decision because when starting with this small of a project. It created the possibility to make very contained code, keeping all the jsx and javascript in one place.

## Testing
I almost exclusively use Test Driven Development. I run a hot build with webpack so that every update I save in my IDE is immediately updated to the DOM. This combined with chrome developer tools creates for a rapid production environment in which I am able to save changes and swipe over to check that they work a mere moment later. On larger projects I also use eslint jscs and beautify.

##What I didn't do
I did not implement Redux. Had I done this I could have split the large component file (120 lines is much more than I would like to keep on a single file) into three separate components with one larger wrapper component. One component for each dropdown with functions housed in the seperate files and state managed in the 'store'. Given more time I would undoubtedly implement Redux to add better sustainability and modularity. I would also add a ui aspect and flush out the custom message textarea to possibly include template creation as well as message creation.
