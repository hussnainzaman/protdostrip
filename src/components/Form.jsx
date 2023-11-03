
import React from 'react'

const Form = () => {


    return (
        <div onClick={(e) => { e.stopPropagation(); }} className="form  left-7 top-12 justify-left absolute">
                    <form action="/main" >
                        <label for="destination" className='text font-bold text-zinc-700' >What is your preferred destination?   </label>
                        <select id="destination" name="destination" className='border p-0 w-auto font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="city">City</option>
                            <option value="beach">Beach</option>
                            <option value="mountains">Mountains</option>
                            <option value="countryside">Countryside</option>
                            <option value="other">Other</option>
                        </select><br />

                        <label for="country" className='text font-bold text-zinc-700'>What is your preferred Country?   </label>
                        <select id="country" name="country" className='border p-0 w-auto font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="city">Canada</option>
                        </select><br />

                        <label for="purpose" className='text font-bold text-zinc-700'>What is the purpose of your travel?    </label>
                        <select id="purpose" name="purpose" className='border p-0 w-auto font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="leisure">Leisure</option>
                            <option value="business">Business</option>
                            <option value="adventure">Adventure</option>
                            <option value="cultural">Cultural exploration</option>
                            <option value="other">Other</option>
                        </select><br />

                        <label for="budget" className='text font-bold text-zinc-700'>What is your budget range?  </label>
                        <select id="budget" name="budget" className='border p-0 w-auto font-bold rounded-lg shadow bg-amber-50 text-red-500' > 
                            <option value="low">Low budget</option>
                            <option value="mid-range">Mid-range</option>
                            <option value="luxury">Luxury</option>
                        </select><br />

                        <label for="accommodation" className='text font-bold text-zinc-700'>What type of accommodation do you prefer?    </label>
                        <select id="accommodation" name="accommodation" className='border p-0 w-auto font-bold rounded-lg shadow  bg-amber-50 text-red-500'>
                            <option value="hotel">Hotel</option>
                            <option value="hostel">Hostel</option>
                            <option value="bnb">Bed & Breakfast</option>
                            <option value="apartment">Apartment Rental</option>
                            <option value="other">Other</option>
                        </select><br />

                        <p className='text font-bold text-zinc-700'>What activities are you interested in? (Please select max 2)</p>
                        <input type="checkbox" id="sightseeing" name="activities" value="sightseeing" />
                        <label for="sightseeing" className='p-2 text-amber-800'>Sightseeing</label>
                        <input type="checkbox" id="hiking" name="activities" value="hiking" />
                        <label for="hiking" className='p-2 text-amber-800'>Hiking/Outdoor activities </label>
                        <input type="checkbox" id="Shopping" name="activities" value="Shopping" />
                        <label for="hiking" className='p-2 text-amber-800'>Shopping </label><br />
                        <input type="checkbox" id="Local Cusine Tasting" name="activities" value="LocalFood" />
                        <label for="hiking" className='p-2 text-amber-800'>Local Cusine Tasting </label>
                        <input type="checkbox" id="Museums and Cultural sites" name="activities" value="HistoricalSites" />
                        <label for="hiking" className='p-2 text-amber-800'>Museums and Cultural Sites </label>
                        <input type="checkbox" id="NightLife" name="activities" value="NightLife" />
                        <label for="hiking" className='p-2 text-amber-800'>Night Life </label><br />

                        <label for="fname" className='text font-bold text-zinc-700'>How long is your trip?(Number of Days)   </label>
                        <input type="number" className='border p-0 w-10 font-bold rounded-lg shadow bg-amber-50 text-red-500' id="trip duration" name="TripDuration" required/><br />

                        <label for="fname" className='text font-bold text-zinc-700'>Are you traveling alone or with others?(Please specify the number of travelers)  </label>
                        <input type="number" className='border p-0 w-10 font-bold rounded-lg shadow bg-amber-50 text-red-500' id="trip duration" name="TripDuration" /><br />

                        <label for="accessibility" className='text font-bold text-zinc-700'>Do you need any special accessibility accommodations?</label>
                        <select id="aaccessibility" name="accessibility" className='border p-0 w-20 font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select><br />

                        <label for="dietary requirements" className='text font-bold text-zinc-700'>Do you have any specific dietary requirements or restrictions?</label>
                        <select id="dietary requirements" name="dietary" className='border p-0 w-20 font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select><br />

                        <label for="fname" className='flex-auto font-bold text-zinc-700' >Any other preferences or requests for your trip?</label>
                        <input type="Text" className='border p-5 font-bold rounded-lg shadow bg-amber-50 text-red-500' id="special requests" name="SpecialRequests" /><br />

                        <input type="submit" className='submit p-2 font-bold bg-zinc-700 text-amber-100 rounded-lg shadow' value="Get Recommendations" />
                    </form>

                </div>

    )
};

export default Form

