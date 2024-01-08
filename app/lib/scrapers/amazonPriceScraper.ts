import { PrismaClient } from "@prisma/client";
import * as cheerio from 'cheerio';
import axios from "axios";
import { resolve } from "path";

export async function priceScraper() {

    const $ = cheerio.load(
        `<div id=test>
            Hello
            <div>
                <h1>header</h1>
                <h1 class="special">header 2</h1>
                <p>Paragraph</p>
            </div>
        </div>`,
      );
      
    const contents = $('#test').find('div > h1').contents();
    const narrow = $('.special', contents).html();
    //const narrow = $('.special').html();
    console.log(narrow);

    const prisma = new PrismaClient();

    const models = await prisma.models.findMany({});

    const response = await axios.get(models[0].link);
    const ch = cheerio.load(response.data);

    //console.log(ch('#corePriceDisplay_desktop_feature_div').contents());
    ch('#corePriceDisplay_desktop_feature_div')
    .find('div > span > span > span').each((index, element)=>{
        //console.log('index', index);
        //console.log(ch(element).html());
    });
}