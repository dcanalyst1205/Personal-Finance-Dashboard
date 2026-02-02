import { FinancialProduct } from "@/lib/data";
import { RiskCard } from "@/components/dashboard/RiskCard";
import { ProjectionCalculator } from "@/components/dashboard/ProjectionCalculator";
import { Badge } from "@/components/ui/badge";

interface ProductPageProps {
    product: FinancialProduct;
}

export function ProductPage({ product }: ProductPageProps) {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
                    <p className="text-slate-400 max-w-2xl">{product.description}</p>
                </div>
                <Badge variant="outline" className="text-lg px-4 py-1 border-slate-700 bg-slate-900 text-slate-300">
                    {product.slug.toUpperCase()}
                </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <RiskCard
                        title="Risk Analysis"
                        description={`Detailed risk profile for ${product.name}.`}
                        riskLevel={product.riskLevel}
                        volatility={product.volatility}
                        apy={product.apy}
                        color={product.color}
                    />
                </div>
                <div className="lg:col-span-2">
                    <ProjectionCalculator product={product} />
                </div>
            </div>
        </div>
    );
}
