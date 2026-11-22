# Detailed solution - A069

With no current through the switch, both channel terminals sit at $V_S$, so the device operates at $V_{DS}=0$ in nonsaturation. The small-signal ON resistance is the inverse of $\partial i_D/\partial v_{DS}$ there, which depends on $V_S$ through the gate drive and through the body effect.

### Step 1 — Bias conditions

$I=0$ means no voltage drop across the channel, so both terminals are at $V_S$:

$$
V_{DS}=0,\qquad V_{GS}=5\ \mathrm V-V_S,\qquad V_{SB}=V_S-0=V_S .
$$

The threshold rises with $V_S$ through the body effect, $V_T=V_{T0}+\gamma(\sqrt{2|\phi_F|+V_S}-\sqrt{2|\phi_F|})$.

### Step 2 — ON resistance at $V_{DS}=0$

Differentiating the nonsaturation current,

$$
\frac{\partial i_D}{\partial v_{DS}}=K'\frac WL\big(v_{GS}-V_T-v_{DS}\big)
\quad\Rightarrow\quad
r_{ON}=\frac{1}{K'(W/L)(V_{GS}-V_T)},
$$

valid when $V_{GS}>V_T$; otherwise the transistor is off. Here $K'W/L=(110\ \mu\mathrm{A/V^2})(2)=220\ \mu\mathrm{A/V^2}$.

### Step 3 — The three cases

For $V_S=1$ V:

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{1.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=0.887\ \mathrm V,\qquad
r_{ON}=\frac{1}{(220\ \mu\mathrm{A/V^2})(4\ \mathrm V-0.887\ \mathrm V)}=1.46\ \mathrm{k\Omega}.
$$

| $V_S$ (V) | $V_{GS}$ (V) | $V_T$ (V) | $V_{GS}-V_T$ (V) | $R$ |
|---|---|---|---|---|
| 1.0 | 4.0 | 0.887 | 3.113 | 1.46 kΩ |
| 3.0 | 2.0 | 1.135 | 0.865 | 5.25 kΩ |
| 5.0 | 0 | 1.320 | < 0 | ∞ (off) |

At $V_S=5$ V the gate–source voltage is zero, below threshold, so the switch is open and only leakage flows. The resistance rises steeply as $V_S$ approaches $5\ \mathrm V-V_T$, both because the gate drive shrinks and because the body effect raises $V_T$; without the body effect the 3 V value would be only 3.50 kΩ.
