
import React from 'react'

const Form = () => {


    return (
        <div className="div">
            <form action="/main" >
                <label for="destination" >What is your preferred destination?</label><br />
                <select id="destination" name="destination" requried>
                    <option value="city">City</option>
                    <option value="beach">Beach</option>
                    <option value="mountains">Mountains</option>
                    <option value="countryside">Countryside</option>
                    <option value="other">Other</option>
                </select><br />

                <label for="purpose">What is the purpose of your travel?</label>
                <select id="purpose" name="purpose">
                    <option value="leisure">Leisure</option>
                    <option value="business">Business</option>
                    <option value="adventure">Adventure</option>
                    <option value="cultural">Cultural exploration</option>
                    <option value="other">Other</option>
                </select><br />

                <label for="budget">What is your budget range?</label><br />
                <select id="budget" name="budget">
                    <option value="low">Low budget</option>
                    <option value="mid-range">Mid-range</option>
                    <option value="luxury">Luxury</option>
                </select><br />

                <label for="accommodation">What type of accommodation do you prefer?</label><br />
                <select id="accommodation" name="accommodation">
                    <option value="hotel">Hotel</option>
                    <option value="hostel">Hostel</option>
                    <option value="bnb">Bed & Breakfast</option>
                    <option value="apartment">Apartment Rental</option>
                    <option value="other">Other</option>
                </select><br />

                <p>What activities are you interested in? (Please select max 2)</p>
                <input type="checkbox" id="sightseeing" name="activities" value="sightseeing" />
                <label for="sightseeing">Sightseeing </label>
                <input type="checkbox" id="hiking" name="activities" value="hiking" />
                <label for="hiking">Hiking/Outdoor activities </label>
                <input type="checkbox" id="Shopping" name="activities" value="Shopping" />
                <label for="hiking">Shopping </label><br />
                <input type="checkbox" id="Local Cusine Tasting" name="activities" value="LocalFood" />
                <label for="hiking">Local Cusine Tasting </label>
                <input type="checkbox" id="Museums and Cultural sites" name="activities" value="HistoricalSites" />
                <label for="hiking">Museums and Cultural Sites </label>
                <input type="checkbox" id="NightLife" name="activities" value="NightLife" />
                <label for="hiking">Night Life </label><br />

                <label for="fname">How long is your trip?(Number of Days)</label><br />
                <input type="number" className='border p-3 font-bold rounded-lg shadow' id="trip duration" name="TripDuration" /><br />

                <label for="fname">Are you traveling alone or with others?(Please specify the number of travelers)</label><br />
                <input type="number" className='border p-3 font-bold rounded-lg shadow' id="trip duration" name="TripDuration" /><br />

                <label for="accessibility">Do you need any special accessibility accommodations?</label><br />
                <select id="aaccessibility" name="accessibility">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select><br />

                <label for="dietary requirements">Do you have any specific dietary requirements or restrictions?</label><br />
                <select id="dietary requirements" name="dietary">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select><br />

                <label for="fname">Any other preferences or requests for your trip?</label><br />
                <input type="Text" className='border p-3 font-bold rounded-lg shadow' id="special requests" name="SpecialRequests" /><br />

                <input type="submit" className='border p-3 font-bold bg-black rounded-lg shadow text-white' value="Submit" />
            </form>

        </div>

    )
};

export default Form

