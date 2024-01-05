import { fetchModelsByBrandId } from "./data";
import { ModelField } from "./definitions";

export async function changeBrandOptionHandler(value: string,
  setBrand: React.Dispatch<React.SetStateAction<string>>,
  setModels: React.Dispatch<React.SetStateAction<ModelField[]>>) {
  console.log('ChangeBrandOptionHandler', value)
  setBrand(value);
  const models = await fetchModelsByBrandId(value);

  const modelFields = models.map((m) => {
    return {
      id: m.id,
      modelNumber: m.modelNumber,
      size: m.size
    };
  });

  console.log(modelFields);


  setModels(modelFields);
}