import React, { Component } from 'react';
import classes from './Interest.module.css';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
        <div className={classes.web}>
          <h3>Frontend Develpoment</h3>
          <ul className={classes.ulStyle}>
            <li>Proficiency in HTML, CSS, and JavaScript, the foundational languages for building web interfaces.</li>
            <li>Experience with modern frontend frameworks and libraries such as React.js for building dynamic and responsive user interfaces.</li>
            <li>Knowledge of responsive design principles to ensure seamless experiences across various devices and screen sizes.</li>
            <li>Understanding of web accessibility standards and best practices for creating inclusive user experiences.</li>
          </ul>
        </div>
        <div className={classes.app}>
          <h3>Backend Development</h3>
          <ul className={classes.ulStyle}>
            <li>Proficiency in server-side programming languages such as Node.js, Python, or PHP (Laravel).</li>
            <li>Experience with designing and building RESTful APIs to facilitate communication between the frontend and backend systems.</li>
            <li>Knowledge of server-side frameworks and libraries for tasks like routing, authentication, and database interactions.</li>
            <li>Understanding of database systems such as MySQL, PostgreSQL for storing and managing application data.</li>
          </ul>
        </div>
        <div className={classes.other}>
          <h3>Database Management</h3>
          <ul className={classes.ulStyle}>
            <li>Proficiency in writing SQL queries for data manipulation, retrieval, and management.</li>
            <li>Knowledge of database design principles including normalization, indexing, and optimization.</li>
            <li>Understanding of NoSQL databases such as MongoDB, Redis, or Firebase for handling unstructured or semi-structured data.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
