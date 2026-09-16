import Header from "@/components/Header";

const names = [
  { name: "Nadim Bart-Williams", accent: true },
  { name: "Cemone Collins", accent: false },
  { name: "Quinnyne Henry-Fender", accent: true },
  { name: "Dashe Illuyemi", accent: false },
  { name: "Lydia Johnson", accent: true },
  { name: "David Kasali", accent: false },
  { name: "Mohsin Malik", accent: true },
  { name: "Caleb Mapoma", accent: false },
  { name: "Naomi Mapoma", accent: true },
  { name: "Jesse Ngizwenayo", accent: false },
  { name: "Leanne Oyeyemi", accent: true },
  { name: "Jamie Shepherd", accent: false },
  { name: "Kanon Tsuda", accent: true },
  { name: "Chinazam Ukata", accent: false },
  { name: "Monique Uwiragiye", accent: true },
];

export default function ThanksPage() {
  return (
    <div className="min-h-dvh flex flex-col relative">
      <Header />

      {/* Content */}
      <main id="main-content" className="page-content">
        <h1>Special thanks.</h1>
        <p className="page-intro">
          To my great design consultants who helped me make stylistic choices
          throughout the process (4 years later lol) 💛
        </p>
        <ul className="thanks-list">
          {names.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
