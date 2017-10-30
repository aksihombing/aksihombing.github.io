var i=[0];
var images =[
"https://image.prntscr.com/image/NUJqZtR.png",      "https://image.prntscr.com/image/hDeeyG9DStmhjhQbeFouEg.jpg",
"https://image.prntscr.com/image/fS36DJm8Qb29joEzcLGdAw.jpg",
"https://image.prntscr.com/image/Q0YauOezQ2WktaRE2-s_TA.jpg",
"https://image.prntscr.com/image/zEL-1XpfQmWiV7bhoGfa8A.jpg",
"https://image.prntscr.com/image/NtTOdE1MTFemmdJY178Ggg.jpg",
"https://image.prntscr.com/image/TfRo0htRQCGvK6HSdMJG_w.jpg",
"https://image.prntscr.com/image/CDup9UaMTIK3yOcBI4jZ7A.jpg",
 
]
document.getElementById("#slideshow img").attr("src", images[0]);
document.getElementById("#next").click(function(){
  i = (i+1) % images.length
  document.getElementById("#slideshow img").attr("src", images[i]);
})
document.getElementById("#prev").click(function (){
  i = (i+1) % images.length;
  document.getElementById("#slideshow img").attr("src", images[i])
});

