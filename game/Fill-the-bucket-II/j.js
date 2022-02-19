/* created by : SwapniL */
/* script for Fill-The-Bucket-II */
      alert("Hi, i'm SwapniL, creator of this game. Plz Read the instructions carefully..");
      
      alert("Tap on the water pipes to rotate them. After setting up the pipes in the correct angles click the fill button to fill the bucket..");

      alert("good luck 👍🏻");

      function fillBucket(){
        const bkt = document.querySelector("#bucket");
        bkt.style.backgroundColor = "skyblue";
      }
      function showMsg(){
          alert("dont forget to upvote ❤️");
      }
      function fillTheBucket(){

        const pipe = document.querySelectorAll(".filled");
        const revpipe = document.querySelectorAll(".revfilled");
        const wtr = document.querySelector("#water");
        
       if(rotation[2]==180 && rotation[3]==180 && (rotation[6]==0 || rotation[6]==180) && rotation[7]==90 && (rotation[8]==0 || rotation[8]==180) && rotation[9]==90 && rotation[10]==180 && rotation[11]==180){
         alert("congrats 🥳 you filled your bucket..");
         setTimeout(showMsg, 26000);
         setTimeout(fillBucket, 25000);

         const pipes = document.querySelectorAll("path");
         pipes[0].setAttribute('class', 'path');
         pipes[2].setAttribute('class', 'path');
         pipes[4].setAttribute('class', 'path');
         pipes[6].setAttribute('class', 'path');
         pipes[8].setAttribute('class', 'path');
         pipes[10].setAttribute('class', 'path');
         pipes[13].setAttribute('class', 'path');
         pipes[15].setAttribute('class', 'path');
         pipes[18].setAttribute('class', 'path');
         pipes[20].setAttribute('class', 'path');
         pipes[22].setAttribute('class', 'path');
         pipes[24].setAttribute('class', 'path');

        pipe[0].setAttribute('class', 'fill-animation-1');
        pipe[1].setAttribute('class', 'fill-animation-2');
        pipe[3].setAttribute('class', 'fill-animation-6');
        pipe[5].setAttribute('class', 'fill-animation-4');
        pipe[6].setAttribute('class', 'fill-animation-7');
        pipe[7].setAttribute('class', 'fill-animation-8');

        if(rotation[6] == 0){
          pipe[2].setAttribute('class', 'fill-animation-3');
        }
        else{
          revpipe[0].setAttribute('class', 'fill-animation-3');
        }
        if(rotation[8] == 0){
          pipe[4].setAttribute('class', 'fill-animation-5');
        }
        else{
          revpipe[1].setAttribute('class', 'fill-animation-5');
        }
         wtr.setAttribute("class", "animateWater");
        
        const svgs = document.getElementsByTagName("svg");
          svgs[0].setAttribute("onclick", "");
          svgs[1].setAttribute("onclick", "");
          svgs[2].setAttribute("onclick", "");
          svgs[3].setAttribute("onclick", "");
          svgs[4].setAttribute("onclick", "");
          svgs[5].setAttribute("onclick", "");
          svgs[6].setAttribute("onclick", "");
          svgs[7].setAttribute("onclick", "");
          svgs[8].setAttribute("onclick", "");
          svgs[9].setAttribute("onclick", "");
          svgs[10].setAttribute("onclick", "");
          svgs[11].setAttribute("onclick", "");

          document.querySelector('#fillBtn').setAttribute("onclick", "");
       }
       else{
         alert("Oops!! try again");
       }
    }
      var rotation = [0,0,0,0,0,0,0,0,0,0,0,0,0];
      const p = document.querySelectorAll("svg");

      function rotate(id){
        let deg = rotation[id];
      if(deg === 0){
        switch(id){
          case 1 : p[0].setAttribute('class', 'rotateNinety'); break;
          case 2 : p[1].setAttribute('class', 'rotateNinety'); break;
          case 3 : p[2].setAttribute('class', 'rotateNinety'); break;
          case 4 : p[3].setAttribute('class', 'rotateNinety'); break;
          case 5 : p[4].setAttribute('class', 'rotateNinety'); break;
          case 6 : p[5].setAttribute('class', 'rotateNinety'); break;
          case 7 : p[6].setAttribute('class', 'rotateNinety'); break;
          case 8 : p[7].setAttribute('class', 'rotateNinety'); break;
          case 9 : p[8].setAttribute('class', 'rotateNinety'); break;
          case 10 : p[9].setAttribute('class', 'rotateNinety'); break;
          case 11 : p[10].setAttribute('class', 'rotateNinety'); break;
          case 12 : p[11].setAttribute('class', 'rotateNinety'); break;
        }
        rotation[id] = 90;
      }
      else if(deg === 90){
        switch(id){
          case 1 : p[0].setAttribute('class', 'rotateOneEighty'); break;
          case 2 : p[1].setAttribute('class', 'rotateOneEighty'); break;
          case 3 : p[2].setAttribute('class', 'rotateOneEighty'); break;
          case 4 : p[3].setAttribute('class', 'rotateOneEighty'); break;
          case 5 : p[4].setAttribute('class', 'rotateOneEighty'); break;
          case 6 : p[5].setAttribute('class', 'rotateOneEighty'); break;
          case 7 : p[6].setAttribute('class', 'rotateOneEighty'); break;
          case 8 : p[7].setAttribute('class', 'rotateOneEighty'); break;
          case 9 : p[8].setAttribute('class', 'rotateOneEighty'); break;
          case 10 : p[9].setAttribute('class', 'rotateOneEighty'); break;
          case 11 : p[10].setAttribute('class', 'rotateOneEighty'); break;
          case 12 : p[11].setAttribute('class', 'rotateOneEighty'); break;
        }
        rotation[id] = 180;
      }
      else if(deg === 180){
        switch(id){
          case 1 : p[0].setAttribute('class', 'rotateTwoSeventy'); break;
          case 2 : p[1].setAttribute('class', 'rotateTwoSeventy'); break;
          case 3 : p[2].setAttribute('class', 'rotateTwoSeventy'); break;
          case 4 : p[3].setAttribute('class', 'rotateTwoSeventy'); break;
          case 5 : p[4].setAttribute('class', 'rotateTwoSeventy'); break;
          case 6 : p[5].setAttribute('class', 'rotateTwoSeventy'); break;
          case 7 : p[6].setAttribute('class', 'rotateTwoSeventy'); break;
          case 8 : p[7].setAttribute('class', 'rotateTwoSeventy'); break;
          case 9 : p[8].setAttribute('class', 'rotateTwoSeventy'); break;
          case 10 : p[9].setAttribute('class', 'rotateTwoSeventy'); break;
          case 11 : p[10].setAttribute('class', 'rotateTwoSeventy'); break;
          case 12 : p[11].setAttribute('class', 'rotateTwoSeventy'); break;
        }
        rotation[id] = 270;
      }
      else{
        switch(id){
          case 1 : p[0].setAttribute('class', 'rotateZero'); break;
          case 2 : p[1].setAttribute('class', 'rotateZero'); break;
          case 3 : p[2].setAttribute('class', 'rotateZero'); break;
          case 4 : p[3].setAttribute('class', 'rotateZero'); break;
          case 5 : p[4].setAttribute('class', 'rotateZero'); break;
          case 6 : p[5].setAttribute('class', 'rotateZero'); break;
          case 7 : p[6].setAttribute('class', 'rotateZero'); break;
          case 8 : p[7].setAttribute('class', 'rotateZero'); break;
          case 9 : p[8].setAttribute('class', 'rotateZero'); break;
          case 10 : p[9].setAttribute('class', 'rotateZero'); break;
          case 11 : p[10].setAttribute('class', 'rotateZero'); break;
          case 12 : p[11].setAttribute('class', 'rotateZero'); break;
        }
        rotation[id] = 0;
      }
    }
