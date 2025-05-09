# IPA Quiz

**IPA Quiz** is a web-based application that helps users practice and test their knowledge of the International Phonetic Alphabet (IPA) by listening to audio clips and typing the corresponding IPA transcription.

## 🚀 Features

- 🎵 Random word audio playback using built-in MP3 dictionary  
- ⌨️ On-screen IPA keyboard for easy input  
- ✅ Real-time feedback on correct vs. incorrect IPA characters  
- 📊 Running score to track correct answers out of total attempts  
- 🧹 Input auto-clears with each new quiz  

## 🛠 How It Works

1. A random word with an IPA transcription and audio file is selected from `mp3_dict.json`.
2. The user listens to the audio and clicks the IPA transcription.
3. On clicking **Check**, the app compares the user's input to the correct IPA.
4. The result is color-coded by character, and the score updates.

## 📁 Project Structure

```
ipa-quiz/
├── index.html            # Main HTML interface
├── mp3_dict.json         # Dictionary of words with IPA and audio
├── audio/                # Directory containing MP3 files
└── styles/               # Optional: external CSS (or inline styles)
```

## 📦 Example `mp3_dict.json`

```json
{
  "cat": {
    "ipa": "kæt",
    "audio": "audio/cat.mp3"
  },
  "dog": {
    "ipa": "dɔɡ",
    "audio": "audio/dog.mp3"
  }
}
```
##Credits
