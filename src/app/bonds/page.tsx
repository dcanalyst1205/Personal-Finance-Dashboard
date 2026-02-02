import { products } from "@/lib/data";
import { ProductPage } from "@/components/dashboard/ProductPage";

export default function BondsPage() {
    const product = products.find((p) => p.slug === "bonds")!;
    return <ProductPage product={product} />;
}
