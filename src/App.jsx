
import { useState, useRef, useEffect } from "react"; 
import "./App.css"; 
import confetti from "canvas-confetti"; 
// FINAL GALAXY UNIVERSE PAGE

function FinalUniverse({ celebrate }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="universe-page">

      <div className="stars"></div>
      <div className="stars stars-two"></div>

      <div className="moon">🌙</div>
      <div className="planet">🪐</div>

      <div className="universe-content">

        <p className="universe-small">
          ✨ A LITTLE UNIVERSE OF YOU ✨
        </p>

        <h1 className="universe-title">
          RUSHIKESH
        </h1>

        <h2 className="universe-subtitle">
          Another Year, Another Beautiful Chapter ❤️
        </h2>

        <p className="universe-description">
          In this huge universe, you are one of a kind.
          Keep smiling, keep shining and stay crazy! 😂
        </p>

        {!showMessage ? (

          <button
            className="universe-btn"
            onClick={() => {
              setShowMessage(true);
              celebrate();
            }}
          >
            Discover Your Final Surprise ✨
          </button>

        ) : (

          <div className="final-message">

            <h2>🌌 You Are One Of A Kind! 👑</h2>

            <p>
              Life is full of different chapters.
              I hope your next chapter is full of
              happiness, success and unforgettable moments.
            </p>

            <h3>
              Stay Crazy. Stay Happy. Keep Shining! 💜
            </h3>

            <h1>HAPPY BIRTHDAY! 🎂</h1>

            <p className="made-by">
              Made with 💜 by Janu
            </p>

            <h2>Mission Successful! 😂</h2>

          </div>

        )}

      </div>
    </div>
  );
}
 
function App() { 
  const [page, setPage] = useState("home"); 
  const [blown, setBlown] = useState(false); 
  const [music, setMusic] = useState(false); 
  const audioRef = useRef(null); 
 
  // Birthday Countdown 
  const getCountdown = () => { 
    const now = new Date(); 
    let year = now.getFullYear(); 
 
    let birthday = new Date(year, 11, 17); 
 
    if (now > birthday) { 
      birthday = new Date(year + 1, 11, 17); 
    } 
 
    const diff = birthday - now; 
 
    return { 
      days: Math.floor(diff / (1000 * 60 * 60 * 24)), 
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24), 
      minutes: Math.floor((diff / (1000 * 60)) % 60), 
      seconds: Math.floor((diff / 1000) % 60), 
    }; 
  }; 
 
  const [countdown, setCountdown] = useState(getCountdown()); 
 
  // Update Countdown Every Second 
  useEffect(() => { 
    const timer = setInterval(() => { 
      setCountdown(getCountdown()); 
    }, 1000); 
 
    return () => clearInterval(timer); 
  }, []); 
 
  // Music Function 
  const toggleMusic = async () => { 
    if (!audioRef.current) return; 
 
    if (music) { 
      audioRef.current.pause(); 
      setMusic(false); 
    } else { 
      try { 
        await audioRef.current.play(); 
        setMusic(true); 
      } catch (error) { 
        console.log("Music Error:", error); 
      } 
    } 
  }; 
 
  // Celebration Function 
  const celebrate = () => { 
    confetti({ 
      particleCount: 200, 
      spread: 120, 
      origin: { y: 0.6 }, 
      colors: ["#c77dff", "#e0aaff", "#ffffff", "#9d4edd"], 
    }); 
 
    setTimeout(() => { 
      confetti({ 
        particleCount: 100, 
        spread: 160, 
        origin: { y: 0.5 }, 
      }); 
    }, 500); 
  }; 
 
  return ( 
    <div className="main-container"> 
 
      {/* Background Music */} 
 
      <audio ref={audioRef} loop> 
        <source src="/music/birthday.mp3" type="audio/mpeg" /> 
      </audio> 
 
      <button className="music-btn" onClick={toggleMusic}> 
        {music ? "🔇 Stop Music" : "🎵 Play Music"} 
      </button> 
 
      <div className="floating-hearts"> 
        💜 ✨ 💗 💜 ✨ 
      </div> 
 
      {/* HOME PAGE */} 
 
      {page === "home" && ( 
        <div className="birthday-card"> 
 
          <div className="emoji"></div> 
 
          <p className="small-text"> 
            A SPECIAL SURPRISE FOR YOU 
          </p> 
 
          <h1>Hey Rushikesh! 💜</h1> 
 
          <h2>Someone Special Is Getting Older! 😂</h2> 
 
          <p className="description"> 
            Today is not an ordinary day. 
            It's the birthday of a legend, 
            a crazy human and a professional headache! 🤣 
          </p> 
 
          <button 
            className="surprise-btn" 
            onClick={() => setPage("birthday")} 
          > 
            Open Your Surprise  🎁 
          </button> 
 
          <p className="footer"> 
            Made with 💜 Just for You 
          </p> 
 
        </div> 
      )} 
 
      {/* BIRTHDAY PAGE */} 
 
      {page === "birthday" && ( 
        <div className="birthday-card"> 
 
          <div className="emoji cake-animation"></div> 
 
          <h1>HAPPY BIRTHDAY! 🥳🎉</h1> 
 
          <h2>online Ghost💜</h2> 
 
          <div className="funny-box"> 
 
            <h3>😂 BREAKING NEWS 😂</h3> 
 
            <p> 
              A Legendary Idiot Was Born Today! 
            </p> 
 
            <p> 
              Age +18 📈 <br /> 
              Maturity -100 📉 <br /> 
              Attitude +1000 😎 <br /> 
              Ego +10000000000... Too Much! 💀 <br /> 
              Brain Loading... 0% 😂 
            </p> 
 
          </div> 
 
          <p className="description"> 
            Older but still a cartoon! 🤣 
          </p> 
 
          <button 
            className="surprise-btn" 
            onClick={() => setPage("letter")} 
          > 
            Read Your Special message 🤔 
          </button> 
 
        </div> 
      )} 
 
      {/* LETTER PAGE */} 
 
      {page === "letter" && ( 
        <div className="birthday-card letter-card"> 
 
          <div className="emoji"></div> 
 
          <h1> 💜</h1> 
 
          <div className="letter-content"> 
 
            <p> 
               
              🥳 
 
             First of all, Happiest Birthday to you, Rushi! 🎂❤️ 
 
             आजचा दिवस खूप special आहे, कारण आज एका अशा व्यक्तीचा birthday आहे जी स्वतःला खूप innocent समजते, पण प्रत्यक्षात किती नमुना आहे हे मला चांगलंच माहीत आहे! 😂🤣 
              
             काय सांगू तुझ्याबद्दल? कधी खूप चांगला वागतोस, कधी एवढा attitude दाखवतोस की वाटतं स्वतःला काय समजतोस रे तू? IAS officer की माझ्या गावचा collector? 😂💀 
 
             कधी स्वतःहून message करायचा, कधी अचानक गायब व्हायचं, कधी खूप बोलायचं तर कधी दोन शब्दांत conversation संपवायची… तुझं हे communication system NASA ला पण समजणार नाही! 🤣 
 
             पण ठीक आहे, आज तुझा birthday आहे म्हणून तुझ्या सगळ्या चुका माफ… फक्त आजच्या दिवसापुरत्या! उद्यापासून पुन्हा माझे नियम लागू! 😂💅🏻 
 
             Jokes apart, मला मनापासून एवढंच सांगायचं आहे की तू आयुष्यात खूप पुढे जा. तुझी प्रत्येक इच्छा पूर्ण होवो. तुला जे काही मिळवायचं आहे ते तुझ्या मेहनतीने मिळो. तुझ्या आयुष्यात चांगली माणसं येवोत, चांगल्या संधी मिळोत आणि कोणत्याही परिस्थितीत तुझा आत्मविश्वास कमी होऊ नये. 
 
             कधी कधी काही लोक आपल्या आयुष्यात येतात आणि त्यांच्या सोबत काही आठवणी तयार होतात. काही आठवणी हसवतात, काही विचार करायला लावतात, तर काही नकळत special बनतात. आपलं equation काहीही असो, पण तुझ्यासाठी माझ्या मनात नेहमीच चांगल्या wishes आहेत. ❤️ 
 
             आणि हो Rushi, एक गोष्ट लक्षात ठेव… 
 
             **मी कोणाला special feel करवू शकते, पण कोणासाठी स्वतःची value कमी करणार नाही.** माझं हसणं, माझा attitude आणि माझी peace या सगळ्या गोष्टी माझ्यासाठी खूप महत्त्वाच्या आहेत. So, respect मिळवायचा असेल तर आधी respect द्यायला शिक! 😎👑 
 
             आता थोडं तुझं कौतुक करूया… 
 
             तू असाच हसत राहा, मस्ती करत राहा, तुझ्या स्वप्नांच्या मागे धावत राहा. आयुष्यात कितीही मोठा झालास तरी तुझ्यातला तो खोडकरपणा कधी जाऊ देऊ नकोस. आणि हो, success मिळाल्यावर जास्त हवेत जाऊ नकोस. जमिनीवर राहा, कारण gravity सगळ्यांसाठी सारखीच असते! 😂🤣 
 
             आजच्या दिवशी तुला एकच wish आहे — तुला आयुष्यात इतकं यश मिळो की तुला मागे वळून पाहण्याची गरजच पडू नये. तुझ्या चेहऱ्यावर नेहमी smile असो आणि मनात नेहमी समाधान असो. 
 
             **And lastly…** 
 
                 Thank you for being a part of some beautiful memories. काही गोष्टी बोलून दाखवता येत नाहीत, पण त्यांची किंमत मनाला माहीत असते. ❤️ 
 
               आज भरपूर enjoy कर, cake खा, photos काढ, birthday boy असल्याचा full फायदा घे. पण treat द्यायला विसरू नकोस. Birthday तुझा आहे, खर्चसुद्धा तुझाच असणार! 😂🎂 
 
               **Once again, Happiest Birthday Rushikesh! ❤️🥳** 
 
              Stay happy, stay blessed, keep smiling and keep shining. 
 
            आणि हो… 
 
            **माझ्यासारखी व्यक्ती पुन्हा भेटणं थोडं difficult आहे, त्यामुळे माझी आठवण आली तर surprise होऊ नकोस! Baddie Girl आहे शेवटी!** 💅🏻🔥 
 
           Enjoy your day, Mr. Attitude! 😂❤️ 
 
            </p> 
 
            <h3>Once Again, Happiest Birthday Rushikesh! 🎂</h3> 
 
             
            <h2>From Your Special Friend ❤️</h2> 
 
          </div> 
 
          <button 
            className="surprise-btn" 
            onClick={() => setPage("gallery")} 
          > 
            Open Our Memories 📸 
          </button> 
 
        </div> 
      )} 
 
      {/* GALLERY PAGE */} 
 
      {page === "gallery" && ( 
        <div className="birthday-card"> 
 
          <h1>Our Crazy Memories 📸</h1> 
 
          <p className="description"> 
            Some memories are unforgettable,sorry sorry no more memories, but we will create more memories in sleep mode🤣 
            just like some crazy people! 😂 
          </p> 
 
          <div className="gallery"> 
 
            {[1, 2, 3, 4].map((num) => ( 
              <div className="photo-box" key={num}> 
 
                <img 
                  src={`/images/photo${num}.jpg`} 
                  alt={`Memory ${num}`} 
                /> 
 
                <p> 
                  {[ 
                   
                  ][num - 1]} 
                </p> 
 
              </div> 
            ))} 
 
          </div> 
 
          <button 
            className="surprise-btn" 
            onClick={() => setPage("final")} 
          > 
            One Last Surprise so close the page , move the next page🎁 
          </button> 
 
        </div> 
      )} 
 
      {/* FINAL PAGE */} 
 
      {page === "final" && ( 
        <div className="birthday-card final-card"> 
 
          <p className="small-text"> 
            THE FINAL SURPRISE 
          </p> 
 
          <h1>Happy Birthday Rushikesh! 💜</h1> 
 
          <div className="countdown"> 
 
            <h2>Birthday Countdown ⏳</h2> 
 
            <div className="countdown-box"> 
 
              <div> 
                <h2>{countdown.days}</h2> 
                <p>Days</p> 
              </div> 
 
              <div> 
                <h2>{countdown.hours}</h2> 
                <p>Hours</p> 
              </div> 
 
              <div> 
                <h2>{countdown.minutes}</h2> 
                <p>Minutes</p> 
              </div> 
 
              <div> 
                <h2>{countdown.seconds}</h2> 
                <p>Seconds</p> 
              </div> 
 
            </div> 
          </div> 
 
          <div className="big-cake"> 
            🕯️🕯️ 
          </div> 
 
          {!blown ? ( 
            <> 
              <h2>Make A Wish! ✨</h2> 
 
              <p className="description"> 
                Close your eyes and make a wish! 🥹 
              </p> 
 
              <button 
                className="surprise-btn" 
                onClick={() => { 
                  setBlown(true); 
                  celebrate(); 
                }} 
              > 
                Blow The Candles! 🕯️ 
              </button> 
            </> 
          ) : ( 
            <div className="wish-message"> 
 
              <h1>🎊 Yayyyy! 🎊</h1> 
 
              <h2>Wish Granted! 💜</h2> 
 
              <p> 
                May all your dreams come true! 
                Keep smiling and keep annoying everyone! 😂 
              </p> 
 
              <h2>YOU ARE SPECIAL! 🫶</h2> 
 
              <h3>Happy Birthday Once Again! 🎂</h3> 
              <button
               className="surprise-btn"
              onClick={() => setPage("universe")}
              >
               end the website join the universe 🌌
          </button>
 
            </div> 
          )} 
 
          <p className="footer"> 
            Made with lots of laughter & 💜 
          </p> 
         {/* GALAXY UNIVERSE PAGE */}

           {page === "universe" && (
              <FinalUniverse celebrate={celebrate} />
                )}
        </div> 
      )} 
 
    </div> 
  ); 
} 
 
export default App; 
