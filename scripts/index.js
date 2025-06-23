

fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
)
    .then((response) => response.json())
    .then((data) => {
        // Use the data here
    })
    .catch((error) => {
        // Handle the error here
    });