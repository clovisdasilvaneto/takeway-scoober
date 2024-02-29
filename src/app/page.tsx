"use client";
import {
  decrement,
  increment,
  selectApi,
} from "@/containers/SinglePlayer/slice";
import { Button } from "@mui/material";
import { useDispatch, useSelector, useStore } from "react-redux";

export default function ProductName() {
  // Initialize the store with the product information
  const store = useStore();
  const count = useSelector(selectApi);
  const dispatch = useDispatch();

  return (
    <>
      <Button onClick={() => dispatch(increment())}>increment</Button>
      <Button onClick={() => dispatch(decrement())}>decrement</Button>

      {count.value}
    </>
  );
}
