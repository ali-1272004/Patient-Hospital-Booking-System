import React, { useEffect, useRef, useState } from 'react';
import { Container, Row } from "react-bootstrap";

import './Stats.css';

const Stats = () => {
  const statsData = [
    { number: 20, suffix: '+', label: "Years of experience" },
    { number: 95, suffix: '%', label: "Patient satisfaction rating" },
    { number: 5000, suffix: '+', label: "Patients served annually" },
    { number: 10, suffix: '+', label: "Healthcare providers on staff" }
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef([]);

  useEffect(() => {
    statsRef.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            let start = 0;
            const end = statsData[index].number;
            const duration = 1500;
            const stepTime = Math.max(20, Math.floor(duration / end));

            const counter = setInterval(() => {
              start += 1;
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });

              if (start >= end) clearInterval(counter);
            }, stepTime);

            observer.unobserve(element);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(element);
    });
  }, []);

  return (
    <section className="stats-section">
      <Container>
        <Row className="stats-row">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="stat-item-wrapper"
              ref={el => (statsRef.current[index] = el)}
            >
              <div className="stat-item">
                <div className="stat-number">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
