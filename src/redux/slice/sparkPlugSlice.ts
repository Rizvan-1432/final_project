import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISparkPlugState, ISparkPlug } from '../../types/sparkPlug.types';

const initialState: ISparkPlugState = {
  sparkPlugs: [],
  loading: false,
  error: null,
  selectedSparkPlug: null
};

const sparkPlugSlice = createSlice({
  name: 'sparkPlug',
  initialState,
  reducers: {
    setSparkPlugs: (state, action: PayloadAction<ISparkPlug[]>) => {
      state.sparkPlugs = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedSparkPlug: (state, action: PayloadAction<ISparkPlug | null>) => {
      state.selectedSparkPlug = action.payload;
    }
  }
});

export const { setSparkPlugs, setLoading, setError, setSelectedSparkPlug } = sparkPlugSlice.actions;
export default sparkPlugSlice.reducer; 