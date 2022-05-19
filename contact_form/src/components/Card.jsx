import React, { useState } from "react";
import ContactCard from "./ContactCard";
import "./module.css";
// import { UseCardToggle } from "./UseCardToggle";

const initialState = [
  {
    id: 1,
    profilePic: (
      <img
        src="data:image/jpeg;base64,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"
        alt="Sophiya"
        width="80"
      />
    ),
    first_name: "Sophiya Murphy",
    email: "Sophiya@gmail.com",
    phone: "015 87875455",
  },
  {
    id: 2,
    profilePic: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWv0KmvZhSF8J706GgWKwILeGnSqVl8_dGFxK-m-N42wHGSChQmZuRTjkHNwR2fpkFnYk&usqp=CAU"
        alt=""
        width="80"
      />
    ),
    first_name: "Thomson Watson",
    email: "Watson@yahoo.com",
    phone: "015 48234565",
  },
  {
    id: 3,
    profilePic: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNgcZo4iTET-AdezFD1tcmVEaoDjmVFud23eWdxABwrCrnoD9fjjS4qahtr4U8lq6F7k&usqp=CAU"
        alt=""
        width="80"
      />
    ),
    first_name: "Amelia Chawla",
    email: "Amelia2@yahoo.com",
    phone: "0116 87887056",
  },
  {
    id: 4,
    profilePic: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCt8FZVts-1zYSJV7tmzfGPN33lKB02VJ0A&usqp=CAU"
        alt=""
        width="90"
      />
    ),
    first_name: "Max lane",
    email: "max0255@gmail.com",
    phone: "015 45454557",
  }
 
];

export default function ContactList() {
  const [contactList, setContactList] = useState(initialState);
  const [toggle, setToggle] = useState(true);
  
  return (
    <div>
      <h1>Contact List</h1>
      <br />
      <div className="togglerBtn">
        <button onClick={() => setToggle(!toggle)} className="btn">
          Hide Chart
        </button>
      </div>

      {toggle &&
        contactList.map((item) => (
          <div className="cardDiv" key={item.id}>
            <ContactCard
              className="card_details"
              id={item.id}
              profilePic={item.profilePic}
              name={item.first_name}
              email={item.email}
              phone={item.phone}
            />
          </div>
        ))}
    </div>
  );
}
