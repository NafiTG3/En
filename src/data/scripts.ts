import type { Script } from "../types";
import { scriptCounts } from "../utils";
import { day02 } from "./days/day02";
import { day03 } from "./days/day03";

/**
 * HOW TO ADD A NEW DAY: add a key (the day number) with `en` and `bn` paragraphs.
 * Rule: every script must be 500 to 1500 words. The reader shows a red badge if it is below 500.
 */
export const SCRIPTS: Record<number, Script> = {
  2: day02,
  3: day03,
  1: {
    en: [
      "Hello everyone, and thank you for being here. My name is Antonysrm Nafi, and I am the founder of Blockveil, a privacy-focused startup that I am building from Bangladesh. It is a real pleasure to meet you, and I would like to take a few minutes to tell you who I am and what I am working on.",
      "Let me begin with my story. I am a student, and I have always been curious about how technology works. A few years ago, I realized something that bothered me. Every day, we type our messages, our passwords, and our private thoughts on our phones, but most of us have no idea where those words go. That question stayed in my mind, and eventually it became the starting point of my journey.",
      "That is why I started Blockveil. Our first product is Blockveil Keyboard, a fully offline keyboard with no tracking and no hidden data collection. Everything works on your device, and everything stays on your device. I want people to enjoy modern features without paying for them with their privacy.",
      "To build this, I am learning full stack web development step by step. I am studying HTML, CSS, TypeScript, React, Next.js, Node.js, PostgreSQL, and Solidity. I spend between five and eight hours every day learning, building, and fixing my mistakes. I do not pretend that I know everything. What I do know is how to keep learning, and I believe that is the most valuable skill a developer can have.",
      "I also want to be honest about another challenge. English is not my first language, and I am working to improve it every single day. I practice by reading scripts like this one in front of a camera, and I record myself so that I can see my progress. Some days I make mistakes, and that is perfectly fine. Every mistake is a lesson, and every lesson takes me one step closer to speaking with confidence.",
      "My goals are big, and I say them openly. In the next year, I want to launch Blockveil Keyboard on the Play Store and the App Store. In the first three months, I want to reach one thousand users who truly care about privacy. In the long term, I want more than one hundred thousand downloads. On a personal level, I want to speak English like a native, achieve a high score in IELTS, and one day work and live in Europe while talking with CEOs, investors, and clients around the world.",
      "I believe that consistency is stronger than talent. A person who practices a little every day will always go further than a person who waits for the perfect moment. That is the promise I made to myself, and that is why I am doing a hundred days of speaking practice.",
      "Let me also share what a normal day looks like for me. I wake up early, I plan my tasks, and I start with the hardest problem first. I write code, I read documentation, and I test my work again and again. In the evening, I review what I learned, and I practice my English by speaking out loud. It is not glamorous, but it is real progress, and I am proud of every small step I take.",
      "So, if you are interested in privacy, technology, or building something meaningful, I would love to connect with you. If you have advice, a project, or an opportunity, please tell me. I am always ready to listen, to learn, and to work hard.",
      "Thank you very much for your time. My name is Antonysrm Nafi, and this is only the beginning.",
    ],
    bn: [
      "সবাইকে হ্যালো, এখানে থাকার জন্য ধন্যবাদ। আমার নাম এন্টনিএসআরএম নাফি, আমি Blockveil এর প্রতিষ্ঠাতা। এটি একটি প্রাইভেসি-কেন্দ্রিক স্টার্টআপ, যা আমি বাংলাদেশ থেকে গড়ে তুলছি। আপনাদের সাথে দেখা হয়ে সত্যিই ভালো লাগছে, আর আমি কয়েক মিনিট সময় নিয়ে বলতে চাই আমি কে এবং কী নিয়ে কাজ করছি।",
      "আমার গল্প দিয়ে শুরু করি। আমি একজন শিক্ষার্থী, আর প্রযুক্তি কীভাবে কাজ করে তা নিয়ে আমার সবসময়ই কৌতূহল ছিল। কয়েক বছর আগে আমি এমন একটা বিষয় বুঝতে পারলাম যা আমাকে ভাবিয়ে তুলল। প্রতিদিন আমরা ফোনে আমাদের মেসেজ, পাসওয়ার্ড আর ব্যক্তিগত চিন্তা টাইপ করি, কিন্তু আমাদের বেশিরভাগই জানি না সেই কথাগুলো কোথায় যায়। এই প্রশ্নটা আমার মনে থেকে গেল, আর শেষ পর্যন্ত সেটাই আমার যাত্রার সূচনা হয়ে উঠল।",
      "এ কারণেই আমি Blockveil শুরু করেছি। আমাদের প্রথম প্রোডাক্ট Blockveil Keyboard, একটি সম্পূর্ণ অফলাইন কীবোর্ড, যেখানে কোনো ট্র্যাকিং নেই এবং লুকানো ডেটা সংগ্রহ নেই। সবকিছু আপনার ডিভাইসেই চলে, আর আপনার ডিভাইসেই থাকে। আমি চাই মানুষ আধুনিক ফিচার উপভোগ করুক, কিন্তু প্রাইভেসির বিনিময়ে নয়।",
      "এটি বানাতে আমি ধাপে ধাপে ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট শিখছি। আমি HTML, CSS, TypeScript, React, Next.js, Node.js, PostgreSQL এবং Solidity পড়ছি। প্রতিদিন পাঁচ থেকে আট ঘণ্টা আমি শিখি, বানাই এবং নিজের ভুল ঠিক করি। আমি ভান করি না যে আমি সবকিছু জানি। আমি যা জানি তা হলো শেখা চালিয়ে যেতে, আর আমার বিশ্বাস একজন ডেভেলপারের সবচেয়ে মূল্যবান দক্ষতা এটাই।",
      "আরেকটি চ্যালেঞ্জ নিয়েও আমি সৎভাবে বলতে চাই। ইংরেজি আমার প্রথম ভাষা নয়, আর আমি প্রতিদিন এটি উন্নত করার চেষ্টা করছি। আমি ক্যামেরার সামনে এই ধরনের স্ক্রিপ্ট পড়ে অনুশীলন করি এবং নিজেকে রেকর্ড করি, যাতে নিজের অগ্রগতি দেখতে পারি। কোনো কোনো দিন আমি ভুল করি, এবং সেটা একদম ঠিক আছে। প্রতিটি ভুলই একটি শিক্ষা, আর প্রতিটি শিক্ষা আমাকে আত্মবিশ্বাসের সাথে কথা বলার দিকে এক ধাপ এগিয়ে নেয়।",
      "আমার লক্ষ্যগুলো বড়, আর আমি সেগুলো খোলাখুলি বলি। আগামী এক বছরে আমি প্লে স্টোর ও অ্যাপ স্টোরে Blockveil Keyboard লঞ্চ করতে চাই। প্রথম তিন মাসে আমি এমন এক হাজার ব্যবহারকারীর কাছে পৌঁছাতে চাই যারা সত্যিই প্রাইভেসির কথা ভাবেন। দীর্ঘমেয়াদে আমি এক লাখের বেশি ডাউনলোড চাই। ব্যক্তিগতভাবে আমি নেটিভ স্পিকারের মতো ইংরেজি বলতে চাই, আইইএলটিএসে উচ্চ স্কোর করতে চাই, এবং একদিন ইউরোপে থেকে কাজ করতে চাই, যেখানে বিশ্বের সিইও, বিনিয়োগকারী ও ক্লায়েন্টদের সাথে কথা বলব।",
      "আমি বিশ্বাস করি ধারাবাহিকতা প্রতিভার চেয়ে শক্তিশালী। যিনি প্রতিদিন একটু একটু অনুশীলন করেন, তিনি সবসময় সেই ব্যক্তির চেয়ে এগিয়ে যান যিনি নিখুঁত মুহূর্তের অপেক্ষায় বসে থাকেন। এটাই আমি নিজের কাছে প্রতিজ্ঞা করেছি, আর সে কারণেই আমি একশো দিনের স্পিকিং প্র্যাকটিস করছি।",
      "আমার একটি সাধারণ দিন কেমন কাটে, সেটাও বলি। আমি সকাল সকাল উঠি, কাজের পরিকল্পনা করি এবং সবচেয়ে কঠিন সমস্যাটি দিয়ে শুরু করি। আমি কোড লিখি, ডকুমেন্টেশন পড়ি এবং নিজের কাজ বারবার পরীক্ষা করি। সন্ধ্যায় আমি যা শিখলাম তা পর্যালোচনা করি এবং জোরে জোরে কথা বলে ইংরেজি অনুশীলন করি। এটা চমকপ্রদ কিছু নয়, কিন্তু এটাই আসল অগ্রগতি, আর আমি প্রতিটি ছোট পদক্ষেপের জন্য গর্বিত।",
      "তাই আপনি যদি প্রাইভেসি, প্রযুক্তি বা অর্থবহ কিছু গড়ার ব্যাপারে আগ্রহী হন, আমি আপনার সাথে যুক্ত হতে চাই। আপনার কাছে কোনো পরামর্শ, প্রজেক্ট বা সুযোগ থাকলে দয়া করে আমাকে জানান। আমি সবসময় শুনতে, শিখতে এবং কঠোর পরিশ্রম করতে প্রস্তুত।",
      "আপনার সময়ের জন্য অনেক ধন্যবাদ। আমার নাম এন্টনিএসআরএম নাফি, আর এটি কেবল শুরু।",
    ],
  },
};

// Dev-only safety check: warns in the console if a script has fewer than 500 or more than 1500 English words.
if (import.meta.env.DEV) {
  Object.entries(SCRIPTS).forEach(([day, s]) => {
    const c = scriptCounts(s);
    if (c.en < 500 || c.en > 1500) console.warn(`Day ${day} has ${c.en} English words, expected 500 to 1500.`);
  });
}
