//This is to test if I got things working
console.log("Log? More like uh... w-wait I will say something funny trust me!");


//add funtion
function write(){
// this is to test te button
    console.log("Does this work?");

//the time raito 
var time = 
document.querySelector('input[name="time"]:checked').value;
//test for it
console.log(time);

// What the words will be
var timeMessage;

//This will make raito have spisfic measeage
if(time == "midnight"){
    timeMessage = "night";
} else if(time == "morning"){
    timeMessage = "morning";
}else if(time == "noon"){
    timeMessage = "day";
}else if(time == "afternoon"){
    timeMessage = "afternoon";
}
//image time
var timePhoto;

///code for image depending on time
if(time == "midnight"){
    timePhoto = '<img class="img-fluid" src="image/midnight2.jpg" alt="A street at night">';
} else if(time == "morning"){
    timePhoto = '<img class="img-fluid" src="image/sunrise2.jpg" alt="A street at night">'
} else if(time == "noon"){
    timePhoto = '<img class="img-fluid" src="image/midday2.jpg" alt="A street at night">'
} else if(time == "afternoon"){
    timePhoto = '<img class="img-fluid" src="image/afternoon.jpg" alt="A street at night">'
}



//test if time photo works
console.log(timePhoto);

//Test if timeMessage is working
console.log(timeMessage);

// writen questions
//1
var W3noun = document.getElementById('W3-noun-place').value;
console.log(W3noun);
//2
var W2name = document.getElementById('W2-name').value;
console.log(W2name);
//3
var W4house = document.getElementById('W4-house-object').value;
console.log(W4house);
//4
var W10houseA = document.getElementById('W10-a-house-object').value;
console.log(W10houseA);
//5
var W1ani = document.getElementById('W1-animal').value;
console.log(W1ani);
//6
var W9candy = document.getElementById('W9-candy').value;
console.log(W9candy);
//7
var W5hat = document.getElementById('W5-hat').value;
console.log(W5hat);
//8
var W7nounA = document.getElementById('W7-a-noun-place').value;
console.log(W7nounA);
//9
var W6year = document.getElementById('W6-year').value;
console.log(W6year);
//10
var W8inst = document.getElementById('W8-instrument').value;
console.log(W8inst);


//the story hope this works?

document.getElementById('output').innerHTML = ' <div class="container text-white"> <div class="row"> <div class="col-sm-12 text-center"> <h2 class="py-2">The Story</h2></div></div> <!--end row 1--> <div class= <div class="row"> <div class="py-3 col-sm-12 text-center"> '+timePhoto+' </div> </div><!--end row 2-->  <div class= <div class="row"> <div class="py-3 col-sm-12 a-section text-center"> <p> It was the middle of the '+timeMessage+' I was walking down the road with my pet '+W1ani+'. I then saw my best friend '+W2name+' I asked them where they were going. They said that they were going to '+W3noun+' to see if they could find any '+W4house+' since they lost theirs. Behind them, I saw a strange-looking man wearing a '+W5hat+' looking at my '+W1ani+' with a look of disgust on his plain face.</p> <p>I asked him why he was looking at my pet like that, and he said, “My family was killed by a pack of '+W1ani+'s back in '+W6year+' now I can not look at them the same.” I did not know what to say so I just started to walk away hoping he would not follow me to '+W7nounA+'. When I thought I was alone, I pulled out my '+W8inst+' to play my '+W1ani+' a song in the hope of making it feel better after the man hurt its feelings. However, a child with a mouth full of '+W9candy+' came out of nowhere and wanted to play with my '+W1ani+'. I was about to say no but then I saw that the child had '+W4house+' that '+W2name+' wanted.</p> <p>So, I told this child that he could play with my pet if he gave me the '+W4house+'. The child nods their head and hands the object over. However, when he put it in my hand, I realised that it was a '+W10houseA+' made to look like '+W4house+' when I go to look at the kid, I see that they have stolen my pet. I just stood there for what felt like an hour thinking what the heck happened today.</p></div></div><!--end row 3--></div><!--end container-->';
// yeah story works I think lests hope I can finsh this thing in time.

}