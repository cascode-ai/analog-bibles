# Detailed solution - A345

Break the common-mode loop at the gates of M10 and M11, apply a common-mode test voltage $v_c$ there (the same change on both outputs), and find the common-mode voltage that returns to the outputs. For common-mode signals the circuit is symmetric, so one half suffices: M10 driving node S, the second-stage device M7 as a common-gate stage, and the output node loaded by M9.

### Step 1 — Small-signal parameters

With $g_m=\sqrt{2K'(W/L)I_D}$ and $r_{ds}=1/(\lambda I_D)$ at 50 µA and $W/L=10$:

$$
g_{m10}=g_{m7}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,
$$
$$
r_{ds10}=r_{ds7}=\frac1{(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=400\ \mathrm{k\Omega},\qquad
r_{ds9}=\frac1{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=500\ \mathrm{k\Omega}.
$$

### Step 2 — The loop path

A common-mode rise $v_c$ at the gates of the p-channel M10/M11 reduces their current by $g_{m10}v_c$ per half; this change enters node S, the common drain of M10/M11 and the sources of M6/M7. The gate of M7 is driven by the first stage, which does not respond to the output common mode, so for this loop it is held fixed and M7 acts as a common-gate stage passing the current change from S to the output. The output node is loaded by M9, whose gate is at the fixed $V_{BN}$, so its resistance is $r_{ds9}$; the gates of M10/M11 draw no current.

### Step 3 — Current division at node S

The current from M10 splits between $r_{ds10}$ and the source of M7. The conductance looking into the source of a common-gate device with drain load $r_{ds9}$ is

$$
G_7=\frac{1+g_{m7}r_{ds7}}{r_{ds7}+r_{ds9}}=\frac{g_{m7}+1/r_{ds7}}{1+r_{ds9}/r_{ds7}}=\frac{226.1\ \mu\mathrm S}{2.25}=100.5\ \mu\mathrm S,
$$

much larger than $g_{ds10}=2.5\ \mu$S, so the fraction reaching the output is

$$
\frac{G_7}{G_7+g_{ds10}}=\frac{100.5}{103.0}=0.976 .
$$

### Step 4 — Loop gain

All the current passing through M7 flows into $r_{ds9}$, so

$$
LG=\frac{v_o}{v_c}=-g_{m10}\,r_{ds9}\,\frac{G_7}{G_7+g_{ds10}}=-(223.6\ \mu\mathrm S)(500\ \mathrm{k\Omega})(0.976)=-109\ \mathrm{V/V}.
$$

The simplest estimate, ignoring the small loss at node S, is $-g_{m10}r_{ds9}=-112$ V/V. The negative sign means negative feedback: a rise of the output common mode reduces the current that M10/M11 supply to the outputs, which pulls the outputs back down.
