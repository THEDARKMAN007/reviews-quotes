const forward = document.querySelector(".right");
const backward = document.querySelector(".left");
const surpriseMe = document.querySelector(".button");

let pictures = [
  '<img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg" alt="anna johnson" class="img">',
  '<img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg" alt="peter jones" class="img">',
  '<img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg" alt="bill anderson" class="img">',
  '<img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg" alt="susan smith" class="img">',
];

let avatorName = [
  "Anna Johnson",
  "Peter Jones",
  "Bill Anderson",
  "Susan Smith",
];

let avatorStory = [
  "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
];

//surprise me button
surpriseMe.addEventListener("click", () => {
  random = Math.floor(Math.random() * 4);
  document.querySelector(".img").outerHTML = pictures[random];
  document.querySelector(".name").innerHTML = avatorName[random];
  document.querySelector(".story").innerHTML = avatorStory[random];
});

// nav. right button
random = 0;
forward.addEventListener("click", () => {
  random += 1;
  if (random >= avatorName.length) {
    random = 0;
  }
  document.querySelector(".img").outerHTML = pictures[random];
  document.querySelector(".name").innerHTML = avatorName[random];
  document.querySelector(".story").innerHTML = avatorStory[random];
  return random;
});

// nav. left button
backward.addEventListener("click", () => {
  random -= 1;
  if (random == -1) {
    random = avatorName.length - 1;
  }
  document.querySelector(".img").outerHTML = pictures[random];
  document.querySelector(".story").innerHTML = avatorStory[random];
  document.querySelector(".name").innerHTML = avatorName[random];
});
