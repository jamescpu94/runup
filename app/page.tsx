import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=" bg-slate-100 w-full p-5 top-0  ">
        <h2 className=" text-center text-gray-500">Title</h2>
      </div>
      <div className="p-5 scroll-auto w-full">
        <div className="w-full border rounded-2xl border-slate-400 min-h-72 my-5">
          <h1>Signs</h1>
        </div>
        <div className="w-full border rounded-2xl border-slate-400 min-h-72"></div>
        <div className="w-full border rounded-2xl border-slate-400 min-h-72"></div>
        <div className="w-full border rounded-2xl border-slate-400 min-h-72"></div>
      </div>
    </main>
  );
}
