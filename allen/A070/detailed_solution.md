# Detailed solution - A070

With no current through the switch, both channel terminals sit at $V_S$, so the p-channel device operates at $V_{SD}=0$ in nonsaturation. Its small-signal ON resistance is the inverse of $\partial|i_D|/\partial v_{SD}$ there; it depends on $V_S$ through the source–gate drive and through the body effect, now measured from the 5 V bulk.

### Step 1 — Bias conditions

Both terminals are at $V_S$ (the higher one acts as source), the gate is at 0 V and the bulk at 5 V:

$$
V_{SD}=0,\qquad V_{SG}=V_S,\qquad V_{BS}=5\ \mathrm V-V_S .
$$

The n-well bulk is above the source by $5\ \mathrm V-V_S$, a reverse bias that raises the threshold magnitude: $|V_T|=0.7+0.57(\sqrt{0.8+V_{BS}}-\sqrt{0.8})$ V.

### Step 2 — ON resistance at $V_{SD}=0$

$$
\frac{\partial|i_D|}{\partial v_{SD}}=K'\frac WL\big(v_{SG}-|V_T|-v_{SD}\big)
\quad\Rightarrow\quad
r_{ON}=\frac{1}{K'(W/L)(V_{SG}-|V_T|)},
$$

valid when $V_{SG}>|V_T|$; otherwise the transistor is off. Here $K'W/L=(50\ \mu\mathrm{A/V^2})(4)=200\ \mu\mathrm{A/V^2}$.

### Step 3 — The three cases

For $V_S=3$ V ($V_{BS}=2$ V):

$$
|V_T|=0.7\ \mathrm V+0.57\ \mathrm{V^{1/2}}\big(\sqrt{2.8\ \mathrm V}-\sqrt{0.8\ \mathrm V}\big)=1.144\ \mathrm V,\qquad
r_{ON}=\frac{1}{(200\ \mu\mathrm{A/V^2})(3\ \mathrm V-1.144\ \mathrm V)}=2.69\ \mathrm{k\Omega}.
$$

| $V_S$ (V) | $V_{SG}$ (V) | $V_{BS}$ (V) | $\lvert V_T\rvert$ (V) | $V_{SG}-\lvert V_T\rvert$ (V) | $R$ |
|---|---|---|---|---|---|
| 1.0 | 1.0 | 4.0 | 1.439 | < 0 | ∞ (off) |
| 3.0 | 3.0 | 2.0 | 1.144 | 1.856 | 2.69 kΩ |
| 5.0 | 5.0 | 0 | 0.700 | 4.300 | 1.16 kΩ |

At $V_S=1$ V the 4 V body bias raises $|V_T|$ to 1.44 V, above the 1 V source–gate voltage, so the switch is off; without the body effect it would conduct with 16.7 kΩ. The p-channel switch thus behaves as the mirror image of the n-channel one: it conducts best at high signal levels and turns off at low ones.
