
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Smile, Sparkles, Star, Gamepad, Lock, Music } from 'lucide-react';

const funQuotes = [
  "Even with one leg, you're still faster than my Wi-Fi 🐢📶",
  "Rest up! We need you back before people forget who brings the chaos 😈",
  "You're basically on vacation with extra drama now 🎭🛌",
  "Don't worry, crutches make great fashion accessories 💅",
  "One leg down, but your sarcasm is still running marathons 🏃‍♀️💨",
  "Honestly, you're lucky. Now you have the perfect excuse to avoid responsibilities. Genius move. 🤓",
  "Are you sure you hurt your leg? Or did you just trip over your own ego? 🫣",
  "You’ve achieved peak drama. Bravo. Even soap operas are taking notes. 📺",
  "You're limping like a pirate, but with less treasure and more complaints. ☠️",
  "You injured your leg? I thought that was just your walk of superiority. 🙄"
];

const quiz = [
  {
    question: "What’s Siddhi’s hidden talent (besides surviving me)?",
    options: ["Eye rolling", "Teleporting (only in dreams)", "Arguing like a lawyer", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Siddhi’s secret superhero identity is:",
    options: ["Sarcasm Girl", "Nap Queen", "Drama Diva", "Captain Comeback"],
    answer: "Sarcasm Girl"
  },
  {
    question: "If sarcasm was a sport, Siddhi would be:",
    options: ["Olympic Gold Medalist", "World Champion", "Retired Legend", "All of the above"],
    answer: "All of the above"
  }
];

const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
};

const memeGifs = [
  "https://media.giphy.com/media/3orieYdYvY6GktNc8A/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/xT9DPn7zyjGZm5xOzm/giphy.gif"
];

export default function GetWellSoonSiddhi() {
  const [quote, setQuote] = React.useState(funQuotes[0]);
  const [quizIndex, setQuizIndex] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [secretShown, setSecretShown] = React.useState(false);
  const [gifIndex, setGifIndex] = React.useState(0);
  const randomQuote = () => setQuote(funQuotes[Math.floor(Math.random() * funQuotes.length)]);
  const nextQuiz = () => {
    setQuizIndex((quizIndex + 1) % quiz.length);
    setShowAnswer(false);
  };

  const nextGif = () => setGifIndex((gifIndex + 1) % memeGifs.length);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 flex flex-col items-center justify-center p-8">
      <audio autoPlay loop>
        <source src="/sunny.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-pink-600 mb-4 drop-shadow-md">
          Wow, Look Who’s Injured 🦴😂
        </h1>
        <p className="text-xl text-gray-700">
          Siddhi, even the couch misses your drama.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={animations.container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="bg-white p-6 rounded-2xl shadow-xl" variants={animations.item}>
          <h2 className="text-2xl font-semibold text-pink-500 mb-4 flex items-center">
            <Sparkles className="mr-2" /> Random Roast Generator 💥
          </h2>
          <p className="text-lg text-gray-600 mb-4">{quote}</p>
          <button onClick={randomQuote} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-xl">
            Hit Me With Another 🤪
          </button>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-2xl shadow-xl" variants={animations.item}>
          <h2 className="text-2xl font-semibold text-purple-500 mb-4 flex items-center">
            <Star className="mr-2" /> Meme Break ✨
          </h2>
          <div className="aspect-video bg-pink-100 flex items-center justify-center rounded-xl overflow-hidden">
            <img
              src={memeGifs[gifIndex]}
              alt="funny gif"
              className="rounded-xl max-h-60 object-contain"
            />
          </div>
          <button onClick={nextGif} className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-xl w-full">
            Another One 🔁
          </button>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-2xl shadow-xl" variants={animations.item}>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
            <Smile className="mr-2" /> Terrible Poetry Alert 🚨
          </h2>
          <p className="text-lg text-gray-600 italic">
            Roses are meh, violets are alright,<br/>
            You tripped on nothing—what a sight!<br/>
            Now you're stuck and can't escape,<br/>
            While I make this site... for your entertainment's sake 😏
          </p>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-2xl shadow-xl" variants={animations.item}>
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4 flex items-center">
            <Heart className="mr-2" /> Friendly Message 💬
          </h2>
          <p className="text-lg text-gray-600">
            Siddhi, you may be injured, but your talent for complaining is in perfect shape. Get well soon, so I have someone to blame things on again. 😉
          </p>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-2xl shadow-xl" variants={animations.item}>
          <h2 className="text-2xl font-semibold text-green-500 mb-4 flex items-center">
            <Gamepad className="mr-2" /> Useless Quiz 🎯
          </h2>
          <p className="text-lg text-gray-700 mb-2">{quiz[quizIndex].question}</p>
          <div className="space-y-2">
            {quiz[quizIndex].options.map((opt, idx) => (
              <button key={idx} onClick={() => setShowAnswer(opt === quiz[quizIndex].answer)} className="w-full bg-gray-100 py-2 rounded-lg hover:bg-green-200">
                {opt}
              </button>
            ))}
          </div>
          {showAnswer && <p className="text-green-600 mt-2 font-medium">Obviously. You’re always right. 🙄</p>}
          <button onClick={nextQuiz} className="mt-4 bg-green-500 text-white hover:bg-green-600 w-full py-2 px-4 rounded-xl">
            Next Useless Question 🔁
          </button>
        </motion.div>

        <motion.div className="bg-white p-6 rounded-2xl shadow-xl" variants={animations.item}>
          <h2 className="text-2xl font-semibold text-red-500 mb-4 flex items-center">
            <Lock className="mr-2" /> Secret-ish Message 🔐
          </h2>
          <button onClick={() => setSecretShown(!secretShown)} className="mb-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl">
            {secretShown ? "Put It Back In The Vault" : "Dare to Peek"}
          </button>
          {secretShown && (
            <motion.p 
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Fine. You win. You’re kinda cool. But don’t let it go to your head. I made this site mostly to annoy you anyway 😎
            </motion.p>
          )}
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-gray-500 text-sm">Made with absolutely zero chill and a pinch of sarcasm. 💁‍♂️</p>
        <div className="mt-4">
          <audio controls className="mx-auto">
            <source src="/poem.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p className="text-xs text-gray-400 mt-2">Bonus: A dramatic reading of the terrible poem. 🎤😂</p>
        </div>
      </motion.div>
    </div>
  );
}
