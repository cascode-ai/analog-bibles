# Detailed solution - A291

As in any mirror-loaded differential stage, the input pair delivers the full current $g_{m1}v_{in}$ to the output node: half from M2 directly and half from M1 through the p-channel cascode mirror (M3/M4 gates tied to the MC3 drain). The cascodes pass the signal currents unchanged, so the gain is $g_{m1}$ times the output resistance, which is the n-channel cascode (MC2 over M2) in parallel with the p-channel cascode (MC4 over M4). All devices are saturated; $g_m=\sqrt{2K'(W/L)I_D}$, $r_{ds}=1/(\lambda I_D)$.

### Step 1 — Small-signal parameters

Each side carries $I_5/2=50$ µA:

$$
\begin{aligned}
g_{m1}&=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{mC2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=104.9\ \mu\mathrm S,\\
g_{mC4}&=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,\qquad
r_{dsN}=\frac1{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=0.5\ \mathrm{M\Omega},\quad r_{dsP}=0.4\ \mathrm{M\Omega}.
\end{aligned}
$$

### Step 2 — Output resistance

Each cascode multiplies the lower device's $r_{ds}$ by the intrinsic gain of the cascode device:

$$
R_{out}\approx(g_{mC2}r_{dsC2}r_{ds2})\parallel(g_{mC4}r_{dsC4}r_{ds4})
=(26.2\ \mathrm{M\Omega})\parallel(11.3\ \mathrm{M\Omega})=7.90\ \mathrm{M\Omega}.
$$

### Step 3 — Differential gain

$$
\frac{v_{o1}}{v_{in}}=g_{m1}R_{out}=(331.7\ \mu\mathrm S)(7.90\ \mathrm{M\Omega})=2.6\times10^3 .
$$

With the input polarity drawn, the output is in phase with $v_{in}$. Keeping the $r_{ds}$ terms that add to $g_mr_{ds}^2$ raises the two branch resistances to 27.2 MΩ and 12.1 MΩ and the gain to about $2.8\times10^3$. The small 1/1 cascode devices limit the gain: their low $g_m$ makes the cascode multiplication only 52 (n) and 28 (p).
