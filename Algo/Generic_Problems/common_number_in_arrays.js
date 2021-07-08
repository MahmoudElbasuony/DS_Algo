function findCommon(usersHistory) { /// let's refer to the number of the biggest visits hotels among users is n
  const users_length = usersHistory.length;
  const result = [];
  const hotelMap = new Map();
  usersHistory.forEach(userVisits => {   // N*n        
    userVisits.forEach(hotelId => {        
      if (hotelMap.has(hotelId)) {
        hotelMap.set(hotelId, hotelMap.get(hotelId) + 1);
      } else {        
        hotelMap.set(hotelId, 1);
      }
    });
  });
  hotelMap.forEach((visitsCount, hotelId) => {
    if (visitsCount === users_length) result.push(hotelId);
  });
  return result;
}

console.log(
  findCommon([
    [2, 3, 1],
    [2, 5, 3],
    [2, 3, 1],
  ])
);
