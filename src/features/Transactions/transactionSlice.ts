import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type FinData = {
  id: string;
  name: string;
  bankName: string;
  revenue: string;
  revenuePer: string;
  amount: string;
  durationInDays: string;
};

export type Transaction = {
  id: string;
  amount: string;
  transactionId: string;
  transactionType: string;
  date: string;
  time: string;
  status: string;
};

// export type LoanHistory = {
//   transactionDate: string;
//   dueDate: string;
//   interest: string;
//   duration: string;
//   status: string;
//   issuer: string;
//   amount: string;
//   purpose: string;
//   id: string;
// };

interface TransactionState {
  transactions: {
    data: Transaction[];
    loading: boolean;
    error: string | null;
  };
  userAccounts: {
    data: FinData[];
    loading: boolean;
    error: string | null;
  };
}

const initialState: TransactionState = {
  transactions: {
    data: [],
    loading: false,
    error: null,
  },
  userAccounts: {
    data: [],
    loading: false,
    error: null,
  },
};

export const fetchUserAccountDetails = createAsyncThunk(
  "transactions/fetchUserAccountDetails",
  async () => {
    const response = await axios.get<FinData[]>(
      "https://677fb6eb0476123f76a7b789.mockapi.io/api/v2/dashboardInfo"
    );
    return response.data;
  }
);

export const fetchAccounTransactions = createAsyncThunk(
  "transactions/fetchAccounTransactions",
  async () => {
    const response = await axios.get<Transaction[]>(
      "https://677fb6eb0476123f76a7b789.mockapi.io/api/v2/accTransactions"
    );
    return response.data;
  }
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Transactions
    builder
      .addCase(fetchAccounTransactions.pending, (state) => {
        state.transactions.loading = true;
        state.transactions.error = null;
      })
      .addCase(fetchAccounTransactions.fulfilled, (state, action) => {
        state.transactions.loading = false;
        state.transactions.data = action.payload;
      })
      .addCase(fetchAccounTransactions.rejected, (state, action) => {
        state.transactions.loading = false;
        state.transactions.error =
          action.error.message || "Something went wrong";
      });

    // User Accounts
    builder
      .addCase(fetchUserAccountDetails.pending, (state) => {
        state.userAccounts.loading = true;
        state.userAccounts.error = null;
      })
      .addCase(fetchUserAccountDetails.fulfilled, (state, action) => {
        state.userAccounts.loading = false;
        state.userAccounts.data = action.payload;
      })
      .addCase(fetchUserAccountDetails.rejected, (state, action) => {
        state.userAccounts.loading = false;
        state.userAccounts.error =
          action.error.message || "Something went wrong";
      });
  },
});

export default transactionSlice.reducer;
