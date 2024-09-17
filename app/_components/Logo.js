import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col sm:flex-row items-center gap-4 z-10"
    >
      <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" />
      <span className="sm:text-xl text-sm font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
