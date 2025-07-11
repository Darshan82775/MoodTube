const moodVideoMap = {sad:{
  english: ["https://www.youtube.com/embed/d2GOjxA8HQ4"],

  hindi: ["https://www.youtube.com/embed/fa5Yzxdh8e4"],
      telugu: ["https://www.youtube.com/embed/c3QLGiYrnHo"],
      tamil: ["https://www.youtube.com/embed/eW1JtSZi0SM"], 
     kannada: [ "https://www.youtube.com/embed/N4GFIkcp5Wo" ],
    
    },


  sleepy: {
    english: ["https://www.youtube.com/embed/sCOTXTwfsGc"],
    hindi: ["https://www.youtube.com/embed/m70d24MiCPA"],
    kannada: ["https://www.youtube.com/embed/h1yULupp90M"],
    tamil: ["https://www.youtube.com/embed/5f0XRbgX4iE"],
    telugu: ["https://www.youtube.com/embed/40t5STztQDc"],
   
  },
  lazy: {
    english: ["https://www.youtube.com/embed/eOcVRgABANg"],
    hindi: ["https://www.youtube.com/embed/pIvf9bOPXIw"],
    kannada: ["https://www.youtube.com/embed/hcV81k6DX6o"],
    tamil: ["https://www.youtube.com/embed/-9YX8i9LsMw"],
    telugu: ["https://www.youtube.com/embed/bqbWbSJpkfI"],
   
  },
  confused: {
    english: ["https://www.youtube.com/embed/l-sSxHiMopk"],
    hindi: ["https://www.youtube.com/embed/ukxgdTnBYGE"],
    kannada: ["https://www.youtube.com/embed/Myf7QoHMJlk"],
    tamil: ["https://www.youtube.com/embed/W-oZO7-Df1c"],
    telugu: ["https://www.youtube.com/embed/25l-wR7jljg"],
  },
  stressed: {
    english: ["https://www.youtube.com/embed/x_u10CdJzgo"],
    hindi: ["https://www.youtube.com/embed/ZdIZtm6WGdM"],
    kannada: ["https://www.youtube.com/embed/ZnW2wBd8Vks" ],
    tamil: ["https://www.youtube.com/embed/AbKB9JZnFWM"],
    telugu: ["https://www.youtube.com/embed/dEIWzDfxk0A"],
   
  },
  confident: {
    english: ["https://www.youtube.com/embed/8afBXZawfQw"],
    hindi: ["https://www.youtube.com/embed/puKD3nkB1h4"],
    kannada: ["https://www.youtube.com/embed/mH-c1ZdE2YM"],
    tamil: ["https://www.youtube.com/embed/eVx2dKmUfMg"],
    telugu: ["https://www.youtube.com/embed/zl1CsDDmN6s"],
   
  },
  
  bored: {
    english: ["https://www.youtube.com/embed/Nq4Mh_jTubA" ],
    hindi: ["https://www.youtube.com/embed/Yb88fPVHrF4"],
    kannada: ["https://www.youtube.com/embed/ckbWXG97W10"],
    tamil: ["https://www.youtube.com/embed/1seR_ckLXz4"],
    telugu: ["https://www.youtube.com/embed/2voCBpYfFI4"],
   
  },
  romantic: {
    english: ["https://www.youtube.com/embed/lFikYfOURY0"],
    hindi: ["https://www.youtube.com/embed/LElOSR7cJyM"],
    kannada: ["https://www.youtube.com/embed/P1wfw0XXks8"],
    tamil: ["https://www.youtube.com/embed/gEC8IEZYxc0"],
    telugu: ["https://www.youtube.com/embed/5MtKkdEiJzk"],
   
  },
  angry: {
    english: ["https://www.youtube.com/embed/ysNDDrG9PtI"],
    hindi: ["https://www.youtube.com/embed/nfeL4pz-i-Y"],
    kannada: ["https://www.youtube.com/embed/fclPhO1FsOY"],
    tamil: ["https://www.youtube.com/embed/nPrhOHl0IMk"],
    telugu: ["https://www.youtube.com/embed/fdEzDqiSC3U" ],
   
  },
  motivated: {
    english: ["https://www.youtube.com/embed/ysNDDrG9PtI"],
    hindi: ["https://www.youtube.com/embed/iiBeBFRsCSQ"],
    kannada: ["https://www.youtube.com/embed/8PzNdb0EQlM"],
    tamil: ["https://www.youtube.com/embed/enxm-im6OyE"],
    telugu: ["https://www.youtube.com/embed/Mm1Zp80gj1Q"],
  }
  }



function suggestVideo() {
  const mood = document.getElementById("mood").value;
  const language = document.getElementById("language").value;
  const resultDiv = document.getElementById("videoResult");

  let message = "";
  if (mood === "sad") message = "💔 It's okay to feel low. Here's something for you.";
  else if (mood === "motivated") message = "💪 Time to rise and shine!";
  else if (mood === "romantic") message = "❤️ Let the love flow.";
  else if (mood === "bored") message = "😅 Bored? Let's fix that.";
  else if (mood === "angry") message = "😤 Chill out with this.";
  else if (mood === "sleepy") message = "😴 Relax and wind down.";
  else if (mood === "lazy") message = "😎 Take it easy and chill.";
  else if (mood === "confused") message = "🤔 Let's clear your mind.";
  else if (mood === "stressed") message = "🧘‍♂️ Breathe in peace.";
  else if (mood === "confident") message = "🔥 Own the moment!";
  else message = "🎬 Here's something cool for you.";

  if (moodVideoMap[mood] && moodVideoMap[mood][language]) {
    const videos = moodVideoMap[mood][language];
    let videoCards = "";

  videos.forEach(video => {
      videoCards += `
        <iframe src="${video}" frameborder="0" allowfullscreen></iframe>
      `;
      
    });

    resultDiv.innerHTML = `
      <p>${message}</p>
      <div class="video-grid">${videoCards}</div>
    `;
  } else {
    resultDiv.innerHTML = `
      <p>Oops! No video found for that mood/language combo.</p>
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    `;
  }
} 
