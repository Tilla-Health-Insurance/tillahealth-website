// Define the structure for sublinks
export interface Sublink {
	id: number;
	label: string;
	href: string | null;
}

// Define the structure for links
export interface Link {
	id: number;
	label: string;
	href: string | null;
	description: string | null;
	icon: string | null;
	sublinks: Sublink[];
}

// Define the structure for sections
export interface Section {
	id: number;
	title: string;
	links: Link[];
}
export interface Footer {
	id: number;
	title: string;
	description: string;
	learnMoreLabel: string;
}

// Define the structure for content
export interface Content {
	id: number;
	header: string;
	description: string;
	sections: Section[];
	footer: Footer;
}

// Define the structure for menu items
export interface MenuItem {
	id: number;
	title: string;
	icon: string;
	href: string | null;
	content: Content | null;
}

// Define the structure for the menu
export interface Menu {
	menuItems: MenuItem[];
}
