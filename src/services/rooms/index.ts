export const getRooms = async () => {
  const res = await fetch(`${process.env.NEXT_API_ENDPOINT}/rooms`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
