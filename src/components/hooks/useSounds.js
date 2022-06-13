import { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

export default function useSounds() {
  const mySampler = useRef(null);

  const [isC4Played, isSetC4PlayedChange] = useState(false);
  const [isDdies4Played, isSetDdies4PlayedChange] = useState(false);
  const [isFdies4Played, isSetFdies4PlayedChange] = useState(false);
  const [isA4Played, isSetA4PlayedChange] = useState(false);

  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: {
        C4: 'C4.mp3',
        'D#4': 'Ds4.mp3',
        'F#4': 'Fs4.mp3',
        A4: 'A4.mp3',
      },
      release: 1,
      baseUrl: 'https://tonejs.github.io/audio/salamander/',
    }).toDestination();

    Tone.loaded().then(() => {
      mySampler.current = sampler;
    });
  }, []);

  function soundPlay(note) {
    mySampler.current.triggerAttackRelease([note], 4);
  }

  function handleKeyDown({ key }) {
    switch (key) {
      case 'a':
        isSetC4PlayedChange(true);
        window.setTimeout(() => isSetC4PlayedChange(false), 300);
        soundPlay('C4');
        break;
      case 'z':
        isSetDdies4PlayedChange(true);
        window.setTimeout(() => isSetDdies4PlayedChange(false), 300);
        soundPlay('D#4');
        break;
      case 'e':
        isSetFdies4PlayedChange(true);
        window.setTimeout(() => isSetFdies4PlayedChange(false), 300);
        soundPlay('F#4');
        break;
      case 'r':
        isSetA4PlayedChange(true);
        window.setTimeout(() => isSetA4PlayedChange(false), 300);
        soundPlay('A4');
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const buttonsList = [
    { soundPlay: () => soundPlay('C4'), isPlayed: isC4Played, id: 'C4' },
    { soundPlay: () => soundPlay('D#4'), isPlayed: isDdies4Played, id: 'D#4' },
    { soundPlay: () => soundPlay('F#4'), isPlayed: isFdies4Played, id: 'F#4' },
    { soundPlay: () => soundPlay('A4'), isPlayed: isA4Played, id: 'A4' },
  ];

  return { buttonsList };
}
