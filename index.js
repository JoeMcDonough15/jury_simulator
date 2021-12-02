const KEYS = ["Ab", "A", "Bb", "B", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G"];
// const levelSelect = prompt('What is your level? Please enter 1-7');

const requirements = [
    {
    level : 1,
    criteria : [
        `${generateKey()} Major scale sounded over largest reasonable range`,
        `${generateKey()} Major scale in diatonic thirds`,
        `${generateKey()} Major diatonic modes, in sequence.`,
        `All diatonic triads (arpeggiated) from  ${generateKey()} Major scale, in sequence`,
        `${generateKey()} Chromatic scale played in triplets`,
        `${generateKey()} Chromatic scale played in eighth notes`,
        `Interval Pattern: Minor 3rds ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 2nds ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 3rds ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 2nds ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 3rds ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Major 3rds ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Major 2nds descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 3rds descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 3rds descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 2nds descending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 3rds descending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Major 3rds descending in whole steps starting on ${generateKey()}`
        ],
    tunes : [
        'Bessie\'s Blues', 
        'Au Privave', 
        'Tenor Madness', 
        'Satin Doll', 
        'Tune Up', 
        'Honeysuckle Rose/Scrapple From the Apple',
        'Afternoon in Paris', 
        'Well You Needn\t',
        ]
    },
    {
    level: 2, 
    criteria: [
        `${generateKey()} Harmonic minor scale sounded over largest reasonable range`,
        `${generateKey()} Jazz minor scale sounded over largest reasonable range`,
        `${generateKey()} Jazz minor scale in thirds`,
        `${generateKey()} Harmonic minor scale in thirds`,
        `Diatonic triads (arpeggiated) from Jazz Minor, key of ${generateKey()}`,
        `Diatonic triads (arpeggiated) from Harmonic Minor, key of ${generateKey()}`,
        `${generateKey()} Blues scale`,
        `${generateKey()} Major Pentatonic scale`,
        `${generateKey()} Minor Pentatonic scale`,
        `${generateKey()} Major triad in all inversions`,
        `${generateKey()} Minor triad in all inversions`,
        `${generateKey()} Diminished triad in all inversions`,
        `${generateKey()} Augmented triad in all inversions`,
        `Interval Pattern: Perfect 4ths ascending in half-steps starting on ${generateKey()}`,
        `Interval Pattern: Tritones ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Perfect 5ths ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Perfect 4ths ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Tritones ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Perfect 5ths ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Perfect 4ths descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Tritones descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Perfect 5ths descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Perfect 4ths descending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Tritones descending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Perfect 5ths descending in whole steps starting on ${generateKey()}`
        ],
        tunes : ['Take The \'A\' Train', 'Softly, As In a Morning Sunrise', 'Autumn Leaves', 
        'Blue Bossa', 
        'Oleo', 
        'In a Sentimental Mood',
        'One For Daddy-O', 
        'Sweet Georgia Brown/Dig',
        ],
    },
    {
    level: 3,
    criteria: [
        `Diatonic 7th chords (arpeggiated) from Major in the key of ${generateKey()}`,
        `Diatonic 7th chords (arpeggiated) from Jazz Minor in the key of ${generateKey()}`,
        `Diatonic 7th chords (arpeggiated) from Harmonic Minor in the key of ${generateKey()}`,
        `${generateKey()} Major 7th chord in all inversions`,
        `${generateKey()} Minor 7th chord in all inversions`,
        `${generateKey()} Dominant 7th chord in all inversions`,
        `${generateKey()} Minor 7 b5 chord in all inversions`,
        `${generateKey()} Diminished 7th chord in all inversions`,
        `${generateKey()} Augmented 7th chord in all inversions`,
        `${generateKey()} Minor (Major 7) chord in all inversions`,
        `Interval Pattern: Minor 6ths ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 6ths ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 7ths ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 7ths ascending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 6ths descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 6ths descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 7ths descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Major 7ths descending in half steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 6ths ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Major 6ths ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 7ths ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Major 7ths ascending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 6ths descending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Major 6ths descending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Minor 7ths descending in whole steps starting on ${generateKey()}`,
        `Interval Pattern: Major 7ths descending in whole steps starting on ${generateKey()}`
        ],
        tunes : [
        'There Is No Greater Love',
        'Four',
        'All The Things You Are',
        'Someday My Prince Will Come',
        'I\'ll Remember April',
        'Rhythm Changes (any bop head or variant)',
        'Misty',
        'A Night in Tunisia',
        ]
    }, 
    {
     level: 4,
     criteria: [
         `Diatonic 9th chords (arpeggiated) from Major in the key of ${generateKey()}`,
        `Diatonic 9th chords (arpeggiated) from Jazz Minor in the key of ${generateKey()}`,
        `Diatonic 9th chords (arpeggiated) from Harmonic Minor in the key of ${generateKey()}`,
        `${generateKey()} Locrian #2 scale sounded over largest reasonable range`,
        `${generateKey()} Mixolydian b9/b13 scale sounded over largest reasonable range`,
        `${generateKey()} Lydian-Dominant scale sounded over largest reasonable range`,
        `${generateKey()} Major 9th chord in all inversions`,
        `${generateKey()} Minor 9th chord in all inversions`,
        `${generateKey()} Dominant 9th chord in all inversions`,
        `${generateKey()} Dominant 7th b9 chord in all inversions`,
        `${generateKey()} Minor 9th b5 chord in all inversions`,
        `${generateKey()} Augmented 9th chord in all inversions`,
        `${generateKey()} Minor 9th (Major 7) chord in all inversions`
        ], 
    tunes :[
        'Blues For Alice', 
        'Bluesette',
        'Just Friends',
        'What Is This Thing Called Love/Hot House',
        'Body and Soul',
        'Jordu',
        'How High the Moon',
        'Cherokee',
        'Donna Lee',
    ]
    },
    {
    level: 5,
    criteria: [
        `${generateKey()} Major scale in diatonic fourths`,
        `${generateKey()} Jazz minor scale in diatonic fourths`,
        `${generateKey()} Harmonic minor scale in diatonic fourths`,
        `${generateKey()} Locrian #2 scale in diatonic fourths`,
        `${generateKey()} Mixolydian b9/b13 scale in diatonic fourths`,
        `${generateKey()} Lydian-Dominant scale in diatonic fourths`,
        `${generateKey()} Symmetric Diminished scale (starting with a whole step)`,
        `${generateKey()} Dominant Diminished scale (starting with a half step)`,
        `${generateKey()} Symmetric Diminished scale (starting with a whole step) in diatonic fourths`,
        `${generateKey()} Dominant Diminished scale (starting with a half step) in diatonic fourths`,
        `${generateKey()} Wholetone scale`,
        `${generateKey()} Wholetone scale in diatonic fourths`,
        `Diatonic 11th chords (arpeggiated) from Major in the key of ${generateKey()}`,
        `Diatonic 11th chords (arpeggiated) from Jazz Minor in the key of ${generateKey()}`,
        `Diatonic 11th chords (arpeggiated) from Harmonic Minor in the key of ${generateKey()}`,
        `${generateKey()} Major 7 #11 arpeggio`,
        `${generateKey()} Minor 11th arpeggio`,
        `${generateKey()} Minor 11th (Major 7) arpeggio`,
        `${generateKey()} Dom 7th #11 arpeggio`,
        `${generateKey()} Dom 7th b9 #11 arpeggio`,
        `${generateKey()} Dom 7th #9 #11 arpeggio`,
        `${generateKey()} Dom 7th #5 #11 arpeggio`,
        `${generateKey()} Dom 7th #5 b9 #11 arpeggio`,
        `${generateKey()} Dom 7th #5 #9 #11 arpeggio`,
        ],
        tunes : [
        `Bessie's Blues in the key of ${generateKey()}`,
        `Tenor Madness in the key of ${generateKey()}`,
        `Satin Doll in the key of ${generateKey()}`,
        `Tune Up in the key of ${generateKey()}`,
        `Take the 'A' Train in the key of ${generateKey()}`,
        `Softly As In a Morning Sunrise in the key of ${generateKey()}`,
        `Autumn  Leaves in the key of ${generateKey()}`,
        `Oleo in the key of ${generateKey()}`,
        `There Is No Greater Love in the key of ${generateKey()}`,
        `Four in the key of ${generateKey()}`,
        `All The Things You Are in the key of ${generateKey()}`,
        `Someday My Prince Will Come in the key of ${generateKey()}`,
        `Just Friends in the key of ${generateKey()}`,
        `What Is This Thing Called Love? in the key of ${generateKey()}`,
        `How High The Moon in the key of ${generateKey()}`,
        `Cherokee in the key of ${generateKey()}`,
        `On Green Dolphin Street in the key of ${generateKey()},`,
        `Lady Bird in the key of ${generateKey()}`,
        'Moment\'s Notice', 
        'Airegin',
        'I Can\t Get Started',
        `Yesterdays in the key of ${generateKey()}`,
        `Have You Met Miss Jones in the key of ${generateKey()}`,
        `Woody 'n You in the key of ${generateKey()}`,
        ]
    },
    {
    level: 6,
    criteria: [
        `${generateKey()} Major scale in diatonic fifths`,
        `${generateKey()} Jazz minor scale in diatonic fifths`,
        `${generateKey()} Harmonic minor scale in diatonic fifths`,
        `${generateKey()} Locrian #2 scale in diatonic fifths`,
        `${generateKey()} Mixolydian b9/b13 scale in diatonic fifths`,
        `${generateKey()} Lydian-Dominant scale in diatonic fifths`,
        `${generateKey()} Wholetone scale in diatonic fifths`,
        `${generateKey()} Symmetric Diminished scale (starting with a whole step) in diatonic fifths`,
        `${generateKey()} Dominant Diminished scale (starting with a half step) in diatonic fifths`,
        `${generateKey()} Augmented Scale`,
        `${generateKey()} Augmented Scale in diatonic fifths`,
        `Diatonic 13th chords (arpeggiated) from Major in the key of ${generateKey()}`,
        `Diatonic 13th chords (arpeggiated) from Jazz Minor in the key of ${generateKey()}`,
        `Diatonic 13th chords (arpeggiated) from Harmonic Minor in the key of ${generateKey()}`,
        ],
    tunes : [
        `Bessie's Blues in the key of ${generateKey()}`,
        `Tenor Madness in the key of ${generateKey()}`,
        `Satin Doll in the key of ${generateKey()}`,
        `Tune Up in the key of ${generateKey()}`,
        `Take the 'A' Train in the key of ${generateKey()}`,
        `Softly As In a Morning Sunrise in the key of ${generateKey()}`,
        `Autumn  Leaves in the key of ${generateKey()}`,
        `Oleo in the key of ${generateKey()}`,
        `There Is No Greater Love in the key of ${generateKey()}`,
        `Four in the key of ${generateKey()}`,
        `All The Things You Are in the key of ${generateKey()}`,
        `Someday My Prince Will Come in the key of ${generateKey()}`,
        `Just Friends in the key of ${generateKey()}`,
        `What Is This Thing Called Love? in the key of ${generateKey()}`,
        `How High The Moon in the key of ${generateKey()}`,
        `Cherokee in the key of ${generateKey()}`,
        `On Green Dolphin Street in the key of ${generateKey()},`,
        `Lady Bird in the key of ${generateKey()}`,
        'Moment\'s Notice', 
        'Airegin',
        'I Can\t Get Started',
        `Yesterdays in the key of ${generateKey()}`,
        `Have You Met Miss Jones in the key of ${generateKey()}`,
        `Woody 'n You in the key of ${generateKey()}`,
        'Confirmation',
        `If I Were a Bell in the key of ${generateKey()}`,
        'Lazy Bird', 
        `Stella By Starlight in the key of ${generateKey()}`,
        'Fee-Fi-FoFum',
        `Invitation in the key of ${generateKey()}`,
        'Peace',
        'Whisper Not',
    ] 
    },
    {
    level: 7,
    criteria: [
        `${generateKey()} Major scale in diatonic sixths`,
        `${generateKey()} Jazz minor scale in diatonic sixths`,
        `${generateKey()} Harmonic minor scale in diatonic sixths`,
        `${generateKey()} Locrian #2 scale in diatonic sixths`,
        `${generateKey()} Mixolydian b9/b13 scale in diatonic sixths`,
        `${generateKey()} Lydian-Dominant scale in diatonic sixths`,
        `${generateKey()} Wholetone scale in diatonic sixths`,
        `${generateKey()} Symmetric Diminished scale (starting with a whole step) in diatonic sixths`,
        `${generateKey()} Dominant Diminished scale (starting with a half step) in diatonic sixths`,
        ], 
    tunes: [
        `Bessie's Blues in the key of ${generateKey()}`,
        `Tenor Madness in the key of ${generateKey()}`,
        `Satin Doll in the key of ${generateKey()}`,
        `Tune Up in the key of ${generateKey()}`,
        `Take the 'A' Train in the key of ${generateKey()}`,
        `Softly As In a Morning Sunrise in the key of ${generateKey()}`,
        `Autumn  Leaves in the key of ${generateKey()}`,
        `Oleo in the key of ${generateKey()}`,
        `There Is No Greater Love in the key of ${generateKey()}`,
        `Four in the key of ${generateKey()}`,
        `All The Things You Are in the key of ${generateKey()}`,
        `Someday My Prince Will Come in the key of ${generateKey()}`,
        `Just Friends in the key of ${generateKey()}`,
        `What Is This Thing Called Love? in the key of ${generateKey()}`,
        `How High The Moon in the key of ${generateKey()}`,
        `Cherokee in the key of ${generateKey()}`,
        `On Green Dolphin Street in the key of ${generateKey()},`,
        `Lady Bird in the key of ${generateKey()}`,
        'Moment\'s Notice', 
        'Airegin',
        'I Can\t Get Started',
        `Yesterdays in the key of ${generateKey()}`,
        `Have You Met Miss Jones in the key of ${generateKey()}`,
        `Woody 'n You in the key of ${generateKey()}`,  
        `If I Were a Bell in the key of ${generateKey()}`,    
        `Stella By Starlight in the key of ${generateKey()}`,  
        `Invitation in the key of ${generateKey()}`,
        `Triste in the key of ${generateKey()}`,
        'Along Came Betty,',
        'Round Midnight',
        'Inner Urge',
        `Like Someone in Love in the key of ${generateKey()}`,
        'Dolphin Dance',
        `Prelude to a Kiss in the key of ${generateKey()}`,
        'Sophisticated Lady',
        'Stablemates',
        'Con Alma',
    ]
    },
];

// Determine which material should be used based on user's level selection from prompt above
// use this to set up the game
// let material;
// requirements.forEach(requirement => {
//     if (requirement.level === parseInt(levelSelect)) {
//         material = requirement;
//     }
// });

// or forget the prompt and arbitrarily start on Level 1 and let the user change levels during play
// with keypad. 

let material = requirements[0];

// DOM manipulation - set up the elements needed
const body = document.body;
const container = document.createElement('div');
container.classList.add('container');
container.setAttribute('id', 'container');
const headerLevel = document.createElement('h1');
headerLevel.innerText = `Level ${material.level}`;
headerLevel.classList.add('header-level');
const headerSelection = document.createElement('h2');
headerSelection.classList.add('header-selection');
// first challenge 
const selectionNum = Math.floor(Math.random() * material.criteria.length);
headerSelection.innerText = material.criteria[selectionNum];
const directions = document.createElement('p');
directions.classList.add('directions');
directions.innerText = "Press 1-7 to change levels, q to quit, or any other key to continue"
container.append(headerLevel, headerSelection, directions);
body.append(container);


// Generate Selection - generate random number and index material.criteria at that number
// loop to play game 
function gameLoop() {
    const selectionNum = Math.floor(Math.random() * material.criteria.length);
    const selection = material.criteria[selectionNum];
    headerLevel.innerText = `Level ${material.level}`;
    headerSelection.innerText = selection;
}

function generateKey() {
    const keyNum = Math.floor(Math.random() * KEYS.length);
    return KEYS[keyNum];
}

function quitGame() {
    headerLevel.remove();
    headerSelection.remove();
    directions.remove();
    const goodBye = document.createElement('h1');
    goodBye.innerText = 'All done for now!  Keep practicing!';
    const templeT = document.createElement('img');
    templeT.setAttribute('src', './temple-logo-t-box.svg');
    templeT.setAttribute('alt', 'Temple T');
    templeT.classList.add('temple-t');
    container.classList.add('container--gameover');
    container.append(goodBye, templeT);

    // <svg id="Logos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><style>.cls-1{fill:#a41e35;}.cls-2{fill:#fff;}</style></defs><title>Temple-Logo-T-Header</title><rect class="cls-1" x="-0.17" y="-0.17" width="120" height="120.28"/><polygon class="cls-2" points="19.56 12.98 19.56 45.6 26.55 45.6 26.55 19.47 93.44 19.47 93.44 45.6 100.1 45.6 100.1 12.98 19.56 12.98"/><polygon class="cls-2" points="37.53 86.03 37.53 92.69 56 92.69 56 27.63 34.37 27.63 34.37 45.6 41.19 45.6 41.19 34.44 49.18 34.44 49.18 86.03 37.53 86.03 37.53 86.03"/><polygon class="cls-2" points="64.07 27.54 64.07 92.61 82.54 92.61 82.54 85.95 70.89 85.95 70.89 34.36 78.88 34.36 78.88 45.6 85.71 45.6 85.71 27.54 70.89 27.54 64.07 27.54"/><polygon class="cls-2" points="37.53 106.96 82.54 106.96 82.54 100.38 37.53 100.38 37.53 106.96 37.53 106.96"/></svg>
}


document.addEventListener('keydown', e => {
    switch(e.key) {
        case '1' : 
            material = requirements[0];
            gameLoop();
            break;
        case '2' :
            material = requirements[1];
            gameLoop();
            break;
        case '3' :
            material = requirements[2];
            gameLoop();
            break;
        case '4' :
            material = requirements[3];
            gameLoop();
            break;
        case '5' :
            material = requirements[4];
            gameLoop();
            break;
        case '6' :
            material = requirements[5];
            gameLoop();
            break;
        case '7' :
            material = requirements[6];
            gameLoop();
            break;   
        case 'q' :
            quitGame();
            break;
        default:
            gameLoop();
            // draw another selection from current level
    }
});


container.addEventListener('click', () => {
    gameLoop();
})
