export default function Component_Additional_Planting_Tips({ dataPlants }) {
  const additionalPlantTips = dataPlants?.additional_tips || "";

  return (
    <section className="mt-6 text-black">
      <header className="w-full flex justify-between py-[12.5px]">
        <h1 className="font-nunito-bold text-xl">Additional Planting Tips</h1>
      </header>
      <article className="w-full border border-gray-200 rounded-[10px] p-4">
        {additionalPlantTips !== "" ? (
          <div
            className="prose text-black"
            dangerouslySetInnerHTML={{ __html: additionalPlantTips }}
          />
        ) : (
          <div className="w-full ">
            <p className="font-nunito-bold text  text-3xl">No Tips</p>
          </div>
        )}
      </article>
    </section>
  );
}
