# IPA Quiz

**IPA Quiz** is a web-based application that helps users practice and test their knowledge of the International Phonetic Alphabet (IPA) by listening to audio clips and typing the corresponding IPA transcription.

## Features

- Random word audio playback using built-in MP3 dictionary  
- On-screen IPA keyboard for easy input  
- Real-time feedback on correct vs. incorrect IPA characters  
- Running score to track correct answers out of total attempts  
- Input auto-clears with each new quiz  

## How It Works

1. A random word with an IPA transcription and audio file is selected from `mp3_dict.json`.
2. The user listens to the audio and clicks the IPA transcription.
3. On clicking **Check**, the app compares the user's input to the correct IPA.
4. The result is color-coded by character, and the score updates.

## Project Structure

```
ipa-quiz/
├── index.html            # Main HTML interface
├── mp3_dict.json         # Dictionary of words with IPA and audio
├── audio/                # Directory containing MP3 files
```

## Example `mp3_dict.json`

```json
{
  "cat": {
    "ipa": "kæt",
    "audio": "audio/####/cat.mp3"
  }
}
```
## Credits

- **[ipa-dict](https://github.com/open-dict-data/ipa-dict)** – for providing the word list and IPA transcriptions under the [MIT License](https://opensource.org/licenses/MIT).
- **[IPA Reader](https://ipa-reader.com)** – for generating and downloading MP3 audio files of IPA pronunciations.
- **[google-10000-english](https://github.com/first20hours/google-10000-english)** – for helping filter the word list to commonly used English words.

## Licensing and Acknowledgments

- This project uses third-party data and tools, each of which may have its own license. You are encouraged to review the individual licenses linked above if you plan to redistribute or modify the data.
- The code written for this project is released under the **MIT License**, allowing reuse with attribution.

