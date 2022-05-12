import { Injectable } from '@angular/core';
//import {} from '';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //foodetails

  foodDetails=[
  {
  id:1,
  foodName:"Burger",
  foodDetails:"Veg-Tikki Burger",
  foodPrice:120,
  foodImg:"https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_960_720.jpg"
  },

  {
  id:2,
  foodName:"French Fries",
  foodDetails:"Potato Freis",
  foodPrice:70,
  foodImg:"https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg"
  },

  {
  id:3,
  foodName:"Spaghetti",
  foodDetails:"Noodles",
  foodPrice:350,
  foodImg:"https://cdn.pixabay.com/photo/2015/10/23/11/17/eat-1002825_960_720.jpg"
  },

  {
  id:4,
  foodName:"Pizza",
  foodDetails:"Cheese loaded pizza",
  foodPrice:150,
  foodImg:"https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg"
  },

  {
  id:5,
  foodName:"Chocolate-Cake",
  foodDetails:"Sweet",
  foodPrice:200,
  foodImg:"https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_960_720.jpg"
  },

  {
  id:6,
  foodName:"Mango-Juice",
  foodDetails:"Fresh Mango Juice",
  foodPrice:80,
  foodImg:"https://cdn.pixabay.com/photo/2018/05/07/11/22/mango-3380631_960_720.jpg"
  }
  ]

  }


