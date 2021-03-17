function getAtualDate(params) {
  let date = new Date();

  let Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let atualDate = `${Months[date.getMonth()]} ${date.getDate()}`;

  return atualDate;
}

export default getAtualDate;
