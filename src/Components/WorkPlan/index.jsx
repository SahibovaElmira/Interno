import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.css';


const _url ='http://localhost:3000/WorkPlan';


const WorkPlanCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setCards(data);
    });
  }, []);
  return (
    <div className="container">
        <div className="row mb-5 mt-2"></div>
     {cards.map(({ id, title, description }) => {
          return (
            <div
              className={`col-12 col-md-6 col-xl-4  ${styles.WorkPlanCard}`}
              key={id}
            >
              <h3 className={`my-3 ${styles.title}`}>{title}</h3>
              <p>{description}</p>
              </div>
          );
        })}
      </div>
   
  );
};

export default WorkPlanCards;