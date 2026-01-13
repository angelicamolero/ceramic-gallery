export default function BagIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="6" y="9" width="12" height="11" rx="0" />
      <path d="M9 9V7.8a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

