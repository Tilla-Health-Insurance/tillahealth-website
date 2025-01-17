// types.ts

// Define a union type for detail keys
export type DetailKey =
	| "our-health-insurance-plan"
	| "what-makes-us-different-diaspora"
	| "become-a-member"
	| "diaspora-benefits";

// Interface for general detail structure
export interface Detail {
	title: string;
	desc: string;
	defaultValue: any;
	services?: ServiceItem[];
	healthConnectData?: HealthConnectData;
}

// Interface for service items
export interface ServiceItem {
	icon: any; // Update this type to a more specific type if possible (e.g., React component type)
	title: string;
	description: string;
}

// Interface for plan tiers
export interface PlanTier {
	name: string;
	description: string;
}

// Interface for coverage details
export interface CoverageDetails {
	intro: string;
}

// Interface for descriptions
export interface Description {
	intro: string;
	planTiers: PlanTier[];
}

// Interface for health connect data
export interface HealthConnectData {
	title: string;
	subtitle: string;
	coverageDetails: CoverageDetails;
	description: Description;
}
