const LEAD_PREFIX = /^# ?/;
const INLINE = /\*\*(.+?)\*\*|\*(.+?)\*/g;

// **text** -> brightest, *text* -> light highlight, everything else stays as-is.
function renderInline(line, keyPrefix) {
  const nodes = [];
  let lastIndex = 0;
  let match;

  INLINE.lastIndex = 0;
  while ((match = INLINE.exec(line)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(line.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(
        <span key={`${keyPrefix}-${match.index}`} className="text-white font-medium">
          {match[1]}
        </span>
      );
    } else {
      nodes.push(
        <em key={`${keyPrefix}-${match.index}`} className="text-slate-200 not-italic font-medium">
          {match[2]}
        </em>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < line.length) {
    nodes.push(line.slice(lastIndex));
  }

  return nodes;
}

// A single Enter becomes a line break, a blank line starts a new paragraph.
function renderBlock(block, key) {
  const lines = block.split("\n");
  const isLead = LEAD_PREFIX.test(lines[0]);
  const className = isLead
    ? "text-lg text-slate-300 leading-relaxed"
    : "text-slate-400 leading-relaxed";

  return (
    <p key={key} className={className}>
      {lines.flatMap((line, index) => {
        const text = isLead ? line.replace(LEAD_PREFIX, "") : line;
        const nodes = renderInline(text, `${key}-${index}`);

        return index === 0 ? nodes : [<br key={`${key}-br-${index}`} />, ...nodes];
      })}
    </p>
  );
}

const RichText = ({ source }) => {
  const blocks = source
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => renderBlock(block, index));
};

export default RichText;
