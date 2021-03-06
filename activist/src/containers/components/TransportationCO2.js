import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TransportationCO2 = () => {
  let userChall = [];
  let userChallFinish = [];
  let transportChallFinished = localStorage.getItem("transportChallFinished");
  let pledgedChallenges = localStorage.getItem("transportChallenges");
  if (pledgedChallenges) {
    userChall = JSON.parse(localStorage.getItem("transportChallenges"));
  }
  if (transportChallFinished) {
    userChallFinish = JSON.parse(
      localStorage.getItem("transportChallFinished")
    );
  }

  const initialState = () =>
    Number(window.localStorage.getItem("transportCount")) || 0;
  const [transportCount, setTransporttransportCount] = useState(initialState);
  const [challenges, setChallenges] = useState(userChall);
  const [transportFinished, settransportFinished] = useState(userChallFinish);

  useEffect(() => {
    window.localStorage.setItem("transportCount", transportCount);
  }, [transportCount]);

  useEffect(() => {
    localStorage.setItem("transportChallenges", JSON.stringify(challenges));
  });

  useEffect(() => {
    localStorage.setItem(
      "transportChallFinished",
      JSON.stringify(transportFinished)
    );
  });

  const addChallenge = (newChallenge, newAmount) => {
    // here update userChall before checking the condition
    userChall = JSON.parse(localStorage.getItem("transportChallenges"));
    if (!(userChall && userChall.length)) {
      setChallenges([...challenges, newChallenge]);
      setTransporttransportCount(transportCount + newAmount);
    } else {
      const message =
        "You can only pledge to one transportation challenge at the time.";
      window.alert(message);
    }
  };

  const resetAmount = () => {
    const msg = "Are you sure you want to unpledge?";
    if (window.confirm(msg)) {
      settransportFinished(Object.assign([], userChall));
      setTransporttransportCount(0);
      setChallenges([]);
    }
  };

  return (
    <main>
      <div className="text">
        <div>
          <h3>
            Congrats! You've saved{" "}
            <span>{transportCount.toFixed(1)}kg of CO2</span> today!
          </h3>
        </div>
        <div>
          <div className="center">
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Car share", 3.2);
              }}
            >
              Car share <br /> <b>3.2 kg saved per day!</b>
            </button>

            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Public transport", 6);
              }}
            >
              Public transport <br /> <b>6 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Go cycling to work ", 12.6);
              }}
            >
              Go cycling to work <br /> <b>12.6 kg saved per day!</b>
            </button>
            <button
              id="challbutton1"
              onClick={() => {
                addChallenge("Work from home", 12.6);
              }}
            >
              Work from home <br /> <b>12.6 kg saved per day!</b>
            </button>
          </div>
          <button id="challbutton3" onClick={resetAmount}>
            Unpledge transportation challenge
          </button>
          <div>
            <Link to="/home">
              <button id="challbutton4">Pledge</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransportationCO2;
