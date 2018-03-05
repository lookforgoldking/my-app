import React, { Component } from 'react';
import './style.css';

class Audio extends Component {
  render() {
    return (
      <div className="detail-audio">
        <audio src={this.props.mp3}
               ref={(audio) => {this.audio = audio}}
               onCanPlay={this.handleCanPlay.bind(this)}
               onTimeUpdate={this.handleTimeUpdate.bind(this)}
        >
          {/*<source src="http://s2.hxen.com/m2/voa/2018/01/hxen.com_v20180124c.mp3" />*/}
        </audio>
        <div className='audio-controls'>
          <button onClick={this.handlePlayClick.bind(this)} 
                  ref={(button) => {this.playBtn = button}} 
                  className='play-btn'
          >
            ▶
          </button>
          <button className='pause-btn' onClick={this.handlePausedClick.bind(this)}>■</button>
          <span className='time-bar'>
            <div className='time-info'>
              <span className='now-time' ref={(span) => {this.nowTime = span}}>0:0</span>
              &nbsp;|&nbsp;
              <span className='total-time' ref={(span) => {this.totalTime = span}}></span>
            </div>
          </span>
          <button className='muted-btn' 
                  onClick={this.handleMuteClick.bind(this)} 
                  ref={(button) => {this.muteBtn = button}}
          >
            静
          </button>
        </div>
      </div>
    )
  }

  componentDidMount() {

  }

  handlePlayClick() {
    if(this.audio.paused) {
      this.playBtn.innerText = '||';
      this.audio.play();
    }else {
      this.playBtn.innerText = '▶';
      this.audio.pause();
    }
  }

  handlePausedClick() {
    this.playBtn.innerText = '▶';
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  handleCanPlay() {
    this.totalTime.innerText = Math.floor(this.audio.duration / 60) + ':' + Math.floor(this.audio.duration % 60);
  }

  handleTimeUpdate() {
    this.nowTime.innerText = Math.floor(this.audio.currentTime / 60) + ':' + Math.floor(this.audio.currentTime % 60);
  }

  handleMuteClick() {
    if(this.audio.muted) {
      this.muteBtn.innerText = '静音'
    }else {
      this.muteBtn.innerText = 'X'
    }
    this.audio.muted = !this.audio.muted
  }
}


export default Audio;