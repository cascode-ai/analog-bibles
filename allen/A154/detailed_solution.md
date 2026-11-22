# Detailed solution - A154

Model each transistor's noise by a voltage source $e_{ni}$ in series with its gate. Short the output and find the noise current each source produces there; the sources are uncorrelated, so the powers add. Dividing the total by $g_{m1}^2$ refers it back to the input. The load devices are weighted by $(g_{m3}/g_{m1})^2$, so their contribution depends on the transconductance ratio.

### Step 1 — Transconductances

At balance each of M1–M4 carries $I_{SS}/2=25$ µA. With $g_m=\sqrt{2K'(W/L)I_D}$:

$$
g_{m1}=g_{m2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(25\ \mu\mathrm A)}=104.9\ \mu\mathrm S,\qquad
g_{m3}=g_{m4}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(25\ \mu\mathrm A)}=50\ \mu\mathrm S,
$$

$$
\left(\frac{g_{m3}}{g_{m1}}\right)^2=\frac{K'_P(W/L)_3}{K'_N(W/L)_1}=\frac{50}{220}=0.227 .
$$

### Step 2 — Output noise current from each device

With the output shorted:

- M2: its gate noise produces $g_{m2}e_{n2}$ directly in the output.
- M1: it produces $g_{m1}e_{n1}$ in M1's drain, which flows through M3 and is mirrored by M4 to the output with unit gain.
- M4: its gate noise produces $g_{m4}e_{n4}$ directly in the output.
- M3: its noise current $g_{m3}e_{n3}$ flows in its own diode conductance $g_{m3}$, producing the voltage $e_{n3}$ on the gate line, which M4 converts into $g_{m4}e_{n3}$ at the output.
- M5: the tail noise splits equally into both halves; the mirror cancels it at the output (it is a common-mode current), so it is neglected.

$$
\overline{i_{to}^2}=g_{m1}^2e_{n1}^2+g_{m2}^2e_{n2}^2+g_{m3}^2e_{n3}^2+g_{m4}^2e_{n4}^2 .
$$

### Step 3 — Equivalent input noise voltage

Dividing by $g_{m1}^2$, with every $e_{ni}=1\ \mathrm{nV/\sqrt{Hz}}$:

$$
e_{eq}^2=2e_{n1}^2+2\left(\frac{g_{m3}}{g_{m1}}\right)^2e_{n3}^2=(2+2\times0.227)\times10^{-18}\ \mathrm{V^2/Hz}=2.455\times10^{-18}\ \mathrm{V^2/Hz},
$$

$$
e_{eq}=1.57\ \mathrm{nV/\sqrt{Hz}}.
$$

The input pair contributes $\sqrt2$ times one device's noise; the loads add less than a quarter of that power because their transconductance is smaller.

### Step 4 — Equivalent output noise current

$$
i_{to}=g_{m1}e_{eq}=(104.9\ \mu\mathrm S)(1.567\ \mathrm{nV/\sqrt{Hz}})=1.64\times10^{-13}\ \mathrm{A/\sqrt{Hz}}=0.164\ \mathrm{pA/\sqrt{Hz}} .
$$

This is the short-circuit noise current at the output; multiplied by the output resistance it gives the open-circuit output noise voltage.
