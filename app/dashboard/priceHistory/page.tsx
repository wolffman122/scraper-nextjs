import { fetchModelsWithPH } from "@/app/lib/data";
import { PriceHistoryTable } from "@/app/ui/priceHistory/table";

export default async function Page() {
    //priceScraper();
    const models = await fetchModelsWithPH();
    return <PriceHistoryTable models={ models }/>
    
}