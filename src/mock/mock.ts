// const faker = require("faker");

// @ts-ignore
const mocks = {
  BusinessEntity: () => {
    return {
      beId: () => 2334,
      name: () => "Company A",
    };
  },
  Self: () => {
    return {
      userId: () => 123,
      userName: () => "JohnDoe123",
      userFirstName: () => "John",
      userLastName: () => "Doe",
      userEmail: () => "johndoe@gmail.com",
      isVerified: () => true,
      currentBeContextId: () => 234,
      currentBeContextName: () => "Customer A",
      availableBeContext: [...new Array(2)],
    };
  },
};

exports.mocks = mocks;
