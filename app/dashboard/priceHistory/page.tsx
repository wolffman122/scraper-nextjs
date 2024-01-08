import { priceScraper } from "@/app/lib/scrapers/amazonPriceScraper";

export default async function Page() {
    priceScraper();

    return <h1>Price History</h1>
    
}