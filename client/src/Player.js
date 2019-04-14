import React from "react";
import './Player.css'; 

class Player extends React.Component {
  render() {
    return (
   
        <div class='music-card playing'>
  
        <div class='image'></div>
        
        <div class='wave'></div>
        <div class='wave'></div>
        <div class='wave'></div>
        
        <div class='info'>
          <h2 class='title'>Anomaly</h2>
          <div class='artist'>Lecrae</div>
        </div>
        
        <i class="fa fa-pause trigger" aria-hidden="true"></i>
        <i class="fa fa-play trigger" aria-hidden="true"></i>
      </div>
      
      

        );
  }
}

export default Player;
