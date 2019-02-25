# Initial Proposal for OBS Tool for Facebook Live Trivia and Raffle
> The goal is to create a tool written in node.js that spawns a new windowed browser which can be use
> as an overlay for Open Broadcaster Software in doing a facebook live.

## Create Admin Portal
- Portal to create a new game/raffle/Auction/Online Selling.
- Admin can create questions, plus button creates more questions
- Admin will assign 4 choices of answers
- Admin will assign the right answer
- Admin will set duration per questions
- Admin controller to show current question.

## Players
- Only number comments will be saved, First in First out. If number is out of range, ignore
- People who got the correct answer will be randomly picked as winner.
### Architecture
#### Database - Firebase Realtime DB
#### Deployable through Heroku

### Modules
- DB Modules - CRUD API for Firebase
- FB Modules - Grab Profile Picture, Store UID and Name, Store Live Stream ID, Store User Access Key
- Browser Modules - Spawn new window for the realtime comments, questions and winner.
- Timer Module - Set the timeout of a question and randomize the winner.

## Features
> 1 - Setup -> Enter FB Access Token
> 1. Trivia, 2. Raffle 3. Live auction (soon) 4. Live Selling (soon)
> Trivia -> Create game -> Enter Game Name -> Enter Questions -> Enter Choices -> Save/Go Live
> Trivia -> Go Live -> Enter Live Video ID
> Raffle -> Choose between Draw raffle when there is X amount of entries or Draw raffle when time expires. -> Set Trigger word to join -> Randomize winner