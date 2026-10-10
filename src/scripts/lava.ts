// Fullscreen WebGL lava. The word LAVA is drawn on a 2D canvas and used as a mask.
const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

const FRAG = `precision highp float;
uniform vec2 R;uniform float T,S,H;uniform sampler2D M;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
// pearly ivory background with soft golden liquid clouds
vec3 bgc(float v){
 vec3 c=mix(vec3(.99,.965,.915),vec3(.96,.89,.76),smoothstep(.25,.6,v));
 return mix(c,vec3(.93,.80,.55),smoothstep(.6,1.,v));}
// polished liquid gold for the letters
vec3 goldc(float v){
 vec3 c=mix(vec3(.5,.3,.09),vec3(.76,.52,.17),smoothstep(0.,.5,v));
 return mix(c,vec3(.95,.8,.5),smoothstep(.5,1.,v));}
float mk(vec2 u){return texture2D(M,vec2(u.x,1.-u.y)).r;}
void main(){
 vec2 uv=gl_FragCoord.xy/R; vec2 p=(gl_FragCoord.xy-.5*R)/R.y;
 float t=T*.045+S*.5;
 vec2 q=p*(2.2-S*.15)+vec2(0.,-t);
 vec2 w=vec2(fbm(q+vec2(0,t*.5)),fbm(q+vec2(5.2,1.3)-t*.3));
 float f=fbm(q+3.*w);
 float v=smoothstep(.2,.85,f);
 vec3 col=bgc(v);
 // soft sheen from the slope of the flow
 float e=.012;
 vec2 g=vec2(fbm(q+3.*w+vec2(e,0.))-f,fbm(q+3.*w+vec2(0.,e))-f)/e;
 vec3 nn=normalize(vec3(-g*.35,1.));
 float spec=pow(max(dot(nn,normalize(vec3(-.4,.6,.7))),0.),20.);
 col=col*(.95+.08*nn.x)+vec3(1.,.97,.9)*spec*.18;
 float hero=1.-smoothstep(.0,.5,H); // title fully gone after ~0.7 screens
 vec2 mu=(uv-vec2(.5,.42))/(1.+H*.08)+vec2(.5,.42); // letters fly towards you while scrolling
 float m=mk(mu);
 // clean flat gold with a slow flow of colour inside the letters
 float lv=clamp(f*1.1+.05,0.,.85);
 vec3 face=goldc(lv);
 col=mix(col,face,m*hero);
 col*=1.-.12*length(uv-.5);
 gl_FragColor=vec4(col,1.);}`;

export function startLava(cv: HTMLCanvasElement, word: string): boolean {
  const gl = cv.getContext('webgl', { antialias: false, powerPreference: 'low-power' });
  if (!gl) return false;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');

  const sh = (type: number, src: string) => {
    const o = gl.createShader(type)!;
    gl.shaderSource(o, src);
    gl.compileShader(o);
    if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) console.error(gl.getShaderInfoLog(o));
    return o;
  };
  const pr = gl.createProgram()!;
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VERT));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return false;
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(pr, 'R');
  const uT = gl.getUniformLocation(pr, 'T');
  const uS = gl.getUniformLocation(pr, 'S');
  const uH = gl.getUniformLocation(pr, 'H');
  gl.uniform1i(gl.getUniformLocation(pr, 'M'), 0);
  const tex = gl.createTexture();

  function resize() {
    // Lower resolution on phones: the lava is soft, so it stays smooth and cheap.
    const d = Math.min(devicePixelRatio || 1, 2);
    cv.width = Math.round(innerWidth * d);
    cv.height = Math.round(innerHeight * d);
    gl!.viewport(0, 0, cv.width, cv.height);
    const m = document.createElement('canvas');
    m.width = cv.width;
    m.height = cv.height;
    const c = m.getContext('2d')!;
    c.fillStyle = '#000';
    c.fillRect(0, 0, m.width, m.height);
    c.fillStyle = '#fff';
    c.textAlign = 'left';
    c.textBaseline = 'alphabetic';
    const face = 'Cinzel,"Times New Roman",serif';
    // clean, widely spaced capitals; letters drawn one by one so spacing works in every browser
    const track = 0.18;
    const width = (px: number) => {
      c.font = `500 ${px}px ${face}`;
      return [...word].reduce((w, ch) => w + c.measureText(ch).width + px * track, 0) - px * track;
    };
    const size = Math.min((100 * m.width * 0.86) / width(100), m.height * 0.3);
    let x = (m.width - width(size)) / 2;
    c.font = `500 ${size}px ${face}`;
    for (const ch of word) {
      c.fillText(ch, x, m.height * 0.42 + size * 0.35);
      x += c.measureText(ch).width + size * track;
    }
    gl!.bindTexture(gl!.TEXTURE_2D, tex);
    gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, gl!.RGBA, gl!.UNSIGNED_BYTE, m);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
    if (reduce.matches) draw(0);
  }

  let s = 0;
  let target = 0;
  let hT = 0;
  let hS = 0;
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    target = max > 0 ? scrollY / max : 0;
    hT = scrollY / innerHeight;
    if (reduce.matches) { s = target; hS = hT; requestAnimationFrame(draw); }
  };
  function draw(ms: number) {
    gl!.uniform2f(uR, cv.width, cv.height);
    gl!.uniform1f(uT, reduce.matches ? 0 : ms / 1000);
    gl!.uniform1f(uS, s);
    gl!.uniform1f(uH, hS);
    gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
  }
  let running = true;
  function frame(ms: number) {
    if (!running || reduce.matches) return;
    s += (target - s) * 0.06;
    hS += (hT - hS) * 0.12;
    draw(ms);
    requestAnimationFrame(frame);
  }

  addEventListener('resize', () => { resize(); onScroll(); });
  addEventListener('scroll', onScroll, { passive: true });
  // pause when the tab is hidden
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(frame);
  });
  reduce.addEventListener('change', () => { if (!reduce.matches) requestAnimationFrame(frame); else draw(0); });
  // wait for the web font so the mask uses it
  document.fonts.load('500 100px Cinzel', word).finally(() => {
    resize();
    onScroll();
    if (reduce.matches) draw(0); else requestAnimationFrame(frame);
  });
  return true;
}
