"use client";

export default function Header_edit_plant({ pages }) {
  const data = [
    "Plant Information",
    "Reminder Settings",
    "Planting Instructions",
    "Plant Caring Tips",
    "FAQ",
    "Finishing",
  ];

  return (
    <div className="flex items-center flex-wrap max-lg:justify-center">
      {data.map((e, i) => (
        <div
          key={i}
          className="flex w-[166px] xl:basis-1/6 xl:w-full flex-col items-center relative  "
        >
          <div className="w-full flex items-center justify-center">
            <div
              className={`w-[67px] xl:w-[45%] h-px ${
                i > 0
                  ? pages - 1 >= i
                    ? "bg-emerald-500"
                    : "bg-gray-100"
                  : "bg-transparent"
              }`}
            ></div>
            <div
              className={`${
                pages - 1 >= i
                  ? "bg-[#10B981] text-white"
                  : "bg-gray-100 text-neutral-500"
              } rounded-full w-[32px] h-[32px] z-10 bg-[#10B981] flex items-center justify-center`}
            >
              <p>{i + 1}</p>
            </div>
            <div
              className={`w-[67px] xl:w-[45%] h-px ${
                i === data.length - 1
                  ? "bg-transparent"
                  : pages - 1 >= i
                  ? "bg-emerald-500"
                  : "bg-gray-100"
              }`}
            ></div>
          </div>
          <p
            className={`${
              pages - 1 >= i ? "text-[#10B981]" : "text-neutral-500"
            } mt-2`}
          >
            {e}
          </p>
          {/* {i < data.length && (
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
          )} */}
        </div>
      ))}
    </div>
  );
}
