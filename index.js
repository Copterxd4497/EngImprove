const vocabulary = {
  adapt: {
    part_of_speech: "verb",
    definition: "To adjust to new conditions.",
    thai_meaning: "ปรับตัว",
    example: "She quickly adapted to the new work environment.",
  },
  assess: {
    part_of_speech: "verb",
    definition: "To evaluate or judge the quality of something.",
    thai_meaning: "ประเมิน",
    example: "The teacher assessed the students' projects carefully.",
  },
  coherent: {
    part_of_speech: "adjective",
    definition: "Logical and consistent.",
    thai_meaning: "สอดคล้อง",
    example: "Her argument was coherent and easy to follow.",
  },
  compromise: {
    part_of_speech: "noun",
    definition: "An agreement where both sides give up something.",
    thai_meaning: "การประนีประนอม",
    example: "They reached a compromise after a long discussion.",
  },
  convey: {
    part_of_speech: "verb",
    definition: "To express or communicate information.",
    thai: "ถ่ายทอด",
    example: "He conveyed his ideas clearly during the meeting.",
  },
  dilemma: {
    part_of_speech: "noun",
    definition: "A situation requiring a difficult choice.",
    thai_meaning: "ภาวะกลืนไม่เข้าคายไม่ออก",
    example: "She faced a dilemma about which job to accept.",
  },
  enhance: {
    part_of_speech: "verb",
    definition: "To improve the quality or value of something.",
    thai_meaning: "ปรับปรุง",
    example: "The new software enhanced the team's productivity.",
  },
  evident: {
    part_of_speech: "adjective",
    definition: "Clearly seen or understood.",
    thai_meaning: "ชัดเจน",
    example: "His frustration was evident in his tone.",
  },
  facilitate: {
    part_of_speech: "verb",
    definition: "To make something easier.",
    thai_meaning: "อำนวยความสะดวก",
    example: "The new system facilitates faster communication.",
  },
  grasp: {
    part_of_speech: "verb",
    definition: "To understand something fully.",
    thai_meaning: "เข้าใจ",
    example: "She quickly grasped the main points of the lecture.",
  },
  hinder: {
    part_of_speech: "verb",
    definition: "To create difficulties or obstacles.",
    thai_meaning: "ขัดขวาง",
    example: "Bad weather hindered the construction work.",
  },
  implement: {
    part_of_speech: "verb",
    definition: "To put a plan or decision into action.",
    thai_meaning: "ดำเนินการ",
    example: "The company implemented new safety measures.",
  },
  inevitable: {
    part_of_speech: "adjective",
    definition: "Certain to happen; unavoidable.",
    thai_meaning: "หลีกเลี่ยงไม่ได้",
    example: "Change is inevitable in a fast-moving industry.",
  },
  insight: {
    part_of_speech: "noun",
    definition: "A deep understanding of something.",
    thai_meaning: "ความเข้าใจลึกซึ้ง",
    example: "Her insights into the problem were very helpful.",
  },
  mitigate: {
    part_of_speech: "verb",
    definition: "To make something less severe or serious.",
    thai_meaning: "บรรเทา",
    example: "They took steps to mitigate the environmental impact.",
  },
  mutual: {
    part_of_speech: "adjective",
    definition: "Shared by two or more parties.",
    thai_meaning: "ร่วมกัน",
    example: "Their mutual respect strengthened their friendship.",
  },
  perceive: {
    part_of_speech: "verb",
    definition: "To become aware of or understand something.",
    thai_meaning: "รับรู้",
    example: "She perceived a change in his attitude.",
  },
  precise: {
    part_of_speech: "adjective",
    definition: "Exact and accurate.",
    thai_meaning: "แม่นยำ",
    example: "His instructions were precise and easy to follow.",
  },
  profound: {
    part_of_speech: "adjective",
    definition: "Deep or intense; having great meaning.",
    thai_meaning: "ลึกซึ้ง",
    example: "Her speech had a profound impact on the audience.",
  },
  pursue: {
    part_of_speech: "verb",
    definition: "To follow or seek to achieve something.",
    thai_meaning: "ไล่ตาม",
    example: "He decided to pursue a career in medicine.",
  },
  reluctant: {
    part_of_speech: "adjective",
    definition: "Unwilling or hesitant.",
    thai_meaning: "ไม่เต็มใจ",
    example: "She was reluctant to share her opinion.",
  },
  resolve: {
    part_of_speech: "verb",
    definition: "To find a solution to a problem.",
    thai_meaning: "แก้ไข",
    example: "They resolved the issue through open discussion.",
  },
  restrain: {
    part_of_speech: "verb",
    definition: "To prevent or hold back.",
    thai_meaning: "ยับยั้ง",
    example: "He restrained his anger during the argument.",
  },
  subtle: {
    part_of_speech: "adjective",
    definition: "Not obvious; delicate or precise.",
    thai_meaning: "ละเอียดอ่อน",
    example: "The artist used subtle colors to create a calm effect.",
  },
  sustain: {
    part_of_speech: "verb",
    definition: "To maintain or keep something going.",
    thai_meaning: "รักษา",
    example: "They worked hard to sustain their business growth.",
  },
  tentative: {
    part_of_speech: "adjective",
    definition: "Not certain or fixed; hesitant.",
    thai_meaning: "ไม่แน่นอน",
    example: "They made a tentative plan for the trip.",
  },
  thorough: {
    part_of_speech: "adjective",
    definition: "Complete and detailed.",
    thai_meaning: "ละเอียดถี่ถ้วน",
    example: "Her thorough research impressed the team.",
  },
  undertake: {
    part_of_speech: "verb",
    definition: "To agree to do or start something.",
    thai_meaning: "รับผิดชอบ",
    example: "She undertook the challenging task with confidence.",
  },
  valid: {
    part_of_speech: "adjective",
    definition: "Based on truth or reason; acceptable.",
    thai_meaning: "ถูกต้อง",
    example: "His argument was valid and well-supported.",
  },
  yield: {
    part_of_speech: "verb",
    definition: "To produce or provide something.",
    thai_meaning: "ให้ผล",
    example: "The new method yielded better results.",
  },
};

const word_random = document.querySelector(".word-random");
const verbWord = document.querySelector(".verb-word");

const button = document.querySelector(".button-send");
const refresh = document.querySelector(".refresh-button");

const inputWord = document.querySelector(".input-words");
let currentWord = ""; // ⬅️ Store the current random word globally

if (refresh && word_random && inputWord && button && verbWord) {
  refresh.addEventListener("click", () => {
    const random = Math.floor(Math.random() * Object.keys(vocabulary).length);
    const key = Object.keys(vocabulary).sort();
    currentWord = key[random]; // ⬅️ Save to global variable

    word_random.innerText = vocabulary[currentWord].definition;
    verbWord.textContent = vocabulary[currentWord].part_of_speech;

    console.log(currentWord);
  });

  button.addEventListener("click", () => {
    if (inputWord.value.trim().toLowerCase() === currentWord.toLowerCase()) {
      alert("I am GOAT.");
    } else {
      alert("Try again!");
    }
  });
}
