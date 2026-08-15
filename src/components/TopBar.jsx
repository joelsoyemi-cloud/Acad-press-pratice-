import { Phone, Mail } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    path: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.55 4.78 5.87V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z",
  },
  {
    label: "Facebook",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.93.26-1.56 1.6-1.56h1.7V4.3C15.9 4.2 15 4.1 13.9 4.1c-2.5 0-4.2 1.5-4.2 4.4v2.3H7v3.2h2.7v8h3.8Z",
  },
  {
    label: "X",
    path: "M18.9 3H21l-6.6 7.5L22.2 21h-6.4l-5-6.5-5.7 6.5H2l7.1-8.1L2 3h6.5l4.5 6 5.9-6Zm-1.1 16.2h1.7L7.3 4.7H5.5l12.3 14.5Z",
  },
];

export default function TopBar() {
  return (
    <div className="bg-brand text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="mailto:academyforms@yahoo.com"
            className="flex items-center gap-1.5 hover:underline"
          >
            <Mail size={13} /> academyforms@yahoo.com
          </a>
          <span className="flex items-center gap-1.5">
            <Phone size={13} /> 01-212 3408
          </span>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <svg
              key={s.label}
              viewBox="0 0 24 24"
              width={14}
              height={14}
              fill="currentColor"
              className="cursor-pointer hover:opacity-70 transition-opacity"
              aria-label={s.label}
            >
              <path d={s.path} />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}