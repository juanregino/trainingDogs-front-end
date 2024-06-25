import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-12 grid-rows-12 h-screen ">
      <aside className="col-span-3 row-span-12 relative border-r bg-[#4f46e5] text-white ">
        <h1 className="pl-2 py-5">Dogs Training</h1>

        <div className="flex flex-col mt-8 px-3">
          <Link
            href="/public/articles"
            className="p-2 my-3 cursor-pointer hover:bg-[#4338ca] rounded-md text-[#c7d2fe]"
          >
            Artículos
          </Link>
          <Link
            href="/public/videos"
            className="p-2 my-3  cursor-pointer hover:bg-[#4338ca] rounded-md text-[#c7d2fe]"
          >
            Videos
          </Link>
          <Link href="/public/guides" className="p-2 my-3  cursor-pointer hover:bg-[#4338ca] rounded-md text-[#c7d2fe]">
            Guías
          </Link>
          <Link href="/public/guides" className="p-2 my-3  cursor-pointer hover:bg-[#4338ca] rounded-md text-[#c7d2fe]">
            Entrenadores
          </Link>
          <Link href="/public/guides" className="p-2 my-3  cursor-pointer hover:bg-[#4338ca] rounded-md text-[#c7d2fe]">
            Perros
          </Link>
          <Link href="/public/guides" className="p-2 my-3  cursor-pointer hover:bg-[#4338ca] rounded-md text-[#c7d2fe]">
            Entrenamientos
          </Link>
        </div>
        <div className="absolute bottom-0 font-bold w-full p-2 hover:bg-[#4338ca">
          Diego Regino
        </div>
      </aside>
      {/* <nav className="col-span-9 row-span-1 border-b flex items-center justify-end px-2">
        <div className="">
          <p>Diego Regino</p>
        </div>
      </nav> */}
      <section className="col-span-9 row-span-11 overflow-y-auto p-4">
        {children}
      </section>
    </main>
  );
}
