title This is a tour some sugar on me
participant main.js

participant venues.js
participant bands.js
participant bookings.js
participant database.js


main.js->bands.js:invoke a function that generates a list of bands names
database.js ->bands.js: request venue info 
database.js <-- bands.js: provide venue info
main.js<--bands.js:provide bandHTML


main.js->venues.js: invoke a function that generates a list of venues names event
database.js ->venues.js: request venue info 
database.js <-- venues.js: provide venue info
main.js<--venues.js:provide venuesHTML

bookings.js<--main.js:invoke a function that generates sting of HTML
bookings.js->database.js:invoke a function that returns bookings array of objects / bands array of objects / venues array of objects
bookings.js<--database.js:return array
main.js<--bookings.js:return html







title This is a tour some sugar on me
participant main.js

participant venues.js
participant bands.js
participant bookings.js
participant database.js
participant utilities.js


main.js->utilities.js:invoke a function that generates a list of bands names

main.js<--utilities.js:provide bandHTML


main.js->utilities.js: invoke a function that generates a list of venues names event
database.js ->venues.js: request venue info 
database.js <-- venues.js: provide venue info
main.js<--utilities.js:provide venuesHTML

bookings.js<--main.js:invoke a function that generates sting of HTML
bookings.js->database.js:invoke a function that returns bookings array of objects / bands array of objects / venues array of objects
bookings.js<--database.js:return array
main.js<--bookings.js:return html