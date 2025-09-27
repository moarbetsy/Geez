import type { Client, Product, Order, Expense, LogEntry } from '../types';
import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient';

export type DashboardState = {
  clients: Client[];
  products: Product[];
  orders: Order[];
  expenses: Expense[];
  logs: LogEntry[];
};

const DASHBOARD_STATE_ID = 'main';

export async function fetchDashboardState(): Promise<DashboardState | null> {
  if (!isSupabaseConfigured) {
    return null;
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('dashboard_state')
    .select('payload')
    .eq('id', DASHBOARD_STATE_ID)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  return (data.payload as DashboardState | null) ?? null;
}

export async function upsertDashboardState(state: DashboardState): Promise<void> {
  if (!isSupabaseConfigured) {
    return;
  }

  const supabase = getSupabaseClient();
  const { error } = await supabase
    .from('dashboard_state')
    .upsert({
      id: DASHBOARD_STATE_ID,
      payload: state,
    });

  if (error) {
    throw error;
  }
}
