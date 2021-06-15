const whatTimeIsIt = time => {
    // do code here
    if (time ==="12:00 pm") {
      return "It's noon"
    }
    // else if (time ==="3:49 pm") {
    //   return "It's three past forty nine in the afternoon"
    // }
    else if (time ==='12:00 am') {
      return "It's midnight"
    }
    // else if (time ==="5:31 am") {
    //   return "It's five past thirty one in the morning"
    // }
    // else if (time==="9:11 am") {
    //   return "It's nine past eleven in the morning"
    // }
    let iniTime = time.split(" ")
    let sudahdipisah = iniTime[0].split(":")
  
    let ampm= iniTime[1]
    let jam= parseInt(sudahdipisah[0])
    let menit= parseInt(sudahdipisah[1])
    //
    let kamus = ["","one",'two', 'three', 'four', 'five' ,'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two']
    
    if (ampm == "am") {
      console.log (`It's ${kamus[jam]} pass in the morning`)
    }
    else if (ampm == "pm") {
      console.log (`It's ${kamus[jam]} pass in the afternoon`)
    }
    
    
  
  }
  
  
  // do not change this code below
  const test = (testCase, result) => console.log(testCase === result);
  
  test(whatTimeIsIt("12:00 pm"), "It's noon")
  test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
  test(whatTimeIsIt('12:00 am'), "It's midnight")
  test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
  test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")
  
  