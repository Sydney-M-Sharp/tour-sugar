import { bandsHTML } from "./bands.js";
import { bookingHTML } from "./bookings.js";
import { venuesHTML } from "./venues.js";

// let bandshtml = nameHTML(getBands(),"bands") // uses the utilities function to get the bands name and returns html list
// let venuehtml = nameHTML(getVenues(),"venue")

bandsHTML() // this dose the same as line 9 but all of the functions work is held in the bands.js
venuesHTML()
const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<h3> Samantha Ducarte's bookings</h3>
<article class="details">
    <section class="detail-booking">
        <h2>Bookings</h2>
        ${bookingHTML()}
    </section>
    <section class="lower_half_of_page">
        <section class="detail-venues">
            <h2>Venues</h2>
            ${venuesHTML()}
            </section>
         <section class="detail-bands">
             <h2>Bands</h2>
            ${bandsHTML()}
         </section>
    </section>
</article>


`

mainContainer.innerHTML = applicationHTML
