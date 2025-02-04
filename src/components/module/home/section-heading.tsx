import { TitleUnderLine } from "@/components/shared/Decorations/TitleUnderLine";

interface SectionHeadingProps {
	title: string;
	description?: string;
	className?: string;
}

export function SectionHeading({
	title,
	description,
	className,
}: SectionHeadingProps) {
	return (
		<div className={className}>
			<h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
				{title}
				<TitleUnderLine width="10%" />
			</h2>
			{description && <p className="text-lg ">{description}</p>}
		</div>
	);
}
