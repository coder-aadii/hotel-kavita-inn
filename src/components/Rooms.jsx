import React from "react";
import "../styles/css/Rooms.css";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";

const rooms = [
    { img: room1, name: "Double Bed", price: "₹2500/night" },
    { img: room2, name: "Triple Bed", price: "₹3500/night" },
    { img: room3, name: "Four Bed", price: "₹4500/night" },
];

const Rooms = () => {
    return (
        <section className="rooms" id="rooms">
            <h2 className="section-title">Our Rooms</h2>
            <div className="rooms-grid">
                {rooms.map((room, index) => (
                    <div className="room-card" key={index}>
                        <img src={room.img} alt={room.name} />
                        <div className="room-info">
                            <h3>{room.name}</h3>
                            <p>{room.price}</p>
                            <a
                                href="https://wa.me/7247241112?text=Hello%20Hotel%20Kavitha%20Inn,%20I'm%20here%20for%20inquiry."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                Book Now
                            </a>
                            {/* <button className="btn-primary">Book Now</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Rooms;
