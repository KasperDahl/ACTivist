import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import './App.css';

import home2 from "./img/home2.png";

export const Settings = () => {
    return(
        <body>
 <div> <Link to ='/Home'><button>
    <img class="column" src={home2} style={{width: "10%"}} alt="home2"/> </button></Link>
    </div>


    <div>
        <button style={{ fontSize: "220%", textAlign: "left" }}>
        <div class="form-check">
            <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
            <label class="form-check-label" for="defaultCheck1">
                Notifications
                <br />
              </label>
            </div>
          </button>
        </div>


    <div><button className="button2" > My account </button></div>
    <div><button className="button2" > Delete account </button></div>
    <div><button className="button2" > Log out </button></div>            
    
        </body>
    );
}


/*
function App() {
  return (
    <body>
    <div className="ACTivist"> 
{/*      <header className="App-header"> }*/
/*{        <div className="container">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        </div>
        
      </header> }



    {/* 1 page}*/
/* 
    <div>
        <img class="column" src={home2} style={{width: "10%"}} alt="home2"/>
    </div>

    <div><button className="button2" > My account </button></div>
    <div><button className="button2" > Delete account </button></div>
    <div><button className="button2" > Log out </button></div>

 {/* 1 page}*/

/*    <div className="text">
    <div><button style={{fontSize: "220%", textAlign: "left"}}>  

        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label className="form-check-label" for="defaultCheck1">
                Notifications<br/> 
            </label></div>  </button></div>

    </div>        

    </div>
    </body>
  );
}
*/
