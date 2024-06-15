import React from "react";

export async function FetchDataTable(indexStepTable, cb) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants?page=${indexStepTable}&limit=10`,
      {
        method: "GET",
      }
    );
    const datas = await response.json();
    cb(datas.data);
  } catch (error) {
    cb(error);
    return new Error(error);
  }
}
