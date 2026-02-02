import { products } from "@/lib/data";
import { ProductPage } from "@/components/dashboard/ProductPage";

export default function SavingsPage() {
    const product = products.find((p) => p.slug === "savings")!;
    return <ProductPage product={product} />;
}
