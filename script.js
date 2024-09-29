


let ascii_art = `

    TRYING TO CHEAT ALREADY ? go back pls.

                ___-----------___
           __--~~                 ~~--__
       _-~~                             ~~-_
    _-~                                     ~-_
   /                                           \
  |                                             |
 |                                               |
 |                                               |
|                                                 |
|                                                 |
|                                                 |
 |                                               |
 |  |    _-------_               _-------_    |  |
 |  |  /~         ~\           /~         ~\  |  |
  ||  |             |         |             |  ||
  || |               |       |               | ||
  || |              |         |              | ||
  |   \_           /           \           _/   |
 |      ~~--_____-~    /~V~\    ~-_____--~~      |
 |                    |     |                    |
|                    |       |                    |
|                    |  /^\  |                    |
 |                    ~~   ~~                    |
  \_         _                       _         _/
    ~--____-~ ~\                   /~ ~-____--~
         \     /\                 /\     /
          \    | ( ,           , ) |    /
           |   | (~(__(  |  )__)~) |   |
            |   \/ (  (~~|~~)  ) \/   |
             |   |  [ [  |  ] ]  /   |
              |                     |
               \                   /
                ~-_             _-~
                   ~--___-___--~`





console.log(ascii_art)

let counter = 0;  
let clicks = 0;
let hiddenTextInterval;
let discovered = [];


$(document).ready(function() {
    // Counter button flag
    $('#counter-button').click(function() {
        clicks++;
        $('#counter-text').text('Clicks: ' + clicks);
        if (clicks === 25) {
            alert('Does your finger hurt? you should probably stop no ?');
        } else if (clicks === 50) {
            showFlag('Counter Clicks Flag!');
            clicks = 0;
            $('#counter-text').text('Clicks: ' + clicks);
        }
    });

    // Text input flags
    $('#text-input').on('input', function() {

        let text = $(this).val();
        text = text.replace(/\s+/g, '').toLowerCase();

        if (text === 'gdsc') {

            showFlag('GDSC the best of clubs!');
            $(this).val('');

        } else if (text === 'texthere') {

            showFlag('clever flag!'); // oops i forgot this one so actually there are 11 flags, lets just keep it since its cool
            $(this).val('');

        } else if (text === 'webdev') {

            showFlag('can you center a div ?');
            $(this).val('');

        } else if (text === 'datascience') {

            showFlag('i hate snakes but i like python');
            $(this).val('');

        } else if (text === 'cybersecurity') {

            showFlag('how can i hack facebook ?');
            $(this).val('');

        }
    });


    // Hidden Text
    const revealDuration = 90000; // 1.5 minutes in milliseconds
    const hiddenTextElement = $('#hidden-text');

    hiddenTextElement.css({
        'font-size': '0px',  
        'opacity': '0',      
        'font-family': 'Comic Sans MS, cursive, sans-serif',
        'transition': 'font-size 90s linear, opacity 90s linear'
    });


    setTimeout(function() {
        hiddenTextElement.css({
            'font-size': '24px', 
            'opacity': '1'      
        });
    }, 0);

    setTimeout(function() {
        showFlag('90 seconds flag');
    }, revealDuration);



    // Moroccan flag flag lol

    $('#moroccan_flag').click(function() {
        showFlag('technically a flag!')
    })


    // Middle 'O' click event
    document.getElementById('middle-o').addEventListener('click', function() {
        showFlag('Middle O Flag!');
        
        setTimeout(() => {
            document.getElementById('google-text').innerHTML = `
                <span style="color: #4285f4;">G</span><span style="color: #EA4335;">o</span><span style="color: #FBBC05;">o</span><span style="color: #34A853;">g</span><span style="color: #EA4335;">l</span><span style="color: #4285f4;">e</span>
            `;
        }, 1000);
    });
});


// GOAT flag MEEEE3SSI

$('#goat-button').click(function() {
    
    let userInput = prompt("le Goat de ENSAK ?");
    
    
    if (userInput === "chaoui") {
        
        alert("You are a true Ensakien!");
        showFlag("chaoui 🐐")
       
        $('#goat-button').prop('disabled', true);
    } else {
        alert("Wrong answer! Try again.");
    }
});


function showFlag(flagText) {
    
    if (!discovered.includes(flagText)) {

        $('#flag-text').text(flagText);
        $('#flag-modal').modal('show');
        counter++;
        $('#flags-found').text('Flags found: ' + counter + '/10');

        discovered.push(flagText)
    }
}
