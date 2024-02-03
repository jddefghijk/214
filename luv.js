function greet(){
    clearScreen(); // Clear the screen
            let text;
            let person = prompt("Enter your lovely name:", "luv?");
            if (person === null || person === "") {
                text = "Hope you have a happy heart this Valentine's Day. Lovelots ;) ";
            } else {
                text = "Hello " + person + "! How are you today?"; 
                showGIF(); // Show the image or GIF
                showMessage(); // Show the message
                showGif2(); // Show the new image
                heartMsg();
                heartGif();
                luvLetter();
            }
            document.getElementById("demo").textContent = text;
            hideButton(); // Hide the button
} 

function clearScreen() {
    document.getElementById("demo").textContent = '';
}

function hideButton() {
    document.querySelector("button").style.display = "none";
}


function showGIF() {
    const gifElement = document.getElementById("gif1");
    gifElement.src = "https://media.tenor.com/5iiD6jOOCuAAAAAC/quby-high-five.gif"; // Set the image or GIF URL
    gifElement.style.display = "block"; // Display the image or GIF
}

function showMessage() {
    const messageElement = document.getElementById("message");
    messageElement.textContent = "Fine? Tired? I know you did great today and I'm so proud of you! Here! take this";
    messageElement.style.display = "block"; // Display the message
}

function showGif2() {
    const newGif2= document.getElementById("gif2");
    newGif2.src = "https://media.tenor.com/-MlEF7aRcA0AAAAi/tkthao219-quby.gif"; // Set the new image URL
    newGif2.style.display = "block"; // Display the new image
}

function heartMsg(){
    const messageheart = document.getElementById("heartMsg");
    messageheart.innerHTML = "heartue heartue heartue";

    messageheart.style.display = "block"; // Display the message
}

function heartGif(){
    const heartGif = document.getElementById("heartGif");
    heartGif.src = "https://media.tenor.com/PFT3EMNFPA0AAAAi/tonton-heart-running.gif";

    heartGif.style.display = "block";
}

function luvLetter() {
    const messsageLuv = document.getElementById("luvletter");
    messsageLuv.innerHTML = "<br><br>Today is a special day,  very special where everyone express there love to each other.<br> But, valentines is not only for lovers my dear friend.<br><br>How lonely life would be.<br> If you weren't present. <br>I've never known a friend as dear as you.<br> I want to share this joyful <br>moment with you.<br><br>Happy Valentine's Day! <br><br>                 - jddefghjk <3" ;
    messsageLuv.style.display = "block";
    }