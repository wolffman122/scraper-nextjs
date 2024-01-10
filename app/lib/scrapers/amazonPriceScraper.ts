import { PrismaClient } from "@prisma/client";
import { JSDOM } from 'jsdom';
import * as cheerio from 'cheerio';
import axios from "axios";
import { resolve } from "path";

export async function priceScraper() {
  const prisma = new PrismaClient();

  const models = await prisma.models.findMany({});

  models.forEach(async (model) => {

    const res = await axios.get(model.link);
    const html = await res.data;

    const dom = new JSDOM(html);

    const document = dom.window.document;

    const displayElement = document.querySelector('#apex_offerDisplay_desktop');
    let price = -1;
    if (displayElement != null) {
      const strPrice = displayElement.querySelector('.a-price-whole').textContent + displayElement.querySelector('.a-price-fraction').textContent;
      price = +strPrice;
    }

    console.log(model.modelNumber, model.size, price);


    //console.log('Loop')
    //const response = await axios.get(models[0].link);
    // console.log(model.modelNumber);
    // const $ = cheerio.load(response.data);
    // const coreDisplay = $('#corePriceDisplay_desktop_feature_div');
    // if(coreDisplay.length == 2)
    // {
    //   console.log('Going for price');
    //   const findResults = $('#corePriceDisplay_desktop_feature_div').find('div > div > span > span ')
    //   let test = $('.a-price-whole', findResults[1]).text();
    //   test += $('.a-price-fraction', findResults[1]).text();
    //   console.log(test);
    // }
  });
}