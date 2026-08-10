import "./globals.css";

export const metadata = {
  title: "Enterprise AI SDLC Pilot Playbook",
  description: "A vendor-neutral, executable playbook for adopting AI-assisted software delivery through a controlled enterprise pilot."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
