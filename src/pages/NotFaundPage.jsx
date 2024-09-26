import { useEffect } from 'react';

export const NotFoundPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <div
        className="tenor-gif-embed"
        data-postid="12770229"
        data-share-method="host"
        data-aspect-ratio="1.90476"
        data-width="100%"
        style={{ width: '100%', height: '100%' }}
      >
        <a href="https://tenor.com/view/sontoyolo-face-palm-monkey-gif-12770229">Sontoyolo Face Palm GIF</a> from{' '}
        <a href="https://tenor.com/search/sontoyolo-gifs">Sontoyolo GIFs</a>
      </div>
    </div>
  );
};