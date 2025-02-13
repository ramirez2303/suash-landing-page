import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";

interface LineShadowTextProps
    extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
        MotionProps {
    shadowColor?: string;
    as?: React.ElementType;
}

export function LineShadowText({
    children,
    shadowColor = "black",
    className,
    as: Component = "span",
    ...props
}: LineShadowTextProps) {
    const MotionComponent = motion.create(Component);
    const content = typeof children === "string" ? children : null;

    if (!content) {
        throw new Error("LineShadowText only accepts string content");
    }

    return (
        <MotionComponent
            style={{ "--shadow-color": shadowColor } as React.CSSProperties}
            className={cn(
                "relative z-0 inline-flex",
                "after: text-black dark:text-[#f2f2f2]",
                "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
                "after:bg-[linear-gradient(45deg,transparent_45%,black_45%,black_55%,transparent_0)] after:dark:bg-[linear-gradient(45deg,transparent_45%,white_45%,white_55%,transparent_0)]",
                "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
                "after:animate-line-shadow",
                className
            )}
            data-text={content}
            {...props}
        >
            {content}
        </MotionComponent>
    );
}
