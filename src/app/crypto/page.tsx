import { products } from "@/lib/data";
import { ProductPage } from "@/components/dashboard/ProductPage";

export default function CryptoPage() {
    const product = products.find((p) => p.slug === "crypto")!;
    return <ProductPage product={product} />;
}
