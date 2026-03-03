
'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getDatabase, Database } from 'firebase/database';

// This function should be called on the client side.
// It ensures that Firebase is initialized only once.
export function initializeFirebase(): {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
  database: Database | null;
} {
  try {
    // Check if Firebase config is available
    if (!firebaseConfig.apiKey) {
      console.warn('[Firebase] Missing Firebase configuration. Please set environment variables.');
      return {
        firebaseApp: null,
        auth: null,
        firestore: null,
        database: null
      };
    }

    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    
    return {
      firebaseApp: app,
      auth: getAuth(app),
      firestore: getFirestore(app),
      database: getDatabase(app)
    };
  } catch (error) {
    console.error('[Firebase] Initialization error:', error);
    return {
      firebaseApp: null,
      auth: null,
      firestore: null,
      database: null
    };
  }
}

// Export all hooks and utilities from their respective files
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './errors';
export * from './error-emitter';
