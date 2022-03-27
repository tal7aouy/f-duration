import { format } from "../src/index"
describe("format test", () => {
  it("it works", () => {
    expect(format(999)).toEqual("0:00") //anything under a second is 0:00
    expect(format(1000)).toEqual("0:01") //check 1000 milliseconds is a secon
    expect(format(1000 * 2 - 1)).toEqual("0:01") //rounds 1999 down to 0:01
    expect(format(1000 * 60)).toEqual("1:00") //check 60 seconds is a minute
    expect(format(1000 * 60 - 1)).toEqual("0:59") //check 59 seconds looks ok
    expect(format(1000 * 60 * 60)).toEqual("1:00:00") //check 60 minutes is an hour
    expect(format(1000 * 60 * 60 - 1)).toEqual("59:59") //check 59 minutes looks ok
    expect(format(1000 * 60 * 60 * 24)).toEqual("1:00:00:00") //check 24 hours is a day
    expect(format(1000 * 60 * 60 * 24 - 1)).toEqual("23:59:59") //check 23 hours looks okay
    expect(format(1000 * 60 * 60 * 24 * 365)).toEqual("365:00:00:00") //check 365 days is too long to care
  })
  it("it works with negative durations", () => {
    expect(format(-999)).toEqual("0:00") //anything under a second is 0:00
    expect(format(-1000)).toEqual("-0:01") //check -1000 milliseconds is a secon
    expect(format(-1000 * 2 + 1)).toEqual("-0:01") //rounds -1999 down to -0:01
    expect(format(-1000 * 60)).toEqual("-1:00") //check -60 seconds is a minute
    expect(format(-1000 * 60 + 1)).toEqual("-0:59") //check -59 seconds looks ok
    expect(format(-1000 * 60 * 60)).toEqual("-1:00:00") //check -60 minutes is an hour
    expect(format(-1000 * 60 * 60 + 1)).toEqual("-59:59") //check -59 minutes looks ok
    expect(format(-1000 * 60 * 60 * 24)).toEqual("-1:00:00:00") //check -24 hours is a day
    expect(format(-1000 * 60 * 60 * 24 + 1)).toEqual("-23:59:59") //check -23 hours looks okay
    expect(format(-1000 * 60 * 60 * 24 * 365)).toEqual("-365:00:00:00") //check -365 days is too long to care
  })
  it("it works with leading zeros", () => {
    expect(format(999, { leading: true })).toEqual("00:00") //anything under a second is 0:00
    expect(format(1000, { leading: true })).toEqual("00:01") //check 1000 milliseconds is a secon
    expect(format(1000 * 2 - 1, { leading: true })).toEqual("00:01") //rounds 1999 down to 0:01
    expect(format(1000 * 60, { leading: true })).toEqual("01:00") //check 60 seconds is a minute
    expect(format(1000 * 60 - 1, { leading: true })).toEqual("00:59") //check 59 seconds looks ok
    expect(format(1000 * 60 * 60, { leading: true })).toEqual("01:00:00") //check 60 minutes is an hour
    expect(format(1000 * 60 * 60 - 1, { leading: true })).toEqual("59:59") //check 59 minutes looks ok
    expect(format(1000 * 60 * 60 * 24, { leading: true })).toEqual("1:00:00:00") //check 24 hours is a day
    expect(format(1000 * 60 * 60 * 24 - 1, { leading: true })).toEqual(
      "23:59:59"
    ) //check 23 hours looks okay
    expect(format(1000 * 60 * 60 * 24 * 365, { leading: true })).toEqual(
      "365:00:00:00"
    ) //check 365 days is too long to care
  })
})
