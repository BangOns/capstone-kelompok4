import AddPlant from "@/components/Dashboard/Addplant";

export default function page() {
  return (
    <section className="w-full pt-2">
      <header className="">
        <h1 className="text-[28px] font-nunito-bold pb-6">Add Plant</h1>
      </header>
      <article className="w-full ">
        <AddPlant />
      </article>
    </section>
  );
}
