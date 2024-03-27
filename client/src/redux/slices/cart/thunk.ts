import { createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "../../services/api/cartService";
import type { CartType } from "../../../types/cart";

const getAllCartThunk = createAsyncThunk<CartType[]>(
    'fest/getAllCatsThunk',
    () => cartService.getAllCartItem()
)

export default getAllCartThunk;
