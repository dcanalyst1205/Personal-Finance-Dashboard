import { products } from "@/lib/data";
import { ProductPage } from "@/components/dashboard/ProductPage";

export default function IndexFundsPage() {
    const product = products.find((p) => p.slug === "index-funds")!;
    return <ProductPage product={product} />;
}
