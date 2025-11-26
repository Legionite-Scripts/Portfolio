export const Footer = () => {
  return (
    <footer className="bg-bg border-t border-surface py-8 text-center">
      <p className="text-muted text-sm">
        &copy; {new Date().getFullYear()} Samuel Onwuka <span className="text-primary font-marker mx-1">Legionite</span>. All rights reserved.
      </p>
    </footer>
  );
};