import React, { useRef } from 'react';
import bg from './images/img005.png';
import { useNavigate } from 'react-router-dom'; 
import { collection, addDoc, doc, serverTimestamp, updateDoc} from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';

// await setDoc(doc(db, 'cities','SF'), {
//     name: "San Fransicsco",
//     state: "CA",
//     country: "USA"
//   });


const Modal = ({ open, onClose }) => {

    const navigate = useNavigate();
    const { user } = UserAuth();
    const destinationRef = useRef(null);
    const countryRef = useRef(null);
    const purposeRef = useRef(null);
    const budgetRef = useRef(null);
    const accommodationRef = useRef(null);
    const tripDurationRef = useRef(null);
    const numberOfTravelersRef = useRef(null);
    //const accessibilityRef = useRef(null);
    const dietaryRequirementsRef = useRef(null);
    const specialRequestsRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var activitiesArray = Array.from(document.querySelectorAll('input[name="activities"]:checked')).map(checkbox => checkbox.value);
        var activitieS = activitiesArray.join('&');



        try {
            const destination = destinationRef.current.value;
            const country = countryRef.current.value;
            const purpose = purposeRef.current.value;
            const budget = budgetRef.current.value;
            const accommodation = accommodationRef.current.value;
            const activities = activitieS;
            const tripDuration = tripDurationRef.current.value;
            const numberOfTravelers = numberOfTravelersRef.current.value;
            // const accessibility = accessibilityRef.current.value;
            const dietaryRequirements = dietaryRequirementsRef.current.value;
            var specialRequests = specialRequestsRef.current.value;

            var prompt;

            if (specialRequests === "") {
                prompt = "Plan a trip to " + country + " and I want to explore a wonderful and vibrant " + destination + " with purpose of "
                    + purpose + ". However, I have " + budget + ' budget.' + " and I am intrested in activities of " + activities + ". I will prefer " + accommodation + "accomodation for staying." + ' Please Plan trip for ' + tripDuration + " days for " + numberOfTravelers + " people. "
                    + 'I ' + dietaryRequirements + ' have dietry requirements. ' + "Also Suggest me some good accomodations for stay and best way to travel";
            }
            else {
                specialRequests = " I have special requests like, " + specialRequests;
                prompt = "Plan a trip to " + country + " and I want to explore a wonderful and vibrant " + destination + " with purpose of "
                    + purpose + ". However, I have " + budget + ' budget.' + " and I am intrested in activities of " + activities + ". I will prefer " + accommodation + " accomodation for staying." + ' Please Plan trip for ' + tripDuration + " days for " + numberOfTravelers + " people. "
                    + 'I ' + dietaryRequirements + ' have speical dietry requirements. ' + "Also Suggest me some good places for stay and best way to travel" + specialRequests;

            };
            const docRef = await addDoc(collection(doc(db, 'userFormData', user.email), 'SearchHistory'), {
                destination,
                country,
                purpose,
                budget,
                accommodation,
                activities,
                tripDuration,
                numberOfTravelers,
                dietaryRequirements,
                specialRequests,
                timestamp: serverTimestamp(),
            });
            const searchref = docRef.id;
            //const requstee = user.email;
            const docRef1 = await addDoc(collection(doc(db, 'userFormData', user.email), 'PmtRES_GEN'), {
                searchref,
                prompt,
            });

            var tempdata = docRef1.id;
            const dbref = doc(db,"tempVar","tempval")
            await updateDoc(dbref, {
                tempdata,
            });


            e.target.reset();
            
            console.log('Document added to SearchHistory subcollection with ID:', docRef.id);
            console.log('Promt added to prmtinout subcollection with ID:', docRef1.id);
            navigate('/result');


        } catch (error) {
            console.error('Error submitting form data:', error.message);
        }
    };

   if (!open) return null;
    return (
        <div onClick={onClose} className='overlay flex  w-[800px] h-[500px] '>
            <div onClick={(e) => { e.stopPropagation(); }} className='modalContainer'>
                <img src={bg} alt='/' />
            </div>
            <div onClick={(e) => { e.stopPropagation(); }} className='modalRight absolute center'>
                <button className='closeBtn w-8 h-8 my-6 mx-[740px] bg-red-400 text-center align-text-top p text-amber-100 font-bold rounded-lg shadow ' onClick={onClose}>
                    X
                </button>
                <div onClick={(e) => { e.stopPropagation(); }} className="form  left-7 top-12 justify-left absolute">
                    <form action="/main" onSubmit={(e) => handleSubmit(e)}>
                        <label for="destination" className='text font-bold text-zinc-700' >What is your preferred destination?   </label>
                        <select ref={destinationRef} id="destination" name="destination" className='border p-0 w-auto font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="city">City</option>
                            <option value="beach">Beach</option>
                            <option value="mountains">Mountains</option>
                            <option value="countryside">Countryside</option>
                            <option value="other">Other</option>
                        </select><br />

                        <label for="country" className='text font-bold text-zinc-700'>What is your preferred Country?   </label>
                        <select ref={countryRef} id="country" name="country" className='border p-0 w-auto font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="Canada">Canada</option>
                        </select><br />

                        <label for="purpose" className='text font-bold text-zinc-700'>What is the purpose of your travel?    </label>
                        <select ref={purposeRef} id="purpose" name="purpose" className='border p-0 w-auto font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="leisure">Leisure</option>
                            <option value="business">Business</option>
                            <option value="adventure">Adventure</option>
                            <option value="cultural">Cultural exploration</option>
                            <option value="other">Other</option>
                        </select><br />

                        <label for="budget" className='text font-bold text-zinc-700'>What is your budget range?  </label>
                        <select ref={budgetRef} id="budget" name="budget" className='border p-0 w-auto font-bold rounded-lg shadow bg-amber-50 text-red-500' >
                            <option value="low">Low budget</option>
                            <option value="mid-range">Mid-range</option>
                            <option value="luxury">Luxury</option>
                        </select><br />

                        <label for="accommodation" className='text font-bold text-zinc-700'>What type of accommodation do you prefer?    </label>
                        <select ref={accommodationRef} id="accommodation" name="accommodation" className='border p-0 w-auto font-bold rounded-lg shadow  bg-amber-50 text-red-500'>
                            <option value="hotel">Hotel</option>
                            <option value="hostel">Hostel</option>
                            <option value="Bed & Breakfast">Bed & Breakfast</option>
                            <option value="apartment">Apartment Rental</option>
                            <option value="other">Other</option>
                        </select><br />

                        <p className='text font-bold text-zinc-700'>What activities are you interested in? (Please select max 2)</p>
                        <input type="checkbox" id="sightseeing" name="activities" value="sightseeing" />
                        <label for="sightseeing" className='p-2 text-amber-800'>Sightseeing</label>
                        <input type="checkbox" id="hiking" name="activities" value="hiking" />
                        <label for="hiking" className='p-2 text-amber-800'>Hiking/Outdoor activities </label>
                        <input type="checkbox" id="Shopping" name="activities" value="Shopping" />
                        <label for="Shopping" className='p-2 text-amber-800'>Shopping </label><br />
                        <input type="checkbox" id="Local Cusine Tasting" name="activities" value="LocalFood" />
                        <label for="Food" className='p-2 text-amber-800'>Local Cusine Tasting </label>
                        <input type="checkbox" id="Museums and Cultural sites" name="activities" value="HistoricalSites" />
                        <label for="History" className='p-2 text-amber-800'>Museums and Cultural Sites </label>
                        <input type="checkbox" id="NightLife" name="activities" value="NightLife" />
                        <label for="Life" className='p-2 text-amber-800'>Night Life </label><br />
                        <br />

                        <label for="fname" className='text font-bold text-zinc-700'>How long is your trip?(Number of Days)   </label>
                        <input ref={tripDurationRef} type="number" className='border p-0 w-10 font-bold rounded-lg shadow bg-amber-50 text-red-500' id="tripDuration" name="TripDuration" required /><br />

                        <label for="fname" className='text font-bold text-zinc-700'>Are you traveling alone or with others?(Please specify the number of travelers)  </label>
                        <input ref={numberOfTravelersRef} type="number" className='border p-0 w-10 font-bold rounded-lg shadow bg-amber-50 text-red-500' id="numberofTravelers" name="numberofTravelers" /><br />

                        {/* {  <label for="accessibility" className='text font-bold text-zinc-700'>Do you need any special accessibility accommodations?</label>
                        <select ref={accessibilityRef} id="accessibility" name="accessibility" className='border p-0 w-20 font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="do not">No</option>
                            <option value="do">Yes</option>
                            
                        </select><br />} */}

                        <label for="dietary requirements" className='text font-bold text-zinc-700'>Do you have any specific dietary requirements or restrictions?</label>
                        <select ref={dietaryRequirementsRef} id="dietaryRequirements" name="dietary" className='border p-0 w-20 font-bold rounded-lg shadow bg-amber-50 text-red-500'>
                            <option value="do not">No</option>
                            <option value="do">Yes</option>
                        </select><br />

                        <label for="fname" className='flex-auto font-bold text-zinc-700' >Any other preferences or requests for your trip?</label>
                        <input ref={specialRequestsRef} type="Text" className='border p-5 font-bold rounded-lg shadow bg-amber-50 text-red-500' id="specialRequests" name="SpecialRequests" /><br />

                        {/* <input type="submit"  className='submit p-2 font-bold bg-zinc-700 text-amber-100 rounded-lg shadow'  /> */}
                        <button type="submit" className='submit p-2 font-bold bg-zinc-700 text-amber-100 rounded-lg shadow' >Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Modal;
