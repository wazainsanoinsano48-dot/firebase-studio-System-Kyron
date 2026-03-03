import { useRouter as useNextRouter } from 'next/navigation';
import { usePathname as useNextPathname } from 'next/navigation';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const locales = ['en', 'es'] as const;
export const defaultLocale = 'es';

// Export Next.js router hooks directly
export const useRouter = useNextRouter;
export const usePathname = useNextPathname;
export { Link, redirect };
