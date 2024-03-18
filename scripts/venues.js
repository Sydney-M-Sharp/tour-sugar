import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const venuesHTML = () => {
    let html = "<ul>"
    for (const venue of venues) {
        html += `<li class="venues" data-type="venue" data-id="${venue.id}"> 
            ${venue.name}
            </li>`
    }
    html += "</ul>"
    return html
}

document.addEventListener("click", (ClickEvent) => {
    const clickedItems = ClickEvent.target
    const totalBookingArray = []
    const bandNamesArray = []
    if (clickedItems.dataset.type === "venue") {
        for (const booking of bookings) {
            if (booking.venueId === parseInt(clickedItems.dataset.id)) {
                totalBookingArray.push(booking)
            }
        }
        for (const booking of totalBookingArray) {
            for (const band of bands) {
                if (booking.bandId === band.id) {
                    bandNamesArray.push(band.name)
                }
            }

        }
        window.alert(`${bandNamesArray.join(",")} are playing at this venue`)
    }
}
)