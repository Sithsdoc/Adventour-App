import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dixcsqbokxonnpkeptts.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeGNzcWJva3hvbm5wa2VwdHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4ODUwOTgsImV4cCI6MjA1NDQ2MTA5OH0.Bo50M-u9J6KMNeobh5nCGDIx82u-_IDuwawjg9yuUNc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
