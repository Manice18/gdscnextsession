import Image from "next/image";
import Link from "next/link";
import Navigator from "./site-navigator";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
          alt="logo"
          className="h-[35px] w-[35px]"
          width="50"
          height="50"
        />
      </Link>
      <Navigator />
    </header>
  );
}
