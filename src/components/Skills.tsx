import ImageLogo from "./ImageLogo";

export type SkillsType = { name: string; src: string };
type SkillsProps = {
    skills: SkillsType[];
    gridCols: number;
};

export default function Skills({ skills, gridCols }: SkillsProps) {
    const mod = skills.length % gridCols;
    const visibleSkills = skills.slice(0, skills.length - mod);
    return (
        <>
            {visibleSkills.map((data) => (
                <ImageLogo key={data.name} src={data.src} name={data.name} />
            ))}
        </>
    );
}
