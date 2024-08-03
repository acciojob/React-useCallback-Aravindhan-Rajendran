import React, { useCallback } from 'react';

const SkillList = ({ skills, onSkillDelete }) => {
  const deleteSkill = useCallback(
    (skillToDelete) => {
      onSkillDelete(skillToDelete);
    },
    [onSkillDelete]
  );

  return (
    <ul id="skill-list">
      {skills.map((skill, idx) => (
        <li
          key={idx}
          id={`skill-number-${idx}`}
          onClick={() => deleteSkill(skill)}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
