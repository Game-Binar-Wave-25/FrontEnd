import { useEffect, useState } from 'react'
import { database } from '../config/firebase'
import { ref, set } from 'firebase/database'
import { Link } from 'react-router-dom'
import { 
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share'
import '../assets/css/Style.css';

export default function FirebaseGameSuit(props){
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState("")
  const [id, setId] = useState(0)
  const [point, setPoint] = useState(0)
  const choices = ['batu', 'kertas', 'gunting']
  const rec = "record"
  const player = "dapet dari login"
  const url = 'https://github.com/orgs/Game-Binar-Wave-25/dashboard'

  const handleClick = (choice, bot) => {
    setId(id+1)
    Start(choice,bot)
  }
   
  function generateComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
  }

  // render() {
  //   console.log(localStorage.getItem('accesstoken'))
  //   if(localStorage.getItem('accesstoken') === null) {
  //       alert ("Please Login or Sign Up")
  //       window.location.href = '/register'
  //   }
  // }
    
  const Start = (p1,p2) => {
    setUserChoice(p1)
    setComputerChoice(p2)
    if (p1 === "batu" && p2 === "gunting") {
      setResult("MENANG")
      setPoint(point+10)
    } else if (p1 === "batu" && p2 === "kertas") {
      setResult("KALAH")
    } else if (p1 === "gunting" && p2 === "kertas") {
      setResult("MENANG")
      setPoint(point+10)
    } else if (p1 === "gunting" && p2 === "batu") {
      setResult("KALAH")
    } else if (p1 === "kertas" && p2 === "batu") {
      setResult("Menang")
    } else if (p1 === "kertas" && p2 === "gunting") {
      setResult("KALAH")
    } else {
      setResult("SERI")
      setPoint(point+5)
    }
  };

  useEffect(() => {
    const inputUser = {
      userId:"from id user",
      name: player,
      total_game: id,
      total_point: point,
      game_record: 
        {
          pick_bot: computerChoice,
          pick_player: userChoice,
          pick_winner: result
        }
    }
    console.log(userChoice, computerChoice, result);
    if (userChoice !== null) {
      set(ref(database,`Histories/${rec}/${id}`), inputUser)
    }
  },[userChoice, computerChoice, id, result, point])

  return (
    <>
    <section className="container">
            <div className="row text-center">
            <div className="col">
                <div className="mb-5"><h1>Name player</h1></div>
                <div className="my-3 option">
                    <img alt='batu' src={require("../assets/img/batu.png")} onClick={() => handleClick('batu',generateComputerChoice())}/>
                </div>
                <div className="my-3 option">
                    <img alt='gunting' src={require("../assets/img/gunting.png")} onClick={() => handleClick('gunting',generateComputerChoice())}/>
                </div>
                <div className="my-3 option">
                    <img alt='kertas' src={require("../assets/img/kertas.png")} onClick={() => handleClick('kertas',generateComputerChoice())}/>
                </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
                <div id="vs" className="vs">VS</div>
                <div id="win" className="d-flex justify-content-center align-items-center result win">PLAYER 1<br/> WIN</div>
                <div id="lose" className="d-flex justify-content-center align-items-center result win">COM <br/> WIN</div>
                <div id="draw" className="d-flex justify-content-center align-items-center result draw">DRAW</div>
            </div>
            <div className="col">
                <div className="mb-5"><h1>Bot</h1></div>
                <div className="my-3 option">
                    <img id="comrock" className="bot" src={require("../assets/img/batu.png")} alt="batu"/>
                </div>
                <div className="my-3 option">
                    <img id="comscissors" className="bot" src={require("../assets/img/gunting.png")} alt="gunting"/>
                </div>
                <div className="my-3 option">
                    <img id="compaper" className="bot" src={require("../assets/img/kertas.png")}  alt="kertas"/>
                </div>
            </div>
            </div>
            <div className="text-center option">
            <FacebookShareButton url={url} hashtag='#game'>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} hashtag='#game'>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={url} hashtag='#game'>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton> - total point : {point} - <Link to='/'>
                <button>Home</button>
              </Link> 
              {result && <h1>hasil pertandingan {result}</h1>}
            </div>
      </section>
    </>
  )
}