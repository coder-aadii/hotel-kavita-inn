import React from "react";
import "../styles/css/About.css";
import hotelImage from "../assets/hotel_about.jpg";

// Images for places (replace with actual images)
import mahakaleshwarImg from "../assets/mahakaleshwar.jpg";
import mahakalokImg from "../assets/mahakallok.jpg";
import kalbhairavImg from "../assets/kaalbhairav.jpg";
import harisiddhiImg from "../assets/harisiddhi.jpg";
import chintamanImg from "../assets/chintaman.jpg";
import badeganeshImg from "../assets/badeganesh.jpg";
import mangalnathImg from "../assets/mangalnath.jpg";
import dwarkadhishImg from "../assets/dwarkadhish.jpg";
import gadkalikaImg from "../assets/gadkalika.jpg";
import sandipaniImg from "../assets/sandipani.jpg";
import ramghatImg from "../assets/ramghat.jpg";
import jantarmantarImg from "../assets/jantarmantar.jpg";
import bhartrihariImg from "../assets/bhartrihari.jpg";
import kaliadehImg from "../assets/kaliadeh.jpg";
import gomtikundImg from "../assets/gomtikund.jpg";

const touristPlaces = [
    { name: "Shri Mahakaleshwar Temple", significance: "One of the 12 Jyotirlingas of Lord Shiva and the only one that is South-facing (Dakshinamukhi). Famous for the unique Bhasma Aarti.", image: mahakaleshwarImg },
    { name: "Mahakal Lok Corridor", significance: "A magnificent new corridor around the Mahakaleshwar Temple premises featuring detailed mythological sculptures and themes related to Lord Shiva.", image: mahakalokImg },
    { name: "Kal Bhairav Temple", significance: "Dedicated to the fierce form of Lord Shiva. The unique tradition here is the offering of liquor to the deity, which is said to be consumed by the idol.", image: kalbhairavImg },
    { name: "Harisiddhi Temple", significance: "Considered one of the 51 Shakti Peethas, where Goddess Sati's elbow is believed to have fallen. Famous for its two towering Deepastambhas (lamp pillars).", image: harisiddhiImg },
    { name: "Chintaman Ganesh Temple", significance: "One of the oldest temples in Ujjain, dedicated to Lord Ganesha, who is worshipped here as Chintaman (one who assures freedom from worldly worries).", image: chintamanImg },
    { name: "Bade Ganeshji Ka Mandir", significance: "Located near the Mahakaleshwar Temple, housing a colossal idol of Lord Ganesha and offering lessons in Sanskrit and Astrology.", image: badeganeshImg },
    { name: "Mangalnath Temple", significance: "Considered the birthplace of the planet Mars (Mangal) according to the Matsya Purana. It is a highly significant site for astrological worship.", image: mangalnathImg },
    { name: "Dwarkadhish Gopal Mandir", significance: "A beautiful 19th-century temple built in Maratha style, dedicated to Lord Krishna (Gopal).", image: dwarkadhishImg },
    { name: "Gadkalika Temple", significance: "Dedicated to Goddess Kali. It is believed that the great Sanskrit poet Kalidasa attained knowledge and fame after worshipping here.", image: gadkalikaImg },
    { name: "Sandipani Ashram", significance: "The place where Lord Krishna, along with his brother Balarama and friend Sudama, received education from Guru Sandipani.", image: sandipaniImg },
    { name: "Jantar Mantar (Vedh Shala)", significance: "An 18th-century observatory built by Maharaja Jai Singh II for studying astronomical phenomena and geographical coordinates.", image: jantarmantarImg },
    { name: "Bhartrihari Caves", significance: "Ancient caves believed to be the place where King Bhartrihari renounced his kingdom and performed penance.", image: bhartrihariImg },
    { name: "Ram Ghat", significance: "The most sacred bathing ghat on the Kshipra River. One of the four sites of Kumbh Mela (Simhastha) held every 12 years. Famous for its spectacular evening Aarti.", image: ramghatImg },
    { name: "Kaliadeh Palace", significance: "A historical palace with Persian architecture, situated on an island in the Shipra River, offering scenic views.", image: kaliadehImg },
    { name: "Gomti Kund", significance: "A sacred water tank associated with Lord Krishna's time at Sandipani Ashram.", image: gomtikundImg },
];

const aartis = [
    { name: "Bhasma Aarti", time: "4:00 AM – 6:00 AM", significance: "The most significant ritual where the Shiva Lingam is smeared with sacred ash (Bhasma). Requires prior online booking/registration." },
    { name: "Naivedya / Dadyodak Aarti", time: "7:00 AM – 7:45 AM", significance: "The first offering of food (Bhog) to the deity in the morning." },
    { name: "Bhog Aarti (Mid-day)", time: "10:30 AM – 11:00 AM", significance: "A major offering of cooked food (Bhog) to the deity." },
    { name: "Sandhya Puja / Aarti", time: "5:00 PM – 5:30 PM", significance: "The evening worship as the sun begins to set." },
    { name: "Shayan Aarti", time: "10:30 PM – 11:00 PM", significance: "The final ritual before closing the temple, where the deity is prepared for rest." },
    { name: "Morning Aarti", time: "~6:00 AM", significance: "Conducted at dawn, less crowded than the evening ceremony." },
    { name: "Evening Aarti", time: "~6:00 PM – 7:00 PM", significance: "The spectacular main Aarti of the day. The time varies slightly with the sunset, usually around 6:30 PM in most seasons. Highly recommended for tourists." },
];

const About = () => {
    return (
        <section className="about" id="about">
            {/* Top section: Image left, About content right */}
            <div className="about-top">
                <div className="about-image">
                    <img src={hotelImage} alt="Hotel Kavita Inn" />
                </div>
                <div className="about-content">
                    <h2>About Hotel Kavita Inn</h2>
                    <p>
                        Welcome to Hotel Kavita Inn — your peaceful stay in the divine city of Ujjain.
                        Just minutes away from the sacred <strong>Mahakaleshwar Jyotirlinga</strong>, we blend
                        spiritual warmth with modern comfort. Enjoy spacious rooms, relaxing ambience,
                        delicious food, and genuine hospitality that makes you feel right at home.
                        Whether you're here for darshan, leisure, or business—Hotel Kavita Inn is where
                        comfort meets devotion.
                    </p>
                    {/* <p>
                        Discover a serene retreat at Hotel Kavita Inn, nestled in the divine city of Ujjain
                        and just moments from the holy <strong>Mahakaleshwar Jyotirlinga</strong>. Designed for pilgrims,
                        families, and travelers, our hotel blends spiritual tranquility with modern elegance.
                        From cozy rooms and refined amenities to heartfelt hospitality, every detail ensures
                        a peaceful and memorable stay. Experience comfort, devotion, and warmth — all under
                        one roof.
                    </p> */}
                    <a href="#location" className="btn-primary">Learn More</a>
                    {/* <button className="btn-primary">Learn More</button> */}
                </div>
            </div>

            {/* Full-width bottom section: Tourist Places & Aartis */}
            <div className="about-bottom">
                <h3>Explore Ujjain</h3>
                <div className="places-list">
                    {touristPlaces.map((place, index) => (
                        <div className="place-card" key={index}>
                            <div className="place-image">
                                <img src={place.image} alt={place.name} />
                            </div>
                            <div className="place-info">
                                <h4>{place.name}</h4>
                                <p>{place.significance}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h3>Temple Aartis</h3>
                <div className="aartis-list">
                    {aartis.map((aarti, index) => (
                        <div className="aarti-card" key={index}>
                            <h4>{aarti.name}</h4>
                            <p><strong>Time:</strong> {aarti.time}</p>
                            <p>{aarti.significance}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
