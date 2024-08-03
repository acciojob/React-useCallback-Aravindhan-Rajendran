import React, { useCallback } from 'react';

const SkillList = ({ skills }) => {
  const deleteSkill = useCallback(
    (skillToDelete) => {
      skills = skills.filter((skill) => skill !== skillToDelete);
      setSkills(skills);
    },
    [skills]
  );

  return (
    <ul>
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
