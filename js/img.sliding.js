setTimeout(function () {
        let part1 = document.getElementById("part1");
        let part2 = document.getElementById("part2");
        let welcome = document.getElementById("welcome");
        let part1_1 = document.getElementById("part1_1");
        let part1_2 = document.getElementById("part1_2");
        let part1_3 = document.getElementById("part1_3");
        let part1_4 = document.getElementById("part1_4");
        
        welcome.style.transform = "translatex(300%)";
        for (var i = 51; i < 101; i=i+1) {
            setTimeout(function(){width_inc(i)},50);
        }
       
        function width_inc(wid)
        {
            part1.style.width = wid + '%';
        }
        part2.style.width = 0;
        window.setTimeout(function(){
            welcome.style.display = 'none'; 
        },250);
        window.setTimeout(function(){
           part1_1.style.opacity = 1;
        },400);
        window.setTimeout(function(){
            part1_2.style.opacity = 1;
            part1_3.style.opacity = 1;
         },800);
         window.setTimeout(function(){
            part1_4.style.opacity = 1;
         },1000);
  }, 1000);