export async function GetDataPlantsByName(name, indexStepTable, cb) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/plants/search?page=${indexStepTable}&limit=10&name=${name}`,
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
