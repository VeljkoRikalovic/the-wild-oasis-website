import Image from "next/image";
import Link from "next/link";
import image from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={image}
        fill
        placeholder="blur"
        quality={90}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="sm:text-8xl text-5xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 sm:px-8 sm:py-6 p-4 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
