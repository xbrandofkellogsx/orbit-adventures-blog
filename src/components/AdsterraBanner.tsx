import { useEffect, useRef, useId } from "react";

interface AdsterraBannerProps {
  className?: string;
}

const AdsterraBanner = ({ className = "" }: AdsterraBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);
  const uniqueId = useId().replace(/:/g, "");

  useEffect(() => {
    if (!adRef.current || loaded.current) return;
    loaded.current = true;

    try {
      const container = document.createElement("div");
      container.id = `adsterra-${uniqueId}`;

      const atOptions = document.createElement("script");
      atOptions.type = "text/javascript";
      atOptions.text = `
        atOptions = {
          'key' : '389b7e64761be5ea556e48635439e0fb',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;

      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "https://pl29159509.profitablecpmratenetwork.com/389b7e64761be5ea556e48635439e0fb/invoke.js";

      adRef.current.appendChild(container);
      adRef.current.appendChild(atOptions);
      adRef.current.appendChild(script);
    } catch (e) {
      console.error("Adsterra ad failed to load:", e);
    }

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, [uniqueId]);

  return <div className={`ad-container ${className}`} ref={adRef} />;
};

export default AdsterraBanner;
