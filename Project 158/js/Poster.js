AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "superman",
        title: "Super Man",
        url: "/superman.jpg",
      },
      {
        id: "spiderman",
        title: "Spider Man",
        url: "/spider.jpg",
      },

      {
        id: "thor",
        title: "Thor",
        url: "/thor.jpg",
      },
      {
        id: "captain-marvel",
        title: "Captain Marvel",
        url: "/captainmarvel.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id)
      
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail);
     
      // Title Text Element
      const titleEl = this.createTitleEl(position,item)
      borderEl.appendChild(titleEl);
      
      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder:function(position,id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id",id)
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:22,
      height:30
        })
    entityEl.setAttribute("position",position)
    entityEl.setAttribute("material",{
      color:"#0077CC",
      opacity:1
    })
    return entityEl

  },

  createThumbnail:function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:20,
      height:25
    })
    entityEl.setAttribute("position",{x:0,y:0,z:0.1})
    entityEl.setAttribute("material",{
      src:item.url
    })
    return entityEl
  },

  createTitleEl:function(position,item){
    const titleEl = document.createElement("a-entity")
    titleEl.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:70,
      color:"#E56100",
      value:item.title
    })
    const Elposition = position
    Elposition.y = -25
    titleEl.setAttribute("position",Elposition)
    titleEl.setAttribute("visible",true)
    return titleEl
  }
  
});
