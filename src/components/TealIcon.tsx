type IconName =
  | "bolt"
  | "dna"
  | "moon"
  | "repair"
  | "lab"
  | "brain"
  | "flame"
  | "clipboard"
  | "shield"
  | "truck"
  | "doctor"
  | "box"
  | "bot"
  | "stethoscope";

const paths: Record<IconName, string> = {
  bolt: "M13 2L4 14h6l-1 8 10-14h-6l1-6z",
  dna: "M8 4c2 2 2 4 0 6s-2 4 0 6m8-12c-2 2-2 4 0 6s2 4 0 6M9 7h6M9 12h6M9 17h6",
  moon: "M20 14.5A8.5 8.5 0 119.5 4 7 7 0 0020 14.5z",
  repair: "M20.5 3.5l-6.2 6.2a4 4 0 11-1.4 1.4L19 4.9M8 16l-5 5",
  lab: "M9 3h6M10 3v6l-5 9a2 2 0 001.7 3h10.6a2 2 0 001.7-3l-5-9V3",
  brain:
    "M9.5 4a3 3 0 00-3 3v.5A3 3 0 004 10.5V14a3 3 0 003 3h.5M14.5 4a3 3 0 013 3v.5A3 3 0 0120 10.5V14a3 3 0 01-3 3h-.5M9 8.5h6M9 12h6M9 15.5h6",
  flame:
    "M12 3c2 3-1 4.5 1 7 1.5 1.5 3 2.5 3 5a4 4 0 11-8 0c0-2.2 1.2-3.5 2.5-4.8C12 8.5 10 6.5 12 3z",
  clipboard:
    "M9 4h6a1 1 0 011 1v1h2a1 1 0 011 1v13a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1h2V5a1 1 0 011-1zm1 2h4",
  shield: "M12 3l8 3v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3z",
  truck:
    "M3 7h11v10H3V7zm11 3h4l3 3v4h-7v-7zM7 19a2 2 0 100-4 2 2 0 000 4zm11 0a2 2 0 100-4 2 2 0 000 4z",
  doctor:
    "M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0M12 14v4m-2-2h4",
  box: "M3 8l9-5 9 5v9l-9 5-9-5V8zm0 0l9 5 9-5M12 13v9",
  bot: "M9 3h6v2H9V3zM6 7h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2zm3 4h.01M15 11h.01M9 15h6",
  stethoscope:
    "M6 4v6a4 4 0 008 0V4M6 4H4m10 0h2m-2 14a3 3 0 106 0 3 3 0 00-6 0zm3-3V10",
};

export default function TealIcon({
  name,
  size = 22,
  color = "#00A896",
}: {
  name: IconName;
  size?: number;
  color?: string;
}) {
  const strokeIcons: IconName[] = [
    "dna",
    "moon",
    "repair",
    "lab",
    "brain",
    "clipboard",
    "truck",
    "doctor",
    "box",
    "bot",
    "stethoscope",
  ];
  const isStroke = strokeIcons.includes(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d={paths[name]}
        fill={isStroke ? "none" : color}
        stroke={isStroke ? color : "none"}
        strokeWidth={isStroke ? 1.8 : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TealIconBadge({
  name,
  size = 22,
}: {
  name: IconName;
  size?: number;
}) {
  return (
    <div
      style={{
        width: "2.75rem",
        height: "2.75rem",
        borderRadius: "9999px",
        background: "rgba(0, 168, 150, 0.12)",
        border: "1px solid rgba(0, 168, 150, 0.35)",
        display: "grid",
        placeItems: "center",
        marginBottom: "0.65rem",
      }}
    >
      <TealIcon name={name} size={size} />
    </div>
  );
}
