import type { RealtimeChannel } from '@supabase/supabase-js';
import { getSupabaseClient } from './supabaseClient';

export type Message = {
  id: number;
  created_at: string;
  content: string;
  user_id: string | null;
};

export async function fetchMessages(limit = 50): Promise<Message[]> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    throw error;
  }

  return (data ?? []) as Message[];
}

export async function addMessage(content: string, userId?: string): Promise<Message> {
  const supabase = getSupabaseClient();
  const payload = {
    content,
    user_id: userId ?? null,
  };

  const { data, error } = await supabase
    .from('messages')
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data as Message;
}

export function subscribeToNewMessages(handler: (message: Message) => void): () => void {
  const supabase = getSupabaseClient();
  const channel: RealtimeChannel = supabase
    .channel('messages-updates')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
      handler(payload.new as Message);
    })
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
