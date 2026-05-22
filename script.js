(function () {
    'use strict';

    const TOTAL_FRAMES = 224;
    const FRAME_PATH   = './frames/ezgif-frame-';
    const FRAME_EXT    = '.jpg';

    const canvas     = document.getElementById('scroll-canvas');
    const ctx        = canvas.getContext('2d');
    const scrollSpace = document.getElementById('scroll-space');
    const preloader  = document.getElementById('preloader');
    const percentEl  = document.getElementById('preloader-percent');

    const images    = [];
    let loadedCount = 0;
    let currentFrame = -1;
    let isReady = false;

    function pad(n) { return String(n).padStart(3, '0'); }

    /* ── Canvas sizing ─────────────────────── */
    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width  = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width  = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (isReady && images[currentFrame]) draw(currentFrame);
    }

    /* ── Draw a frame (cover-fit) ──────────── */
    function draw(index) {
        const img = images[index];
        if (!img) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const cw = canvas.width / dpr;
        const ch = canvas.height / dpr;
        const ir = img.naturalWidth / img.naturalHeight;
        const cr = cw / ch;

        let dw, dh, dx, dy;
        if (cr > ir) { dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2; }
        else         { dh = ch; dw = ch * ir;  dx = (cw - dw) / 2; dy = 0; }

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, dx, dy, dw, dh);
    }

    /* ── Scroll → frame mapping ────────────── */
    function onScroll() {
        if (!isReady) return;
        const max = scrollSpace.scrollHeight - window.innerHeight;
        const frac = Math.min(Math.max(window.scrollY / max, 0), 1);
        const frame = Math.min(Math.floor(frac * TOTAL_FRAMES), TOTAL_FRAMES - 1);

        if (frame !== currentFrame) {
            currentFrame = frame;
            draw(currentFrame);
        }
    }

    /* ── Preload images ────────────────────── */
    function preload() {
        return new Promise(resolve => {
            for (let i = 1; i <= TOTAL_FRAMES; i++) {
                const img = new Image();
                img.src = FRAME_PATH + pad(i) + FRAME_EXT;
                img.onload = img.onerror = () => {
                    loadedCount++;
                    percentEl.textContent = Math.round((loadedCount / TOTAL_FRAMES) * 100) + '%';
                    if (loadedCount === TOTAL_FRAMES) resolve();
                };
                images[i - 1] = img;
            }
        });
    }

    /* ── rAF scroll loop ───────────────────── */
    function loop() {
        onScroll();
        requestAnimationFrame(loop);
    }

    /* ── Init ──────────────────────────────── */
    async function init() {
        resize();
        window.addEventListener('resize', resize);
        await preload();
        preloader.classList.add('hidden');
        isReady = true;
        currentFrame = 0;
        draw(0);
        requestAnimationFrame(loop);
    }

    init();
})();
