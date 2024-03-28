import { createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "../../services/api/cartService";
import type { CartType } from "../../../types/cart";

export const getAllCartThunk = createAsyncThunk<CartType[]>(
    'cart/getAllCatsThunk',
    () => cartService.getAllCartItem()
)

export const deleteCartItemThunk = createAsyncThunk<CartType['productId'], CartType['productId']>(
    'cart/deleteCartItemThunk',
    (id) => cartService.deleteCartItem(id).then(() => id)
)

export const addCartItemThunk = createAsyncThunk<CartType, CartType['productId']>(
    'cart/addCartItemThunk',
    async (productId) => cartService.addNewCartItem(productId)
)