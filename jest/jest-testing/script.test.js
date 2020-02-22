const googleSearch = require("./script");
// You wouldnt import your whole database to the test. So you usually have a dummy db that you will test with. This is also why we gave a second parameter to our function to insert a db of your liking, so we can test it.
const dummyDB = [
  "www.dogs.com",
  "www.cheesypuffs.com",
  "www.ilovedogs.com",
  "www.dogsarethebest.com"
];

it("this is a silly test", () => {
  expect("hello").toBe("hello");
});
describe("googleSearch function", () => {
  it("searching google", () => {
    expect(googleSearch("test", dummyDB)).toEqual([]);
    expect(googleSearch("dogs", dummyDB)).toEqual([
      "www.dogs.com",
      "www.ilovedogs.com",
      "www.dogsarethebest.com"
    ]);
  });

  it("should return an empty array fro null and undefined", () => {
    expect(googleSearch(undefined, dummyDB)).toEqual([]);
    expect(googleSearch(null, dummyDB)).toEqual([]);
  });

  it("should not return more than 3 items", () => {
    expect(googleSearch(".com", dummyDB).length).toEqual(3);
  });
});
