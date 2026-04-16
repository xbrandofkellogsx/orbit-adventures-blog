interface AdsterraBannerProps {
  className?: string;
}

const AD_SCRIPT_SRC =
  "https://pl29159509.profitablecpmratenetwork.com/389b7e64761be5ea556e48635439e0fb/invoke.js";
const AD_CONTAINER_ID = "container-389b7e64761be5ea556e48635439e0fb";

const adMarkup = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        background: transparent;
        overflow: hidden;
      }

      body {
        display: flex;
        justify-content: center;
      }

      #${AD_CONTAINER_ID} {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <script async="async" data-cfasync="false" src="${AD_SCRIPT_SRC}"></script>
    <div id="${AD_CONTAINER_ID}"></div>
  </body>
</html>`;

const AdsterraBanner = ({ className = "" }: AdsterraBannerProps) => {
  return (
    <iframe
      title="Advertisement"
      className={className}
      srcDoc={adMarkup}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      referrerPolicy="no-referrer-when-downgrade"
      style={{ width: "100%", minHeight: "320px", border: 0, overflow: "hidden" }}
    />
  );
};

export default AdsterraBanner;
