const {
  setUpDay,
  makeAppointment,
  getAppointment,
  getLengthOfDay,
  getFirstAppointmentTime,
  getLastAppointmentTime,
} = require("./day");

// test that all the appointments on an empty day are available
test("empty day", () => {
  setUpDay();
  const start = getFirstAppointmentTime();
  const length = getLengthOfDay();
  for (let time = start; time < length; time++) {
    expect(getAppointment(time).name).toBe("available");
    expect(getAppointment(time).length).toBe(0);
  }
});

// test that we can make an appointment at the start of an empty day
test("Make Appointment at start of day", () => {
  setUpDay();
  const time = getFirstAppointmentTime();
  const result = makeAppointment(time, "John", 1);
  expect(result).toBe(true);
  expect(getAppointment(time).name).toBe("John");
  expect(getAppointment(time).length).toBe(1);
});

// test that we can make an appointment at the start of an empty day
test("Make Appointment before the start of day", () => {
  setUpDay();
  const time = getFirstAppointmentTime() - 1;
  const result = makeAppointment(time, "John", 1);
  expect(result).toBe(false);
});
