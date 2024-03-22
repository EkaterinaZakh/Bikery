import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../../services/api/categoryService";
import type { CategoryType } from "../../../types/cats";

const getAllCatsThunk = createAsyncThunk<CategoryType[]>(
    'fest/getAllCatsThunk',
    () => categoryService.getAllCategories()
)

export default getAllCatsThunk;
