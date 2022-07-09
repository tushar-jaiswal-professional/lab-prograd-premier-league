let member = players;
let member_length = member.length;

//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  return [managerName,managerAge,currentTeam,trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length===0){
    return null;
  }
  let form = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
  return form;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
let filterByDebut = (year) => {
  let filterByDebut = []

  for(let i=0;i<member_length;i++){
      if(member[i].debut === year){
         filterByDebut.push(member[i]);
      }
  }
  return filterByDebut;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos=''){
  if(pos===''){  
    return [];
  }
  let filterPosition = []
  for(let i=0;i<member_length;i++){
    try{
      if(member[i].position===pos){
        filterPosition.push(member[i]);
      }
    }
    catch(e){
      return [];
    }
  }
  return filterPosition;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award=''){
  if(award===''){
    return [];
  }
  let award_winner = []
  for(let i=0;i<member_length;i++){
    for(let j=0;j<member[i].awards.length;j++){
      if(member[i].awards[j].name === award){
        award_winner.push(member[i]);
      }
    }
  }
  return award_winner;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(award,count){
  let filterAwardTimes = []
  for(let i=0;i<member_length;i++){
    let count_times = 0;
    for(let j=0;j<member[i].awards.length;j++){
      if(member[i].awards[j].name === award){
        count_times+=1;
      }
    }
    if(count_times === count){
      filterAwardTimes.push(member[i]);
    }
  }
  return filterAwardTimes;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award='',country=''){
  if(award==='' || country===''){
    return [];
  }
  let award_country = []
  for(let i=0;i<member_length;i++){
    for(let j=0;j<member[i].awards.length;j++){
      if(member[i].awards[j].name === award && member[i].country===country){
        award_country.push(member[i]);
      }
    }
  }
  return award_country;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(times='',team='',age=''){
  var award_team_age = member.filter(member => (member.age < age && member.team == team && member.awards.length >= times));
  return award_team_age;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  for(let i=0;i<players.length;i++){
    for(let j=i+1;j<players.length;j++){
      if(players[i].age < players[j].age){
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function SortPlayersOrderofAwards(){
  return orderBy(players,"awards.length","desc").map(({awards})=>awards);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  var data = players.filter(player => player.age > age);
  return data;
}