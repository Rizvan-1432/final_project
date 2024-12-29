import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILicenseState, ILicense } from '../../types/license.types';

const initialState: ILicenseState = {
  licenses: [],
  loading: false,
  error: null,
  selectedLicense: null
};

const licenseSlice = createSlice({
  name: 'license',
  initialState,
  reducers: {
    setLicenses: (state, action: PayloadAction<ILicense[]>) => {
      state.licenses = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedLicense: (state, action: PayloadAction<ILicense | null>) => {
      state.selectedLicense = action.payload;
    }
  }
});

export const { setLicenses, setLoading, setError, setSelectedLicense } = licenseSlice.actions;
export default licenseSlice.reducer; 