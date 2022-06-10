const ApiToken =
  "16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f";
const EmployeeId = "b99a6cd9-3a3d-4635-9eea-e089c90ac45a";
const configHeaders = {
  headers: { Authorization: `Bearer ${ApiToken}` },
};

const clockInContentBodyRequest = {
  employeeId: EmployeeId,
  workEntryIn: {
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
};

const clockOutContentBodyRequest = {
  employeeId: EmployeeId,
  workEntryOut: {
    coordinates: {
      latitude: null,
      longitude: null,
    },
  },
};

export { configHeaders, clockInContentBodyRequest, clockOutContentBodyRequest };
