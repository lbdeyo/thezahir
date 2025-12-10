import { Metadata } from "next";
import Image from "next/image";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Team | THE ZAHIR",
};

export default function Team() {
  return (
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
      {/* Vertical border lines - extend full height of page including footer */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{ zIndex: 100 }}
      >
        <div className="max-w-5xl mx-auto h-full relative">
          <div
            className="absolute top-0 left-4 sm:left-8"
            style={{
              width: "1px",
              height: "100vh",
              backgroundColor: "#ada173",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
              willChange: "transform",
              imageRendering: "crisp-edges",
            }}
          ></div>
          <div
            className="absolute top-0 right-4 sm:right-8"
            style={{
              width: "1px",
              height: "100vh",
              backgroundColor: "#ada173",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
              willChange: "transform",
              imageRendering: "crisp-edges",
            }}
          ></div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col min-h-screen">
        <Navigation />

        {/* Main Content */}
        <main className="w-full px-4 sm:px-8 pt-0 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-2 pt-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              The Team
            </h1>
            <p className="text-2xl text-black mb-6 font-medium font-['Baskerville']">
              The Zahir is a small company with an ambitious mission, guided by
              artists and collaborators who believe deeply in the power of live
              storytelling. Our team brings together creative, organizational,
              and practical experience shaped by years of work in Austin’s arts
              community.
            </p>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 mt-8 font-['Baskerville']">
                Board of Directors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                {/* Member 1 */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/lb-pipe-cropped.jpg"
                    alt="L.B. Deyo"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    L.B. Deyo
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Artistic Director & President
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    The Zahir founder L.B. Deyo is a playwright whose play{" "}
                    <i>Apprehension</i> premiered at Hyde Park Theatre in 2025.
                    He is the author of several books, including, with David
                    &quot;Lefty&quot; Leibowitz,{" "}
                    <i>
                      Invisible Frontier: Exploring the tunnels, ruins &
                      rooftops of hidden New York
                    </i>{" "}
                    . He&apos;s acted in such Austin plays as{" "}
                    <i>The Intergalactic Nemesis</i> and{" "}
                    <i>Dance, Cupcake, Dance.</i>
                  </p>
                </div>

                {/* Member 2 */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/noah-beach-headshot.jpg"
                    alt="Noah Masterson"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Noah Masterson
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Treasurer
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Noah Masterson is a playwright, musician, juggler, and
                    general creative rabble rouser. He was part of New York
                    City&apos;s Inverse Theater Company in the late 90s and
                    early aughts. His most recent play is <i>THE EGG</i>, a
                    surrealist dark comedy about technology gone very, very
                    wrong. Noah holds a degree in screenwriting from the
                    University of Miami.
                  </p>
                </div>

                {/* Member 3 */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/chad-portrait.jpg"
                    alt="Chad Nichols"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Chad Nichols
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Secretary
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Chad Nichols is a writer and musician living in Austin,
                    Texas. In 2013, he received an MFA in Writing from the
                    Michener Center for Writers at the University of Texas at
                    Austin. He co-wrote the wildly popular{" "}
                    <i>Intergalactic Nemesis</i> series, which has played
                    off-Broadway and at the Kennedy Center and has been featured
                    on TBS&apos;s <i>Conan</i>. Chad has worked with Rob Thomas
                    (<i>Veronica Mars</i>, <i>Zombie</i>) and Scott Shepherd (
                    <i>Haven</i>) on projects in development. Chad&apos;s
                    professional screenwriting credits include scripts for the
                    horror-comedy <i>Precinct Five</i> (Kit Chemistry
                    Productions) and the R-rated comedy <i>Boomerang Moon</i>.
                    He performs as a solo act under the name Chad Davidson
                    Nichols and with the trash-rock combo Cheap Fix.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4 mt-8 font-['Baskerville']">
                The Company
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                {/* Member 3 */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/jessica-cohen-portrait.jpg"
                    alt="Jessica Brynn Cohen"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Jessica Brynn Cohen
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Jessica Brynn Cohen is an actor, writer, musician,
                    filmmaker, and all-around storyteller and performer. She has
                    appeared in many theatrical productions in Austin and
                    beyond, having performed on stages such as The Vortex, City
                    Theatre Austin, and Hyde Park Theatre. She holds a B. Iden
                    Payne for &quot;Outstanding Featured Musical
                    Performance&quot; for her work in the 2021 Vortex Summer
                    Youth Theatre. Alongside her theatrical work, she has worked
                    on several films both in front of and behind the camera,
                    including acting in Richard Linklater&apos;s Netflix
                    original <i>Apollo 10½</i>, which was featured at SXSW 2022.
                    She is an avid singer/songwriter and has released{" "}
                    <a
                      href="https://open.spotify.com/artist/7tIVqUPKlYQxlFXS4ka21x"
                      className="font-bold hover:underline transition-all text-[#490f0f]"
                    >
                      several singles on Spotify
                    </a>
                    , with plans to release more music in the near future, and
                    several other creative projects currently in the works. You
                    can connect with her on Instagram{" "}
                    <a
                      href="https://www.instagram.com/jessa.cohen/"
                      className="font-bold hover:underline transition-all text-[#490f0f]"
                    >
                      @jessa.cohen
                    </a>
                    .
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/lauraderamo-headshot.jpg"
                    alt="Laura D'Eramo"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Laura D&apos;Eramo
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Laura D&apos;Eramo is an Austin-based theatre and on-camera
                    actor whose work spans classical, contemporary, and
                    experimental performance. She received her B.A. from St.
                    Edward&apos;s University and continued her training at the
                    Atlantic Acting School in NYC. After graduation, Laura moved
                    to Japan, teaching English for two years and performing with
                    the Tokyo International Players, an experience that
                    broadened her artistic and global perspective. Since
                    returning to Austin in 2024, she has worked with Austin
                    Shakespeare, Walking Shadow Shakespeare Project, The
                    Filigree Theatre, The Stage Austin, and The Vortex. Recent
                    credits include <i>MotherTree</i> at The Vortex and{" "}
                    <i>Caesar+Antony+Cleopatra</i> with Walking Shadow
                    Shakespeare. She will next appear in The Stage Austin&apos;s{" "}
                    <i>Titus Andronicus</i>.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/hope-irish.jpg"
                    alt="Hope Irish"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Hope Irish
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Hope Irish Buchanan is an Austin musician and songwriter who
                    studied acting and costume design at St. Edward&rsquo;s
                    University. She is originally from Salado, Texas, and was
                    born second of three to a Southern Californian and a
                    Northern Irish immigrant. Hope Irish has released a full
                    body of musical work and a small human. Personal Albums
                    include <i>HopeIsh</i> (denton house productions by Jimmy
                    Wildcat and Orville), <i>The Best of The Least</i> (Superpop
                    Records), <i>Rejects</i> and <i>The Real thing</i>,{" "}
                    <i>Pleasure Maps</i> (Cody Coppin/ Matt Howard/ Seth Gibbs
                    w/Shine and Sweetheart Studios), <i>Laddie</i>,{" "}
                    <i>The Bubble</i> single sessions (Chris Frenchie Smith and
                    Messina), <i>Hand To Mouth</i>, and most recently,{" "}
                    <i>Do No Harm</i>, recorded at Studios at Fischer with Jon
                    Clover Brown and mixed by the infamous Jimmy Wildcat at
                    Sweetheart Studios. Hope Irish is currently recording
                    another full length concept album, to be released in 2026.
                    HI most recently performed in Brently Heilbron&rsquo;s
                    theatrical production of <i>FUGA</i> at a sold out Stateside
                    Theatre run in Austin, is a member of the classic annual
                    Austin production of <i>HONKYTONK HOLIDAZE</i>, and has
                    historically smashed commercial spots for <i>THE CHIVE</i>.
                    HI has contributed vox/synths/keys to nationally and
                    internationally touring acts with bands including Radar
                    Radar, A Sky Jet Black, Til&rsquo; We&rsquo;re Blue or
                    Destroy, Maxx Cherry, Peckinpah, Brother Machine, Rooster,
                    and has contributed vocals and keys to countless studio
                    sessions including Superpop Records with Seth Gibbs (Brother
                    Machine and The Reputations), Featured vox on{" "}
                    <i>Razed By Rebels</i> (Blue Rock Studios) as well as BGVs
                    on <i>Clear Heart Full Eyes</i>, by Craig Finn (of the hold
                    steady) produced by the legendary Mike McCarthy (Spoon, And
                    You Will Know Us By The Trail Of Dead.) H.I. performs
                    regularly, enjoys many mediums, and is a citizen of the
                    world.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/michelle-keffer.jpg"
                    alt="Michelle Keffer"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Michelle Keffer
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Michelle is an actor, emcee, producer and writer with over
                    30 years of on-stage experience. Alongside various on-camera
                    and voice-over roles, she has worked with Hyde Park Theatre,
                    Paper Chairs, Breaking String and Fusebox Festival, among
                    others. She was a producer, writer and actor in the
                    variety/sketch comedy show in <i>Industry Night</i>, and is
                    currently the emcee and co-producer of{" "}
                    <i>Natalie George Productions Cabaret</i>.
                  </p>
                </div>
                {/* Member 2 */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/danu-portrait.jpg"
                    alt="Danu Mara"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Danu Mara
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Danu Mara is a voice-over and on-camera actor with over 20
                    years of experience in commercials, animation, film, video
                    games, and eLearning. She voiced hundreds of characters for
                    educational software used nationwide and performed
                    internationally in <i>The Intergalactic Nemesis</i>,
                    portraying a wide range of humans, robots, and aliens. Her
                    credits include roles in <i>Flatland: The Movie</i>{" "}
                    (alongside Martin Sheen and Kristen Bell) and Rooster
                    Teeth&apos;s <i>Lazer Team 2</i> and <i>Nomad of Nowhere</i>
                    . A Daytime Emmy nominee with a B.A. in Drama from Texas
                    Woman&apos;s University, Danu has also trained at The Second
                    City in Chicago and is a core member of the acclaimed sketch
                    troupe The Latino Comedy Project.
                  </p>
                </div>
                {/* Member 1 */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/shannon-mccormick.jpg"
                    alt="Shannon McCormick"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{
                      objectPosition: "center 55%",
                    }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Shannon McCormick
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Shannon is a thirty-year veteran of stage and screen, as
                    well as a writer and director. He has appeared in films and
                    TV shows such as <i>Breaking Bad</i>, <i>Les Misérables</i>,{" "}
                    <i>Day 5</i>, <i>Red vs. Blue</i>, <i>RWBY</i>, and{" "}
                    <i>Camp Camp</i>. He remains active in the local in the
                    Austin improv community, with troupes Get Up and Just Be
                    Sweet as well as many limited run improv productions.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/mills.jpeg"
                    alt="Jeff Mills"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{
                      objectPosition: "center 55%",
                    }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Jeff Mills
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Jeff Mills is an award winning theater artist who has
                    rambled across the Austin theatre scene for the last 25
                    years. He has worked with the Rude Mechs, SVT, Physical
                    Plant, Fusebox, Zach Theater,, Refraction Arts, the Siti
                    Company and many more. Out of St Edwards he cut his teeth in
                    the improv/sketch scene as a founding member of Fatbuckle &
                    Think Tank, moved to NYC to work with the Muppets, and then
                    returned to Austin as a producer, director, actor and sound
                    designer. Notable credits include <i>The Assumption</i>,{" "}
                    <i>Fixing King John</i>, <i>Roe</i>,{" "}
                    <i>Everything is Established</i>, <i>Three</i>,
                    <i>Spacestation1985</i>, <i>Fixing Troilus and Cressida</i>,
                    and <i>Hotel Vanya.</i> In 2018, Jeff received the
                    distinguished John Bustin Award for Conspicuous Versatility
                    from the Austin Critics Table.
                  </p>
                </div>

                {/* Member 4 */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/david-ritch.jpg"
                    alt="David Ritch"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    David Ritch
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Director, Playwright, Designer
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    David Ritch received his BFA in Theatre in 2022 from Texas
                    State University, where he directed Ionesco&apos;s{" "}
                    <i>The Bald Soprano</i>. Recently, he directed in{" "}
                    <i>The Yolk</i> by Noah Masterson, a condensed version of{" "}
                    <i>The Egg</i>, for Frontera Fest. He also had his
                    ten-minute play <i>The Willow Tree</i> produced and
                    published by Script Works in their annual Out of Ink
                    showcase. He looks forward to pushing the boundaries of
                    Theatre and connecting people through that shared
                    experience.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/justin-smith.jpg"
                    alt="Justin Smith"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Justin Smith
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Justin Smith is an actor and musician who&apos;s been a
                    member of Austin&apos;s creative community for 15(ish)
                    years. Justin moved to Austin from Memphis and since has
                    been featured on various Austin records over his tenure as a
                    bass player, songwriter and singer. As an actor
                    Justin&apos;s recent stage credits include Austin
                    Shakespeare&apos;s <i>Jane Eyre</i>, Jarrot
                    Productions&apos; <i>Dial M for Murder</i> and Ground Floor
                    Theatre&apos;s Texas premier of <i>Amy and The Orphans</i>.
                    He will next appear back at Ground Floor Theatre for their
                    10th Anniversary production of <i>Parade</i>.
                  </p>
                </div>
                {/* Member 4 */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/werzner.jpg"
                    alt="Brent Werzner"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Brent Werzner
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Brent Werzner is an actor who has worked and performed
                    professionally with major motion picture, television, and
                    interactive media studios, including A24, Netflix, NBC, CBS,
                    Universal and Rockstar Games. Brent is an alumni of Saint
                    Edward&apos;s University, in Austin, TX, and is a
                    long-standing member of the Screen Actors Guild (SAG). He is
                    known for his roles in critically acclaimed films{" "}
                    <i>Green Room</i> (2015) and <i>Blue Ruin</i> (2013), as
                    well as in CBS&apos; <i>Blue Bloods</i>, and Netflix&apos;s
                    episodic comedy, <i>On My Block</i>. Theatrically, he has
                    worked with the renowned SITI Company and director Anne
                    Bogart, debuting the role of Poseidon in the{" "}
                    <i>Trojan Women</i> (After Euripides) at the Getty Villa in
                    Los Angeles and the Harvey Theatre in New York City. Brent
                    also performed the title role in Euripides&apos;{" "}
                    <i>Herakles</i>; touring internationally through Greece, and
                    at BAM&apos;s Fisher Stage in Brooklyn, NY. Brent also works
                    as an employment and civil rights paralegal for Kaplan Law
                    Firm in Austin. Brent wishes to express his deepest
                    gratitude to Elizabeth, his wife and partner, for her love
                    and support.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/img/company/RachelWestHeadshot.jpg"
                    alt="Brent Werzner"
                    width={144}
                    height={144}
                    className="w-36 h-36 object-cover rounded-full mb-4 border-4 border-black shadow-md"
                    style={{ background: "#ddd" }}
                  />
                  <h3 className="text-2xl font-bold text-black mb-1 font-['Baskerville']">
                    Rachel West
                  </h3>
                  <p className="text-xl text-black mb-2 font-medium font-['Baskerville']">
                    Actor
                  </p>
                  <p
                    className="text-[1.375rem] text-left text-black font-['Baskerville']"
                    style={{ textWrap: "pretty" }}
                  >
                    Rachel West is a Chicago-born creative that now resides in
                    Austin. By day, she&apos;s a Senior Writer at a marketing
                    agency, crafting campaigns for major brands. By night,
                    she&apos;s an actor and content creator who returned to
                    performing in the summer of 2025, driven by a soul-deep need
                    to reconnect with the art form that first captured her
                    heart. Rachel&apos;s performance background spans public
                    speaking, including two TEDx presentations, along with a
                    foundation in classical vocal training across opera, musical
                    theatre, and contemporary styles. Since relocating to
                    Austin, she has appeared with Walking Shadow Shakespeare
                    Project as in <i>Cleopatra in Caesar+Antony+Cleopatra</i>.
                    With over 60,000 followers across social platforms, Rachel
                    shares her creative journey and the courage it takes to
                    return to what you love. You can connect with her on
                    Instagram at{" "}
                    <a
                      href="https://www.instagram.com/diaryofaluckygirl/"
                      className="font-bold hover:underline transition-all text-[#490f0f]"
                    >
                      @diaryofaluckygirl
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
