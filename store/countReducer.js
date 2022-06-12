import homeCapsule from "./../img/capsule.png";
import homePaw from "./../img/paw.png";
import homeTent from "./../img/tent.png";
import homeWarm from "./../img/warm.png";
import homeHammok from "./../img/hammok.jpg";
import homeShark from "./../img/shark.png";
import homeKnot from "./../img/knot.jpg";
import homeBurger from "./../img/burger.png";

const defaultState = {
    product: [
      {
        name: "домик-капсула",
        id: 0,
        price: 2000,
        total: 10,
        src: homeCapsule,
        description: "Лежанка в виде капсулы с прозрачным окном",
        inBasket: 0
    },
         {
        name: "домик-лапка",
        id: 1,
        price: 1850,
        total: 20,
        src: homePaw,
        description: "Мягкая лежанка в виде лапки",
        inBasket: 0
    },
         {
        name: "домик-палатка",
        id: 2,
        price: 1950,
        total: 15,
        src: homeTent,
        description: "Мягкая лежанка в виде палатки с игрушкой",
        inBasket: 0
    },
        {
        name: "домик-с-подогревом",
        id: 3,
        price: 1700,
        total: 12,
        src: homeWarm,
        description: "Лежанка для размещения на нагревательных приборах",
        inBasket: 0
    },
    {
      name: "домик-гамак",
      id: 4,
      price: 1600,
      total: 18,
      src: homeHammok,
      description: "Лежанка в виде гамака",
      inBasket: 0
  },
      {
      name: "домик-акула",
      id: 5,
      price: 1900,
      total: 26,
      src: homeShark,
      description: "Мягкая лежанка в виде акулы",
      inBasket: 0
  },
      {
      name: "домик-клубок",
      id: 6,
      price: 1910,
      total: 28,
      src: homeKnot,
      description: "Лежанка в виде клубка со спицами",
      inBasket: 0
  },
  {
      name: "домик-бургер",
      id: 7,
      price: 1200,
      total: 35,
      src: homeBurger,
      description: "Лежанка в виде бургера",
      inBasket: 0
  }
    ]
};

export const countReducer = (state = defaultState, action) => {
    switch (action.type){
      case "PLUS_COUNT":
        return {...state, product: state.product.map((x,index) =>
           (index === action.payload) ? ({...x, inBasket: x.inBasket + 1}) : ({...x}) )}; 
      case "MINUS_COUNT":
        return {...state, product: state.product.map((x,index) =>
          (index === action.payload) ? ({...x, inBasket: x.inBasket - 1}) : ({...x}) )}; 
        case "DELETE_POSITION":
          return {...state, product: state.product.map((x,index) =>
            (index === action.payload) ? ({...x, inBasket: 0}) : ({...x}) )};
        case "DELETE_ALL_POSITION":
          return {...state, product: state.product.map(x =>({...x, inBasket: 0}) )};
      default:
        return state;
    }
  }