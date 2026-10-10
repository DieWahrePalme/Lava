// Floating embers on 2 canvases (behind and in front of the content) with scroll parallax.
type P = { x: number; y: number; z: number; r: number; v: number; ph: number };

export function startEmbers(back: HTMLCanvasElement, front: HTMLCanvasElement) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const ctxB = back.getContext('2d')!;
  const ctxF = front.getContext('2d')!;
  let W = 0, H = 0, ps: P[] = [];

  function resize() {
    const d = Math.min(devicePixelRatio || 1, 1.5);
    W = innerWidth; H = innerHeight;
    for (const c of [back, front]) { c.width = W * d; c.height = H * d; }
    ctxB.setTransform(d, 0, 0, d, 0, 0);
    ctxF.setTransform(d, 0, 0, d, 0, 0);
    const n = W < 700 ? 45 : 90;
    ps = Array.from({ length: n }, () => {
      const z = Math.random(); // 0 = far, 1 = near
      return { x: Math.random() * W, y: Math.random() * H, z, r: 0.8 + z * z * 5, v: 6 + z * 30, ph: Math.random() * 6.28 };
    });
  }

  function draw(t: number) {
    ctxB.clearRect(0, 0, W, H);
    ctxF.clearRect(0, 0, W, H);
    ctxB.globalCompositeOperation = ctxF.globalCompositeOperation = 'lighter';
    const sy = scrollY;
    for (const p of ps) {
      // near particles move faster with scroll = parallax depth
      const y = (((p.y - t * p.v - sy * (0.15 + p.z * 1.3)) % (H + 40)) + H + 40) % (H + 40) - 20;
      const x = p.x + Math.sin(t * 0.4 + p.ph) * (8 + p.z * 25);
      const a = (0.25 + 0.5 * Math.abs(Math.sin(t * 0.8 + p.ph))) * (0.35 + p.z * 0.65);
      const c = p.z > 0.7 ? ctxF : ctxB; // the nearest ones drift in front of the text
      const g = c.createRadialGradient(x, y, 0, x, y, p.r * 3);
      g.addColorStop(0, `rgba(255,214,160,${a})`);
      g.addColorStop(0.35, `rgba(235,130,60,${a * 0.6})`);
      g.addColorStop(1, 'rgba(200,120,20,0)');
      c.fillStyle = g;
      c.beginPath();
      c.arc(x, y, p.r * 3, 0, 6.283);
      c.fill();
    }
  }

  let raf = 0;
  const loop = (ms: number) => { draw(ms / 1000); raf = requestAnimationFrame(loop); };
  const start = () => { cancelAnimationFrame(raf); if (reduce.matches) draw(0); else raf = requestAnimationFrame(loop); };
  addEventListener('resize', () => { resize(); start(); });
  addEventListener('scroll', () => { if (reduce.matches) draw(0); }, { passive: true });
  document.addEventListener('visibilitychange', () => (document.hidden ? cancelAnimationFrame(raf) : start()));
  reduce.addEventListener('change', start);
  resize();
  start();
}
