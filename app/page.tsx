import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        backgroundImage: "url('/img/blackhole-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-5xl mx-auto" style={{ backgroundColor: "#c5eae8" }}>
        <Navigation />

        {/* Main Content */}
        <main className="w-full px-8 pt-4 pb-12">
          <div className="px-12 pt-0 pb-16">
            <h1 className="text-5xl font-bold text-black mb-2">
              A dramatic arts company
            </h1>
            <p className="text-xl text-black mb-8">
              Promoting conversation in a disconnected age
            </p>
            <div className="float-right ml-8 mb-6 w-96 rounded overflow-hidden border-4 border-black">
              <Image
                src="/img/crazy-apprehension.jpg"
                alt="Crazy Apprehension"
                width={384}
                height={384}
                className="w-full h-auto"
              />
            </div>
            <p className="text-black mb-6">
              The Zahir creates original theater, film, and storytelling
              projects that bring people together for meaningful conversation.
            </p>
            <p className="text-black mb-6">
              At a time defined by noise, loneliness, and misinformation, our
              work invites audiences to pause, reflect, and speak with one
              another.
            </p>
            <h2 className="text-2xl font-bold text-black ">Our work</h2>
            <p className="text-black mb-6">
              We make theater and media that challenges, provokes, and opens
              space for conversation. We focus on new stories told through
              theater, film, and other dramatic arts, with an emphasis on
              connection in an increasingly disconnected world.
            </p>
            <p className="text-black mb-6">
              As a newly founded company, we are actively developing our
              inaugural projects and collaborations. Upcoming announcements will
              appear here. Learn more.
            </p>
            <h2 className="text-2xl font-bold text-black ">About The Zahir</h2>
            <p className="text-black mb-6">
              In Jorge Luis Borges’s short story of the same name, the Zahir is
              an object that consumes the mind. The more one contemplates it,
              the smaller one’s world becomes, until the universe has contracted
              to the size of a small coin. The Zahir is fascinating, dazzling,
              and a curse.
            </p>{" "}
            <p className="text-black mb-6">
              We chose the name because each of us confronts a modern Zahir:
              screens, feeds, and devices that capture attention but diminish
              connection. Through theater and storytelling, we strive to break
              the curse through work that brings people back into the world,
              toward each other, toward conversation. Read more.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
