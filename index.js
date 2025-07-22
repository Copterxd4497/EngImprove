const vocabulary = {
  abate: {
    part_of_speech: "verb",
    definition: "To become less intense or widespread.",
    thai_meaning: "ลดลง",
    example: "The storm began to abate after hours of heavy rain.",
  },
  candid: {
    part_of_speech: "adjective",
    definition: "Truthful and straightforward; frank.",
    thai_meaning: "ตรงไปตรงมา",
    example: "Her candid feedback helped improve the project significantly.",
  },
  debacle: {
    part_of_speech: "noun",
    definition: "A sudden and disastrous failure.",
    thai_meaning: "ความล้มเหลวอย่างสิ้นเชิง",
    example: "The product launch was a debacle due to poor planning.",
  },
  elucidate: {
    part_of_speech: "verb",
    definition: "To make something clear; to explain.",
    thai_meaning: "อธิบายให้ชัดเจน",
    example:
      "The professor elucidated the complex theory with simple examples.",
  },
  fastidious: {
    part_of_speech: "adjective",
    definition: "Very attentive to detail; meticulous.",
    thai_meaning: "พิถีพิถัน",
    example: "His fastidious approach ensured the report was error-free.",
  },
  gregarious: {
    part_of_speech: "adjective",
    definition: "Sociable; enjoying the company of others.",
    thai_meaning: "ชอบเข้าสังคม",
    example: "Her gregarious nature made her the life of the party.",
  },
  harangue: {
    part_of_speech: "noun",
    definition: "A lengthy and aggressive speech.",
    thai_meaning: "การพูดโจมตีอย่างยาวนาน",
    example: "The politician’s harangue failed to convince the audience.",
  },
  impeccable: {
    part_of_speech: "adjective",
    definition: "Perfect; without flaws or errors.",
    thai_meaning: "สมบูรณ์แบบ",
    example: "Her impeccable manners impressed everyone at the event.",
  },
  juxtapose: {
    part_of_speech: "verb",
    definition: "To place things side by side for comparison.",
    thai_meaning: "วางเคียงกัน",
    example: "The artist juxtaposed light and dark colors to create contrast.",
  },
  lethargic: {
    part_of_speech: "adjective",
    definition: "Lacking energy; sluggish.",
    thai_meaning: "เฉื่อยชา",
    example: "After the long flight, he felt lethargic and unmotivated.",
  },
  mitigate: {
    part_of_speech: "verb",
    definition: "To make less severe or intense.",
    thai_meaning: "บรรเทา",
    example:
      "They took steps to mitigate the environmental impact of the project.",
  },
  nefarious: {
    part_of_speech: "adjective",
    definition: "Wicked, villainous, or despicable.",
    thai_meaning: "ชั่วร้าย",
    example: "The villain’s nefarious plan was uncovered just in time.",
  },
  obstreperous: {
    part_of_speech: "adjective",
    definition: "Noisy and difficult to control.",
    thai_meaning: "เอะอะโวยวาย",
    example: "The obstreperous crowd disrupted the speaker’s presentation.",
  },
  pragmatic: {
    part_of_speech: "adjective",
    definition: "Dealing with things sensibly and realistically.",
    thai_meaning: "ปฏิบัติได้จริง",
    example: "Her pragmatic approach solved the issue efficiently.",
  },
  quell: {
    part_of_speech: "verb",
    definition: "To put an end to, typically by force.",
    thai_meaning: "ปราบปราม",
    example: "The police acted quickly to quell the riot.",
  },
  rhetoric: {
    part_of_speech: "noun",
    definition: "The art of persuasive speaking or writing.",
    thai_meaning: "วาทศิลป์",
    example:
      "His speech was full of powerful rhetoric that swayed the audience.",
  },
  scrutinize: {
    part_of_speech: "verb",
    definition: "To examine closely and carefully.",
    thai_meaning: "ตรวจสอบอย่างละเอียด",
    example: "The committee scrutinized the proposal for any flaws.",
  },
  tenuous: {
    part_of_speech: "adjective",
    definition: "Very weak or slight; insubstantial.",
    thai_meaning: "บางเบา",
    example: "The connection between the two events was tenuous at best.",
  },
  ubiquitous: {
    part_of_speech: "adjective",
    definition: "Present or found everywhere.",
    thai_meaning: "มีอยู่ทุกหนแห่ง",
    example: "Smartphones are ubiquitous in modern society.",
  },
  venerate: {
    part_of_speech: "verb",
    definition: "To regard with great respect or reverence.",
    thai_meaning: "เคารพนับถือ",
    example: "The community venerates its elders for their wisdom.",
  },
  wary: {
    part_of_speech: "adjective",
    definition: "Cautious about possible dangers or problems.",
    thai_meaning: "ระมัดระวัง",
    example:
      "She was wary of trusting strangers with her personal information.",
  },
  zealous: {
    part_of_speech: "adjective",
    definition: "Showing great enthusiasm or devotion.",
    thai_meaning: "กระตือรือร้น",
    example: "He was a zealous supporter of the environmental movement.",
  },
  ambiguous: {
    part_of_speech: "adjective",
    definition: "Open to more than one interpretation; unclear.",
    thai_meaning: "คลุมเครือ",
    example: "The instructions were ambiguous, causing confusion.",
  },
  bolster: {
    part_of_speech: "verb",
    definition: "To support or strengthen.",
    thai_meaning: "สนับสนุน",
    example: "The new evidence bolstered their argument.",
  },
  conundrum: {
    part_of_speech: "noun",
    definition: "A confusing or difficult problem.",
    thai_meaning: "ปัญหายุ่งยาก",
    example: "The ethical conundrum puzzled the philosophers.",
  },
  disparage: {
    part_of_speech: "verb",
    definition: "To speak of in a belittling or critical way.",
    thai_meaning: "ดูหมิ่น",
    example:
      "He didn’t mean to disparage her efforts, but his words upset her.",
  },
  ephemeral: {
    part_of_speech: "adjective",
    definition: "Lasting for a very short time.",
    thai_meaning: "ชั่วคราว",
    example: "The beauty of the sunset was ephemeral but breathtaking.",
  },
  fortuitous: {
    part_of_speech: "adjective",
    definition: "Happening by chance, often in a fortunate way.",
    thai_meaning: "เกิดขึ้นโดยบังเอิญ",
    example: "Their fortuitous meeting led to a lifelong friendship.",
  },
  intransigent: {
    part_of_speech: "adjective",
    definition: "Refusing to compromise or change one’s position.",
    thai_meaning: "ดื้อรั้น",
    example: "The intransigent negotiator refused to budge on the terms.",
  },
  crib: {
    part_of_speech: "noun",
    definition: "A small bed for an infant or young child.",
    thai_meaning: "เตียงเด็ก",
    example: "The baby slept peacefully in the crib.",
  },
};

const word_random = document.querySelector(".word-random");

const button = document.querySelector(".button-send");
const refresh = document.querySelector(".refresh-button");

const inputWord = document.querySelector(".input-words");
let currentWord = ""; // ⬅️ Store the current random word globally

if (refresh && word_random && inputWord && button) {
  refresh.addEventListener("click", () => {
    const random = Math.floor(Math.random() * Object.keys(vocabulary).length);
    const key = Object.keys(vocabulary).sort();
    currentWord = key[random]; // ⬅️ Save to global variable
    word_random.innerText = currentWord;
  });

  button.addEventListener("click", () => {
    if (inputWord.value.trim().toLowerCase() === currentWord.toLowerCase()) {
      alert("I am GOAT.");
    } else {
      alert("Try again!");
    }
  });
}
