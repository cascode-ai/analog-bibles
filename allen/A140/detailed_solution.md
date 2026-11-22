# Detailed solution - A140

The small-signal part uses the standard results for a mirror-loaded pair: short-circuit transconductance $g_{md}=g_{m1}$ and output resistance $1/(g_{ds2}+g_{ds4})$. The common-mode limits come from keeping M1 saturated against its mirror-held drain (upper limit) and keeping the tail device M5 saturated below the common source node (lower limit). At balance M5 carries $I_{SS}=10$ µA and M1–M4 carry 5 µA each; all devices have $W/L=2$.

### Step 1 — Gain and output resistance

$$
g_{m1}=\sqrt{2K'_N\frac WL\frac{I_{SS}}{2}}=\sqrt{(110\ \mu\mathrm{A/V^2})(10\ \mu\mathrm A)(2)}=46.9\ \mu\mathrm S,
$$

$$
g_{ds2}+g_{ds4}=(0.04+0.05\ \mathrm{V^{-1}})(5\ \mu\mathrm A)=0.45\ \mu\mathrm S,\qquad
R_{out}=\frac1{0.45\ \mu\mathrm S}=2.22\ \mathrm{M\Omega},
$$

$$
\frac{v_{out}}{v_{in}}=g_{m1}R_{out}=\frac{46.9\ \mu\mathrm S}{0.45\ \mu\mathrm S}=104\ \mathrm{V/V}.
$$

The mirror adds M1's half-signal current to M2's, so the single-ended output uses the full $g_{m1}$.

### Step 2 — Device voltages for the common-mode limits

With $V_{OV}=\sqrt{2I_D/[K'(W/L)]}$:

| Quantity | Current | Value |
|---|---|---|
| $V_{SG3}=0.7+\sqrt{2(5\ \mu\mathrm A)/[(50\ \mu\mathrm{A/V^2})(2)]}$ | 5 µA | 0.7 + 0.316 = 1.016 V |
| $V_{DS5}(\mathrm{sat})=\sqrt{2(10\ \mu\mathrm A)/[(110\ \mu\mathrm{A/V^2})(2)]}$ | 10 µA | 0.302 V |
| $V_{GS1}=0.7+\sqrt{2(5\ \mu\mathrm A)/[(110\ \mu\mathrm{A/V^2})(2)]}$ | 5 µA | 0.7 + 0.213 = 0.913 V |

### Step 3 — Maximum common-mode input

The drain of M1 is held at $V_{DD}-V_{SG3}$ by the diode-connected M3. M1 stays saturated while $V_{G1}\le V_{D1}+V_{TN}$:

$$
V_{IC}(\max)=V_{DD}-V_{SG3}+V_{TN1}=V_{DD}-1.016+0.7\ \mathrm V=V_{DD}-0.316\ \mathrm V,
$$

i.e. 4.68 V for $V_{DD}=5$ V.

### Step 4 — Minimum common-mode input

The common source node is one $V_{GS1}$ below the gates, and M5 needs at least $V_{DS5}(\mathrm{sat})$ above ground:

$$
V_{IC}(\min)=V_{DS5}(\mathrm{sat})+V_{GS1}=0.302+0.913\ \mathrm V=1.215\ \mathrm V .
$$

So for $V_{DD}=5$ V the input common-mode range is $1.215\ \mathrm V\le V_{IC}\le4.68\ \mathrm V$, with the gain $A_v=104$ V/V and $R_{out}=2.22$ MΩ.
