// types.ts
export interface PlanTier {
	name: string;
	description: string;
}

export interface CoverageDetails {
	intro: string;
}

export interface Description {
	intro: string[];
	planTiers?: PlanTier[];
}
interface HealthConnectData {
	title: string;
	subtitle: string;
	coverageDetails: CoverageDetails;
	description: Description;
}
interface DataProps {
	healthConnectData?: HealthConnectData;
}

const HealthConnectSection = ({ healthConnectData }: DataProps) => {
	return (
		<section className="py-16">
			<div className="container">
				<h2 className="text-3xl font-bold text-center mb-8">
					{healthConnectData?.title}
				</h2>
				<div className="max-w-6xl mx-auto p-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{/* Left Column */}
						<div className="space-y-6">
							<h3 className="text-primary">{healthConnectData?.subtitle}</h3>
							<h1 className="text-4xl font-medium text-muted-foreground ">
								{healthConnectData?.title}
							</h1>

							<div className="space-y-4">
								<h2 className="text-gray-600">Coverage Details:</h2>
								<p className="text-muted-foreground ">
									{healthConnectData?.coverageDetails.intro}
								</p>
							</div>
						</div>

						{/* Right Column */}
						<div className="space-y-6">
							<p className="text-muted-foreground ">
								{healthConnectData?.description.intro.map((item, index) => (
									<li key={index} className="flex items-start gap-2 mb-3">
										<span className="text-muted-foreground ">{item}</span>
									</li>
								))}
							</p>

							{healthConnectData?.description.planTiers && (
								<div className="space-y-4">
									<h2 className="text-gray-600">Plan Tiers Overview</h2>
									<table className="w-full border-collapse">
										<thead>
											<tr className="border-b">
												<th className="py-2 px-4 text-left font-normal text-muted-foreground ">
													Plan Tier
												</th>
												<th className="py-2 px-4 text-left font-normal text-gray-600">
													Description
												</th>
											</tr>
										</thead>
										<tbody>
											{healthConnectData?.description.planTiers?.map(
												(tier, index) => (
													<tr key={index} className="border-b">
														<td className="py-2 px-4 text-gray-600">
															{tier.name}
														</td>
														<td className="py-2 px-4 text-gray-600">
															{tier.description}
														</td>
													</tr>
												)
											)}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HealthConnectSection;
