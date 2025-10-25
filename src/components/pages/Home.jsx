import { useEffect, useState } from "react";
import SkillCard from "../SkillCard";
import HeroSlider from "../HeroSlider";
import TopProviders from "../TopProviders";
import HowItWorks from "../HowItWorks";
import SkillCategories from "../SkillCategories";

export default function Home() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("../data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="">
      <HeroSlider />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      </section>

      <SkillCategories />
      <TopProviders />
      <HowItWorks />
    </div>
  );
}

