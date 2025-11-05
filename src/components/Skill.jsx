import { useState } from "react";

const Skill = () => {
    const skills = ["python", "java", "javascript", "kotlin"]
    const [skill, setSkill] = useState(skills)

    const handleClick = () => {
        const newSkill = [
            ...skill, 'spring boot'
        ]
        setSkill(newSkill)
    }

    return (
        <div>
            <ul className="m-5">
                <input type="checkbox" />
                {skill.map((item, indx) => (
                    <li key={indx}>{item}</li>
                ))}
                <button onClick={handleClick}>add skill</button>
            </ul>
        </div>
    );
};

export default Skill;