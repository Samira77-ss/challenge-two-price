import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Join our community 30-day</h1>
        <h2>hassle-free money back guarantee</h2>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
        <div className="row">
          <div className="col-6">
            <h2>Monthly Subscription</h2>
            <h3>$29 per month</h3>
            <p>Full access for less than $1 a day</p>
            <button className="btn btn-primary">Sugn Up</button>
          </div>
          <div className="col-6">
            <h2>Why us</h2>
            <p>
              Tutorials by industry experts Peer & expert code review Coding
              exercises Access to our GitHub repos Community forum Flashcard
              decks New videos every week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
