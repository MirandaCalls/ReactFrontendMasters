import { useState, useEffect } from "react";
import { Animal, BreedListAPIResponse } from "./ApiResponsesTypes";

const localCache: {
  [index: string]: string[];
} = {};

type Status = "unloaded" | "loading" | "loaded";

export default function useBreedList(animal: Animal) {
  const [breedList, setBreedList] = useState([] as string[]);
  const [status, setStatus] = useState("unloaded" as Status);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      void (async () => {
        setBreedList([]);
        setStatus("loading");

        const res = await fetch(
          `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );
        const json = (await res.json()) as BreedListAPIResponse;
        localCache[animal] = json.breeds || [];
        setBreedList(localCache[animal]);
        setStatus("loaded");
      })();
    }
  }, [animal]);

  return [breedList, status] as [string[], Status];
}
