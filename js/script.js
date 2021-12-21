// stores all sonnets
const sonnets =
  ['Sonnet 18: Shall I compare thee to a summers day? Thou art more lovely and more temperate: Rough winds do shake the darling buds of May, And summer’s lease hath all too short a date: Sometime too hot the eye of heaven shines, And often is his gold complexion dimm’d; And every fair from fair sometime declines, By chance or nature’s changing course untrimm’d; But thy eternal summer shall not fade Nor lose possession of that fair thou owest; Nor shall Death brag thou wander’st in his shade, When in eternal lines to time thou growest: So long as men can breathe or eyes can see, So long lives this and this gives life to thee.',

    'Sonnet 30: When to the sessions of sweet silent thought I summon up remembrance of things past, I sigh the lack of many a thing I sought, And with old woes new wail my dear time’s waste: Then can I drown an eye, unused to flow, For precious friends hid in death’s dateless night, And weep afresh love’s long since cancell’d woe, And moan the expense of many a vanish’d sight: Then can I grieve at grievances foregone, And heavily from woe to woe tell o’er The sad account of fore-bemoaned moan, Which I new pay as if not paid before. But if the while I think on thee, dear friend, All losses are restor’d and sorrows end.',

    'Sonnet 129: The expense of spirit in a waste of shame Is lust in action: and till action, lust Is perjured, murderous, bloody, full of blame, Savage, extreme, rude, cruel, not to trust; Enjoyed no sooner but despised straight; Past reason hunted; and no sooner had, Past reason hated, as a swallowed bait, On purpose laid to make the taker mad. Mad in pursuit and in possession so; Had, having, and in quest to have extreme; A bliss in proof, and proved, a very woe; Before, a joy proposed; behind a dream. All this the world well knows; yet none knows well To shun the heaven that leads men to this hell.',

    'Sonnet 130: My mistress’ eyes are nothing like the sun; Coral is far more red, than her lips red: If snow be white, why then her breasts are dun; If hairs be wires, black wires grow on her head. I have seen roses damasked, red and white, But no such roses see I in her cheeks; And in some perfumes is there more delight Than in the breath that from my mistress reeks. I love to hear her speak, yet well I know That music hath a far more pleasing sound: I grant I never saw a goddess go, My mistress, when she walks, treads on the ground: And yet by heaven, I think my love as rare, As any she belied with false compare.',

    'Sonnet 73: That time of year thou mayst in me behold When yellow leaves, or none, or few, do hang Upon those boughs which shake against the cold, Bare ruined choirs, where late the sweet birds sang. In me thou see’st the twilight of such day As after sunset fadeth in the west; Which by and by black night doth take away, Death’s second self, that seals up all in rest. In me thou see’st the glowing of such fire, That on the ashes of his youth doth lie, As the death-bed, whereon it must expire, Consum’d with that which it was nourish’d by. This thou perceiv’st, which makes thy love more strong, To love that well, which thou must leave ere long.'];

// randomizes sonnets
const randomSonnet = Math.floor(Math.random() * sonnets.length)

// stores all questions and answers 
const questions = [
  {
    question: "A?",
    answers: {
      a: "a",
      b: "b",
      c: "c",
      d: "d"
    }
  }

];

function commenceDuel() {
  let i = 0;
  const y = window.prompt('Start Game? Y or N?')
  let answerArray = [];
  let z;
  let q;
  let w;
  let t;
  let v;
  if (y === 'N') {
    console.log('Game Over.')
  }
  if (y === 'Y') {
    while (i < questions.length) {
      console.log("let's get started!")
      break;
    }
    console.group("userAnswers");
    z = window.prompt('How are you doing today? type "A" for good, "B" for bad.')
    if (z === "A") {
      answerArray.push("Good to hear!")
      console.log("Good to hear!")
    } if (z === "B") {
      console.log('well get bettah!')
      answerArray.push("well get bettah!")
    }

    q = window.prompt('Is the sun shining? type "A" for yes, "B" for no.')
    if (q === "A") {
      console.log("It's bright!")
      answerArray.push("It's bright!")
    } if (q === "B") {
      console.log("It's gray!")
      answerArray.push("It's gray!")
    }
    w = window.prompt('xyz? type "A" for yes, "B" for no.')
    if (w === "A") {
      console.log("xyz")
      answerArray.push("xyz")
    } if (w === "B") {
      console.log("zyx")
      answerArray.push("zyx")
    }

    t = window.prompt('abc? type "A" for yes, "B" for no.')
    if (t === "A") {
      console.log("abc")
      answerArray.push("abc")
    } if (t === "B") {
      console.log("cba")
      answerArray.push("cba")
    }

    v = window.prompt('def? type "A" for yes, "B" for no.')
    if (v === "A") {
      console.log("def")
      answerArray.push("def")
    } if (v === "B") {
      console.log("fed")
      answerArray.push("fed")
    }

    console.groupEnd("userAnswers");
    console.log('The above responses are your poem.')
  }

  console.log("It will be compared to Shakespeare's Sonnet. This is Shakespeare's Sonnet:")
  console.log(sonnets[randomSonnet])
  console.log(answerArray)

}



function editorDecides() {
  // need to use .slice method 
  // comparing user poem with Shakespeare Sonnet 
  // if randomSonnet has more words that end in "er" than answerArray 
  // randomSonnet wins -- if answerArray has more words that end in "er" than randomSonnet loses

  // if (randomSonnet > )
}

commenceDuel()


