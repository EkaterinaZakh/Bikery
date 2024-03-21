import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FestType } from "../../../types/fest";
import festService from "../../services/api/festService";

const getAllFestsThunk = createAsyncThunk<FestType[]>(
    'fest/getAllFestsThunk',
    () => festService.getAllFests()
)

export default getAllFestsThunk;

