import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4" style={{backgroundImage: "url(/home/seokku/Downloads/Sans_sprite.png)"}} />
      <p className="text-2xl text-center">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
