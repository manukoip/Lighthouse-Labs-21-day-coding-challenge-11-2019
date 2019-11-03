const doorToDoor = (volunteers, neighbourhoods) => {
    return neighbourhoods.length/volunteers.length;
  }
 

const interviewAnswer = (topic) => {
  switch(topic) {
    case "arts funding":
      return "We'll have to get creative!"
      break;
    case "economy":
      return "Time is money."
      break;
    case "transportation":
      return "It's going to be a long road, so we better get moving."
      break;
    default:
      return "QUACK!";
  }
}

const castVote = (name, votes) => {
 switch(name) {
    case "Tim":
      votes[0]++;
      return votes
      break;
    case "Sally":
      votes[1]++;
      return votes
      break;
    case "Beth":
      votes[2]++;
      return votes
      break;
    default:
      return votes;
  }
}
