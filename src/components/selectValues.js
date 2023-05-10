export const tower = [
  {value: "A", label: "Башня A"},
  {value: "Б", label: "Башня Б"}
]

export const level = []

for (let i = 3; i <=27; i++){
  level.push({value: `${i}`, label: `Этаж ${i}`})
}

export const meetingRoom = []

for (let i = 1; i <=10; i++){
  meetingRoom.push({value: `${i}`, label: `Переговорка ${i}`})
}