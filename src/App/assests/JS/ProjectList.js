import * as SS from "./Screenshots";

export const ProjectIntro = (
  <>
    In my 15 weeks at{" "}
    <a href="https://flatironschool.com/" target="_blank" rel="noreferrer">
      Flatiron School
    </a>
    , I have created five apps using Ruby, Rails, Javascript, React, and React
    Native. Four of those apps were done with a partner, with the final app
    being a solo project. I've also created a web automation bot in Python that
    my brother uses to create tee times for the weekends.
  </>
);

export const ProjectList = [
  {
    title: "GiFinder",
    desc:
      "The first project I have ever created was a CLI app written in Ruby. This app allows you to search Giphy through the Giphy API and save gifs in the categories of your choosing. Categories and gifs are saved to your account, so you can always go back and view them again.",
    imgs: SS.GiFinderSS,
    sourceFront: "https://github.com/mattie43/Mod1-FinalProject-GiFinder",
    video:
      "https://www.youtube.com/watch?v=2ka9ZnbwsMY&ab_channel=MattEricksen",
    live: "https://github.com/mattie43/Mod1-FinalProject-GiFinder",
  },
  {
    title: "Whoop",
    desc:
      "My second project was my first website written in Ruby, using the Ruby on Rails framework. We decided to remake Yelp. Allowing users to search, rate, and comment on restaurants using the Yelp API.",
    imgs: SS.WhoopSS,
    sourceFront: "https://github.com/mattie43/Mod2FinalProject/",
    video:
      "https://www.youtube.com/watch?v=UDK8yE9uqO4&ab_channel=MattEricksen",
    live: "https://github.com/mattie43/Mod2FinalProject/",
  },
  {
    title: "Pokeiron",
    desc:
      "For my third project, I created a SPA in vanilla JS. My partner and I made a Pokemon RPG using the PokeAPI. Users were able to create an account, collect items, catch Pokemon, and display themselves on the hiscores. For this project, we saved our frontend and backend to seperate Githubs.",
    imgs: SS.PokeironSS,
    sourceFront: "https://github.com/mattie43/Mod3PokemonProject-FrontEnd/",
    sourceBack: "https://github.com/islommashanlo/Mod3-Pokemon-Project-Backend",
    video:
      "https://www.youtube.com/watch?v=jrzZztLCQtU&ab_channel=MattEricksen",
    live: "https://github.com/mattie43/Mod3PokemonProject-FrontEnd/",
  },
  {
    title: "Viaggiamo",
    desc:
      "The last partner project was a translation app in React. Using Google translate, and the MDN Web Speech API. You could take lessons in five different languages, go on an endless run trying to beat your PB, or translate and save messages using voice or text. Again, we saved the frontend and backend to different Githubs.",
    imgs: SS.ViaggiamoSS,
    sourceFront: "https://github.com/slurio/slurio-viaggiamo-frontend-",
    sourceBack: "https://github.com/mattie43/Viaggiamo-Backend",
    video:
      "https://www.youtube.com/watch?v=x-GsXlZ09G8&ab_channel=MattEricksen",
    live: "https://github.com/slurio/slurio-viaggiamo-frontend-",
  },
  {
    title: "$ellular",
    desc:
      "My final project, a solo project, while I was at Flatiron was a React Native app called $ellular. I decided to remake the idea of 'LetGo'. Allowing users to create accounts, post items they want to sell, browse other users items, real-time chat with them, and give them a rating after they've purchased their item. I have saved my frontend and backend to seperate repos.",
    imgs: SS.SellularSS,
    sourceFront: "https://github.com/mattie43/Sellular-Frontend",
    sourceBack: "https://github.com/mattie43/Sellular-Backend",
    video:
      "https://www.youtube.com/watch?v=nb9qzIs44CI&ab_channel=MattEricksen",
    live: "https://github.com/mattie43/Sellular-Backend",
  },
  {
    title: "My Portfolio",
    desc:
      "Yes, this very website! Built with React and designed to be mobile first.",
    imgs:
      "https://images.idgesg.net/images/article/2019/07/chrome-screenshot-2-100801438-large.jpg",
    sourceFront: "https://github.com/mattie43/mywebsite",
  },
];
