'use strict'
let myBooks = [
                 {
                title : "A Song Of Ice and Fire ",
                authore : "George R.R Martin",
                alreadyRead:true
                },

               {
                title : "Davinci Code",
                authore : "Dan Brown",
                alreadyRead:false
                },

              {
                title : "Homo Deus",
                authore : "Yuval Noah Harari",
                alreadyRead:true
                }
            ]
            for (let i = 0; i<= 2; i++){
                console.log(myBooks[i].title + " by " + myBooks[i].authore)

            }

            let i = 0;
            while ( i<= 2 ){
                if (myBooks[i].alreadyRead == true){
                    console.log("You already read " + '"' +myBooks[i].title +'"')
                }else{
                    console.log("you still need to read "+'"' + myBooks[i].title + '"')
                }
                i++;
            }