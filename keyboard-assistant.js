// Goals:

// Have a keyboard that the user can click on in order to help them learn the scale/pattern assigned.
// The keyboard will highlight the starting note the user should begin with.  It will then highlight green if the next
// user-keyed note is correct or red if incorrect.  If green, the note will sound when the key is clicked.  If red, an error sound will play.
// If any note is incorrect, you start back at the beginning of the scale

// This keyboard assistant should be able to help with any of the scales/modes, scales/modes in intervals, arpeggios, and interval studies called
// by the simulator

//TODO:
// Convert the Python written code to Javascript so that I can start selecting Jury Proficiencies at random
// Combine this file with the randomizer and start mapping the randomly called challenges with diatonicSystems
// build out the keyboard interface and map every note to a key



const CHROMATIC = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B/Cb', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B/Cb', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B/Cb', 'C'];


let diatonicSystems = []; // Array of objects representing every major, melodic minor, and harmonic minor diatonic system of modes.

chromaticIndex = 0;
while (chromaticIndex < 12) {
  const majorParentScale = majorScale(chromaticIndex);
  const melodicMinorParentScale = melodicMinorScale(chromaticIndex);
  const harmonicMinorParentScale = harmonicMinorScale(chromaticIndex);
  const findModes = new KeyModes(chromaticIndex, majorParentScale, melodicMinorParentScale, harmonicMinorParentScale);
  diatonicSystems.push(findModes);
  chromaticIndex++;
}


// An example of pulling out all 12 Ionian #5 scales.
diatonicSystems.forEach(
  keyCenter => {
    const ionianRaiseFive = keyCenter.modes.filter(mode => {
      return mode.modeName.includes('Ionian #5');
    });
    // console.log(ionianRaiseFive[0].mode);
});

// Now, just pulling out C Ionian #5
diatonicSystems.forEach(
  keyCenter => {
    const cIonianRaiseFive = keyCenter.modes.filter(mode => {
      return mode.modeName === 'C Ionian #5';
    });
    // console.log(cIonianRaiseFive);
});

// Print only G Lydian
diatonicSystems.forEach(
  keyCenter => {
    keyCenter.modes.forEach(keyMode => {
      if (keyMode.modeName === 'G Lydian') {
        // console.log(keyMode.mode);
      }
    });
  });


function majorScale(root) {
  let scale = [CHROMATIC[root]];
  for (let i = 0; i < 14; i++) {
    if (scale.length === 3 || scale.length === 7 || scale.length === 10 || scale.length === 14) {
      scale.push(CHROMATIC[root + 1]);
      root++;
    }
    else {
      scale.push(CHROMATIC[root + 2]);
      root += 2;
    }
  }
  return scale;
}

function melodicMinorScale(root) {
  let scale = [CHROMATIC[root]];
  for (let i = 0; i < 14; i++) {
    if (scale.length === 2 || scale.length === 7 || scale.length === 9 || scale.length === 14) {
      scale.push(CHROMATIC[root + 1]);
      root++;
    }
    else {
      scale.push(CHROMATIC[root + 2]);
      root += 2;
    }
  }
  return scale;
}

function harmonicMinorScale(root) {
  let scale = [CHROMATIC[root]];
  for (let i = 0; i < 14; i++) {
    if (scale.length === 2 || scale.length === 5 || scale.length === 7 || scale.length === 9 || scale.length === 12 || scale.length === 14) {
      scale.push(CHROMATIC[root + 1]);
      root++;
    }
    else if (scale.length === 6 || scale.length === 13) {
      scale.push(CHROMATIC[root + 3]);
      root += 3;
    }
    else {
      scale.push(CHROMATIC[root + 2]);
      root += 2;
    }
  }
  return scale;
}

function KeyModes(key, majorParentScale, melodicMinorParentScale, harmonicMinorParentScale) {
    this.name = `All The Major and Minor Modes of the Key of ${key}`
    this.modes = [

      {
        modeName: `${CHROMATIC[key]} Ionian`,
        mode: majorParentScale.slice(0, 8)
      },

      {
        modeName: `${CHROMATIC[key + 2]} Dorian`,
        mode: majorParentScale.slice(1, 9)
      },

      {
        modeName: `${CHROMATIC[key + 4]} Phrygian`,
        mode: majorParentScale.slice(2, 10)
      },

      {
        modeName: `${CHROMATIC[key + 5]} Lydian`,
        mode: majorParentScale.slice(3, 11)
      },

      {
        modeName: `${CHROMATIC[key + 7]} Mixolydian`,
        mode: majorParentScale.slice(4, 12)
      },

      {
        modeName: `${CHROMATIC[key + 9]} Aeolian`,
        mode: majorParentScale.slice(5, 13)
      },

      {
        modeName: `${CHROMATIC[key + 11]} Locrian`,
        mode: majorParentScale.slice(6, 14)
      },

      {
        modeName: `${CHROMATIC[key]} Melodic Minor`,
        mode: melodicMinorParentScale.slice(0, 8)
      },

      {
        modeName: `${CHROMATIC[key + 2]} Dorian b9`,
        mode: melodicMinorParentScale.slice(1, 9)
      },

      {
        modeName: `${CHROMATIC[key + 3]} Lydian Augmented`,
        mode: melodicMinorParentScale.slice(2, 10)
      },

      {
        modeName: `${CHROMATIC[key + 5]} Lydian Dominant`,
        mode: melodicMinorParentScale.slice(3, 11)
      },

      {
        modeName: `${CHROMATIC[key + 7]} Mixolydian b13`,
        mode: melodicMinorParentScale.slice(4, 12)
      },

      {
        modeName: `${CHROMATIC[key + 9]} Locrian #9`,
        mode: melodicMinorParentScale.slice(5, 13)
      },

      {
        modeName: `${CHROMATIC[key + 11]} Superlocrian (Altered Dominant)`,
        mode: melodicMinorParentScale.slice(6, 14)
      },

      {
        modeName: `${CHROMATIC[key]} Harmonic Minor`,
        mode: harmonicMinorParentScale.slice(0, 8),
      },

      {
        modeName: `${CHROMATIC[key + 2]} Locrian #13`,
        mode: harmonicMinorParentScale.slice(1, 9)
      },

      {
        modeName: `${CHROMATIC[key + 3]} Ionian #5`,
        mode: harmonicMinorParentScale.slice(2, 10)
      },

      {
        modeName: `${CHROMATIC[key + 5]} Dorian #11`,
        mode: harmonicMinorParentScale.slice(3, 11)
      },

      {
        modeName: `${CHROMATIC[key + 7]} Mixolydian b9b13`,
        mode: harmonicMinorParentScale.slice(4, 12)
      },

      {
        modeName: `${CHROMATIC[key + 8]} Lydian #9`,
        mode: harmonicMinorParentScale.slice(5, 13)
      },

      {
        modeName: `${CHROMATIC[key + 11]} Ultralocrian`,
        mode: harmonicMinorParentScale.slice(6, 14)
      }
    ]
  }
