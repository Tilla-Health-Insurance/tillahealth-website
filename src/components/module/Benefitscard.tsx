import { ArrowRightCircle } from "lucide-react";

interface BenefitsSectionProps {
	title: string;
	items: Item[];
}

interface Item {
	title?: string;
	sub: string[];
	desc?: string;
}
export default function BenefitsSection({
	title,
	items,
}: BenefitsSectionProps) {
	return (
		<div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/50 transition-all duration-300 p-6 sm:p-8 min-h-fit hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5">
			<h2 className="text-xl sm:text-2xl font-bold mb-8 text-primary bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-lg border-l-4 border-primary">
				{title}
			</h2>
			<ul className="space-y-8">
				{items.map((item, index) => (
					<li
						key={index}
						className="flex flex-col gap-4 animate-fadeIn"
						style={{ animationDelay: `${index * 150}ms` }}
					>
						{item.title && (
							<div className="text-foreground text-lg sm:text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 w-full p-3 sm:p-4 rounded-lg shadow-lg transform hover:scale-[1.01] transition-transform duration-200">
								{item.title}
							</div>
						)}
						{item.desc && (
							<span className="text-foreground/90 text-base sm:text-lg px-2">
								{item.desc}
							</span>
						)}
						<ul className="space-y-3 sm:space-y-4">
							{item.sub.map((sub, subIndex) => (
								<li
									key={subIndex}
									className="flex items-start gap-3 group"
									style={{
										animationDelay: `${index * 150 + subIndex * 100}ms`,
									}}
								>
									<ArrowRightCircle className="h-5 w-5 flex-shrink-0 text-primary group-hover:text-primary/80 group-hover:translate-x-1 transition-all duration-200 mt-1" />
									<span className="text-foreground/80 group-hover:text-foreground transition-colors duration-200">
										{sub}
									</span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
