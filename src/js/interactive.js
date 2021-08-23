let items = [
  {
    type: "text",
    title: "title",
    description: "<b>Text item</b> with description",
    position: {
      left: 100,
      top: 50,
    },
  },
  {
    type: "provider",
    providerName: "youtube",
    parameters: {
      videoId: "iPRiQ6SBntQ",
    },
    position:{
        left:300,
        top:200,
    },
    sticky:true,
  },
];

let options = {
    allowHtml:true,
}

$(document).on('ready',function(){
    $("#interactivefeet").interactivefeet(items,options);
});