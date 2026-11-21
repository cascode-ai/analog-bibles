# Detailed solution - G428

During slewing the input pair is fully switched and each output is charged or discharged by a fixed current, set by KCL at its folding node and output node. Divide that current by the capacitance on each output, then add the two opposite slopes to get the DM slew rate.

### Step 1 — Load on each output during slewing

While slewing the op amp is not in linear operation, so its inputs are not virtual grounds. Each input node carries only $C_1$ (to the source, an ac ground) and $C_{ia}$, so the feedback capacitor $C_2$ appears in series with $C_1+C_{ia}$:

$$
C_{L\mathrm{eff}}=C_L+\frac{C_2(C_1+C_{ia})}{C_2+C_1+C_{ia}}=6\ \mathrm{pF}+\frac{(4)(6.58)}{10.58}\ \mathrm{pF}=8.49\ \mathrm{pF}.
$$

### Step 2 — Quiescent currents

The tail ($M_5\parallel M_6$) carries 4.0 mA, split as 2.0 mA in each of $M_1$, $M_2$. Each PMOS source $M_{11}$, $M_{12}$ supplies 4.4 mA to its folding node, so each PMOS cascode carries $4.4-2.0=2.4$ mA, equal to the 2.4 mA sunk by $M_3$/$M_{3A}$ and $M_4$/$M_{4A}$. No net current flows into either output.

### Step 3 — Currents during slewing

For a large DM step, one input transistor takes the whole 4.0-mA tail current and the other turns off. Take $M_1$ on and $M_2$ off:

| Output | Input-device current | PMOS cascode current | NMOS cascode current | Net current |
|---|---|---|---|---|
| $V_{o1}$ | $M_1$: 4.0 mA | $M_{1A}$: $4.4-4.0=0.4$ mA | $M_{3A}$: 2.4 mA | 2.0 mA out (falls) |
| $V_{o2}$ | $M_2$: 0 | $M_{2A}$: $4.4-0=4.4$ mA | $M_{4A}$: 2.4 mA | 2.0 mA in (rises) |

The slewing current per output is half the tail current, $I_{\mathrm{slew}}=(I_{D5}+I_{D6})/2=2.0$ mA, with all current sources still active.

### Step 4 — Slew rate

Each output moves at

$$
\left|\frac{dV_o}{dt}\right|=\frac{I_{\mathrm{slew}}}{C_{L\mathrm{eff}}}=\frac{2.0\ \mathrm{mA}}{8.49\ \mathrm{pF}}=0.236\ \mathrm{V/ns},
$$

and the two outputs move in opposite directions, so

$$
\left|\frac{dV_{od}}{dt}\right|=\frac{I_{\mathrm{slew}}}{C_{L\mathrm{eff}}/2}=2(0.236\ \mathrm{V/ns})=0.471\ \mathrm{V/ns}\quad(471\ \mathrm{V/\mu s}).
$$
