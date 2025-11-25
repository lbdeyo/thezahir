import Image from "next/image";

export default function Navigation() {
  return (
    <header className="w-full px-8 py-6">
      <div className="px-12">
        <div className="flex items-center gap-8">
          <Image
            className="brightness-0"
            src="/img/zahir-logo.svg"
            alt="The Zahir logo"
            width={130}
            height={30}
            priority
          />
          <nav className="flex gap-8 text-black">
            <a href="#" className="hover:underline">
              our work
            </a>
            <a href="#" className="hover:underline">
              about
            </a>
            <a href="#" className="hover:underline">
              support
            </a>
            <a href="#" className="hover:underline">
              contact
            </a>
            <a href="#" className="hover:underline">
              team
            </a>
            <a href="#" className="hover:underline">
              donate
            </a>
          </nav>
        </div>
        <div className="border-t border-black mt-4"></div>
      </div>
    </header>
  );
}
