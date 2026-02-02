import Link from "next/link";
import { products } from "@/lib/data";
import { RiskCard } from "@/components/dashboard/RiskCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Portfolio Overview</h1>
        <p className="text-slate-400">Compare risk profiles and projected returns across different asset classes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            <RiskCard
              title={product.name}
              description={product.description}
              riskLevel={product.riskLevel}
              volatility={product.volatility}
              apy={product.apy}
              color={product.color}
            />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={`/${product.slug}`}>
                <Button variant="secondary" size="sm" className="gap-2">
                  Details <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
