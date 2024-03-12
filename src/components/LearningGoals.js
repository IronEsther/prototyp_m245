import React, { useState } from 'react';

const LearningGoals = () => {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (event) => {
    event.preventDefault();
    const newGoal = event.target.goal.value;
    setGoals([...goals, newGoal]);
    event.target.goal.value = '';
  };

  return (
    <section>
      <h2>Learning Goals</h2>
      <form onSubmit={handleAddGoal}>
        <input type="text" name="goal" placeholder="Enter a learning goal" />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </section>
  );
};

export default LearningGoals;