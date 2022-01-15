import React from 'react'
import RevoCalendar from "revo-calendar";
import './Calender.css'
import { Link } from 'react-router-dom';
import { db } from '../Auth';
var events = [
    {
        name: "Buyout",
        date: Date.now(), // on which is it set
        allDay: true,
        detailDateFormat: 14 / 1 / 2022
    },
    {
        name: "Reservation",
        date: Date.now(),
        extra: {
            icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
            text: "7 People",
        },
    },
    {
        name: "IDK",
        date: 1642232611000, // time of appointment
        extra: {
            icon: "M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09           4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z",
            text: "7 People",
        },
    },
];
export const Calender = ({ UserData }) => {

    const sendData = () => {
        db.collection("schedule").doc(UserData.email).collection("details").add(
            {
                name: "Buyout",
                date: Date.now(), // on which is it set
                allDay: true,
            });
    }

    return (
        <>
            <div className='navbar'>
                <div className="components">
                    <Link to="/"><span>Home</span></Link>
                    <Link to="/calender"><span>Calender</span></Link>
                </div>
            </div>
            {/* <button onClick={sendData}>SEND A TEST DATA</button> */}
            <div className='calender'>
                <h1>MY CALENDER</h1>
                <RevoCalendar events={events} timeFormat24={false} allowDeleteEvent={true}
                    indicatorColor="orange" secondaryColor="purple" primaryColor="#ff99ff" textColor="white" />
            </div>
        </>

    )
}   
