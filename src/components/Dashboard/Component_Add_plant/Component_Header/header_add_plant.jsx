export default function Header_add_plant({ pages }) {
  const data = [
    "Plant Information",
    "Reminder Settings",
    "Planting Instructions",
    "Plan Caring Tips",
    "FAQ",
    "Finishing",
  ];

  return (
    <div className="flex items-center">
      {data.map((e, i) => (
        <div key={i} className="flex flex-col items-center relative  w-full">
          <div
            className={`${
              pages - 1 >= i
                ? "bg-[#10B981] text-white"
                : "bg-gray-100 text-neutral-500"
            } rounded-full w-[32px] h-[32px] z-10 bg-[#10B981] flex items-center justify-center`}
          >
            <p>{i + 1}</p>
          </div>
          <p
            className={`${
              pages - 1 >= i ? "text-[#10B981]" : "text-neutral-500"
            } mt-2`}
          >
            {e}
          </p>
          {i < data.length && (
            <div
              className={`${
                i == 0
                  ? "left-[50%]"
                  : i == data.length - 1
                  ? "right-[50%] w-1/2"
                  : ""
              } z-0 absolute top-[25%]  transform -translate-y-[50%] w-full h-px ${
                pages - 1 >= i
                  ? "bg-[#10B981] text-white"
                  : "bg-gray-100 text-neutral-500"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
