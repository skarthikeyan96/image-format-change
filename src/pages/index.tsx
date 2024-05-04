import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Image
        alt="data"
        src="https://glowing-semolina-3779ba.netlify.app/.netlify/images?url=https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=cover&w=150&h=150&fm=png"
        width={500}
        height={500}
      />

      <br />
      <Image
        src="https://glowing-semolina-3779ba.netlify.app/.netlify/images?url=/images/luffy.png"
        alt="onepiece"
        width={500}
        height={500}
      />
    </main>
  );
}
