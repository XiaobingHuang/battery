import MockAdapter from "axios-mock-adapter";

export default function (axios) {
  const mockAdapter = new MockAdapter(axios, { delayResponse: 500 });

  return mockAdapter;
}
