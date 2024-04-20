import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hey there! I'm <b>Nisha Singh</b> a dynamic developer with a knack for both {' '}
            <b>Backend</b> & <b>Frontend </b> development. Presently, I'm thriving as an <b>Associate Manager</b> at
            <b>
              <a className={classes.link} target='_blank' href='https://www.tredence.com'>
                Tredence inc
              </a>
            </b>, where I merge my backend expertise with a passion for crafting exceptional digital experiences.😊
          </p>
          <p className={classes.br}>
            My curiosity for exploring cutting-edge technologies fuels my drive to stay ahead of the curve. Whether it's diving into new frameworks or mastering emerging trends, I'm always eager to broaden my skill set and push boundaries.
          </p>
          <p className={classes.br}>
            In every line of code I write, I prioritize readability, accessibility, and modularity. I believe in writing code that not only functions flawlessly but also serves as a testament to craftsmanship. You'll find evidence of my problem-solving prowess and collaborative spirit on my active GitHub profile.
          </p>
          <p className={classes.br}>
            Let's collaborate and bring innovative ideas to life! 😊
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
