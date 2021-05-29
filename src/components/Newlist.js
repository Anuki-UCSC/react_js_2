import React from 'react';

function Newlist(){

    const list=[{
        name:{
            title:"Miss",
            first:"Annemay",
            last:"Donk"
        },
        email:"annemay.donk@example.com",
        img:"https://randomuser.me/api/portraits/med/women/58.jpg",
    },

        {name:{
            title:"Miss",
            first:"Anuki",
            last:"Donk"
        },
        email:"annemay.donk@example.com",
        img:"https://randomuser.me/api/portraits/med/women/58.jpg",
    },

        {name:{
            title:"mr",
            first:"ishan",
            last:"Donk"
        },
        email:"annemay.donk@example.com",
        img:"https://randomuser.me/api/portraits/med/women/58.jpg",
    },

];


const display=()=>
{
  return(
      list.map(x=>
        <ul className="list-group-item list-group-item-success">
            <div className="row">
                <div className="col-2">
                    <img src={x.img} className="rounded-circle" />
                </div>
                <div className="col-8">
                    <li>name :{x.name.first}</li>
                    <li>name :{x.email}</li>
                </div>
                
            </div>
            
        </ul>
        )
  );  
}

    return(
        
        <div className="">
            {display()}
        </div>     
             
       
    );
}

export default Newlist;