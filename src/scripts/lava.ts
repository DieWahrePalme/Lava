// Fullscreen WebGL: slow pearly ivory background with golden marble clouds.
// Kept cheap on purpose (4 octaves, no title mask) so phones stay smooth.
const VERT = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

const FRAG = `precision mediump float;
uniform vec2 R;uniform float T,S;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
vec3 bgc(float v){
 vec3 c=mix(vec3(.99,.965,.915),vec3(.96,.89,.76),smoothstep(.25,.6,v));
 return mix(c,vec3(.93,.80,.55),smoothstep(.6,1.,v));}
void main(){
 vec2 uv=gl_FragCoord.xy/R; vec2 p=(gl_FragCoord.xy-.5*R)/R.y;
 float t=T*.045+S*.5;
 vec2 q=p*(2.2-S*.15)+vec2(0.,-t);
 vec2 w=vec2(fbm(q+vec2(0,t*.5)),fbm(q+vec2(5.2,1.3)-t*.3));
 float f=fbm(q+3.*w);
 vec3 col=bgc(smoothstep(.2,.85,f));
 float sheen=fbm(q+3.*w+vec2(.02,.02))-f;
 col+=vec3(1.,.97,.9)*clamp(sheen*6.,0.,1.)*.12;
 col*=1.-.12*length(uv-.5);
 gl_FragColor=vec4(col,1.);}`;

export function startLava(cv: HTMLCanvasElement): boolean {
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

  function resize() {
    // The clouds are soft, so 1x (or less) is enough and keeps phones smooth.
    const d = Math.min(devicePixelRatio || 1, 1) * (innerWidth < 700 ? 0.75 : 1);
    cv.width = Math.round(innerWidth * d);
    cv.height = Math.round(innerHeight * d);
    gl!.viewport(0, 0, cv.width, cv.height);
    if (reduce.matches) draw(0);
  }

  let s = 0;
  let target = 0;
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    target = max > 0 ? scrollY / max : 0;
    if (reduce.matches) { s = target; requestAnimationFrame(draw); }
  };
  function draw(ms: number) {
    gl!.uniform2f(uR, cv.width, cv.height);
    gl!.uniform1f(uT, reduce.matches ? 0 : ms / 1000);
    gl!.uniform1f(uS, s);
    gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
  }
  let running = true;
  function frame(ms: number) {
    if (!running || reduce.matches) return;
    s += (target - s) * 0.06;
    draw(ms);
    requestAnimationFrame(frame);
  }

  addEventListener('resize', () => { resize(); onScroll(); });
  addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(frame);
  });
  reduce.addEventListener('change', () => { if (!reduce.matches) requestAnimationFrame(frame); else draw(0); });
  resize();
  onScroll();
  if (reduce.matches) draw(0); else requestAnimationFrame(frame);
  return true;
}
