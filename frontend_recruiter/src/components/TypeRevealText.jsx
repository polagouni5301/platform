import { useEffect, useMemo, useState } from "react";

export const TypeRevealText = ({
  lines,
  className = "",
  baseDelay = 0,
  stepDelay = 24,
  showCursor = false,
  loop = false,
  loopPause = 2400,
  reserveLines,
}) => {
  const fullText = useMemo(() => lines.join("\n"), [lines]);
  const reserved = reserveLines ?? lines;
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    const startTyping = () => {
      setVisibleCount(0);

      let nextCount = 0;
      intervalId = window.setInterval(() => {
        nextCount += 1;
        setVisibleCount(nextCount);

        if (nextCount >= fullText.length) {
          window.clearInterval(intervalId);

          if (loop) {
            timeoutId = window.setTimeout(startTyping, loopPause);
          }
        }
      }, stepDelay);
    };

    timeoutId = window.setTimeout(startTyping, baseDelay);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [baseDelay, fullText, loop, loopPause, stepDelay]);

  const visibleText = fullText.slice(0, visibleCount);
  const visibleLines = visibleText.split("\n");
  const renderedLines = visibleLines.length ? visibleLines : [""];

  return (
    <span className={`type-reveal ${className}`.trim()}>
      <span aria-hidden="true" className="type-reveal__reserve">
        {reserved.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`} className="type-reveal__line">
            {line || "\u00A0"}
          </span>
        ))}
      </span>

      <span className="type-reveal__content">
        {renderedLines.map((line, lineIndex) => {
          const isLastVisibleLine = lineIndex === renderedLines.length - 1;

          return (
            <span key={`${line}-${lineIndex}`} className="type-reveal__line">
              {line || "\u00A0"}
              {showCursor && isLastVisibleLine ? (
                <span className="type-reveal__cursor" />
              ) : null}
            </span>
          );
        })}
      </span>
    </span>
  );
};
