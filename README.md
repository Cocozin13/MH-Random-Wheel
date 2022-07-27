# MonsterHunter Random Wheel
#### Video Demo:  <https://www.youtube.com/watch?v=jAdzIvhYNk8>
#### Description: 
## About:
### MonsterHunter Random Wheel is a web application which is based on the videogame series Monster Hunter that works like a wheel of fortune; you have your prices(which in this case are the monsters that you fight in game),spin it, and you will get a random price.There are different wheels allusive to the different games in the series and as that different prices(monsters).
## Files/functionality:
### ***Winwheel.js***
### Winwheel.js is a javascript library that allows to display price wheels in a easy and organized manner compared to regular javascript canvas(Which was my first choice).It works with objects to display the different elements of the wheel and the animation.
### ***app.js***
### app.js is where all of the logic of the application is; where all of the wheels are; functions to reset the wheel, show the final result and even to draw the wheel pointer; And lastly EventListeners to toggle the display of the wheels to display only one at time; this was done using the library jQuery.
### ***index.html***
### index.html is where the libraries use are (which are: Bootstrap, Winwheel.js and jQuery), the main files (app.js, styles.css) and the main elements of the page which are three divs that contain: the button to spin the wheel, the selected wheel and the others buttons to select other wheels(games).
### ***styles.css***
### styles.css is where the styling of the page is; in where is the styling of the three divs that was mentioned before, the hover animations/transitions for the buttons and media queries to made the page responsive/accessible to users with other digital devices.
## Changes:
### The main thing changed was instead of using vanilla javascript canvas, I decided to use a library mentioned before to make that task easier and more organized, because basic javascript canvas can be a bit underwhelming to use.
## Why does this project exist:
### Because I needed a final project:P.Jokes aside, I made this project to simply add some novelty, challenge to game as it can be extremely dull to farm the same monster over and over and not getting the thing you wanted or just fight a monster that you are not that confortable figthing. 
