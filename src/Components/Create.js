import React, { useState } from "react";
import { db } from "../Auth";
import "./form.css";

export const Create = ({ UserData }) => {
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");
    const [date, setdate] = useState(null);
    const [time, settime] = useState(new Date().now);
    const [allday, setallday] = useState(false);
    const sendData = () => {
        const data = {
            name: name,
            description: desc,
            date: date,
            time: time,
            allDay: allday,
        };
        console.log(data);
    };

    return (
        <div className="creatjs">
            <div class="container">
                <div class="title"> form </div>
                <form>
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">full name</span>
                            <input
                                onChange={(event) => setname(event.target.value)}
                                type="text "
                                placeholder="ENTER YOUR NAME"
                                required
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">description</span>
                            <input
                                onChange={(event) => setdesc(event.target.value)}
                                type="text "
                                placeholder="type description"
                                required
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">date</span>
                            <input
                                id="date"
                                onChange={() => setdate(document.getElementById("date").value)}
                                type="date"
                                required
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">time</span>
                            <input
                            id = "time"
                                onChange={() => settime((document.getElementById("time").value))}
                                type="time"
                                required
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input type="email" placeholder="Enter Sender Email" required />
                        </div>
                        <div>
                            <span>All day</span>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div>
                        <button onClick={sendData}>SEND A TEST DATA</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
