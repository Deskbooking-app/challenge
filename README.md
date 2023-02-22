## This repository contains few simple JS/ React challenges

We imported some libraries that might be useful when working on tasks provided. 
1. **lodash** - General purpose toolbox to operate on objects, arrays and even some helpers for funtional programing.
2. ~~**idb-keyval** - Thin wrapper around Indexed-db. Simplifies storing data locally.~~
3. You are free to import libraries you belive can help you to accomplish the tasks ie. **RxJS**, **Ramda** or others. Yet, if the tasks is to write a search component, please do not import a search component library 😊.

## How to
* Create a **private** fork of this repository and grant read access to *deski-app* **or** clone the code and upload to your public repository that **isn't a public fork** of *https://github.com/Deskbooking-app/challenge*. You don't want everyone else to see your brilliant answers yet 😊.
* Please provide intermediate commits to show how did you find the solution. At least one commit per task is appreciated.
* This repo is a fork of well known *Create React App*. Instructions on how to run the server/ tests etc are left below in this readme file.
* Good luck!


## Tasks
1. A mock api that pretends to be a network call is provided in *src/search.ts*. Typescript linter complains that the file has an error - please fix it. [**Typescript**]
2. Create a Search component with:
  * An input field to provide the search text
  * A list below the input field to display the search results. 
  * Search results should requested from the API from *task 1* every time the text changes. Please don't bother with styling the search field of list. (Example layout: ![alt text](https://github.com/Deskbooking-app/challenge/raw/master/search.png) ) [**React**]
  * Network calls duration isn't constant. Make sure that we always display results of the most recently entered text, even if the order of responses is mixed.
  * Handle network errors simulated by the API, by display a "something went wrong message".
3. Create a "delay" function, that can be used in a promise chain to delay the execution. This isn't just presentation logic, so please include tests. Actually, it might be easier to start with the tests 😊. [**Working with functions**]
```javascript
searchSpaces("")
  .then(delay(500))
  .then(doSomething)
```
4. The component we created in task 2 sends a request each time the user types a character ie.: "h", "he" "hel" "hell" "hello". Too many requests fried our servers and made our backend team unhappy. Add a **debounce** to the search component. Send a request 0.5 second after the user finished typing. This behaviour is called **debounce** (not to confuse with **delay** from task 3). If you are not sure how this should work, there are plenty articles on the "debouce" topic ie on Medium. [**React** / **Working with functions**]
5. If possible we all try to write reusable code. I hope you had that in mind working on task 2 and task 4. Please add a similar search component to the one created in task 2 and 4, that works with API provided in *src/searchAddress.ts*. Please reuse as code as you would do working on real life task. Maybe your code requires a slight refactor to complete this task? [**Architecture**]
6. Create a simple panel using [Material UI](https://material-ui.com/). The most important for us is styling and how do you manage with styled components. See what kind of styling options [Material UI Styles](https://material-ui.com/styles/basics/) proposes to you. Please don't use ThemeProvider, each component should be customized separately. [**React / Working with Material UI**]

    * Stage 1 - Add styles to the panel component.
    * Stage 2 - Add styles to the buttons. They should have no ripples on click or touch events.
    * Stage 3 - Add styles to the inputs.

*Hint: Use Accordion component from Material UI, it has a nice transition animation between collapsing*

![alt text](https://github.com/Deskbooking-app/challenge/raw/master/panel-close.png)
![alt text](https://github.com/Deskbooking-app/challenge/raw/master/panel-open.png)

7. Handling translations is tricky. Create a tool that accepts a list of json filens containing translations and lists all missing translations. Please refer to the screenshots below on how this should (approximately) look like.

![alt text](https://github.com/Deskbooking-app/challenge/raw/master/empty-json.png)
![alt text](https://github.com/Deskbooking-app/challenge/raw/master/filled-json.png)

That was the last task. Please remember to send us the results!
