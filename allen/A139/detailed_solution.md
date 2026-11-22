# Detailed solution - A139

The mirror-loaded differential pair converts $v_{in}$ into a short-circuit output current $g_{md}v_{in}$ with $g_{md}=g_{m1}$, and its output resistance is $1/(g_{ds2}+g_{ds4})$. The gain is their product. With only the 10 pF capacitor at the high-resistance output, the circuit has a single pole at $1/(R_{out}C)$; the mirror node is low-resistance and, with device capacitances neglected, contributes no pole.

### Step 1 — Differential transconductance

At balance each input device carries $I_{SS}/2=5$ µA. A differential input changes $i_{d1}$ by $+g_{m1}v_{in}/2$ and $i_{d2}$ by $-g_{m1}v_{in}/2$; the mirror copies M1's change to the output, where it adds to M2's change, so the short-circuit output current is $g_{m1}v_{in}$:

$$
g_{md}=g_{m1}=\sqrt{2K'_N\frac WL\frac{I_{SS}}{2}}=\sqrt{K'_NI_{SS}\frac WL}=\sqrt{(110\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)(10)}=104.9\ \mu\mathrm S .
$$

### Step 2 — Output resistance

With an ideal tail source, the output conductance is to first order the sum of the drain conductances of M2 and M4, each at 5 µA:

$$
g_{ds2}+g_{ds4}=(0.04+0.05\ \mathrm{V^{-1}})(5\ \mu\mathrm A)=0.45\ \mu\mathrm S,\qquad R_{out}=2.22\ \mathrm{M\Omega}.
$$

### Step 3 — Voltage gain

$$
\frac{v_o}{v_i}=g_{md}R_{out}=\frac{104.9\ \mu\mathrm S}{0.45\ \mu\mathrm S}=233\ \mathrm{V/V}.
$$

The gain is positive (noninverting from $v_1$): raising $v_1$ increases M1's current, which the mirror delivers to the output, while M2's current falls. The single-ended output still uses the full $g_{m1}$ because the mirror recovers the half-signal current of M1.

### Step 4 — −3 dB frequency with 10 pF

With $C=10$ pF from the output to ground, KCL at the output gives

$$
\frac{V_{out}(j\omega)}{V_{in}(j\omega)}=\frac{g_{md}}{g_{ds2}+g_{ds4}+j\omega C},
\qquad
f_{-3\,\mathrm{dB}}=\frac{g_{ds2}+g_{ds4}}{2\pi C}=\frac{0.45\ \mu\mathrm S}{2\pi(10\ \mathrm{pF})}=7.16\ \mathrm{kHz}.
$$

The gain–bandwidth product is $g_{md}/(2\pi C)=1.67$ MHz, consistent with $233\times7.16\ \mathrm{kHz}$.
