var app= new Vue({
  el:"#app",
  data: {
    contatti: [
      {
        name:"Michele",
        image:"img/avatar_1.jpg",
        lastconn: "Ultimo accesso 10/11/2020 alle ore 13:12",
        chat: {
          sent: ["ciao come stai?", "asfgfasf"],
          received:["ciao tutto bene", "abckdelkae"]
        }
      }
    ]
  }

});
