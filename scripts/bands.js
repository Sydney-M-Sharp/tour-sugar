// we need to import information from the database
// then make and export a function that can pull the band data

// collect the name of each band
// for every band name there should be a new line of HTML unordered list.
// the name of each band should be displayed in a bulleted list in HTML
//function should find the name of the band and place it in said HTML


//make a click event
//click on a band
//see if the type was Band that was  clicked
//if its a band then we match the bandid to the booking.bandid and relate it to the booking.venueid to find the venues.name

//this window alert should show all of the venues at which the band is playing.

//type-bands 
//data-band id 
//booking.bandid

import { getBands, getBookings, getVenues } from "./database.js";


const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const bandsHTML = () => {
    let html = "<ul>"
    for (const band of bands) {
        html += `<li class="bands" data-type="band" data-id="${band.id}"> 
            ${band.name}
            </li>`
    }
    html += "</ul>"
    return html
}

document.addEventListener("click", (TheClickEvent) => {//adding event listner method to the DOM(document object model) that takes two parameters( sting "click" and a callback function)
    const clickedItem = TheClickEvent.target// creating vareabel (called clickedItem) that has the value of the click event(object) target (property)
    const totalBookings = [] //creating vareable called totalBookings and setting it equal to an empty array
    const venueNames = []//creating vareable called venueNames and setting it equal to an empty array
    if (clickedItem.dataset.type === "band") {//setting up a conditional statment that checks the dataset.type(properties of clickedItem) strictly equals the string "band"
        //if true...
        for (const booking of bookings) { // iterating the booking array 
            if (booking.bandId === parseInt(clickedItem.dataset.id)) { //settign up a conditional statemnt that check to see if the booking(object) bandId(property) strictly equals the parsed number clicked item (object) dataset(object) .id (property)
                //if true...
                totalBookings.push(booking) //pushing the booking objects into the totalBooking array.
            }
        }
        for (const booking of totalBookings) { //iterating the totalBookings array
            for (const venue of venues) {// iterating the venues array for each booking object ( for every one booking we check all 10 venues each time.)
                if (booking.venueId === venue.id) {// setting up a conditional statment to check the booking (object). venueID (property) is strictly equal to the venue(object) id(property)
                    //if true...
                    venueNames.push(venue.name) //pushing the venue name property into the venueNames array
                }
            }

        }
        window.alert(`This band is playing at ${venueNames.join(",")}`) //attaching the alert to the window object and passing the string template argument and interpolating venue names using the join array method.
    }

}

)