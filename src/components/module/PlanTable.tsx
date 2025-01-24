import { useRouter } from "next/navigation";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";

interface TableType {
	planTier: any;
	primaryCare: any;
	specialtyCare: any;
	emergencyCare: any;
	hospitalization: any;
	chronicDiseaseManagement: any;
	maternityCare?: any;
	mentalHealthServices: any;
	telehealthServices: any;
	additionalCoverage: any;
}
interface dataProps {
	table: TableType[];
}

const PlanTable = ({ table }: dataProps) => {
	const router = useRouter();
	return (
		<section className="py-16 mb-20">
			<div className="container">
				<h2 className="text-3xl font-bold text-center mb-12">
					CHOOSE YOUR PLAN TYPES
				</h2>
				<div className="overflow-x-auto bg-background rounded-lg shadow-sm">
					<Table>
						<TableHeader>
							<TableRow className="bg-primary hover:bg-black transition-colors">
								<TableHead className="text-white h-16 text-base">
									Plan Tier
								</TableHead>
								<TableHead className="text-white h-16 text-base">
									Primary Care
								</TableHead>
								<TableHead className="text-white h-16 text-base">
									Specialty Care
								</TableHead>
								<TableHead className="text-white h-16 text-base">
									Emergency/Urgent Care
								</TableHead>
								<TableHead className="text-white h-16 text-base">
									Hospitalization
								</TableHead>
								<TableHead className="text-white h-16 text-base">
									Chronic Disease Management
								</TableHead>
								{table?.some((item) => item.maternityCare) && (
									<TableHead className="text-white h-16 text-base">
										Maternity/Newborn Care
									</TableHead>
								)}
								<TableHead className="text-white h-16 text-base">
									Mental Health Services
								</TableHead>
								<TableHead className="text-white h-16 text-base">
									Telehealth Services
								</TableHead>
								<TableHead className="text-white h-16 text-base">
									Additional Coverage
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{table.map((plan, index) => (
								<TableRow
									key={index}
									className="hover:bg-muted/50 transition-colors even:bg-muted/5"
								>
									<TableCell className="font-medium text-lg py-6">
										{plan.planTier}
									</TableCell>
									<TableCell className="py-6">{plan.primaryCare}</TableCell>
									<TableCell className="py-6">{plan.specialtyCare}</TableCell>
									<TableCell className="py-6">{plan.emergencyCare}</TableCell>
									<TableCell className="py-6">{plan.hospitalization}</TableCell>
									<TableCell className="py-6">
										{plan.chronicDiseaseManagement}
									</TableCell>
									{plan.maternityCare && (
										<TableCell className="py-6">{plan.maternityCare}</TableCell>
									)}
									<TableCell className="py-6">
										{plan.mentalHealthServices}
									</TableCell>
									<TableCell className="py-6">
										{plan.telehealthServices}
									</TableCell>
									<TableCell className="py-6">
										{plan.additionalCoverage}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
				<div className="text-center mt-8 items-center sm:items-center">
					<Button
						variant="default"
						size="lg"
						className="bg-primary hover:bg-primary"
						onClick={() =>
							router.push("https://register.tillahealth.com/" as any)
						}
					>
						BECOME A MEMBER
					</Button>
				</div>
			</div>
		</section>
	);
};

export default PlanTable;
