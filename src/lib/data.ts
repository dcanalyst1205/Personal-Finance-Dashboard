export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Extreme';

export interface FinancialProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  riskLevel: RiskLevel;
  volatility: RiskLevel;
  apy: number; // Annual Percentage Yield (e.g., 0.05 for 5%)
  color: string; // Hex code or Tailwind class prefix
}

export const products: FinancialProduct[] = [
  {
    id: '1',
    name: 'High-Yield Savings',
    slug: 'savings',
    description: 'Secure, FDIC-insured savings accounts. Best for emergency funds and short-term goals.',
    riskLevel: 'Low',
    volatility: 'Low',
    apy: 0.045,
    color: 'bg-emerald-500',
  },
  {
    id: '2',
    name: 'Government Bonds',
    slug: 'bonds',
    description: 'Fixed-income securities issued by the government. Lower risk with steady returns.',
    riskLevel: 'Low',
    volatility: 'Low',
    apy: 0.052,
    color: 'bg-blue-500',
  },
  {
    id: '3',
    name: 'Index Funds (S&P 500)',
    slug: 'index-funds',
    description: 'Diversified portfolio tracking the S&P 500. Good for long-term growth but follows market swings.',
    riskLevel: 'Medium',
    volatility: 'Medium',
    apy: 0.10,
    color: 'bg-orange-500',
  },
  {
    id: '4',
    name: 'Cryptocurrency',
    slug: 'crypto',
    description: 'Digital currencies like Bitcoin/Ethereum. High potential returns but extreme volatility.',
    riskLevel: 'Extreme',
    volatility: 'Extreme',
    apy: 0.85, // Illustrative high APY for bull run scenarios, or could be lower. Let's say 85% for "risk" demo.
    color: 'bg-indigo-600',
  },
];
