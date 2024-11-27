import React from 'react';

import { SkillsbarProps } from '../../../../types/componentTypes';

const skillLevels: SkillsbarProps[] = [
    { title: "TypeScript", level: 70 },
    { title: "Bootstrap", level: 20 },
    { title: "JavaScript", level: 60 },
    { title: "Tailwind", level: 40 },
    { title: "Next.js", level: 40 },
    { title: "HTML", level: 80 },
    { title: "CSS", level: 70 },
    { title: "React.js", level: 20 },
];

export const SkillsBar: React.FC = () => {
    return (
        <div className="skills-bar-container">
            {skillLevels.map((skill) => (
                <div key={skill.title} className="skill-item">
                    <div className="skill-header">
                        <span className="skill-title">{skill.title}</span>
                        <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-background">
                        <div
                            className="skill-bar-foreground"
                            style={{ width: `${skill.level}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsBar;
