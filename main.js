// import {data} from './data.json'

// https://ibb.co/F71QGNQ
// https://ibb.co/nkKR2yK
// https://ibb.co/QkLz5st
// https://ibb.co/VqGxxVc
// https://ibb.co/GxdWDXT

const data = [
 {
  id: 1,
  name: "Daniel Clifford",
  subtitle: "Verified Graduate",
  testimonial:
   "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
  image: "https://i.ibb.co/KygtCRt/image-patrick.jpg",
  description:
   "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”",
 },
 {
  id: 2,
  name: "Jonathan Walters",
  subtitle: "Verified Graduate",
  testimonial: "The team was very supportive and kept me motivated",
  image: "https://i.ibb.co/yptG3L7/image-jonathan.jpg",
  description:
   "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “",
 },
 {
  id: 3,
  name: "Jeanette Harmon",
  subtitle: "Verified Graduate",
  testimonial: "An overall wonderful and rewarding experience",
  image: "https://i.ibb.co/G5D9974/image-jeanette.jpg",
  description:
   "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
 },
 {
  id: 4,
  name: "Patrick Abrams",
  subtitle: "Verified Graduate",
  testimonial:
   "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
  image: "https://i.ibb.co/KygtCRt/image-patrick.jpg",
  description:
   "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”",
 },
 {
  id: 5,
  name: "Kira Whittle",
  subtitle: "Verified Graduate",
  testimonial: "Such a life-changing experience. Highly recommended!",
  image: "https://i.ibb.co/ysxVTCx/image-kira.jpg",
  description:
   "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”",
 },
];

const grid = document.querySelector(".grid-container");

grid.innerHTML = data
 .map((item) => {
  const card = document.createElement("div");
  return (card.innerHTML = `
 <div class="card-item">
 <div class="card-top-container">
 <img class='card-profile' src=${item.image} alt=${item.name}>
     <div class="profile-container">
         <h3>${item.name}</h3>
         <p>${item.subtitle}</p>
     </div>
 </div>
 <p class='testimonial-text'>${item.testimonial}</p>
 <p class='description-text'>${item.description}</p>
</div>`);
 })
 .join("");
