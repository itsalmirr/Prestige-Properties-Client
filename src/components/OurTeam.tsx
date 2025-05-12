import Image from "next/image";

const team = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

const OurTeam = () => {
  return (
    <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
      {team.map((person) => (
        <li key={person.name}>
          <Image
            width={96}
            height={96}
            alt=""
            src={person.imageUrl}
            className="mx-auto size-24 rounded-full"
          />
          <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-foreground">
            {person.name}
          </h3>
          <p className="text-sm/6 text-accent">{person.role}</p>
        </li>
      ))}
    </ul>
  );
};

export default OurTeam;
