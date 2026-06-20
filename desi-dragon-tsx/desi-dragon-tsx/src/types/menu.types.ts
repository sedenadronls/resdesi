export interface MenuItem {
  name: string;
  price: string; // formatted as "75 / 120" or single value "90"
  chefPick?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface SignatureDish {
  name: string;
  description: string;
  price: string;
}

export interface Review {
  name: string;
  role: string;
  quote: string;
  initial: string;
}
