fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const reactionScore = document.querySelector('.summary__component__score--var--reaction');
    reactionScore.textContent = data[0].score;

    const memoryScore = document.querySelector('.summary__component__score--var--memory');
    memoryScore.textContent = data[1].score;

    const verbalScore = document.querySelector('.summary__component__score--var--verbal');
    verbalScore.textContent = data[2].score;

    const visualScore = document.querySelector('.summary__component__score--var--visual');
    visualScore.textContent = data[3].score;
  })
  .catch(error => console.error(error));