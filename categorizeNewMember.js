// June 24, 2023
// CodeWars: Categorize New Member (7 kyu challenge)
// Description: The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.


function openOrSenior(data){
  // ...
//   outer loop
  
  var output = [];
  
  for(let i = 0; i < data.length; i++){
//     console.log("Outer loop: " + data[i]);
    
//     for(let j = 0; j < data[i].length; j++){
// //       console.log("Inner loop: " + data[i][j]);
      
//       var membership = data[i];
      
// //       console.log("Check age: " + membership[0]);
// //       console.log("Check handicap: " + membership[1]);
      
      
      
      
//     }
    if(data[i][0] >= 55 && data[i][1] > 7){
      output.push("Senior");
    } else if(data[i][0] < 55 && data[i][1] > 7){
      output.push("Open");
    } else{
      output.push("Open");
    }
    
    
  }
  console.log(output);
  return output;
//   inner loop
//   inner = inner[outer]
//   check inner[0] and inner[1]
  
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);

// ----- Best Practices ----- //

// function openOrSenior(data){
//   function determineMembership(member){
//     return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
//   }
//   return data.map(determineMembership);
// }

// function openOrSenior(data){
//   return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
// }

// ----- Best Practices ----- //