import React, { useEffect, useMemo, useState, type FormEvent } from 'react';
import { addMessage, fetchMessages, subscribeToNewMessages, type Message } from '../lib/messages';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import { GlassCard } from './common';

const MAX_LENGTH = 500;

const formatTimestamp = (timestamp: string) => {
  const dt = new Date(timestamp);
  return dt.toLocaleString(undefined, {
    dateStyle: 'short',
    timeStyle: 'short',
  });
};

export interface MessagesPageProps {
  currentUser: string;
}

export const MessagesPage: React.FC<MessagesPageProps> = ({ currentUser }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setError('Supabase environment variables are missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable messaging.');
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    let unsubscribe: (() => void) | undefined;

    fetchMessages()
      .then(data => {
        if (isMounted) {
          setMessages(data);
        }
      })
      .catch(err => {
        console.error('Failed to fetch messages', err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unexpected error while loading messages.');
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    unsubscribe = subscribeToNewMessages(message => {
      setMessages(prev => {
        const existingIds = new Set(prev.map(item => item.id));
        const next = existingIds.has(message.id) ? prev : [message, ...prev];
        return next.slice(0, 50);
      });
    });

    return () => {
      isMounted = false;
      unsubscribe?.();
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }
    if (!isSupabaseConfigured) {
      setError('Supabase environment variables are missing. Message sending is disabled.');
      return;
    }

    setIsSubmitting(true);
    try {
      const message = await addMessage(trimmed);
      setMessages(prev => [message, ...prev.slice(0, 49)]);
      setInput('');
    } catch (err) {
      console.error('Failed to add message', err);
      setError(err instanceof Error ? err.message : 'Unexpected error while sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const remaining = useMemo(() => MAX_LENGTH - input.length, [input.length]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-primary tracking-tight">Community Messages</h1>
        <p className="text-muted mt-2 max-w-2xl">
          Messages are stored in Supabase. All submissions are public, so avoid sharing sensitive or personal information.
        </p>
      </div>

      <GlassCard>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2" htmlFor="message">
              Add a message
            </label>
            <textarea
              id="message"
              value={input}
              onChange={event => setInput(event.target.value.slice(0, MAX_LENGTH))}
              placeholder="Share an update with the team…"
              className="w-full min-h-[120px] rounded-xl bg-black/30 border border-white/10 text-primary p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              maxLength={MAX_LENGTH}
              disabled={isSubmitting}
            />
            <div className="flex justify-between text-xs text-muted mt-2">
              <span>Signed in as: {currentUser || 'Guest'}</span>
              <span>{remaining} characters remaining</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="gloss-btn"
              disabled={isSubmitting || !input.trim() || !isSupabaseConfigured}
            >
              {isSubmitting ? 'Sending…' : 'Send message'}
            </button>
            {error ? <span className="text-sm text-red-400">{error}</span> : null}
          </div>
        </form>
      </GlassCard>

      <GlassCard title="Latest messages">
        {isLoading ? (
          <p className="text-muted">Loading messages…</p>
        ) : messages.length === 0 ? (
          <p className="text-muted">No messages yet. Be the first to post one!</p>
        ) : (
          <ul className="space-y-4 max-h-[480px] overflow-y-auto pr-2">
            {messages.map(message => (
              <li key={message.id} className="glass p-4 bg-white/5 rounded-xl">
                <div className="flex items-center justify-between text-xs text-muted mb-1">
                  <span>{message.user_id ?? 'Anonymous'}</span>
                  <time dateTime={message.created_at}>{formatTimestamp(message.created_at)}</time>
                </div>
                <p className="text-sm text-primary whitespace-pre-wrap">{message.content}</p>
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </div>
  );
};
