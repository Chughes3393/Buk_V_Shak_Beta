# Buk_V_Shak_Beta
Console version of Bukowski V Shakespeare

Charles (Hank) Bukowski & William (Billy) Shakespeare could not be more different poets. For starters, they lived about 300 years apart, Shakespeare in Elizabethan England, Bukowski in California in the mid-20th century. Two, well Shakespeare is SHAKESPEARE. Name another poet (besides Dante or Homer) that even comes close to his style or ingenuity — You can’t.

Charles Bukowski on the other hand is best known for his writings on alcohol and generally just being a gross old man. (For more information on his debauched lifestyle, just read any of his books.)

But did you know that Bukowski and Shakespeare both liked to street fight? And since we can’t watch Shakespeare and Bukowski duke it out for poetic supremacy in the 21st century, we can use the internet to have them fight it out virtually, and poetically. 

But wait, Bukowski got too drunk and needs your help writing his poem to try and beat Shakespeare. That is you come in. 

Help Bukowski write his poem by answering questions 1-10. This will write a poem that you and Hank (mostly you) come up with. All Shakespeare is going to do is reach into his bag of Sonnets and randomly select one. Once both of these conditions are met, our referee (the editor) will select which poem he thinks is strongest. Strongest poem wins and the victor will take the top spot as The Best Poet In The Universe. 

Having a stronger poem than Shakespeare means that you and Bukowski (mostly you) are now the best Poets In The Universe. Failure to complete the answers or having a weaker poem than Shakespeare will make you lose.  If you win, have a great night and make sure you have a hangover cure in the waiting for the morning. If you lose, don’t come crying to me when Hank smashes up your car while blaring Liszt’s Totentanz!

Good luck and don’t forget that Hank has a tire iron in his trunk and he knows how to use it!

How is this game coded? Using Javascript, CSS, & HTML optimized for Google Chrome. See below for more info.

Wire Frame:

https://www.figma.com/file/fFhUc3HPxhbeZo6PVvDf4T/Untitled?node-id=0%3A1

Notes for the assingment:

Two Github repositories were created for this project. The first one is here: https://github.com/Chughes3393/Bukowski-v-Shakespeare. The Github repository that you are accessing has two branches, master and main, master has the most commits to it.

Stengths: My game works, meets assignment requirements, and is usable in the console. The Javascript logic works everytime and gives you a winner and loser. This game is creative and gives the user something to walk away with. My game is also open-ended so I can keep coming back to it and add more functionality.

Weaknesses/ Improvements to make: You have to use the console and window prompts to play the game. Interfacing between console and window prompt is clunky. Page only shows up after game is played once. No questions or answers are displayed on the screen. Content could be more creative, more open ended, user cannot type in lowercase, there is no beginning description that lets user know what is going on, Shakespeare's sonnet is not printed out line by line. I feel like my code can be condensed by a large margin. I want to get my split method to only read the end of the word. 

My biggest technical challenge is implementing this game in the DOM so the user does not have to use the console and can interact with the browser, and everything that is displayed in the console can be displayed and styled in the browser window. 

Explanation of Technical Details:

I started this project by creating a variable of five sonnets [const sonnets]. I then created another variable that randomizes the sonnets [const randomSonnet].

Next I created an array object that served as the template for my questions. Before making my function, I laid out all my ID & Class selectors to easily connect my script to my style and index. My event listeners live at the bottom of my script file. 

Between my selectors and my event listeners is my big ol function called [commenceDuel]. An explanation of this function is as follows: 

Just after my function is called, I log the introduction to the console, so the reader knows what the game is, how to play, and what is going on. I made this into a console group so the user can easily collapse the introduction.

Next, I initialized my question variable, then I have my first window prompt that asks the user if they want to start the game by either typing capital Y to start the game or capital N to end the game.

If the user presses Y -- this starts the game in the function. 

Next I initialize my answer array variable, so that with each answer the user selects, a poem line will get logged to this array and as the user selects answers, they build their poem.

Next I initialize all my question variables z-j. when the variable equals a non-value, the game ends, so the user has to enter precisely Y or N to start or end the game, and A or B to select answers. Any other input value will return undefined, entering nothing will end the game.

So now we are finally about to start the game. To do this, I enter a while group that runs through the length of the questions in order. Now I begin a console group "HANK SAYS" that will provide a response when you start the game, and when you select the answers. Hank uhm has a bit of a sharp tongue sometimes, but don't take it personal, he is like that with everybody. 

Now we just go through the questions 1-10 or z-j. Each questions begins with a window prompt that display a question and what the user can select for the answer. For times sake, I make them a binary choice. When the user selects either A or B -- Hank says something to you, and a predertimined poem line is then stored in the [answerArray]. You'll see your full poem when you answer all ten questions.

Now that we have gone through all the questions -- console group "HANK SAYS' ends.

Next, we get Shakespeare's randomized sonnet. Then we get our poem printed line by line using string interpolation.

Next, we have the variables [erCountSonnet, estCountSonnet, erCountAnswers, estCountAnswers] all initialized to zero. Reading closely, you can see what thee variables do, but I will specify so we are all on the same page below.

I created a new function within [commenceDuel] called [editorDecides] with parameters of a string, and a word. Then we get the console to search strings, the length of the word, word by word that scans the words for instances of "er"/"est" in Shakespeare's sonnets, and "ER"/"EST" in the user's poem. The user's poem is capitalized just so that it was easy for me to differentiate the lines of code when making the game.

Next we add value to our variables [erCountSonnet, estCountSonnet, erCountAnswers, estCountAnswers] to connect them with the randomized sonnet, and our lovely [answerArray]. The answers are set to a string value.

Next we console log these values so the user and creator can now if they actually won or lost and if the game is actually working. 

Finally, we have our win/loss conditional statements. I figured the best way would be to go through the Shakespeare winning coniditions, one by one, then go through the user's winning conditions, and have the [else] statement at the end be the tie game. When I did it any other way, I always had a bug in there. 

Now we exit out of our function and call it and that is our game!
