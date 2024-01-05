import axios from "axios";
import { WDAmazonData } from "../definitions";

export async function amazonScraper(link: string) : WDAmazonData {

    let scraperCode = '';
    let modelNumber = '';
    let size = '';
    let cacheSize = '';
    let productTitle = "";

    const scraperCodePattern = new RegExp(/(?:[d][p][\/]([a-zA-z0-9]{1,}))/g);
    let matchScraperCode = scraperCodePattern.exec(link);

    if(matchScraperCode != null)
        scraperCode = matchScraperCode[1];

    await axios.get(link).then(function (response) {
        const something =/(?<=\<span id="productTitle" class="a-size-large product-title-word-break">).*?(?=\<\/span\>)/g;
        [...response.data.matchAll(something)].forEach(title => 
                productTitle = title[0]
        );
    });

    // Model Number
    const modelNumberPatter = /([W][D][a-zA-z0-9]{6,})/g;
    let matchModelNumber;
    while((matchModelNumber = modelNumberPatter.exec(productTitle)) != null)
        modelNumber = matchModelNumber[0];
    
    // Size
    const hardDrivePattern =/(\d{1,})(?:[TB]{2})/g;
    let matchSize;
    while((matchSize = hardDrivePattern.exec(productTitle)) != null)
        size = matchSize[0];

    // Cache Size
    const cahceSizePattern = /(\d{2,})(?: MB)/g;
    let matchCahceSize;
    while((matchCahceSize = cahceSizePattern.exec(productTitle)) != null)
        cacheSize = matchCahceSize[0];

    return {
        modelNumber: modelNumber,
        scraperCode: scraperCode,
        size: size,
        cacheSize: cacheSize
    };
}