import { initializeTimes, updateTimes } from "./availableTimesReducer";

test('initializes the appropriate times', () => {
    const availableTimes = initializeTimes()
    expect(availableTimes).toEqual(["17:00","18:00","19:00","20:00","21:00"])
})

test('updates times correctly when provided the UpdateDate action type', () => {
    const newTimes = updateTimes({}, {type: "UpdateDate"})
    expect(newTimes).toEqual(["17:00","18:00","19:00","20:00","21:00"])
})