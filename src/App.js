import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <div className="community">
          {" "}
          <h1>Join our community</h1>
          <h2>30-day,hassle-free money back guarantee</h2>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>

        <div className="row">
          <div className="col-6 subscription">
            <h3>Monthly Subscription</h3>
            <span className="price">$29 </span> {""}
            <span className="monthly"> per month</span>
            <p>Full access for less than $1 a day</p>
            <button className="btn">Sign Up</button>
          </div>
          <div className="col-6 contact">
            <h3>Why us</h3>
            <p>
              Tutorials by industry experts Peer & expert code review Coding
              excercises Access to our GitHub repos Community forum Flashcard
              decks New videos every week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
