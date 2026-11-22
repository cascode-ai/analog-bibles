# Detailed solution - alsim-03-6-05

Keep the test circuit of [Fig. 1] (VGS from node 1 to ground, VDS from node 2 to ground, source and bulk at node 0) and swap in a p-channel device. All voltages are now negative, so both sweeps run downwards: a nested dc analysis with $v_{DS}$ as the inner variable and $v_{GS}$ as the outer one produces the whole family in one run. The level-1 equations give the knees and currents to check.

### Step 1 — Input file

```spice
PMOS output characteristics
M1 2 1 0 0 MOSP W=5U L=1U
VDS 2 0 DC 0
VGS 1 0 DC 0
.MODEL MOSP PMOS VTO=-0.7 KP=50U GAMMA=0.57 LAMBDA=0.05 PHI=0.8
.DC VDS 0 -5 -0.2 VGS -1 -5 -1
.PRINT DC V(2) I(VDS)
.END
```

The step sizes are negative because each sweep goes from 0 towards −5 V. The bulk is tied to the source, so $v_{BS}=0$ and GAMMA and PHI do not affect the result. Conventional current flows from the source (node 0) out through the drain into the + terminal of VDS. So $I(\mathrm{VDS})=|i_D|>0$, and the drain current defined into the drain is negative, $i_D=-I(\mathrm{VDS})$.

### Step 2 — Level-1 equations for the p-channel device

With $\beta=K'_P(W/L)=(50\ \mu\mathrm{A/V^2})(5)=250\ \mu\mathrm{A/V^2}$ and $V_{ov}=|v_{GS}|-|V_{TP}|=|v_{GS}|-0.7$ V:

$$
|i_D|=
\begin{cases}
\beta\left(V_{ov}|v_{DS}|-\tfrac12|v_{DS}|^2\right)(1+\lambda|v_{DS}|), & |v_{DS}|<V_{ov}\\[4pt]
\tfrac12\beta V_{ov}^2(1+\lambda|v_{DS}|)=(125\ \mu\mathrm{A/V^2})V_{ov}^2(1+0.05|v_{DS}|), & |v_{DS}|\ge V_{ov}.
\end{cases}
$$

The knees are at $|v_{DS}|=V_{ov}=0.3$, 1.3, 2.3, 3.3 and 4.3 V.

### Step 3 — Expected currents

For $v_{GS}=-3$ V at $v_{DS}=-5$ V (saturated, $V_{ov}=2.3$ V):

$$
|i_D|=(125\ \mu\mathrm{A/V^2})(2.3\ \mathrm V)^2(1+0.05\cdot5)=(661\ \mu\mathrm A)(1.25)=827\ \mu\mathrm A .
$$

For $v_{GS}=-5$ V at $v_{DS}=-2$ V the device is in nonsaturation ($2<4.3$):

$$
|i_D|=(250\ \mu\mathrm{A/V^2})\left[(4.3)(2)-\tfrac12(2)^2\right](1+0.05\cdot2)=(250\ \mu\mathrm A)(6.6)(1.1)=1.815\ \mathrm{mA}.
$$

| $v_{GS}$ | Knee $\lvert v_{DS}\rvert$ | $\lvert i_D\rvert$ at $v_{DS}=-2$ V | $\lvert i_D\rvert$ at $v_{DS}=-5$ V |
|---|---|---|---|
| −1 V | 0.3 V | 12.4 µA | 14.1 µA |
| −2 V | 1.3 V | 232 µA | 264 µA |
| −3 V | 2.3 V | 715 µA | 827 µA |
| −4 V | 3.3 V | 1.27 mA | 1.70 mA |
| −5 V | 4.3 V | 1.82 mA | 2.89 mA |

### Step 4 — Simulated family

![Simulated PMOS output characteristics plotted as minus iD versus minus vDS for vGS = −1 to −5 V, knees marked](/q/alsim-03-6-05/solution-curves.svg)

The ngspice values agree with the table to the plotted precision. The curves have the same shape as n-channel characteristics, mirrored into the third quadrant: $v_{GS}$, $v_{DS}$ and $i_D$ are all negative. An n-channel device of the same size with the n-channel parameters would carry $\tfrac12(110)(5)(4.3)^2(1+0.04\cdot5)\ \mu\mathrm A=6.10$ mA at $|v_{GS}|=|v_{DS}|=5$ V. The p-channel device carries 2.89 mA, about 0.47 times as much, mainly because $K'_P/K'_N=50/110$; the larger λ raises the ratio slightly.
