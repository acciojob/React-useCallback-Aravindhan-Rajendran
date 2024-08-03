import React, { useState, useCallback } from 'react';
import SkillList from './SkillList';

const UseCallbackComp = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
  const [input, setInput] = useState('');

  const addSkill = useCallback(() => {
    if (input && !skills.includes(input)) {
      setSkills((prevSkills) => [...prevSkills, input]);
      setInput('');
    }
  }, [input, skills]);

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <div>
      <h1 id="heading">Manage Your Skills</h1>
      <input
        id="skill-input"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button id="skill-add-btn" onClick={addSkill}>
        Add Skill
      </button>
      <SkillList skills={skills} />
    </div>
  );
};

export default UseCallbackComp;
