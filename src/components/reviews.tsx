"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Reviews = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials =
[
  {
    "quote": "I'm not a proctologist, but I know an asshole when I see one. And let me tell you, I've seen more assholes than a toilet seat at a chili cook-off.",
    "name": "Dr. Harry Buttman",
    "title": "Chief Rectal Reconnaissance Specialist, Connoisseur of Cornholes"
  },
  {
    "quote": "Why did the sperm cross the road? Because I put on the wrong sock this morning. And now those little guys are on a quest for the ultimate adventure - a journey through the fallopian tubes!",
    "name": "Randy Johnson",
    "title": "Sperm Navigator Extraordinaire, Captain of Conception"
  },
  {
    "quote": "I'm not saying she's easy, but her favorite shade of lipstick is 'penis'. She's not just making a statement; she's making an impression that lasts all night long.",
    "name": "Johnny Sinful",
    "title": "Master of Seduction, Lipstick Virtuoso"
  },
  {
    "quote": "Why don't scientists trust atoms? Because they make up everything... including lies about their size. And let me tell you, size does matter, especially when it comes to atomic precision.",
    "name": "Professor Randy McLarge",
    "title": "Atomic Casanova, Quantum Mechanics Maestro"
  },
  {
    "quote": "I'm not saying he's a bad lover, but his idea of foreplay is handing you a condom and saying, 'Safety first, darling.' It's like he's trying to build a barrier between us... or he's just really into latex.",
    "name": "Tommy Thompson",
    "title": "Master of Romance, Protector of Passion"
  },
  {
    "quote": "My girlfriend told me to go out and get something that makes her look sexy... so I got drunk. Let's just say, I've never seen so much 'sexy' in one room... or maybe I was just seeing double.",
    "name": "Dave  Davidson",
    "title": "Champion of Charm, Libation Luminary"
  },
  {
    "quote": "I'm not a gynecologist, but I know a cunt when I see one. And trust me, I've seen more of them than a prostitute on payday.",
    "name": "Dr. Dick Longshaft",
    "title": "Muff Master, Clit Connoisseur"
  },
  {
    "quote": "Why did the condom go to law school? Because it wanted to be a safe sex attorney. But let's be real, it's not like they have much to argue about.",
    "name": "Barry Johnson",
    "title": "Legal Guardian of Love, Condom Counselor"
  },
  {
    "quote": "I'm not saying he's bad in bed, but his sex life is like a sitcom - full of awkward pauses, terrible jokes, and a laugh track that's just him crying softly.",
    "name": "Peter  Peterson",
    "title": "Sultan of Sarcasm, Prince of Pillow Talk"
  }
]

export default Reviews;
