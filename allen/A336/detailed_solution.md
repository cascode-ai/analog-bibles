# Detailed solution - A336

For a purely differential input the circuit splits into two identical half circuits: the common sources of each differential pair (the tails M5 and M8) are ac grounds. Each stage is then a common-source stage loaded by two drain–source resistances, and the differential gain is the product of the two stage gains.

### Step 1 — Small-signal parameters

All devices are in saturation. With $g_m=\sqrt{2K'(W/L)I_D}$ and $r_{ds}=1/(\lambda I_D)$ at $I_D=50\ \mu$A and $W/L=10$:

$$
g_{mN}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{mP}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,
$$
$$
r_{dsN}=\frac1{(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=500\ \mathrm{k\Omega},\qquad
r_{dsP}=\frac1{(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)}=400\ \mathrm{k\Omega},
$$
$$
r_{dsN}\parallel r_{dsP}=222.2\ \mathrm{k\Omega}.
$$

### Step 2 — First stage

The n-channel pair M1–M2 drives the p-channel current-source loads M3–M4. With the tail at ac ground, each input device sees $\pm v_{id}/2$ and its drain node is loaded by $r_{ds1}\parallel r_{ds3}$, so the differential gain of the stage is

$$
\frac{v_{d1}-v_{d2}}{v_{id}}=-g_{mN}(r_{dsN}\parallel r_{dsP})=-(331.7\ \mu\mathrm S)(222.2\ \mathrm{k\Omega})=-73.7 .
$$

### Step 3 — Second stage

The p-channel pair M6–M7 is driven by d1 and d2 and loaded by the n-channel current sinks M9–M10; for differential signals the common source node at M8 is an ac ground. Each half is a common-source stage with load $r_{ds6}\parallel r_{ds9}$:

$$
\frac{v_{out}^+-v_{out}^-}{v_{d1}-v_{d2}}=-g_{mP}(r_{dsN}\parallel r_{dsP})=-(223.6\ \mu\mathrm S)(222.2\ \mathrm{k\Omega})=-49.7 .
$$

Here $v_{out}^+$ is the drain of M6, whose gate is d1.

### Step 4 — Overall differential gain

$$
A_{vd}=\frac{v_{od}}{v_{id}}=g_{mN}(r_{dsN}\parallel r_{dsP})\cdot g_{mP}(r_{dsN}\parallel r_{dsP})=(73.7)(49.7)=+3.66\times10^3\ \mathrm{V/V}\ (71.3\ \mathrm{dB}).
$$

The gain is positive for the labelled polarities: $v_{in}^+$ drives M1, the drain of M1 drives the gate of M6, and the drain of M6 is $v_{out}^+$, so each of the two stages inverts once. The value is a true differential-output gain; taking only one output would give half of it.
