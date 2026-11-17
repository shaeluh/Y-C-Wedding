
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  CalendarDays,
  MapPin,
  Clock,
  Heart,
  ArrowDown,
  Navigation,
} from "lucide-react";

const weddingDate = new Date("2027-01-23T09:00:00+08:00");


function Countdown() {
  const calculateTime = () => {
    const difference = weddingDate.getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="mx-auto grid max-w-lg grid-cols-4 gap-2 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex aspect-[0.88] flex-col items-center justify-center border border-[#b0935c]/35 bg-[#fffdf9] px-1 py-4 shadow-[0_5px_20px_rgba(60,45,25,0.04)]"
        >
          <span className="font-display text-3xl text-[#29221f] sm:text-5xl">
            {String(unit.value).padStart(2, "0")}
          </span>

          <span className="mt-2 text-xs uppercase tracking-[0.12em] text-[#92774d] sm:text-xs sm:tracking-[0.2em]">
            {unit.label}
          </span>

          <span className="mt-3 h-px w-5 bg-[#b0935c]/50" />
        </div>
      ))}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  const navigation = [
    ["Home", "#home"],
    ["Details", "#details"],
    ["Dress Code", "#dress-code"],
    ["Program", "#program"],
    ["Gifts", "#gifts"],
    ["Memories", "#memories"],
  ];

  return (
    <main className="min-h-screen w-full overflow-x-clip bg-[#f5f1eb] text-[#28221f]">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#b59a6a]/20 bg-[#f5f1eb]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg tracking-[0.12em]">
            Y <span className="text-[#ae925b]">&</span> C
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-xs uppercase tracking-[0.17em] text-[#685e54] transition hover:text-[#ae925b]"
              >
                {name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#b59a6a]/20 bg-[#f5f1eb] px-6 py-5 md:hidden">
            {navigation.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-[#b59a6a]/15 py-3 text-xs uppercase tracking-[0.18em]"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
  id="home"
  className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-28"
>
        {/* Decorative background */}
  <div className="pointer-events-none absolute left-[-90px] top-40 h-64 w-64 rounded-full border border-[#b0935c]/20" />
  <div className="pointer-events-none absolute bottom-20 right-[-100px] h-72 w-72 rounded-full border border-[#b0935c]/20" />

  <motion.div
    initial={{ opacity: 0, y: 35 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.1 }}
    className="relative w-full max-w-5xl"
  > 
   {/* Ticket container */}
    <div className="relative grid overflow-hidden border border-[#b0935c]/50 bg-white shadow-[0_25px_80px_rgba(60,45,25,0.09)] md:grid-cols-[1fr_190px]">

      {/* Main invitation */}
      <div className="relative px-7 py-12 text-center sm:px-12 sm:py-16 md:px-16">

        {/* Gold ticket accent */}
        <div className="absolute left-0 top-0 h-full w-[5px] bg-[#b0935c]" />

          {/* Top label */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-[#b0935c]" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#92774d] sm:text-[11px]">
            Together with their families
          </p>
          <span className="h-px w-7 bg-[#b0935c]" />
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-[#51463d] sm:text-xs sm:tracking-[0.28em]">
          You are invited to the wedding of
        </p>

           {/* Couple names */}
        <div className="my-8 sm:my-10">
          <h1 className="font-script text-[clamp(4rem,13vw,7rem)] leading-[1.15] text-[#29221f]">
            Yobel
          </h1>

            <div className="my-1 font-script text-4xl text-[#b0935c]">
            &
          </div>

            <h1 className="font-script text-[clamp(4rem,13vw,7rem)] leading-[1.15] text-[#29221f]">
            Crissha
          </h1>
        </div>

         {/* Decorative divider */}
        <div className="mx-auto mb-8 flex max-w-sm items-center gap-3">
          <span className="h-px flex-1 bg-[#b0935c]" />
          <span className="text-xs text-[#b0935c]">✦</span>
          <span className="h-px flex-1 bg-[#b0935c]" />
        </div>

             {/* Wedding date */}
        <p className="font-display text-lg tracking-[0.17em] text-[#29221f] sm:text-2xl">
          JANUARY 23, 2027
        </p>

        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#92774d] sm:text-xs">
          Saturday · 09:00 AM
        </p>

        <p className="mx-auto mt-7 max-w-md font-display text-[17px] italic font-normal leading-8 tracking-wide text-[#8b7b6d] sm:text-xl sm:leading-9">
  “I am my beloved’s, and my beloved is mine.”
  <span className="mt-2 block not-italic text-xs uppercase tracking-[0.3em] text-[#b09365]">
    Song of Songs 6:3a
  </span>
</p>

           {/* Invitation button */}
        <a
          href="#details"
          className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-[#ae925b] px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#92774d] sm:text-xs"
        >
          Explore Invitation
          <ArrowDown size={14} />
        </a>

           <div className="mt-9 text-[11px] uppercase tracking-[0.25em] text-[#92774d]">
          ✦ &nbsp; Our Wedding Day &nbsp; ✦
        </div>

   {/* Ticket notches */}
        <div className="absolute -left-4 top-[58%] h-8 w-8 rounded-full border border-[#b0935c]/40 bg-[#f5f1eb] md:hidden" />
        <div className="absolute -right-4 top-[58%] h-8 w-8 rounded-full border border-[#b0935c]/40 bg-[#f5f1eb] md:hidden" />
      </div>

      {/* Boarding pass stub */}
      <div className="relative flex flex-col items-center justify-center border-t border-dashed border-[#b0935c]/60 bg-[#f8f5ef] px-6 py-10 text-center md:border-l md:border-t-0">

        {/* Vertical wedding pass label */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#92774d]">
          Wedding Pass
        </p>

        <div className="my-6 flex h-20 w-full max-w-[115px] items-center justify-center gap-[3px] overflow-hidden opacity-70">
          {[2, 5, 2, 1, 4, 2, 6, 2, 1, 5, 3, 2, 6, 1, 3, 2, 5, 1, 4, 2, 3, 1, 5, 2, 4, 1, 3, 2, 6, 1].map((width, index) => (
            <span
              key={index}
              className="h-full bg-[#29221f]"
              style={{ width: `${width}px` }}
            />
          ))}
        </div>

        <p className="text-[11px] uppercase tracking-[0.2em] text-[#92774d]">
          Save the Date
        </p>

        <p className="mt-3 font-display text-xl tracking-wider text-[#29221f]">
          01.23.2027
        </p>

        <div className="my-6 h-px w-full bg-[#b0935c]/40" />

        <p className="font-script text-3xl text-[#29221f]">
          Yobel & Crissha
        </p>

        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#92774d]">
          A Journey of Forever
        </p>

        <div className="mt-8 flex items-center gap-2 text-[#b0935c]">
          <span className="h-px w-5 bg-[#b0935c]" />
          <Heart size={13} />
          <span className="h-px w-5 bg-[#b0935c]" />
        </div>
      </div>
    </div>

    {/* Bottom caption */}
    <p className="mt-8 text-center text-[11px] uppercase tracking-[0.3em] text-[#92774d]">
      By His sovereign mercy, a lifetime of dependency begins here.
    </p>
  </motion.div>
</section>

      
{/* COUNTDOWN SECTION */}
<section className="relative overflow-hidden bg-[#eae3d8] px-5 py-20 sm:py-24">

  {/* Decorative elements */}
  <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full border border-[#b0935c]/20" />
  <div className="pointer-events-none absolute -right-16 bottom-10 h-48 w-48 rounded-full border border-[#b0935c]/20" />

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative mx-auto max-w-3xl text-center"
  >
    <div className="mb-5 flex items-center justify-center gap-3">
      <span className="h-px w-7 bg-[#b0935c]" />
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#92774d]">
        Save the Date
      </p>
      <span className="h-px w-7 bg-[#b0935c]" />
    </div>

    <h2 className="font-script text-5xl text-[#29221f] sm:text-7xl">
      Counting Down to Forever
    </h2>

    <p className="mt-5 font-display text-sm tracking-[0.15em] text-[#796d62] sm:text-base">
      JANUARY 23, 2027 · 09:00 AM
    </p>

    <div className="my-10">
      <Countdown />
    </div>

    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-[#b0935c]" />
      <Heart size={14} className="text-[#b0935c]" />
      <span className="h-px w-8 bg-[#b0935c]" />
    </div>

    <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-[#92774d]">
      Until Yobel & Crissha say I do
    </p>
  </motion.div>
</section>

      
{/* WEDDING DETAILS SECTION */}
<section
  id="details"
  className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
>
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative mx-auto max-w-5xl"
  >
    {/* Section heading */}
    <div className="mb-14 text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-7 bg-[#b0935c]" />
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#92774d]">
          Save the Date
        </p>
        <span className="h-px w-7 bg-[#b0935c]" />
      </div>

      <h2 className="font-script text-5xl text-[#29221f] sm:text-7xl">
        Wedding Details
      </h2>

      <div className="mx-auto mt-6 h-px w-20 bg-[#b0935c]" />

      <p className="mx-auto mt-6 max-w-md font-display text-base leading-7 text-[#796d62]">
        Every little detail has been thoughtfully prepared.
        We look forward to celebrating this beautiful day with you.
      </p>
    </div>

    {/* Details cards */}
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <DetailCard
        icon={<CalendarDays size={25} strokeWidth={1.4} />}
        label="The Date"
        value="January 23, 2027"
        note="Saturday"
      />

      <DetailCard
        icon={<Clock size={25} strokeWidth={1.4} />}
        label="The Time"
        value="09:00 AM"
        note="Wedding Ceremony"
      />

      <DetailCard
        icon={<MapPin size={25} strokeWidth={1.4} />}
        label="The Venue"
        value="The Church in Quezon City, Meeting Hall 1"
        note="1608 Quezon Ave, Diliman, Quezon City, Metro Manila"
      />

      <DetailCard
        icon={<Heart size={25} strokeWidth={1.4} />}
        label="Dress Code"
        value="Black & White / Semi-Formal"
        note="Dress with elegance and comfort"
      />
    </div>

    {/* Venue action */}
    <div className="mt-10 flex flex-col items-center gap-4">
      <a
        href="https://www.google.com/maps/search/?api=1&query=Church+of+God+in+Quezon+City%2C+1608+Quezon+Ave%2C+Diliman%2C+Quezon+City%2C+Metro+Manila%2C+Philippines"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 bg-[#ae925b] px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition hover:bg-[#92774d]"
      >
        <Navigation size={15} />
        View Venue Location
      </a>

      <p className="text-center text-[11px] uppercase tracking-[0.15em] text-[#92774d]">
        We can't wait to see you
      </p>
    </div>
  </motion.div>
</section>

      
{/* DRESS CODE SECTION */}
<section id="dress-code" className="bg-[#faf8f3] px-5 py-20 sm:px-8 sm:py-24">
  <div className="mx-auto max-w-4xl">

    {/* Section Heading */}
    <div className="mb-12 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#a88b59]">
        What to Wear
      </p>

      <h2 className="font-script text-5xl text-[#29221f] sm:text-6xl">
        Dress Code
      </h2>

      <p className="mx-auto mt-4 max-w-xl font-display text-sm leading-7 text-[#796d62] sm:text-base">
        Ladies and gentlemen, get your outfits ready!
        Come dressed comfortably and confidently as we
        celebrate this special occasion together.
      </p>
    </div>

    {/* Attire Options */}
    <div className="grid gap-5 sm:grid-cols-2">

      <div className="border border-[#c3a875]/50 bg-white p-7 text-center">
        <div className="mb-4 text-2xl text-[#a88b59]">✧</div>

        <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-[#a88b59]">
          Option One
        </p>

        <h3 className="font-display text-xl text-[#29221f]">
          Black & White
        </h3>

        <p className="mt-3 font-display text-sm leading-6 text-[#796d62]">
          Training attire — Type A, Type B, or Type C.
          Any of these will do!
        </p>
      </div>

      <div className="border border-[#c3a875]/50 bg-white p-7 text-center">
        <div className="mb-4 text-2xl text-[#a88b59]">✧</div>

        <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-[#a88b59]">
          Option Two
        </p>

        <h3 className="font-display text-xl text-[#29221f]">
          Semi-Formal
        </h3>

        <p className="mt-3 font-display text-sm leading-6 text-[#796d62]">
          Choose an outfit that makes you feel
          comfortable, confident, and elegant.
        </p>
      </div>

    </div>

    {/* Reminder */}
    <div className="mt-10 border border-[#c3a875]/50 bg-[#f3efe7] px-6 py-8 sm:px-10">

      <div className="text-center">

        <h3 className="mt-2 font-script text-4xl text-[#29221f]">
          A Godly Reminder!
        </h3>

        <p className="mx-auto mt-3 max-w-lg font-display text-sm leading-7 text-[#796d62]">
          To keep the celebration looking neat and presentable,
          we kindly ask everyone to avoid wearing the following:
        </p>
      </div>

      {/* Items to Avoid */}
      <div className="mx-auto mt-7 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">

        {[
          "Full white dresses",
          "Short dresses",
          "T-shirts",
          "Shorts",
          "Slippers",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 border-b border-[#c3a875]/30 py-2"
          >
            <span className="text-sm text-[#a88b59]">✕</span>
            <span className="font-display text-sm text-[#655b51]">
              {item}
            </span>
          </div>
        ))}

      </div>

      <p className="mt-5 text-center font-display text-xs italic text-[#8c7b67]">
        Let's reserve the full white look for our beautiful bride!
      </p>
    </div>

    {/* Closing Message */}
    <div className="mt-10 text-center">
      <p className="mx-auto max-w-xl font-display text-sm leading-7 text-[#796d62] sm:text-base">
        We want everyone to look their best while keeping
        things natural and comfortable!
      </p>

      <p className="mt-4 font-display text-sm leading-7 text-[#796d62] sm:text-base">
        Thank you for your understanding and cooperation.
        Most importantly, bring your beautiful smiles and
        get ready to celebrate with us!
      </p>
    </div>
  </div>
</section>


      

{/* WEDDING PROGRAM SECTION */}
<section
  id="program"
  className="relative bg-[#faf8f3] px-4 py-16 sm:px-8 sm:py-24"
>
  <div className="mx-auto max-w-4xl border border-[#b0935c]/50 bg-white p-4 shadow-sm sm:p-7">
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mx-auto max-w-3xl border border-[#b0935c]/25 px-4 py-10 sm:px-8 sm:py-12"
  >
    {/* Heading */}
    <div className="mb-12 text-center sm:mb-16">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-[#b0935c]" />
        <p className="text-xs uppercase tracking-[0.3em] text-[#92774d]">
          A Day to Remember
        </p>
        <span className="h-px w-8 bg-[#b0935c]" />
      </div>

      <h2 className="font-script text-[clamp(3.2rem,9vw,5rem)] leading-tight text-[#29221f]">
        Wedding Program
      </h2>

      <div className="mx-auto mt-6 h-px w-20 bg-[#b0935c]" />

      <p className="mt-6 font-display text-sm font-medium uppercase tracking-[0.2em] text-[#92774d] sm:text-base">
        9:00 AM – 12:00 NN
      </p>

      <p className="mx-auto mt-5 max-w-lg font-display text-base leading-8 text-[#796d62] sm:text-lg">
        With grateful hearts, we gather to witness a beautiful
        union and celebrate a new beginning filled with faith,
        love, and God's blessings.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative mx-auto max-w-xl">

      {/* Vertical gold line */}
      <div className="absolute bottom-7 left-[15px] top-4 w-px bg-[#b0935c]/40" />

      {[
        {
          time: "9:00 AM",
          title: "Corporate Prayer",
        },
        {
          time: "9:10 AM",
          title: "Hymn Singing",
          detail: "NS 290",
        },
        {
          time: "9:25 AM",
          title: "Gospel Message",
          detail: "Bro. Enrico Pizarro",
        },
        {
          time: "9:55 AM",
          title: "Solemnization",
          detail: "Bro. Simon Tan",
        },
        {
          time: "10:15 AM",
          title: "Consecration of Newly Wed Couple",
        },
        {
          time: "10:17 AM",
          title: "Words of Blessing",
          detail: "Parents and Witnesses",
        },
        {
          time: "10:40 AM",
          title: "Hymn Singing",
          detail: "NS 862",
        },
        {
          time: "10:55 AM",
          title: "Corporate Prayer",
        },
        {
          time: "11:00 AM",
          title: "Words of Thanksgiving",
          detail: "Groom and Bride",
        },
        {
          time: "11:03 AM",
          title: "Picture Taking",
        },
        {
          time: "12:00 NN",
          title: "End / Mopping Up",
        },
      ].map((item, index, array) => (
        <div
          key={item.time}
          className="relative flex gap-5 sm:gap-6"
        >
          {/* Timeline marker */}
          <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#b0935c] bg-[#f5f1eb]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b0935c]" />
          </div>

          {/* Activity details */}
          <div
            className={`min-w-0 flex-1 ${
              index !== array.length - 1
                ? "border-b border-[#b0935c]/20 pb-6"
                : "pb-2"
            } mb-6`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a18450] sm:text-sm">
              {item.time}
            </p>

            <h3 className="mt-2 font-display text-xl leading-snug text-[#29221f] sm:text-2xl">
              {item.title}
            </h3>

            {item.detail && (
              <p className="mt-2 font-display text-base leading-relaxed text-[#88796b]">
                {item.detail}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Closing Message */}
    <div className="mt-10 border border-[#b0935c]/40 bg-[#f7f4ee] px-5 py-9 text-center sm:px-10 sm:py-11">
      <p className="text-xs uppercase tracking-[0.3em] text-[#92774d]">
        A Beautiful Beginning
      </p>

      <h3 className="mx-auto mt-4 max-w-md font-script text-[clamp(2.5rem,7vw,3.5rem)] leading-tight text-[#29221f]">
        Together in Faith & Love
      </h3>

      <p className="mx-auto mt-4 max-w-md font-display text-base leading-7 text-[#796d62] sm:text-lg sm:leading-8">
        Thank you for being part of this special day.
        Your presence and prayers make this celebration
        even more meaningful.
      </p>

      <div className="mx-auto mt-6 h-px w-12 bg-[#b0935c]" />
    </div>
  </motion.div>
  </div>
</section>
      
{/* WEDDING GIFTS SECTION */}
<section
  id="gifts"
  className="bg-[#f3efe7] px-5 py-20 sm:px-8 sm:py-24"
>
  <div className="mx-auto max-w-4xl">

    {/* Heading */}
    <div className="mb-10 text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#a88b59]">
        A Token of Love
      </p>

      <h2 className="font-script text-5xl text-[#29221f] sm:text-6xl">
        Wedding Gifts
      </h2>

      <div className="my-6 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-[#c3a875]" />
        <Heart size={14} className="text-[#a88b59]" />
        <span className="h-px w-12 bg-[#c3a875]" />
      </div>
    </div>

    {/* Gift Message */}
    <div className="mx-auto max-w-2xl space-y-5 text-center font-display text-sm leading-7 text-[#796d62] sm:text-base sm:leading-8">
      <p>
        Your presence on our special day is already a great
        honor and blessing to us. Having you there to witness
        and celebrate as we begin our journey together as one
        family with the Lord is something we will truly treasure.
      </p>

      <p>
        Your love, prayers, and heartfelt wishes mean more
        to us than words can express. If you wish to share
        something with us, please know that it will be
        received with grateful hearts and sincere appreciation.
      </p>
    </div>

    {/* Payment Options */}
    <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">

      {/* GOTYME */}
      <div className="border border-[#c3a875]/70 bg-[#faf8f3] p-5 shadow-sm sm:p-7">
        <div className="border border-[#c3a875]/30 p-4">

          <div className="mx-auto mt-5 max-w-[260px] bg-white p-2">
            <img
              src="/images/gotyme-qr.jpeg"
              alt="GoTyme Bank wedding gift QR code"
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#c3a875]" />
            <span className="text-[11px] tracking-[0.2em] text-[#a88b59]">
              GOTYME
            </span>
            <span className="h-px w-7 bg-[#c3a875]" />
          </div>
        </div>
      </div>

      {/* MARIBANK */}
      <div className="border border-[#c3a875]/70 bg-[#faf8f3] p-5 shadow-sm sm:p-7">
        <div className="border border-[#c3a875]/30 p-4">

          <div className="mx-auto mt-5 max-w-[260px] bg-white p-2">
            <img
              src="/images/maribank-qr.png"
              alt="MariBank wedding gift QR code"
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#c3a875]" />
            <span className="text-[11px] tracking-[0.2em] text-[#a88b59]">
              MARIBANK
            </span>
            <span className="h-px w-7 bg-[#c3a875]" />
          </div>
        </div>
      </div>

    </div>

    {/* Closing */}
    <div className="mt-10 text-center">
      <p className="font-display text-xs italic leading-6 text-[#928577]">
        Your presence is our greatest gift. Thank you for
        celebrating this special beginning with us.
      </p>

      <p className="mt-5 font-script text-3xl text-[#a88b59]">
        With grateful hearts,
      </p>

      <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[#796d62]">
        Y & C
      </p>
    </div>

  </div>
</section>

      
{/* MEMORIES SECTION */}
<section
  id="memories"
  className="bg-[#faf8f3] px-5 py-20 sm:px-8 sm:py-24"
>
  <div className="mx-auto max-w-3xl">

    {/* Heading */}
    <div className="text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#a88b59]">
        Every Moment Matters
      </p>

      <h2 className="font-script text-5xl text-[#29221f] sm:text-6xl">
        Our Memories
      </h2>

      <div className="my-6 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-[#c3a875]" />
        <Heart size={14} className="text-[#a88b59]" />
        <span className="h-px w-12 bg-[#c3a875]" />
      </div>
    </div>

    {/* Message */}
    <div className="mx-auto max-w-2xl space-y-4 text-center font-display text-sm leading-7 text-[#796d62] sm:text-base sm:leading-8">
      <p>
        Every photograph tells a story, and every little
        moment becomes a memory worth keeping.
      </p>

      <p>
        We want you to relive the beautiful moments of our special day! We've gathered the memories captured during our wedding and 
        would love for you to look back on them with us. Scan the QR code to access our collection of photos and videos.
      </p>
    </div>

    {/* QR Card */}
    <div className="mx-auto mt-12 max-w-sm border border-[#c3a875]/70 bg-white p-5 shadow-sm sm:p-8">
      <div className="border border-[#c3a875]/30 p-4 sm:p-5">

        <p className="mb-5 text-center text-[11px] uppercase tracking-[0.3em] text-[#a88b59]">
          VIEW OUR WEDDING MEMORIES
        </p>

        <div className="mx-auto w-full max-w-[280px] bg-white p-2">
          <img
            src="/images/memories-qr.jpeg"
            alt="Google Drive QR code for sharing wedding photos and videos"
            className="block h-auto w-full object-contain"
          />
        </div>

        <div className="my-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#c3a875]" />
          <span className="text-[11px] tracking-[0.2em] text-[#a88b59]">
            GOOGLE DRIVE
          </span>
          <span className="h-px w-8 bg-[#c3a875]" />
        </div>

        <p className="text-center font-display text-sm text-[#39332c]">
          Scan to View Photos & Videos
        </p>

        <p className="mt-2 text-center font-display text-xs leading-5 text-[#928577]">
          Every moment is a memory worth keeping. Thank you for being part of our beautiful beginning!
        </p>
      </div>

      <div className="mt-6 text-center">
        <p className="font-script text-3xl text-[#a88b59]">
          Thank You!
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[#796d62]">
          Y & C
        </p>
      </div>
    </div>

    {/* Closing */}
    <p className="mt-9 text-center font-display text-xs italic leading-6 text-[#928577]">
      Let's make memories that will last a lifetime.
    </p>

  </div>
</section>

      


{/* RESPONSIVE FOOTER */}
<footer className="w-full bg-[#28221f] px-4 py-10 text-center sm:px-6 sm:py-12 md:py-14 lg:py-16">
  <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
    <p className="text-[11px] uppercase tracking-[0.25em] text-[#b0935c] sm:text-xs sm:tracking-[0.35em] md:text-xs">
      With Love and Gratitude
    </p>

    <h2 className="mt-3 font-script text-[clamp(3.5rem,10vw,6rem)] leading-tight text-white">
      Y & C
    </h2>

    <div className="my-4 h-px w-14 bg-[#b0935c] sm:my-5 sm:w-20 md:my-6" />

    <p className="text-xs uppercase tracking-[0.2em] text-[#e7d9c2] sm:text-xs sm:tracking-[0.3em] md:text-sm">
      January 23, 2027
    </p>

    <p className="mt-7 max-w-full text-xs uppercase leading-6 tracking-[0.14em] text-[#bcae9d] sm:mt-8 sm:text-[11px] sm:tracking-[0.2em] md:mt-10 md:text-xs md:tracking-[0.25em]">
      Made with Love · Our Journey Begins Here
    </p>
  </div>
</footer>



{/* WELCOME ABOARD POP-UP */}
<AnimatePresence>
  {isWelcomeOpen && (
    <motion.div
      key="welcome-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171512]/75 px-4 py-4 backdrop-blur-md"
      onClick={() => setIsWelcomeOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.96 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-x-hidden overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border border-[#c3a875]/70 bg-[#faf8f3] px-6 pb-6 pt-5 text-center shadow-2xl sm:max-w-md sm:px-10 sm:pb-9 sm:pt-7"
      >
        {/* Decorative border */}
        <div className="pointer-events-none absolute inset-2 border border-[#c3a875]/30" />

        {/* Close button */}
        <div className="relative z-20 mb-2 flex justify-end">
          <button
            type="button"
            onClick={() => setIsWelcomeOpen(false)}
            aria-label="Close welcome message"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b69a68] bg-[#a88b59] text-xl leading-none text-white shadow-sm transition hover:bg-[#8e754c]"
          >
            ×
          </button>
        </div>

        {/* Top ornament */}
        <div className="relative mb-4 flex items-center justify-center gap-2">
          <span className="h-px w-7 bg-[#b69a68]" />
          <span className="text-[11px] tracking-[0.3em] text-[#a78b59]">
            YOU ARE INVITED
          </span>
          <span className="h-px w-7 bg-[#b69a68]" />
        </div>

        {/* Heading */}
        <h2
          id="welcome-title"
          className="relative mt-2 font-script text-4xl leading-tight text-[#25211d] sm:text-5xl"
        >
          Welcome Aboard!
        </h2>

        <p className="relative mt-2 font-display text-[11px] uppercase tracking-[0.22em] text-[#a28a60]">
          The Wedding of Yobel & Crissha
        </p>

        {/* Divider */}
        <div className="relative my-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#c3a875]/70" />
          <Heart size={13} strokeWidth={1.3} className="text-[#b69a68]" />
          <span className="h-px w-10 bg-[#c3a875]/70" />
        </div>

        {/* Message */}
        <div className="relative space-y-4 font-display text-sm leading-6 text-[#6f665c] sm:text-base sm:leading-7">
          <p>
            Thank you so much for accepting our invitation!
            We're truly excited and pleased to have you join us as we
            celebrate our special day.
          </p>

          <p>
            We've prepared some helpful information to guide
            you through the details of our celebration.
          </p>

          <p>
            We can't wait to share this beautiful moment
            with you and create wonderful memories together!
          </p>
        </div>

        {/* Signature */}
        <div className="relative mt-6">
          <p className="font-script text-3xl text-[#a88b59]">
            With love,
          </p>
          <p className="mt-1 font-display text-xs uppercase tracking-[0.22em] text-[#39332c]">
            Yobel & Crissha
          </p>
          <p className="mt-2 text-xs tracking-[0.25em] text-[#9b855e]">
            JANUARY 23, 2027
          </p>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => setIsWelcomeOpen(false)}
          className="relative mt-6 w-full border border-[#a88b59] bg-[#a88b59] px-5 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-[#8e754c]"
        >
          Explore Our Invitation →
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* REOPEN WELCOME NOTE BUTTON */}
<AnimatePresence>
  {!isWelcomeOpen && (
    <motion.button
      key="reopen-welcome"
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      type="button"
      onClick={() => setIsWelcomeOpen(true)}
      className="fixed bottom-5 right-5 z-[60] rounded-full border border-[#d6bd91]/50 bg-gradient-to-r from-[#faf8f3]/70 via-[#f5eee2]/65 to-[#d6bd91]/55 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-[#28221f] shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-[#d6bd91] hover:from-[#faf8f3]/85 hover:to-[#d6bd91]/75 hover:shadow-xl"
    >
      ♥ &nbsp; Welcome Note
    </motion.button>
  )}
</AnimatePresence>
</main>
);
}

function DetailCard({ icon, label, value, note }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative flex min-h-[210px] flex-col items-center justify-center border border-[#b0935c]/30 bg-white px-5 py-9 text-center shadow-[0_5px_20px_rgba(60,45,25,0.04)] transition-shadow hover:shadow-[0_12px_30px_rgba(60,45,25,0.09)]"
    >
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#b0935c] transition-all duration-300 group-hover:w-full" />

      <div className="mb-5 text-[#ae925b]">
        {icon}
      </div>

      <p className="text-[11px] uppercase tracking-[0.25em] text-[#92774d]">
        {label}
      </p>

      <h3 className="mt-3 font-display text-xl text-[#29221f]">
        {value}
      </h3>

      <p className="mt-2 font-display text-sm italic text-[#88796b]">
        {note}
      </p>

      <div className="mt-5 h-px w-8 bg-[#b0935c]/60" />
    </motion.div>
  );
}

export default App;