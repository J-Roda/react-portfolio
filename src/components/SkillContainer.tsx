type SkillContainerProps = {
    isHidden: boolean;
    gridCols: number;
    children: React.ReactNode;
};

export default function SkillContainer({
    isHidden,
    gridCols,
    children,
}: SkillContainerProps) {
    return (
        <div
            className={`bg-[#fafafa] xl:mx-5 2xl:mx-0 rounded grid grid-cols-${gridCols} col-span-2 gap-5 p-3 ${
                isHidden ? "block" : "hidden"
            }`}
        >
            {children}
        </div>
    );
}
