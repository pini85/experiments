const fetch = require("node-fetch");
const swapi = require("./script2.js");
//had a problem that it took more than 5 seconds and jest is configured to be 5 seconds. So I had to manually tell jest to wait longer.
jest.setTimeout(50000);

//We write return here because we tell jest. Wait until this promise is returned then finish the test. If we didn't do this it will finish the test with a pending promise.
describe("This is the starwars test", () => {
  //expect.assertions means that we expect to get one assertion if we had multiple assertions we should increment the assertions in the argument. We should always write that when dealing with asyncouronous tests.

  //   it("getting all the people count with async await", () => {
  //     expect.assertions(1);
  //     return swapi.asyncSearchPeople(fetch).then(data => {
  //       expect(data.count).toBe(87);
  //     });
  //   });

  //You can also tell jest to finish the test only when the done function is called. So it will wait until the function is finished then the done is called

  it("getting all the people count with .then", done => {
    expect.assertions(2);
    swapi.searchPeople(fetch).then(data => {
      expect(data.count).toBe(87);

      expect(data.results.length).toBeGreaterThan(5);
      done();
    });
  });
});

//When testing asyncuoronus data. It can take a long time on getting the data from the api. So you don't want to wait everytime. So what we can do is Mock the fetch.
//jest.fn() is creating a new mock instance.

it("mocking the fetch and receiving count and length of results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
    })
  );
  expect.assertions(4);
  //here i can spy on the mockFetch to see how many calls there has been etc
  return swapi.asyncSearchPeople(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith("https://swapi.co/api/people");
    expect(data.count).toEqual(87);
    expect(data.results.length).toBe(6);
  });
});
