 
/* =========================================================
   THE CONVERSATION CLUB
   Complete question library + game engine
   One JavaScript file; no questions.js required.
   ========================================================= */

"use strict";

const ConversationClub = (() => {
  const $ = (id) => document.getElementById(id);

  const STORAGE = {
    favorites: "conversationClub_favorites_v3",
    answers: "conversationClub_answers_v3"
  };

  const categories = [
    { id: "icebreaker", name: "Icebreakers", emoji: "🌸" },
    { id: "fun", name: "Fun", emoji: "🎈" },
    { id: "deep", name: "Deep", emoji: "🌙" },
    { id: "dreams", name: "Dreams", emoji: "✨" },
    { id: "memories", name: "Memories", emoji: "📷" },
    { id: "relationships", name: "Relationships", emoji: "💗" },
    { id: "life", name: "Life", emoji: "🦋" }
  ];

  /*
   * 280 core questions: 40 in each category.
   * 20 additional questions are added below.
   */

  const questionBank = {
    icebreaker: [
      "What three words describe you best?",
      "What is a little thing that always makes you smile?",
      "Are you more of a morning person or a night owl?",
      "What is your comfort food?",
      "Which song could instantly improve your mood?",
      "What is one thing people usually notice about you?",
      "What is your favorite way to spend a free afternoon?",
      "Would you rather live near the sea or in the mountains?",
      "What is your favorite season, and why?",
      "What small thing are you surprisingly good at?",
      "Which fictional world would you visit for a day?",
      "What is your favorite smell?",
      "What is one thing you always carry with you?",
      "Do you prefer spontaneous plans or a carefully planned day?",
      "What is your favorite kind of weather?",
      "Which food could you eat every week without getting bored?",
      "What is something new you would like to try?",
      "What is your favorite way to relax after a long day?",
      "Which animal best matches your personality?",
      "What is your favorite thing about your hometown?",
      "Would you rather have more free time or more money?",
      "What is a simple pleasure you never get tired of?",
      "What color best represents your personality?",
      "Which language would you love to speak fluently?",
      "What is your favorite type of movie?",
      "What is something you collect or would love to collect?",
      "Do you prefer texting, calling, or meeting in person?",
      "What is your favorite drink?",
      "What is one app you use more than you probably should?",
      "What is your ideal weekend?",
      "Which celebrity would you invite to dinner?",
      "What is a hobby you would like to learn?",
      "What kind of gift makes you happiest?",
      "What is your favorite time of day?",
      "What is one thing that makes a place feel like home?",
      "Would you rather travel alone or with friends?",
      "What is a little habit you find comforting?",
      "Which fictional character would be fun to be friends with?",
      "What is something you enjoy that surprises people?",
      "What question do you love being asked?"
    ],

    fun: [
      "If your life were a sitcom, what would it be called?",
      "What is the funniest thing you have done by accident?",
      "If animals could talk, which would be the rudest?",
      "What ridiculous talent would you love to have?",
      "If you could switch lives with a fictional character, who?",
      "What would your personal warning label say?",
      "What is the strangest food combination you enjoy?",
      "If you became famous tomorrow, what would it be for?",
      "What is the most useless fact you know?",
      "If you had to wear one outfit forever, what would it be?",
      "Which game show would you most likely win?",
      "What would you name a pet dragon?",
      "If you could invent a holiday, what would people celebrate?",
      "What is your most harmless unpopular opinion?",
      "Which fictional villain would make the funniest roommate?",
      "What would you do first if you were invisible for a day?",
      "If your phone could expose one harmless secret, what would it reveal?",
      "What is the funniest misunderstanding you have experienced?",
      "What would your entrance music be?",
      "If you could ban one annoying thing, what would it be?",
      "What is the weirdest dream you remember?",
      "Which everyday object would be funniest if it were giant-sized?",
      "If you had a personal mascot, what would it be?",
      "What is a silly thing you believed as a child?",
      "What would you do with a completely useless superpower?",
      "If you opened a very unusual shop, what would you sell?",
      "What is the funniest nickname you have heard?",
      "Which two fictional characters would make a chaotic couple?",
      "What would you put in a museum about your life?",
      "If you could make one sound effect follow you everywhere, what?",
      "What is something you pretend to understand but do not?",
      "If your pet had a job, what job would suit it?",
      "What is the most dramatic reaction you have had to something small?",
      "Which fictional world would be the worst place to live?",
      "What would your secret agent name be?",
      "If you had to compete in a talent show, what would you do?",
      "What is a ridiculous thing you are afraid of?",
      "If you could replace handshakes with something else, what?",
      "What would you call a restaurant that served only your favorite food?",
      "Which emoji best describes your week?",
      "If you had a robot assistant, what task would you give it?",
      "What is the funniest thing someone has said to you?",
      "Which cartoon character would you trust with a secret?",
      "If you had to narrate your day like a documentary, what title?",
      "What would you do if you woke up speaking in rhymes?"
    ],

    deep: [
      "When do you feel most like yourself?",
      "What is something you wish people understood about you?",
      "What does emotional safety mean to you?",
      "Which experience changed the way you see the world?",
      "What is a belief you have changed your mind about?",
      "What do you find hardest to admit to yourself?",
      "When was the last time you felt truly understood?",
      "What does a meaningful life look like to you?",
      "What are you still learning to accept about yourself?",
      "What makes you feel appreciated?",
      "Which fear has influenced your choices the most?",
      "What does forgiveness mean to you?",
      "When do you find it hardest to ask for help?",
      "What is something you have outgrown?",
      "How do you know when you can trust someone?",
      "What is a lesson you learned the hard way?",
      "What do you wish your younger self knew?",
      "What does being strong mean to you?",
      "Which matters more to you: being understood or being accepted?",
      "What kind of criticism affects you the most?",
      "What is something you are proud of but rarely mention?",
      "How do you usually react when you feel misunderstood?",
      "What makes an apology feel sincere to you?",
      "What part of yourself do you protect the most?",
      "What does peace of mind look like in your life?",
      "Which experience taught you the most about people?",
      "What do you need when you are having a difficult day?",
      "What is something you have forgiven yourself for?",
      "What does personal growth mean to you now?",
      "When do you feel most confident?",
      "What is a boundary you have learned to set?",
      "What do you wish you worried less about?",
      "How has your definition of success changed?",
      "What is something you find difficult to let go of?",
      "What helps you feel grounded when life feels uncertain?",
      "What is one truth about life you have slowly accepted?",
      "What makes you feel emotionally exhausted?",
      "How do you distinguish intuition from fear?",
      "What is something you want to be remembered for?",
      "What does a good life mean beyond achievements?",
      "What are you learning about love?",
      "When do you feel lonely even around other people?",
      "What is a difficult conversation you have been avoiding?",
      "What makes you feel safe enough to be vulnerable?",
      "What do you wish you could tell someone without fear?",
      "What does maturity look like to you?",
      "Which part of growing up surprised you the most?",
      "What is something you are still trying to understand?",
      "What helps you reconnect with yourself?",
      "What would you like to become more courageous about?"
    ],

    dreams: [
      "What is a dream you have never told many people about?",
      "Where would you live if money were not a concern?",
      "What skill would you love to master?",
      "What would your ideal ordinary day look like?",
      "Which country would you most like to explore?",
      "What is a goal you want to achieve this year?",
      "What would you try if you knew you could not fail?",
      "What kind of home would make you happiest?",
      "What do you hope your life looks like in five years?",
      "Would you rather build something of your own or join an exciting project?",
      "What is one experience you want to have at least once?",
      "If you could study anything, what would you choose?",
      "What would you do with a year off from responsibilities?",
      "What kind of work would feel meaningful to you?",
      "What is a dream you postponed but still care about?",
      "What would your dream holiday look like?",
      "Which person inspires the future you want?",
      "What would you create if you had unlimited resources?",
      "What is something you want to be brave enough to pursue?",
      "What kind of impact would you like to have on others?",
      "If you could start over in a new city, where would you go?",
      "What is one adventure you want to share with someone?",
      "What would you like to learn before the end of this year?",
      "What would your dream library contain?",
      "What is a small dream you could begin working on today?",
      "If you could see one day from your future, which day?",
      "What would you do if you had an extra day every week?",
      "What does your dream career feel like day to day?",
      "What is a place you dream of visiting at sunset?",
      "What would you love to be known for?",
      "What is one thing you want to do before turning 30?",
      "What would your perfect creative project be?",
      "What would you do if you could live anywhere for a year?",
      "What tradition would you like to create in your future family?",
      "What is one experience you want to give your parents or loved ones?",
      "What does your future self thank you for doing today?",
      "What is a dream you would pursue even if nobody noticed?",
      "What would you like to change about your daily routine?",
      "What is a place you hope to return to someday?",
      "What would make you feel that you had truly lived fully?"
    ],

    memories: [
      "What childhood memory always makes you smile?",
      "What was your favorite game growing up?",
      "Who made you feel especially understood as a child?",
      "What smell takes you back to a particular memory?",
      "What was your favorite school subject?",
      "What is a family tradition you remember fondly?",
      "What is the kindest thing someone did for you?",
      "What song reminds you of a specific period of your life?",
      "What is a moment you wish you could relive for one hour?",
      "What did you want to be when you were little?",
      "What is a memory that still makes you laugh?",
      "Who was your childhood fictional hero?",
      "What was your favorite place to visit as a child?",
      "What is something you misunderstood when you were younger?",
      "What is a school memory you will never forget?",
      "What is the best surprise you have ever received?",
      "What is a time someone believed in you?",
      "What is one memory you wish you had photographed?",
      "What was your favorite birthday celebration?",
      "What is something you miss about being younger?",
      "What is the first trip you remember clearly?",
      "What is a small act of kindness you still remember?",
      "Which teacher influenced you the most?",
      "What is a memory connected to your favorite meal?",
      "What is something you did for the first time that felt brave?",
      "What is the funniest thing your family remembers about you?",
      "What was your favorite way to spend summer holidays?",
      "What is a friendship memory that makes you happy?",
      "What is something you once loved that you want to revisit?",
      "What is a moment you felt proud of yourself?",
      "What is a gift you have kept for sentimental reasons?",
      "What is a place that holds many memories for you?",
      "What is a moment when you felt completely carefree?",
      "What is a childhood rule you thought was unfair?",
      "What is a memory that taught you something important?",
      "What is something you wish you had appreciated sooner?",
      "What was your favorite thing to do after school?",
      "What is a moment you wish you could thank someone for?",
      "What is one ordinary day you remember very clearly?",
      "What is a memory that feels like a scene from a movie?"
    ],

    relationships: [
      "What makes you feel genuinely cared for?",
      "What quality do you value most in a friend?",
      "How do you usually show affection?",
      "What makes a friendship last?",
      "What is your favorite way to spend time with someone?",
      "What helps you feel comfortable opening up?",
      "How do you prefer someone to support you when you are upset?",
      "What is a green flag you notice in people?",
      "What is a red flag you take seriously?",
      "What does loyalty mean to you?",
      "How do you usually repair a misunderstanding?",
      "What makes you feel listened to?",
      "What is something friendship has taught you?",
      "Do you prefer a few close friends or a large circle?",
      "What is a small gesture that means a lot to you?",
      "What kind of humor do you enjoy sharing with others?",
      "How do you know when a friendship has changed?",
      "What is important to discuss before a serious relationship?",
      "What does healthy communication look like to you?",
      "How do you balance closeness and personal space?",
      "What makes you feel respected in a relationship?",
      "What is a thoughtful date that would make you happy?",
      "What do you think makes someone easy to talk to?",
      "How do you prefer to receive an apology?",
      "What is something you have learned from a past friendship?",
      "What does emotional availability mean to you?",
      "What is a quality that makes someone attractive beyond appearance?",
      "How can someone make you feel included?",
      "What is a boundary you think every friendship needs?",
      "What makes spending time together feel meaningful?",
      "What is one thing you appreciate about your closest friend?",
      "How do you handle differences in communication styles?",
      "What do you think people misunderstand about love?",
      "What is something couples should be able to laugh about together?",
      "What makes you feel safe disagreeing with someone?",
      "What is a sign that someone truly knows you?",
      "How do you like to celebrate another person's success?",
      "What kind of friendship do you hope to maintain as you grow older?",
      "What is one question you think people should ask each other more?",
      "What does being a good friend require when life gets busy?",
      "What makes you feel appreciated in a romantic relationship?",
      "How important is shared humor in a relationship?",
      "What is something you would like to communicate more clearly?",
      "What helps you trust someone after a disappointment?",
      "What is a relationship lesson you want to carry forward?"
    ],

    life: [
      "What is one thing life is teaching you right now?",
      "What does a successful day look like to you?",
      "What habit has improved your life the most?",
      "What would you like to make more time for?",
      "What is something you want to simplify?",
      "How do you define success for yourself?",
      "What helps you stay hopeful during uncertainty?",
      "What is one thing you wish school had taught you?",
      "What does balance mean in your current life?",
      "What is something worth spending money on?",
      "What is something worth waiting for?",
      "What daily habit would your future self appreciate?",
      "What makes a place worth calling home?",
      "What do you want to stop postponing?",
      "What is one thing you have learned from failure?",
      "What makes a day feel wasted to you?",
      "How do you decide what deserves your attention?",
      "What is a responsibility you have grown into?",
      "What does being independent mean to you?",
      "What would you like to become more consistent at?",
      "What is something you want less of in your life?",
      "What is something you want more of in your life?",
      "How do you recharge when you feel overwhelmed?",
      "What is a rule you have made for yourself?",
      "What do you think makes people content?",
      "What is one thing you are learning to do at your own pace?",
      "What would you like to stop comparing yourself about?",
      "What does a peaceful home feel like?",
      "What is one choice that made your life better?",
      "What do you think people spend too much time worrying about?",
      "What is one thing you would like to understand better?",
      "What do you want your ordinary life to include?",
      "How do you decide when it is time for a change?",
      "What is one skill that makes life easier?",
      "What is something you want to protect your time for?",
      "What does living intentionally mean to you?",
      "What is one thing you can appreciate about today?",
      "What would you like to be more patient with yourself about?",
      "What lesson do you hope never to forget?",
      "What would make the next chapter of your life meaningful?"
    ]
  };

  const bonusQuestions = [
    ["icebreaker", "What is your favorite kind of conversation?"],
    ["icebreaker", "What is one little thing you are looking forward to?"],
    ["fun", "If your mood today were a dessert, what would it be?"],
    ["fun", "What would you call a book about your funniest mistakes?"],
    ["fun", "Which fictional character would be the worst at texting back?"],
    ["deep", "What is something you are learning to give yourself permission to do?"],
    ["deep", "What makes you feel seen without needing to explain yourself?"],
    ["deep", "What does healing look like in everyday life?"],
    ["dreams", "What would you build if you had a team that believed in you?"],
    ["dreams", "What future moment are you quietly excited about?"],
    ["memories", "What is a memory you did not appreciate until later?"],
    ["memories", "What is a place from your past you would like to revisit?"],
    ["relationships", "What makes you feel valued without someone saying a word?"],
    ["relationships", "What is one way you try to show up for people you love?"],
    ["relationships", "What does mutual effort look like to you?"],
    ["life", "What would you like to thank your present self for?"],
    ["life", "What is one thing you can do today to make tomorrow easier?"],
    ["life", "What does a slower, happier life look like to you?"],
    ["life", "What is a small change that could improve your everyday life?"],
    ["dreams", "If you could make one meaningful wish for your future, what?"]
  ];

  const depthByIndex = (i) =>
    ["light", "medium", "deep"][i % 3];

  let questions = [];
  let currentQuestion = null;
  let currentCategory = "all";
  let currentDepth = "all";
  let currentMode = "friends";
  let askedIds = new Set();
  let round = 1;

  function readStorage(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      console.warn("Could not read saved data:", error);
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      showToast("Your browser could not save this item.");
    }
  }

  let favorites = readStorage(STORAGE.favorites, []);
  let savedAnswers = readStorage(STORAGE.answers, []);

  if (!Array.isArray(favorites)) favorites = [];
  if (!Array.isArray(savedAnswers)) savedAnswers = [];

  function buildQuestionBank() {
    const result = [];

    Object.entries(questionBank).forEach(([category, list]) => {
      list.forEach((question, index) => {
        result.push({
          id: `${category}-${index + 1}`,
          category,
          question,
          depth: depthByIndex(index),
          followUp: makeFollowUp(category, index)
        });
      });
    });

    bonusQuestions.forEach(([category, question], index) => {
      result.push({
        id: `bonus-${index + 1}`,
        category,
        question,
        depth: depthByIndex(index + 1),
        followUp: makeFollowUp(category, index + 1)
      });
    });

    return result;
  }

  function makeFollowUp(category, index) {
    const followUps = {
      icebreaker: [
        "What makes that your favorite?",
        "Has that always been true for you?",
        "What would you recommend to someone else?"
      ],
      fun: [
        "Tell us the story behind that!",
        "What would make it even funnier?",
        "Would your friends agree with you?"
      ],
      deep: [
        "Why do you think that matters to you?",
        "Has your answer changed over time?",
        "What helped you realize that?"
      ],
      dreams: [
        "What is one small step toward it?",
        "What excites you most about that possibility?",
        "What would make it easier to begin?"
      ],
      memories: [
        "What detail do you remember most clearly?",
        "How do you feel when you think about it now?",
        "Who else remembers that moment?"
      ],
      relationships: [
        "Can you think of an example?",
        "How do you communicate that to someone?",
        "Has an experience taught you that?"
      ],
      life: [
        "How could you apply that this week?",
        "When did you first realize that?",
        "What might that look like in everyday life?"
      ]
    };

    const list = followUps[category] || followUps.life;
    return list[index % list.length];
  }

  function categoryName(id) {
    const found = categories.find((c) => c.id === id);
    return found ? found.name : "Conversation";
  }

  function filteredQuestions() {
    return questions.filter((q) => {
      const categoryMatches =
        currentCategory === "all" || q.category === currentCategory;
      const depthMatches =
        currentDepth === "all" || q.depth === currentDepth;

      return categoryMatches && depthMatches;
    });
  }

  function updateText(id, value) {
    const element = $(id);
    if (element) element.textContent = value;
  }

  function showToast(message) {
    const toast = $("toast");

    if (toast) {
      toast.textContent = message;
      toast.hidden = false;
      toast.classList.add("show");

      window.clearTimeout(showToast.timer);
      showToast.timer = window.setTimeout(() => {
        toast.classList.remove("show");
        toast.hidden = true;
      }, 2400);
    } else {
      console.info(message);
    }
  }

  function updateCounters() {
    const pool = filteredQuestions();
    const remaining = pool.filter((q) => !askedIds.has(q.id)).length;

    updateText("remainingCount", String(remaining));
    updateText("favoritesCount", String(favorites.length));
    updateText("favoritesSectionCount", String(favorites.length));
    updateText("navFavoritesCount", String(favorites.length));
    updateText("answersCount", String(savedAnswers.length));

    const progress = $("progressFill");
    if (progress) {
      const completed = pool.length - remaining;
      const percent = pool.length ? (completed / pool.length) * 100 : 0;
      progress.style.width = `${percent}%`;
    }

    const note = $("roundNote");
    if (note) {
      note.textContent = `Round ${round} · ${pool.length} questions in this selection`;
    }
  }

  function updateAnswerEditor() {
    const input = $("answerInput");
    if (!input || !currentQuestion) return;

    const saved = savedAnswers.find(
      (item) => item.questionId === currentQuestion.id
    );

    input.value = saved ? saved.answer : "";
  }

  function updateQuestionDisplay() {
    if (!currentQuestion) return;

    updateText("questionText", currentQuestion.question);
    updateText("questionCategory", categoryName(currentQuestion.category));
    updateText("questionNumber", `Question ${askedIds.size}`);
    updateText("questionHint", depthHint(currentQuestion.depth));
    updateText("followUpText", currentQuestion.followUp);

    const followUpBox = $("followUpBox");
    if (followUpBox) followUpBox.hidden = true;

    const followUpButton = $("showFollowUpButton");
    if (followUpButton) {
      followUpButton.textContent = "Ask a follow-up";
      followUpButton.setAttribute("aria-expanded", "false");
    }

    const favoriteButton = $("favoriteButton");
    if (favoriteButton) {
      const isFavorite = favorites.includes(currentQuestion.id);
      favoriteButton.classList.toggle("selected", isFavorite);
      favoriteButton.setAttribute("aria-pressed", String(isFavorite));
      favoriteButton.textContent = isFavorite ? "♥ Saved" : "♡ Favorite";
    }

    updateAnswerEditor();
    updateCounters();
  }

  function depthHint(depth) {
    const hints = {
      light: "A light question to get the conversation going.",
      medium: "A little more personal—share as much as you like.",
      deep: "Take your time. There is no pressure to answer."
    };
    return hints[depth] || "";
  }

  function nextQuestion() {
    const pool = filteredQuestions();

    if (!pool.length) {
      showToast("No questions match these filters.");
      return;
    }

    let available = pool.filter((q) => !askedIds.has(q.id));

    if (!available.length) {
      askedIds = new Set();
      round += 1;
      available = pool.slice();
      showToast("You've completed this round! Starting a fresh round.");
    }

    const options = available.filter(
      (q) => !currentQuestion || q.id !== currentQuestion.id
    );

    const choices = options.length ? options : available;
    currentQuestion = choices[Math.floor(Math.random() * choices.length)];
    askedIds.add(currentQuestion.id);

    updateQuestionDisplay();
  }

  function startConversation() {
    const game = $("game");
    if (game) game.scrollIntoView({ behavior: "smooth", block: "start" });
    nextQuestion();
  }

  function setCategory(category) {
    const valid = categories.some((c) => c.id === category);
    currentCategory = valid ? category : "all";
    askedIds = new Set();
    round = 1;

    document.querySelectorAll("[data-category]").forEach((button) => {
      const selected = button.dataset.category === currentCategory;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    nextQuestion();
  }

  function toggleFavorite() {
    if (!currentQuestion) return;

    const id = currentQuestion.id;
    const index = favorites.indexOf(id);

    if (index >= 0) {
      favorites.splice(index, 1);
      showToast("Removed from favorites.");
    } else {
      favorites.push(id);
      showToast("Added to favorites 💗");
    }

    writeStorage(STORAGE.favorites, favorites);
    renderFavorites();
    updateQuestionDisplay();
  }

  function renderFavorites() {
    const list = $("favoritesList");
    const empty = $("favoritesEmpty");
    if (!list) return;

    list.replaceChildren();

    const items = favorites
      .map((id) => questions.find((q) => q.id === id))
      .filter(Boolean);

    if (empty) empty.hidden = items.length > 0;

    items.forEach((q) => {
      const card = document.createElement("article");
      card.className = "saved-item";

      const top = document.createElement("div");
      top.className = "saved-item-top";

      const category = document.createElement("span");
      category.className = "saved-item-category";
      category.textContent = categoryName(q.category);

      const question = document.createElement("p");
      question.className = "saved-item-question";
      question.textContent = q.question;

      const actions = document.createElement("div");
      actions.className = "saved-item-actions";

      const askButton = document.createElement("button");
      askButton.type = "button";
      askButton.className = "small-action";
      askButton.textContent = "Ask this";
      askButton.addEventListener("click", () => loadQuestion(q.id));

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "small-action";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        favorites = favorites.filter((id) => id !== q.id);
        writeStorage(STORAGE.favorites, favorites);
        renderFavorites();
        updateCounters();
        if (currentQuestion) updateQuestionDisplay();
      });

      top.append(category);
      actions.append(askButton, removeButton);
      card.append(top, question, actions);
      list.append(card);
    });
  }

  function saveAnswer() {
    if (!currentQuestion) {
      showToast("Choose a question first.");
      return;
    }

    const input = $("answerInput");
    const answer = input ? input.value.trim() : "";

    if (!answer) {
      showToast("Write an answer before saving.");
      return;
    }

    const existing = savedAnswers.find(
      (item) => item.questionId === currentQuestion.id
    );

    if (existing) {
      existing.answer = answer;
      existing.updatedAt = new Date().toISOString();
    } else {
      savedAnswers.push({
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        category: currentQuestion.category,
        answer,
        updatedAt: new Date().toISOString()
      });
    }

    writeStorage(STORAGE.answers, savedAnswers);
    renderSavedAnswers();
    updateCounters();
    showToast("Your answer has been saved 💗");
  }

  function renderSavedAnswers() {
    const list = $("savedAnswersList");
    const empty = $("answersEmpty");
    if (!list) return;

    list.replaceChildren();

    if (empty) empty.hidden = savedAnswers.length > 0;

    savedAnswers.forEach((entry) => {
      const card = document.createElement("article");
      card.className = "saved-item";

      const category = document.createElement("span");
      category.className = "saved-item-category";
      category.textContent = categoryName(entry.category);

      const question = document.createElement("p");
      question.className = "saved-item-question";
      question.textContent = entry.question;

      const answer = document.createElement("p");
      answer.className = "saved-item-answer";
      answer.textContent = entry.answer;

      const actions = document.createElement("div");
      actions.className = "saved-item-actions";

      const edit = document.createElement("button");
      edit.type = "button";
      edit.className = "small-action";
      edit.textContent = "Edit";
      edit.addEventListener("click", () => {
        loadQuestion(entry.questionId);
        const input = $("answerInput");
        if (input) input.value = entry.answer;

        const game = $("game");
        if (game) game.scrollIntoView({ behavior: "smooth" });
      });

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "small-action";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => {
        savedAnswers = savedAnswers.filter(
          (item) => item.questionId !== entry.questionId
        );
        writeStorage(STORAGE.answers, savedAnswers);
        renderSavedAnswers();
        updateCounters();
        showToast("Saved answer deleted.");
      });

      actions.append(edit, remove);
      card.append(category, question, answer, actions);
      list.append(card);
    });
  }

  function loadQuestion(id) {
    const found = questions.find((q) => q.id === id);
    if (!found) {
      showToast("That question could not be found.");
      return;
    }

    currentQuestion = found;
    currentCategory = "all";
    currentDepth = "all";
    askedIds.add(found.id);
    updateQuestionDisplay();

    const game = $("game");
    if (game) game.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function toggleFollowUp() {
    const box = $("followUpBox");
    const button = $("showFollowUpButton");
    if (!box) return;

    box.hidden = !box.hidden;

    if (button) {
      button.textContent = box.hidden ? "Ask a follow-up" : "Hide follow-up";
      button.setAttribute("aria-expanded", String(!box.hidden));
    }
  }

  function setDepth(value) {
    currentDepth = ["light", "medium", "deep"].includes(value)
      ? value
      : "all";
    askedIds = new Set();
    round = 1;
    nextQuestion();
  }

  function setMode(value) {
    currentMode = value || "friends";

    const notes = {
      myself: "Take a quiet moment to reflect. Your answers are for you.",
      friends: "Keep it relaxed, funny, and curious with your friends.",
      group: "Let everyone take turns. Anyone can pass on a question.",
      partner: "Listen with curiosity, kindness, and an open heart."
    };

    updateText(
      "roundNote",
      notes[currentMode] || "Choose a question and start talking."
    );
  }

  function clearAnswer() {
    const input = $("answerInput");
    if (input) input.value = "";
  }

  function handleClick(event) {
    const button = event.target.closest("button, [role='button'], a");
    if (!button) return;

    if (button.dataset.category) {
      event.preventDefault();
      setCategory(button.dataset.category);
      return;
    }

    const id = button.id || "";
    const text = (button.textContent || "").trim().toLowerCase();

    if (
      id === "startButton" ||
      id === "startConversationButton" ||
      id === "startConversation" ||
      text === "start conversation" ||
      text === "start playing"
    ) {
      event.preventDefault();
      startConversation();
      return;
    }

    if (
      id === "newQuestionButton" ||
      id === "nextQuestionButton" ||
      id === "startButtonNext" ||
      text === "new question" ||
      text === "next question"
    ) {
      event.preventDefault();
      nextQuestion();
      return;
    }

    if (id === "favoriteButton" || text.includes("favorite")) {
      event.preventDefault();
      toggleFavorite();
      return;
    }

    if (
      id === "showFollowUpButton" ||
      text.includes("follow-up") ||
      text.includes("follow up")
    ) {
      event.preventDefault();
      toggleFollowUp();
      return;
    }

    if (id === "saveAnswerButton" || text === "save answer") {
      event.preventDefault();
      saveAnswer();
      return;
    }

    if (id === "clearAnswerButton" || text === "clear answer") {
      event.preventDefault();
      clearAnswer();
      return;
    }

    if (id === "menuToggle") {
      const nav = $("mainNav");
      if (nav) nav.classList.toggle("open");
    }
  }

  function initialize() {
    questions = buildQuestionBank();

    // Expose the complete library for easy debugging.
    window.CONVERSATION_QUESTIONS = questions;
    window.CONVERSATION_CATEGORIES = categories;

    document.addEventListener("click", handleClick);

    const depthFilter = $("depthFilter");
    if (depthFilter) {
      depthFilter.addEventListener("change", () => {
        setDepth(depthFilter.value);
      });
    }

    const modeSelect = $("modeSelect");
    if (modeSelect) {
      modeSelect.addEventListener("change", () => {
        setMode(modeSelect.value);
      });
      setMode(modeSelect.value);
    }

    const allButton = document.querySelector('[data-category="all"]');
    if (allButton) {
      allButton.classList.add("selected");
      allButton.setAttribute("aria-pressed", "true");
    }

    renderFavorites();
    renderSavedAnswers();

    // Display a real question immediately on page load.
    nextQuestion();

    console.info(
      `The Conversation Club loaded ${questions.length} questions.`
    );
  }

  return {
    initialize,
    nextQuestion,
    setCategory,
    toggleFavorite,
    saveAnswer,
    renderFavorites,
    renderSavedAnswers,
    questions: () => questions
  };
})();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ConversationClub.initialize);
} else {
  ConversationClub.initialize();
}

