var app= new Vue({
  el:"#app",
  data: {
    search:"",
    message:"",
    contattiIndex: 0,
    contatti: [

      {
        name:"Michele",
        image:"img/avatar_1.jpg",
        lastday: "10/11/2020 ",
        time:"alle ore 13:12",
        display: true,
        chat: [
          {
            msg: "ciao come stai?",
            date: "10/11/2020 13:44",
            stato: "msg-sent",
            posizione: "box-msg-right"
          },
          {
            msg: "ciao tutto bene",
            date: "10/11/2020 14:00",
            stato: "msg-received",
            posizione: "box-msg-left"
          },
          {
            msg:"domani cosa fai?",
            date: "10/11/2020 14:00",
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
        display: true,
        chat: [
          {
            msg: "ciaooooo?",
            date: "30/11/2020 13:20",
            stato: "msg-sent",
            posizione: "box-msg-right"
          },
          {
            msg: "a domani",
            date: "30/11/2020 15:00",
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
        display: true,
        chat: [
          {
            msg: "Hola como estas?",
            date: "29/10/2020 09:50",
            stato: "msg-sent",
            posizione: "box-msg-right"
          },
          {
            msg: "Holiii, mañana nos vamos de fiesta",
            date: "29/10/2020 12:20",
            stato: "msg-received",
            posizione: "box-msg-left"
          },
          {
            msg:"te vas a juntar con nosotros?",
            date: "29/10/2020 12:21",
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
        display: true,
        chat: [
          {
            msg:"Hi I'll call you tomorrow",
            date: "31/10/2020 14:20",
            stato: "msg-sent",
            posizione:"box-msg-right"
          },
          {
            msg:"ok,bye",
            date: "31/10/2020 14:23",
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
      if (this.message=="") {

      }else {
        this.contatti[this.contattiIndex].chat.push(
          {
            msg: this.message,
            date: this.currentTime(),
            stato: "msg-sent",
            posizione: "box-msg-right"
          }
        );

        this.message="";

        setTimeout(this.getMsg, 1000);
      }

    },

    getMsg: function(){
      this.contatti[this.contattiIndex].chat.push(
        {
          msg: "ok",
          date: this.currentTime(),
          stato: "msg-received",
          posizione: "box-msg-left"
        }
      );
    },

    currentTime: function(){
      var today = new Date();
      var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date+' '+time;
      return dateTime;
    },

    filtroChat: function() {
      if(this.contatti[this.contattiIndex].name.toLowerCase().includes(this.search.toLowerCase())){
        this.contatti[this.contattiIndex].display = true;
      }else{
        this.contatti[this.contattiIndex].display = false;
      }
    }
  }


});
