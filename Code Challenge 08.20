function alarm_clock(day_of_week, on_vacation) {
  if ((typeof day_of_week !== "number") || (typeof on_vacation !== "boolean")){
    return "Please give me a number that represents the day and a true or false value for whether or not you're on vacation"
  }
  if ((day_of_week === 1 || day_of_week === 2 || day_of_week === 3 || day_of_week === 4 || day_of_week === 5) && (on_vacation === false)) {
    return "7:00"
  }
  if ((day_of_week === 1 || day_of_week === 2 || day_of_week === 3 || day_of_week === 4 || day_of_week === 5) && (on_vacation === true)) {
    return "10:00"
  }
  if ((day_of_week === 6 || day_of_week === 0) && (on_vacation === false)) {
    return "10:00"
  }
  if ((day_of_week === 6 || day_of_week === 0) && (on_vacation === true)) {
    return "off"
  }
}

console.log(alarm_clock("monday", "false")) // →  "Please give me a number that represents the day and a true or false value for whether or not you're on vacation"

console.log(alarm_clock(1, false)) // → "7:00"

console.log(alarm_clock(5, false)) //→ "7:00"

console.log(alarm_clock(0, false)) // → "10:00"

console.log(alarm_clock(6, true)) // → "off"

console.log(alarm_clock(6, false)) // → "10:00"

console.log(alarm_clock(3, true)) // → "10:00"
