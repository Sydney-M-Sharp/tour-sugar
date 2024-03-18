//import and export (this will be like the orders modual in the other coffee project.)

// this function should pull data from the bands and the venues data
//for every booking check the band ide and the venue id. 
// then itterate through the band and venues array seprately. 
// take the name of the band that matches the band id and the veneue.name that matched the venue id and place them in a string.

// if the bookings.bandid and the band id match we then want the name of the band
//the bookings.venueid matches a venue id then pull the name of the venue 
//grab the date of the booking from the booking datat for the HTML as well. 

// display all of the bookings that bands make at each venue. with HTML
//example Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023
//

import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const bookingHTML = () => {
    let html = "<ul>"
    for (const booking of bookings) {
        let bandName = []
        let venueName = []

        for (const band of bands) {
            if (booking.bandId === band.id) {
                bandName.push(band.name)

            }
        }

        for (const venue of venues) {
            if (booking.venueId === venue.id) {
                venueName.push(venue.name)
            }

        }
        html += `<li class="bookings">${bandName} are playing at ${venueName} on ${booking.date}</li>`
    }

    html += "</ul>"
    return html;
}