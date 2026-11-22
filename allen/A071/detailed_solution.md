# Detailed solution - A071

Both transistors carry no current, so each sits at $V_{DS}=0$ in nonsaturation and acts as a conductance set by its gate drive and body-effect threshold. Find each device's ON resistance at the three input levels, as for the single switches, and combine them in parallel.

### Step 1 — ON resistance of each device

With $I=0$ both terminals are at $V_S$. Differentiating the nonsaturation current at $V_{DS}=0$ gives, for either device,

$$
r_{ON}=\frac{1}{K'(W/L)\big(|V_{GS}|-|V_T|\big)},\qquad
|V_T|=|V_{T0}|+\gamma\Big(\sqrt{2|\phi_F|+|V_{SB}|}-\sqrt{2|\phi_F|}\Big),
$$

and the device is off when $|V_{GS}|\le|V_T|$.

- n-channel: $V_{GS}=5\ \mathrm V-V_S$, $V_{SB}=V_S$, $K'W/L=220\ \mu\mathrm{A/V^2}$;
- p-channel: $V_{SG}=V_S$, $V_{BS}=5\ \mathrm V-V_S$, $K'W/L=200\ \mu\mathrm{A/V^2}$.

### Step 2 — Values at the three input levels

Representative substitution, n-channel at $V_S=3$ V:

$$
V_{Tn}=0.7+0.4\big(\sqrt{3.7}-\sqrt{0.7}\big)=1.135\ \mathrm V,\qquad
r_{ON,n}=\frac{1}{(220\ \mu\mathrm{A/V^2})(2\ \mathrm V-1.135\ \mathrm V)}=5.25\ \mathrm{k\Omega}.
$$

| $V_S$ (V) | $V_{Tn}$ (V) | $r_{ON,n}$ | $\lvert V_{Tp}\rvert$ (V) | $r_{ON,p}$ |
|---|---|---|---|---|
| 1.0 | 0.887 | 1.46 kΩ | 1.439 | ∞ (off, $V_{SG}=1$ V) |
| 3.0 | 1.135 | 5.25 kΩ | 1.144 | 2.69 kΩ |
| 5.0 | 1.320 | ∞ (off, $V_{GS}=0$) | 0.700 | 1.16 kΩ |

### Step 3 — Parallel combination

The two channels connect the same two nodes, so their conductances add, $R=r_{ON,n}\parallel r_{ON,p}$. At $V_S=3$ V:

$$
R=\frac{(5.25\ \mathrm{k\Omega})(2.69\ \mathrm{k\Omega})}{5.25\ \mathrm{k\Omega}+2.69\ \mathrm{k\Omega}}=1.78\ \mathrm{k\Omega}.
$$

| $V_S$ (V) | $R$ (parallel) |
|---|---|
| 1.0 | 1.46 kΩ (n-channel only) |
| 3.0 | 1.78 kΩ |
| 5.0 | 1.16 kΩ (p-channel only) |

### Step 4 — Behaviour over the whole range

![ON resistance versus VS: the n-channel resistance rises toward 3.8 V and the p-channel resistance falls from 1.39 V, while their parallel combination stays between about 1.1 and 1.8 kΩ](/q/A071/solution-curves.svg)

Each single device fails over part of the range: the n-channel transistor turns off for $V_S$ above about 3.8 V, and the p-channel transistor is off below about 1.39 V because its body effect raises $|V_T|$ above $V_{SG}$. In parallel, one device always conducts, so the complementary switch stays on from 0 to 5 V with $R$ between about 1.06 and 1.8 kΩ. The curve has corners where a device turns on or off (about 1.39 V and 3.79 V), because each conductance falls linearly to zero at its threshold in this model.
