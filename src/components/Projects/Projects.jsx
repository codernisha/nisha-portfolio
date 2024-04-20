import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
import classes from './Projects.module.css';
import profilee from '../images/profilee.png';
import github from '../images/github.png';

// Web projects
const webItem = [
  {
    link: 'https://www.profilee.info/',
    title: 'Profilee - An OS link in bio',
    techStack: 'Tech Stack: Next JS, Tailwind, Typescript, Prisma, AWS S3',
    desc: 'Profilee is an open source profile link bio page builder',
    image: profilee,
    color: '#0FFFFF',
    githubLink: 'https://github.com/mittalsam98/profilee'
  },
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>WEB APP PROJECTS</h2>
        <ul className={classes.cards}>
          {webItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
    </div>
  );
}
