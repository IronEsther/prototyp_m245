import React, { useState } from 'react';

const ExamDates = () => {
  const [dates, setDates] = useState([]);

  const handleAddDate = (event) => {
    event.preventDefault();
    const newDate = event.target.date.value;
    setDates([...dates, newDate]);
    event.target.date.value = '';
  };

  return (
    <section>
      <h2>Exam Dates</h2>
      <form onSubmit={handleAddDate}>
        <input type="date" name="date" />
        <button type="submit">Add Date</button>
      </form>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </section>
  );
};

export default ExamDates;