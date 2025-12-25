
export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface ITProjectOffer {
  price: number;
  deliverables: string[];
  formLink: string;
}
