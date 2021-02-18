var app= new Vue({
  el:"#app",
  data: {
    chevActive:"",
    search:"",
    message:"",
    chatIndex:0,
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
            posizione: "box-msg-right",
            dropdown: false,
            chev: false,
          },
          {
            msg: "ciao tutto bene",
            date: "10/11/2020 14:00",
            stato: "msg-received",
            posizione: "box-msg-left",
            dropdown: false,
            chev: false,
          },
          {
            msg:"domani cosa fai?",
            date: "10/11/2020 14:00",
            stato: "msg-received",
            posizione: "box-msg-left",
            dropdown: false,
            chev: false,
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
            posizione: "box-msg-right",
            dropdown: false,
            chev: false,
          },
          {
            msg: "a domani",
            date: "30/11/2020 15:00",
            stato: "msg-received",
            posizione: "box-msg-left",
            dropdown: false,
            chev: false,
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
            posizione: "box-msg-right",
            dropdown: false,
            chev: false,
          },
          {
            msg: "Holiii, mañana nos vamos de fiesta",
            date: "29/10/2020 12:20",
            stato: "msg-received",
            posizione: "box-msg-left",
            dropdown: false,
            chev: false,
          },
          {
            msg:"te vas a juntar con nosotros?",
            date: "29/10/2020 12:21",
            stato: "msg-received",
            posizione: "box-msg-left",
            dropdown: false,
            chev: false,
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
            posizione:"box-msg-right",
            dropdown: false,
            chev: false,
          },
          {
            msg:"ok,bye",
            date: "31/10/2020 14:23",
            stato:"msg-received",
            posizione:"box-msg-left",
            dropdown: false,
            chev: false,
          }
        ]
      }
    ]
  },

  methods:{

    // ACTIVE CHAT
    openedchat: function(index){
      this.contattiIndex= index;
      console.log(this.contatti[this.contattiIndex].chat[this.chatIndex]);
    },

    // SENDING MSG
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

        setTimeout(() =>{
          this.getMsg()
          
        }, 1000);
        
      }
      
    },

    // AUTOMATIC MSG
    getMsg: function(){
      this.contatti[this.contattiIndex].chat.push(
        {
          msg: "ok",
          date: this.currentTime(),
          stato: "msg-received",
          posizione: "box-msg-left"
        }
        
      );
      this.scrollDown();
      
    },

    // CURRENT TIME MSG
    currentTime: function(){
      var today = new Date();
      var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date+' '+time;
      return dateTime;
    },

    // CHAT LIST FILTER
    filtroChat: function() {
      this.contatti.forEach(item => {
        if(item.name.toLowerCase().indexOf(this.search.toLowerCase())>-1){
          item.display = true;
        }else{
          item.display = false;
        }
      });
    },

    //CHEVRON VISIBLE
    toggleChev(i){
      this.contatti[this.contattiIndex].chat[i].chev = !(this.contatti[this.contattiIndex].chat[i].chev);
    },

    //DROPDOWN VISIBLE
    toggleDropdown(i){
      this.contatti[this.contattiIndex].chat[i].dropdown = !(this.contatti[this.contattiIndex].chat[i].dropdown);
    },

    // DELETE A MSG
    deleteMsg: function(item){
      this.contatti[this.contattiIndex].chat.splice(this.contatti[this.contattiIndex].chat.indexOf(item), 1);
    },

    //SCROLLDOWN
    scrollDown: function(){
      setTimeout(()=>{
        document.querySelector('#active-chat').scrollTop = document.querySelector('#active-chat').scrollHeight
      },5);
      
    },
    
  },

});
