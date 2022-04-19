const toDateFormat = (date) => {
  const match= /^([0-9]{4,}-[0-9]{2,}-[0-9]{2,}T.*)$/.test(date)
  if(match){
    const toDate = new Date(date);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      toDate
    );
    let month = new Intl.DateTimeFormat("en", { month: "short" }).format(
      toDate
    );
    let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(toDate);
    return day + "-" + month + "-" + year;
  }
  return 'unvalid date';
};

export default toDateFormat;
