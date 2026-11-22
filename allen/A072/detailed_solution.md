# Detailed solution - A072

Read the required response from [Fig. 2], recognize the circuit as an RC low-pass formed by the switch resistance and the load capacitor, compute the resistance that places the pole at the required corner, and size M1 to give that resistance at its operating point.

### Step 1 — Required response

[Fig. 2] shows 0 dB up to 20 MHz, then a slope of −6 dB per octave (−6 dB at 40 MHz, −12 dB at 80 MHz), i.e. −20 dB/decade. This is a single real pole at $f_p=20$ MHz with unity dc gain.

### Step 2 — Circuit as an RC low-pass

With no parasitics on M1, the capacitor draws no dc current, so M1 carries none and both channel terminals sit at $V_{DC}=3$ V: $V_{DS}=0$, and M1 is in nonsaturation. Its small-signal model at $V_{DS}=0$ is a resistance $r_{ON}=1/[K'(W/L)(V_{GS}-V_T)]$, since $g_m$ and $g_{mbs}$ are proportional to $V_{DS}$ and vanish. With $C=2$ pF from $v_{out}$ to ground,

$$
\frac{v_{out}}{v_{in}}=\frac{1}{1+s\,r_{ON}C},\qquad f_p=\frac{1}{2\pi r_{ON}C}.
$$

Setting $f_p=20$ MHz:

$$
r_{ON}=\frac{1}{2\pi(20\ \mathrm{MHz})(2\ \mathrm{pF})}=3.98\ \mathrm{k\Omega}.
$$

### Step 3 — Threshold at the operating point

$V_{GS}=5\ \mathrm V-3\ \mathrm V=2$ V and $V_{SB}=3$ V, so the body effect is significant:

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{3.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.135\ \mathrm V,\qquad V_{GS}-V_T=0.865\ \mathrm V .
$$

### Step 4 — Size of M1

$$
\frac WL=\frac{1}{K'(V_{GS}-V_T)\,r_{ON}}=\frac{1}{(110\ \mu\mathrm{A/V^2})(0.865\ \mathrm V)(3.98\ \mathrm{k\Omega})}=2.64 ,
$$

for example $W=2.64\ \mu$m with $L=1\ \mu$m. Check: $r_{ON}=1/[(110\ \mu\mathrm{A/V^2})(2.64)(0.865\ \mathrm V)]=3.98\ \mathrm{k\Omega}$ and $1/(2\pi\cdot3.98\ \mathrm{k\Omega}\cdot2\ \mathrm{pF})=20$ MHz. Without the body effect ($V_T=0.7$ V) the design would give $W/L=1.76$, and the actual corner would then be too low.
