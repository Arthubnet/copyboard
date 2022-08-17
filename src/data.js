/* Old data */
import taylor from "../src/assets/img/taylor.jpg";
import okean from "../src/assets/img/okean.jpg";
import alyona from "../src/assets/img/aloyna.jpg";
import kanye from "../src/assets/img/kanye.jpg";
import chinese from "../src/assets/img/chinese.jpg";
import shakira from "../src/assets/img/shakira.jpg";
import shreya from "../src/assets/img/shreya.jpg";
import carlos from "../src/assets/img/carlos.jpg";
import armin from "../src/assets/img/armin.jpg";

/* Hero */

import heroFirst from "../src/assets/img/heroFirst.jpg";
import heroSecond from "../src/assets/img/heroSecond.jpg";
import heroThird from "../src/assets/img/heroThird.jpg";

/* News */
import hardy from "../src/assets/img/hardy.jpg";
import willow from "../src/assets/img/willow.jpg";
import hugh from "../src/assets/img/hugh.jpg";
import olivia from "../src/assets/img/olivia.jpg";

/* Songs */
import brat from "../src/assets/songs/brat.mp3";
import krasivo from "../src/assets/songs/krasivo.mp3";
import marley from "../src/assets/songs/marley.mp3";
import norwise from "../src/assets/songs/nordwise.mp3";
import zdorovo from "../src/assets/songs/zdorovo.mp3";

/* Videos */
import img from "../src/assets/img/ridni.jpg";
import okeanVid from "../src/assets/video/okean.mp4";
import ridniVid from "../src/assets/video/ridni.mp4";
import sadeVid from "../src/assets/video/sade.mp4";

/* Bands */

import hu from "../src/assets/img/hu.jpg";
import zakk from "../src/assets/img/zakk.jpg";
import gwen from "../src/assets/img/gwen.jpg";
/* More news */
import moreNews1 from "../src/assets/img/moreNews1.jpg";
import moreNews2 from "../src/assets/img/moreNews2.jpg";
import moreNews3 from "../src/assets/img/moreNews3.jpg";

/* Hero */

export let heroData = [
  {
    id: 1,
    imgUrl: heroFirst,
    date: "07/23/2022",
    author: "By Brandon Ridish",
    title: `The dilemma of <span>British Vogue's</span> cover and Black representation`,
    footer: `With the biggest hit of 2021, the singer songwriter was just getting
        started.`,
  },

  {
    id: 2,
    imgUrl: heroSecond,
    date: "07/23/2022",
    author: "By Brandon Ridish",
    title: `How  <span>Peter Lindbergh</span> Changed Fashion Photography Forever`,
    footer: `With the biggest hit of 2021, the singer songwriter was just getting
        started.`,
  },

  {
    id: 3,
    imgUrl: heroThird,
    date: "07/23/2022",
    author: "By Brandon Ridish",
    title: `<span>Padma Lakshmi's</span> Throwback Modeling Shots Are Timeless`,
    footer: `With the biggest hit of 2021, the singer songwriter was just getting
        started.`,
  },
];

/* News*/

export let news = [
  {
    id: 1,
    img: olivia,
    title: `How Did Olivia Rodrigo Become The World's Biggest Pop Star? `,
    category: "Music",
    alt: "olivia",
  },
  {
    id: 2,
    img: hugh,
    title: `Hugh Jackman: Wolverine has not eclipsed my career`,
    category: "Movies",
    alt: "hugh",
  },
  {
    id: 3,
    img: willow,
    title: `Willow Smith Gets Real About Growing Up With Famous Parents`,
    category: "Music",
    alt: "willow",
  },

  {
    id: 4,
    img: hardy,
    title: `Tom Hardy says he's 'kind of had enough' of acting`,
    category: "Movies",
    alt: "hardy",
  },
];

export let newsData = [
  {},
  {
    id: 1,
    type: "fresh",
    data: [
      [
        {
          genre: "MUSIC",
          title: `Okean Elzy plays the Riv on Sunday`,
          img: okean,
          alt: "okean",
        },
        {
          genre: "MUSIC",
          title: `Kanye West Announces 'Donda 2' event in Miami this week`,
          img: kanye,
          alt: "kanye",
        },
      ],
      [
        {
          genre: "MUSIC",
          title: `Olivia Rodrigo's New Album 'Sour' : Pop Culture Happy Hour : NPR`,
          img: olivia,
          alt: "olivia",
        },
      ],

      [
        {
          genre: "MUSIC",
          title: `Shakira complains of harassment after split with Pique`,
          img: shakira,
          alt: "shakira",
        },
        {
          genre: "MUSIC",
          title: `Chinese pop singers making soundwaves in the west`,
          img: chinese,
          alt: "chinese",
        },
      ],
    ],
  },
  {
    id: 2,
    type: "Best of Week",
    data: [
      [
        {
          genre: "MUSIC",
          title: `Singer Shreya Ghoshal reacts to old Twitter exchanges with Parag Agarwal`,
          img: shreya,
          alt: "shreya",
        },
        {
          genre: "MUSIC",
          title: `Alyona Savranenko a.k.a. Alyona Alyona Is Paving the Way for Ukrainian Rap`,
          img: alyona,
          alt: "alyona",
        },
      ],
      [
        {
          genre: "MUSIC",
          title: `Taylor Swift's new song 'Carolina' based on Delia Owens' novel 'Where the Crawdads Sing'`,
          img: taylor,
          alt: "taylor",
        },
      ],

      [
        {
          genre: "MUSIC",
          title: `List of awards and nominations received by Armin van Buuren`,
          img: armin,
          alt: "armin",
        },
        {
          genre: "MUSIC",
          title: `Carlos Santana to address UCLA Herb Alpert School of Music graduates`,
          img: carlos,
          alt: "santana",
        },
      ],
    ],
  },
];

/* Music */

export let songsData = [
  {},
  {
    id: 1,
    name: "Здорово",
    link: zdorovo,
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX18sXfdWhtNOmakF5iJ6VzfxvEsrqZQgJvY1XXbDlnGuxWJjmCOigCZGGu5UINvnvjPUO8GprfSFEXFnFD5Sf9DJwJ%2fCxCvREgFKvFLbx%2fTlswqx%2bzJRRTkDJneJI8OyrJIf7Wn%2bnHjRfOwepSvu%2brAd0tdOwxtmPXwKfvcEiOyQmG4ZEDOgy8ox&s=youtube&id=&h=844019832527452011",
    artist: "Носков",
    duration: "4:17",
    cover: "https://i.scdn.co/image/ab67616d0000b273ac018113ff1b23da43f88e10",
  },
  {
    id: 2,
    name: "Брат",
    link: brat,
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX19NqLeNPgTA7VqZ9Zb6B4Jj7Ose6gMmxT39QGLslmc7uN0Ri%2bGTkAXfeJfJK%2fQaBb9OS5cVmNWnoVSSlDVtOnNe8826QMrd0Ht9ONkNSwHtDqIqUgnBtffQ&s=youtube&id=&h=844019832527452031",
    artist: "LeanJe",
    duration: "3:41",
    cover:
      "https://images.genius.com/39a9ee0ff3383b420394105dea72858b.1000x1000x1.jpg",
  },

  {
    id: 3,
    name: "Evolve II",
    link: norwise,
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX1%2bufA1IpiyHwJ7sBNzf%2fDQ70cq5GsIBDeH4TXbiwCqwQpr9SRkUa9cFqf1KR5rWifOWezv5lqueEyuNeyMb%2brzYNI0hc%2b9zRDxLFl3ceHJSJKLzlZ7RssI6gAXjlSo2fS7yDohOC%2fqQZmSr7fdKIsn8pxBHRFtX0sRPGXhLlyfwe36IT5ktiulG&s=youtube&id=&h=844019832527452015",
    artist: "Nordwise",
    duration: "3:50",
    cover: "https://f4.bcbits.com/img/a3784090808_16.jpg",
  },

  {
    id: 4,
    name: "Sun Is Shining",
    link: marley,
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX1%2be59DOjqaIapFZEjSeohGerdaYt38SaH1DjVnkSH2c0rflU6Yc%2bckFCOE%2fG3J8YVtjxALu20DetPijzxTD3ztECBOeVkeibcRiP67mSkZY0q99qjEAJmfqdSmcAbEHe1kgFEEayBmKcyFnJKoGIHbLZAGmIibVUXo%3d&s=youtube&id=&h=844019832527451710",
    artist: "Bob Marley",
    duration: "7:32",
    cover:
      "https://2.bp.blogspot.com/-gf_cbHxPwXk/UuNWput61VI/AAAAAAAABoo/ns2Sb0ufl1w/s1600/bob-marley.jpg",
  },
  {
    id: 5,
    name: "Красота",
    link: krasivo,
    path: "https://ytop1.com/Thankyou?token=U2FsdGVkX19vqdf%2fCyVOD1nhGP7uMyPuBHOYOrPhOHt3aRw7WXaXvLHMXruiazfkdf2OIY4gINKK3Uji%2f7gOmPcdmG1s529ME3Yz%2f6THy3G4PfY5rK%2f8y7P%2b303UXHC9&s=youtube&id=&h=844019832527451705",
    artist: "Чайковська",
    duration: "4:17",
    cover:
      "https://lastfm.freetls.fastly.net/i/u/avatar170s/cf42b9f1ee9a203818a64357ba5b2b1c",
  },
];

/* Videos */

export let videosData = [
  {
    id: 1,
    genre: "Video Top",
    title: `Okean Elzy & Odyn v kanoe - Misto vesny || Official video`,
    img: "https://zn.ua/img/forall/u/14/3/%D0%9C%D1%96%D1%81%D1%82%D0%BE%20%D0%B2%D0%B5%D1%81%D0%BD%D0%B8.jpg",
    path: okeanVid,
    alt: "okean",
  },
  {
    id: 2,
    genre: "Video Top",
    title: `Alyona alyona - Рідні мої (feat. Jerry Heil)`,
    img: img,
    path: ridniVid,
    alt: "ridni",
  },
  {
    id: 3,
    genre: "Video Top",
    title: `Song of the Day: Jezebel by Sade, Live`,
    img: "https://distracttv.com/wp-content/uploads/2017/09/SADE-Singer-featured-image.jpg",
    path: sadeVid,
    alt: "sade",
  },
];

/* Bands */

export let bandsData = [
  {},
  {
    id: 1,
    title: `The Hu return with This Is Mongol single and spectacular video`,
    author: "Andrey Coy",
    time: "5 hours ago",
    img: hu,
  },
  {
    id: 2,
    title: `Zakk Wylde reflects on 12 musical milestones from a career path`,
    author: "Henry Gray",
    time: "10 hours ago",
    img: zakk,
  },
  {
    id: 3,
    title: `Gwen Stefani accused of cultural appropriation in 'Light My Fire'`,
    author: "Hannah Dailey",
    time: "3 hours ago",
    img: gwen,
  },
];

/* More News */

export let moreNewsData = [
  {},
  {
    id: 1,
    img: moreNews1,
    title: `The models that turned Instagram into their DIY catwalk `,
    category: "MODELS",
    alt: "sriya",
  },

  {
    id: 2,
    img: moreNews2,
    title: `How Pooja Mor is Bringing Her Indian Culture to Modeling`,
    category: "MODELS",
    alt: "brad",
  },
  {
    id: 3,
    img: moreNews3,
    title: `Kelsey Merritt is our (role) model on and off the runway`,
    category: "MODELS",
    alt: "nayeon",
  },
];
