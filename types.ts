export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface CalculatorState {
  monthlyIncome: number;
  burnoutYears: number;
  relationshipStatus: number; // 0-10 scale
}
