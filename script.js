var dateDiffInDays = function (date1, date2) {
    let d1=new Date(date1)
    let d2=new Date(date2)

    differencemilli=d2.getTime()-d1.getTime();

    totaldiff=Math.round(differencemilli/(1000*3600*24))

    return totaldiff
  };
  
  // Do not change the code below.
  const dateOne = prompt("Enter Start Date.");
  const dateTwo = prompt("Enter End Date.");
  alert(dateDiffInDays(dateOne, dateTwo));
  