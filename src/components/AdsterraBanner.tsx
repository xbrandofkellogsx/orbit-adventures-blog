import { useEffect, useRef } from "react";

interface AdsterraBannerProps {
  adKey?: string;
  width?: number;
  height?: number;
  className?: string;
}

const AdsterraBanner = ({ adKey = "YOUR_ADSTERRA_AD_KEY", width = 728, height = 90, className = "" }: AdsterraBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adRef.current || adKey === "YOUR_ADSTERRA_AD_KEY") return;

    try {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.highperformanceformat.com/${adKey}/invoke.js`;
      script.async = true;

      const conf = document.createElement("script");
      conf.type = "text/javascript";
      conf.innerHTML = `
        atOptions = {
          'key' : '${adKey}',
          'format' : 'iframe',
          'height' : ${height},
          'width' : ${width},
          'params' : {}
        };
      `;

      adRef.current.appendChild(conf);
      adRef.current.appendChild(script);
    } catch (e) {
      console.error("Adsterra ad failed to load:", e);
    }

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = "";
      }
    };
  }, [adKey, width, height]);

  return (
    <div className={`ad-container ${className}`} ref={adRef}>
      {adKey === "YOUR_ADSTERRA_AD_KEY" && (
        <span className="text-muted-foreground text-sm">Ad Placement — Configure your Adsterra key</span>
      )}
    </div>
  );
};

export default AdsterraBanner;
