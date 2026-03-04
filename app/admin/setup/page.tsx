'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminSetupPage() {
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkInitialization();
  }, []);

  async function checkInitialization() {
    try {
      const response = await fetch('/api/admin/init', { method: 'POST' });
      if (response.ok) {
        setInitialized(true);
      }
    } catch (err) {
      console.error('[v0] Check error:', err);
    }
  }

  async function handleInitialize() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/init', { method: 'POST' });
      if (!response.ok) {
        throw new Error('Failed to initialize');
      }

      setInitialized(true);
    } catch (err) {
      console.error('[v0] Init error:', err);
      setError('Failed to initialize database');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Panel Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {initialized ? (
            <>
              <div className="p-4 bg-green-50 text-green-800 rounded-md">
                ✓ Database initialized successfully
              </div>
              <p className="text-sm text-muted-foreground">
                The admin panel is ready to use. You can now log in and manage staff profiles.
              </p>
              <Button className="w-full" onClick={() => (window.location.href = '/admin/login')}>
                Go to Login
              </Button>
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">
                Initialize the database to set up the admin panel. This creates the necessary tables
                and storage buckets.
              </p>
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">{error}</div>
              )}
              <Button onClick={handleInitialize} disabled={loading} className="w-full">
                {loading ? 'Initializing...' : 'Initialize Database'}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
