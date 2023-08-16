import React, { useState, useEffect, useRef } from "react";

function LazyIframe(props) {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasBeenInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <iframe
      {...props}
      src={hasBeenInView ? props.src : undefined}
      ref={iframeRef}
    />
  );
}

export default LazyIframe;
