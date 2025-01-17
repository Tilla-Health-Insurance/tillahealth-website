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
		<div className="bg-white rounded-lg  hover:shadow-xl p-6 md:h-[85rem] ">
			<h2 className="text-xl font-semibold mb-4 text-crimson-600 border-b border-crimson-200 pb-2">
				{title}
			</h2>
			<ul className="space-y-2">
				{items.map((item, index) => (
					<li key={index} className="flex flex-col  gap-2">
						{item.title && (
							<div className="text-white text-xl bg-primary w-full p-2 text-center">
								{item.title}
							</div>
						)}
						<span className="text-gray-700">{item.desc}</span>
						<ul className="space-y-2">
							{item.sub.map((sub, index) => (
								<li key={index} className="flex items-start gap-2">
									<ArrowRightCircle className="h-4 w-4 text-primary items-center flex-shrink-0" />
									<span className="text-gray-700">{sub}</span>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}
