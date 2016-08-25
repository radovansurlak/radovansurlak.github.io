var votes = Math.floor(Math.random()*1000000);
document.getElementById("votes").textContent = votes + ' people voted';
document.getElementById("submit").addEventListener("click", addVote);

var voted = false;

function addVote () {
  if (!voted) {
    votes++;
    voted = !voted;
    document.getElementById("votes").textContent = votes + ' people voted';
    document.getElementById("submit").textContent = 'Thank you for voting :)';
    document.getElementById("submit").style.background = 'rgba(255,146,20,0.9)';
    document.getElementById("submit").style.cursor = 'default';
  }
}

// var div = document.createElement('div');
// div.textContent = "Sup, y'all?";
// div.setAttribute('id', 'note');
// document.getElementById('display_container').appendChild(div);
