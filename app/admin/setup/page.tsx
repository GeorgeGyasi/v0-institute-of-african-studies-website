'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminSetupPage() {
  const router = useRouter();
  const [step, setStep] = useState<'init' | 'signup' | 'complete'>('init');
  const [initLoading, setInitLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    checkInitialization();
  }, []);

  async function checkInitialization() {
    try {
      const response = await fetch('/api/admin/init', { method: 'POST' });
      if (response.ok) {
        setStep('complete');
      }
    } catch (err) {
      console.error('[v0] Check error:', err);
    }
  }

  async function handleInitialize() {
    setInitLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/init', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to initialize');
      }

      setStep('signup');
    } catch (err) {
      console.error('[v0] Init error:', err);
      setError('Failed to initialize database');
    } finally {
      setInitLoading(false);
    }
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setSignupLoading(true);
    setError(null);

    try {
      // Validate inputs
      if (!email || !password || !confirmPassword) {
        setError('All fields are required');
        setSignupLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setSignupLoading(false);
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        setSignupLoading(false);
        return;
      }

      const supabase = getSupabaseClient();
      const { error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin/dashboard`,
        },
      });

      if (signupError) {
        setError(signupError.message);
        return;
      }

      setStep('complete');
    } catch (err) {
      console.error('[v0] Signup error:', err);
      setError('Failed to create admin account');
    } finally {
      setSignupLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Panel Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 'init' && (
            <>
              <p className="text-sm text-muted-foreground">
                Initialize the database to set up the admin panel. This creates the necessary tables
                and storage buckets for managing staff profiles.
              </p>
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">{error}</div>
              )}
              <Button onClick={handleInitialize} disabled={initLoading} className="w-full">
                {initLoading ? 'Initializing...' : 'Initialize Database'}
              </Button>
            </>
          )}

          {step === 'signup' && (
            <>
              <div className="p-4 bg-green-50 text-green-800 rounded-md text-sm">
                ✓ Database initialized successfully
              </div>
              <p className="text-sm text-muted-foreground">
                Create your admin account to manage staff profiles and access the admin dashboard.
              </p>
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">{error}</div>
              )}
              <form onSubmit={handleSignup} className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    disabled={signupLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    disabled={signupLoading}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Confirm Password</label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    disabled={signupLoading}
                  />
                </div>
                <Button type="submit" disabled={signupLoading} className="w-full">
                  {signupLoading ? 'Creating Account...' : 'Create Admin Account'}
                </Button>
              </form>
            </>
          )}

          {step === 'complete' && (
            <>
              <div className="p-4 bg-green-50 text-green-800 rounded-md">
                <div className="font-medium">✓ Setup Complete!</div>
                <p className="text-sm mt-1">Admin account created successfully</p>
              </div>
              <p className="text-sm text-muted-foreground">
                You can now log in and manage staff profiles.
              </p>
              <Button className="w-full" onClick={() => router.push('/admin/login')}>
                Go to Login
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
