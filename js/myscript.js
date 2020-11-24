var app= new Vue({
  el:"#app",
  data: {
    message:"",
    contattiIndex: 0,
    contatti: [

      {
        name:"Michele",
        image:"img/avatar_1.jpg",
        lastday: "10/11/2020 ",
        time:"alle ore 13:12",
        chat: [
          {
            msg: "ciao come stai?",
            stato: "msg-sent",
            posizione: "box-msg-right"
          },
          {
            msg: "ciao tutto bene",
            stato: "msg-received",
            posizione: "box-msg-left"
          },
          {
            msg:"domani cosa fai?",
            stato: "msg-received",
            posizione: "box-msg-left"
          }
        ]
      },

      {
        name:"Fabio",
        image:"img/avatar_2.jpg",
        lastday: "13/11/2020 ",
        time:"alle ore 14:00",
        chat: [
          {
            msg: "ciaooooo?",
            stato: "msg-sent",
            posizione: "box-msg-right"
          },
          {
            msg: "a domani",
            stato: "msg-received",
            posizione: "box-msg-left"
          },
        ]
      },
      {
        name:"Samuele",
        image:"img/avatar_3.jpg",
        lastday: "30/11/2020 ",
        time:"alle ore 18:00",
        chat: [
          {
            msg: "Hola como estas?",
            stato: "msg-sent",
            posizione: "box-msg-right"
          },
          {
            msg: "Holiii, mañana nos vamos de fiesta",
            stato: "msg-received",
            posizione: "box-msg-left"
          },
          {
            msg:"te vas a juntar con nosotros?",
            stato: "msg-received",
            posizione: "box-msg-left"
          }
        ]
      },

      {
        name:"Giacomo",
        image:"img/avatar_4.jpg",
        lastday: "31/10/2020 ",
        time:"alle ore 09:00",
        chat: [
          {
            msg:"Hi I'll call you tomorrow",
            stato: "msg-sent",
            posizione:"box-msg-right"
          },
          {
            msg:"ok,bye",
            stato:"msg-received",
            posizione:"box-msg-left"
          }
        ]
      }
    ]
  },
  methods:{
    openedchat: function(index){
      this.contattiIndex= index;
    },

    enterMsg: function(){
      this.contatti[this.contattiIndex].chat.push({msg: this.message, stato: "msg-sent", posizione: "box-msg-right"});

      this.message="";
    }
  }

});
