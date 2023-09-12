import {
  iconAnalytics,
  iconAutomation,
  iconBundle,
  iconCareer,
  iconEngineering,
  iconManual,
  iconUiDesign,
} from "../assets/icons";
import {
  instructor0,
  instructor1,
  instructor2,
  instructor3,
  instructor4,
  instructor5,
  instructor6,
  instructor7,
  instructor8,
  instructor9,
  instructor10,
  instructor11,
  instructor12,
  instructor13,
  instructor14,
  instructor15,
  instructor16,
  how,
  feedbackPhoto1,
  feedbackPhoto2,
  feedbackPhoto3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "About us" },
  { href: "#ourPrograms", label: "Our Programs" },
  { href: "#insights", label: "Insights" },
  { href: "#enterprise", label: "Enterprise" },
];

export const subMenu = [
  {
    label: "About Us",
    aboutUs: [
      { subLabel: "Meet Careerist" },
      { subLabel: "Our Instructors" },
      { subLabel: "Graduates Outcomes" },
    ],
  },
  {
    label: "Our Programs",
    aboutUs: [
      { subLabel: "Manual QA" },
      { subLabel: "QA Automation" },
      { subLabel: "QA Bundle" },
      { subLabel: "Sales Engineering" },
      { subLabel: "UX/UI Design" },
      { subLabel: "Data Analytics" },
    ],
  },
  {
    label: "Insights",
    aboutUs: [
      { subLabel: "Our Blog" },
      { subLabel: "Success Stories" },
      { subLabel: "Affiliate Program" },
    ],
  },
  {
    label: "Enterprise",
    aboutUs: [
      { subLabel: "Recruiting" },
      { subLabel: "Internship" },
      { subLabel: "Contract a Team" },
      { subLabel: "Work at Careerist" },
    ],
  },
];

export const newJob = [
  {
    icon: iconManual,
    title: "Manual QA",
    description:
      "Quality Assurance (QA) is the fastest path to your first job in tech. No prior experience required",
    time: "15 Weeks",
    salary: "Salary >$75K",
  },
  {
    icon: iconAutomation,
    title: "QA Automation",
    description:
      "Boost your QA career with Automation! Apply for high-paying mid-level positions. Python 101 required",
    time: "6 months",
    salary: "Salary >$110K",
  },
  {
    icon: iconBundle,
    title: "QA Bundle",
    description:
      "Take our QA Complete training and build a long-term, high-demand career in tech – no prior experience or degree required!",
    time: "10 months",
    salary: "Salary >$115K",
  },
  {
    icon: iconEngineering,
    title: "Sales Engineering",
    description:
      "Represent tech companies and enjoy lucrative bonuses in a dynamic and exciting work environment",
    time: "9 weeks",
    salary: "Salary >$100K",
  },
  {
    icon: iconUiDesign,
    title: "UX/UI Design",
    description:
      "Create enjoyable experiences for users interacting with digital tools while earning your dream salary",
    time: "16 weeks",
    salary: "Salary >$65K",
  },
  {
    icon: iconAnalytics,
    title: "Data Analytics",
    description:
      "Kickstart your high-demand Data Analytics career! Join our training and land a job fast",
    time: "7 months",
    salary: "Salary >$62K",
  },
];

export const techCareer = [
  {
    icon: iconCareer,
    title: "Career discovery",
    description:
      "Discover the right career path for you with your personal Career Advisor",
  },
  {
    icon: iconCareer,
    title: "1:1 Career Coaching",
    description:
      "Study 1:1 with your Career Coach: improve your resume & practice mock job interviews",
  },
  {
    icon: iconCareer,
    title: "Real-life internship",
    description:
      "Get the necessary know-how and hands-on experience you can add to your LinkedIn",
  },
  {
    icon: iconCareer,
    title: "Job Application Service",
    description:
      "Careerist helps you find and apply for job openings matching your criteria",
  },
];
export const instructors = [
  {
    tags: [{ company: "Meta" }, { company: "Google" }, { company: "Intel" }],
    id:'patrick',
    img: instructor0,
    name: "Patrick Siebenthal",
    description:
      "QA Engineer with 6+ years of experience at Facebook (Meta), Google and Intel",
    img: instructor0,
  },
  {
    tags: [{ company: "Fluor" }, { company: "xerox" }, { company: "Deltek" }],
    id:'Maria',
    img: instructor0,
    name: "Patrick Siebenthal",
    description:
      "QA Engineer with 6+ years of experience at Facebook (Meta), Google and Intel",
    img: instructor1,
  },
  {
    tags: [{ company: "reddit" }],
    id:'Lana',
    img: instructor0,
    name: "Patrick Siebenthal",
    description:
      "QA Engineer with 6+ years of experience at Facebook (Meta), Google and Intel",
    img: instructor2,
  },
  {
    tags: [{ company: "Beachbody" }],
    id:'Brandon',
    img: instructor0,
    name: "Patrick Siebenthal",
    description:
      "QA Engineer with 6+ years of experience at Facebook (Meta), Google and Intel",
    img: instructor3,
  },
  {
    tags: [{ company: "intel" }, { company: "McAfree" }],
    id:'Ingnacio',
    img: instructor0,
    name: "Patrick Siebenthal",
    description:
      "QA Engineer with 6+ years of experience at Facebook (Meta), Google and Intel",
    img: instructor4,
  },
  {
    tags: [{ company: "myndshft" }],
    id:'Alex',
    img: instructor0,
    name: "Patrick Siebenthal",
    description:
      "QA Engineer with 6+ years of experience at Facebook (Meta), Google and Intel",
    img: instructor5,
  },
];

export const journey = [
  {
    id: 1,
    title: "Choose a track",
    description:
      "Sign up and meet your Career Advisor – they will help you select and enroll in the right program. Ask about financing options!",
  },
  {
    id: 2,
    title: "Attend classes",
    description:
      "Choose a track and join classes led by industry experts from companies like Apple, Google and Intel, helping you navigate the tech industry",
  },
  {
    id: 3,
    title: "Join an Internship",
    description:
      "We match you with a 100% remote internship where you gain hands-on experience you will feature in your LinkedIn and interviews",
  },
  {
    id: 4,
    title: "Get 1:1 Career Coaching",
    description:
      "Join 1:1 meetings with your Career Coach to prepare for job interviews and improve your resume, cover letters and confidence",
  },
];

export const cardFeedBack = [
  {
    img: feedbackPhoto1,
    name: "Kyril P.",
    message:
      "I’ve been looking into the QA Automation training after a friend recommended it to me. And since I was a little tight on cash at the time, the payment plan option was perfect for me!",
  },
  {
    img: feedbackPhoto2,
    name: "Bethan C.",
    message:
      "I have taken 2 trainings with QA (Manual and Automation) both really informative and practical. Instructors are easy to learn from and really helpful when you have a question. Thank you, guys!",
  },
  {
    img: feedbackPhoto3,
    name: "Sirio L.",
    message:
      "I really liked the training, it gives the basic knowledge to start in the testing area! But the main thing at Careerist you understand and have knowledge how to get a job in QA and get a big salary. Thank you",
  },
];

export const reviews = [
  {
    review:
      "They provide continued support and are always helpful with questions from class. If I got stuck I could learn from a tutor!",
    url: "google.com",
    id:'reiview1'
  },
  {
    review:
      "This QA training was really useful and informative. It gave me a clear overview of the QA role as an entryway to the tech industry. Also, JobEasy specialists helped me set up my resume, apply for jobs, and how to ace the interview!",
    url: "google.com",
    id:'reiview2'
  },
  {
    review:
      "What a great experience: wonderful interesting classes that kept me interested. I learned so much and am so excited to start my career in QA.",
    url: "google.com",
    id:'reiview3'
  },
  {
    review:
      "I totally recommend this training for anyone who wants to have an awesome career and learn QA Professors are knowledgeable and classes are enjoyable.",
    url: "google.com",
    id:'reiview4'
  },
  {
    review:
      "Fair, well organized, a good amount of material. If you are totally new to programming/testing this is definitely your training.",
    url: "google.com",
    id:'reiview5'
  },
  {
    review:
      "This is a really great training to take! I love that I quickly gained knowledge and understanding of various technologies, I really think tech is the future. All in all great training content by the instructors!",
    url: "google.com",
    id:'reiview6'
  },
];

export const navFooter = [
  {
    title: "About",
    links: [
      { name: "Meet Careerist", link: "/" },
      { name: "Our Instructors", link: "/" },
      { name: "Graduates outcomes", link: "/" },
    ],
  },
  {
    title: "Our Programs",
    links: [
      { name: "Manual QA", link: "/" },
      { name: "QA Automation", link: "/" },
      { name: "QA Bundle", link: "/" },
      { name: "Sales Engineering", link: "/" },
      { name: "UX/UI Design", link: "/" },
      { name: "Data Analytics", link: "/" },
    ],
  },
  {
    title: "Insights",
    links: [
      { name: "Our Blog", link: "/" },
      { name: "Success Stories", link: "/" },
      { name: "Affiliate Program", link: "/" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { name: "Recruiting", link: "/" },
      { name: "Internship", link: "/" },
      { name: "Contract a Team", link: "/" },
      { name: "Work at Careerist", link: "/" },
    ],
  },
];

export const copyFooter = [
  {
    termsRow1: [
      { term: "Privacy Policy" },
      { term: "Terms of Service" },
      { term: "Cancellation Policy" },
    ],
    termsRow2: [
      { term: "Referral Policy" },
      { term: "Guarantee" },
      { term: "Educational Terms" },
    ],
  },
];
