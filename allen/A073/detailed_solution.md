# Detailed solution - A073

The circuit is still an RC low-pass formed by the switch resistance and the 2 pF load. Lowering the gate voltage reduces the gate drive of M1, raising its ON resistance and lowering the pole. Recompute the resistance at the new bias, find the new corner, and draw the Bode diagram.

### Step 1 — New operating point of M1

The capacitor draws no dc current, so both channel terminals of M1 remain at $V_{DC}=3$ V ($V_{DS}=0$, nonsaturation) and the body bias is unchanged, $V_{SB}=3$ V:

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{3.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.135\ \mathrm V .
$$

With the gate at 4.5 V,

$$
V_{GS}=4.5\ \mathrm V-3\ \mathrm V=1.5\ \mathrm V,\qquad V_{GS}-V_T=0.365\ \mathrm V,
$$

compared with 0.865 V when the gate was at 5 V.

### Step 2 — ON resistance and corner frequency

At $V_{DS}=0$, $r_{ON}=1/[K'(W/L)(V_{GS}-V_T)]$:

$$
r_{ON}=\frac{1}{(110\ \mu\mathrm{A/V^2})(2.64)(0.365\ \mathrm V)}=9.43\ \mathrm{k\Omega},\qquad
f_{-3dB}=\frac{1}{2\pi(9.43\ \mathrm{k\Omega})(2\ \mathrm{pF})}=8.44\ \mathrm{MHz}.
$$

Equivalently, the corner scales with the overdrive: $20\ \mathrm{MHz}\times0.365/0.865=8.44$ MHz, a factor 2.37 lower, even though the gate voltage changed by only 10%. The frequency response is

$$
\frac{v_{out}}{v_{in}}(j\omega)=\frac{1}{1+jf/(8.44\ \mathrm{MHz})},\qquad
\left|\frac{v_{out}}{v_{in}}\right|=\frac{1}{\sqrt{1+(f/8.44\ \mathrm{MHz})^2}},\qquad
\angle\frac{v_{out}}{v_{in}}=-\arctan\frac{f}{8.44\ \mathrm{MHz}} .
$$

### Step 3 — Bode diagram

![Bode magnitude: 0 dB to 8.44 MHz, −3 dB at the corner, then −20 dB/decade, reaching −20 dB at 84 MHz; the original 20 MHz response shown dashed for comparison](/q/A073/solution-curves.svg)

The magnitude is 0 dB at low frequency (the dc gain is unchanged, because no dc current flows), −3 dB at 8.44 MHz, and then falls at −20 dB/decade (−6 dB/octave): −20 dB at 84 MHz and −26 dB at 169 MHz. The asymptotic plot is the original one shifted left by a factor 2.37.

![Bode phase: from 0° to −90°, passing −45° at 8.44 MHz; the original response shown dashed](/q/A073/solution-phase.svg)

The phase goes from 0° to −90°, passing −45° at the 8.44 MHz corner.
