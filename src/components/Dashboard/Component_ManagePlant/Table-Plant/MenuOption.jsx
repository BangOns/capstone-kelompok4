import IconsEdit from "@/utils/Component-Icons-Table/IconsEdit";
import IconsView from "@/utils/Component-Icons-Table/IconsView";

import React, { useState } from "react";
import { motion } from "framer-motion";
import IconsDelete from "@/utils/Component-Icons-Table/IconsDelete";
import { useDispatch } from "react-redux";
import { FuncDeletePlant } from "../../../../libs/redux/Slice/DashboardSlice";
import { useRouter } from "next/navigation";

export default function MenuOption({ active, id }) {
  const [viewMenu, viewMenuSet] = useState(false);
  const [editMenu, editMenuSet] = useState(false);
  const [deleteMenu, deleteMenuSet] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          scale: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      animate={active ? "visible" : "hidden"}
      transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
      className="absolute -left-20 w-[97px] flex flex-col gap-1"
    >
      <button
        className={`w-full ${
          viewMenu ? "bg-emerald-500 text-white" : "bg-white text-black"
        } text-base font-nunito-bold rounded-[5px] flex gap-2 p-2`}
        onMouseMove={() => viewMenuSet(true)}
        onMouseLeave={() => viewMenuSet(false)}
        onClick={() => router.push(`manage-plant/view-plant/${id}`)}
      >
        <IconsView active={viewMenu} />
        View
      </button>
      <button
        className={`w-full ${
          editMenu ? "bg-emerald-500 text-white" : "bg-white text-black"
        } text-base font-nunito-bold rounded-[5px] flex gap-2 p-2`}
        onMouseMove={() => editMenuSet(true)}
        onMouseLeave={() => editMenuSet(false)}
        onClick={() => router.push(`manage-plant/edit-plant/${id}`)}
      >
        <IconsEdit active={editMenu} />
        Edit
      </button>
      <button
        className={`w-full ${
          deleteMenu ? "bg-red-500 text-white" : "bg-white text-red-500"
        } text-base font-nunito-bold rounded-[5px] flex gap-2 p-2`}
        onMouseMove={() => deleteMenuSet(true)}
        onMouseLeave={() => deleteMenuSet(false)}
        onClick={() => dispatch(FuncDeletePlant({ popUp: true, id }))}
      >
        <IconsDelete active={deleteMenu} />
        Delete
      </button>
    </motion.div>
  );
}
