import type { DashboardState, DashboardStats } from "../../types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { DUMMY_DASHBOARD_DATA } from "../../data/dummyData";

const initialState: DashboardState = {
  stats: {
    patients: 0,
    doctors: 0,
    appointments: 0,
    clinics: 0,
  },
  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.isLoading = true;
      state.error = null;
    },
   fetchSuccess: (state, action: PayloadAction<DashboardStats>) => {
      state.stats = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchFails: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchData,
  fetchSuccess,
  fetchFails
} = dashboardSlice.actions;

 // Thunk-like action creator for dashboard stats

export const fetchDashboardStats =
  () =>
  (dispatch: any) => {
    dispatch(fetchData());
    setTimeout(() => {
     dispatch(fetchSuccess(DUMMY_DASHBOARD_DATA));
    }, 500);
  };

export default dashboardSlice.reducer;
