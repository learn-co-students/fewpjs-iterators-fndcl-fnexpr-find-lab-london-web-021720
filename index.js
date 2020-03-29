function superbowlWin(record)
{
  let year_won = record.find(year => year.result === "W")
  return year_won ? year_won.year : undefined
}