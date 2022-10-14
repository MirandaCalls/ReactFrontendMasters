/**
 * @jest-environment jsdom
 */

import {expect, test} from "@jest/globals";
import {renderHook} from "@testing-library/react-hooks";
import useBreedList from "../useBreedList";

test("gives an empty list with no animal", async () => {
	const {result} = renderHook(() => useBreedList());
	const [breedList, status] = result.current;

	expect(breedList).toHaveLength(0);
	expect(status).toBe("unloaded");
});

test("gives back breeds with an animal", async () => {
	const breeds = [
		"Siamese",
		"Ragdoll",
		"Tabby",
		"Persian"
	];

	fetch.mockResponseOnce(
		JSON.stringify({
			animal: "cat",
			breeds
		})
	);

	const { result, waitForNextUpdate } = renderHook(() => useBreedList("cat"));
	await waitForNextUpdate();

	const [breedList, status] = result.current;
	expect(status).toBe("loaded");
	expect(breedList).toEqual(breeds);
});
