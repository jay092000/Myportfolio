function projects(id) {
  for(i=0;i<4;i++)
  {
    document.getElementById("projectSelection_"+ (i+1)).classList.remove("activeted_project");
  }
  document.getElementById("projectSelection_"+ id).classList.add("activeted_project");
  switch (id) {
    case 1:
      for (i = 0; i < 8; i++) {
        $('#image_' + (i + 1)).fadeIn(800);
      }
     
      break;
    case 2:
      for (i = 0; i < 3; i++) {
        $('#image_' + (i + 1)).fadeIn(800);
       
      }
      for (i = 3; i < 8; i++) {
        $('#image_' + (i + 1)).fadeOut(1);
      }
      break;
    case 3:
      for (i = 0; i < 3; i++) {
        $('#image_' + (i + 1)).fadeOut(1);
      }
      for (i = 3; i < 6; i++) {
        $('#image_' + (i + 1)).fadeIn(800);
      }
      for (i = 6; i < 8; i++) {
        $('#image_' + (i + 1)).fadeOut(1);
      }
      break;
    case 4:
        for (i = 0; i < 6; i++) {
            $('#image_' + (i + 1)).fadeOut(1);
          }
          for (i = 6; i < 8; i++) {
            $('#image_' + (i + 1)).fadeIn(800);
          }
  }
}
