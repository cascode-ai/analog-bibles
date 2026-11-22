# Detailed solution - G019

For each gate voltage, compare $V_{GS}$ with $V_t$ to decide whether the device conducts, then split the $V_{DS}$ sweep at $V_{DS}=V_{ov}=V_{GS}-V_t$ into the triode and active regions and evaluate the square-law current in each.

### Step 1 — Model and region boundaries

With $V_{SB}=0$, $V_t=V_{t0}=0.6$ V and $k'(W/L)=(194\ \mu\mathrm{A/V^2})(10)=1.94\ \mathrm{mA/V^2}$. The square-law model with channel-length modulation is

$$
I_D=
\begin{cases}
0, & V_{GS}\le V_t,\\[2pt]
k'\dfrac WL\left[V_{ov}V_{DS}-\dfrac{V_{DS}^2}2\right](1+\lambda V_{DS}), & V_{DS}<V_{ov}\ \text{(triode)},\\[8pt]
\dfrac{k'}2\dfrac WL V_{ov}^2(1+\lambda V_{DS}), & V_{DS}\ge V_{ov}\ \text{(active)}.
\end{cases}
$$

The factor $1+\lambda V_{DS}$ is applied in both regions so that the current is continuous at $V_{DS}=V_{ov}$; omitting it in triode changes those values by at most 6% and leaves a small step at the boundary. The edge of saturation, $V_{DS}=V_{ov}$, traces the parabola $I_D=\tfrac12k'(W/L)V_{DS}^2(1+\lambda V_{DS})$.

### Step 2 — $V_{GS}=0.5$ V

$V_{GS}<V_t=0.6$ V, so the device is off and $I_D=0$ for all $V_{DS}$ (subthreshold conduction is ignored). The curve lies on the horizontal axis.

### Step 3 — $V_{GS}=1.5$ V

$V_{ov}=0.9$ V. Near the origin the device is a resistor with $dI_D/dV_{DS}=k'(W/L)V_{ov}=1.75$ mS, i.e. $R_{on}=573\ \Omega$. At $V_{DS}=0.5$ V (triode):

$$
I_D=(1.94\ \mathrm{mA/V^2})\left[(0.9\ \mathrm V)(0.5\ \mathrm V)-\frac{(0.5\ \mathrm V)^2}2\right](1.012)=0.638\ \mathrm{mA}.
$$

Above 0.9 V the device is in the active region with $\tfrac12k'(W/L)V_{ov}^2=0.786$ mA, so $I_D=0.786\ \mathrm{mA}\,(1+0.024V_{DS})$; its slope is $\lambda(0.786\ \mathrm{mA})=18.9\ \mu$A/V, i.e. $r_o\approx53$ kΩ.

### Step 4 — $V_{GS}=3$ V

$V_{ov}=2.4$ V, so the device stays in triode up to $V_{DS}=2.4$ V, with an initial slope $k'(W/L)V_{ov}=4.66$ mS. In the active region $\tfrac12k'(W/L)V_{ov}^2=5.59$ mA, and $I_D=5.59\ \mathrm{mA}\,(1+0.024V_{DS})$.

| $V_{DS}$ (V) | 0.25 | 0.5 | 0.9 | 1 | 1.5 | 2 | 2.4 | 3 |
|---|---|---|---|---|---|---|---|---|
| $I_D$ at $V_{GS}=1.5$ V (mA) | 0.378 | 0.638 | 0.803 | 0.805 | 0.814 | 0.823 | 0.831 | 0.842 |
| $I_D$ at $V_{GS}=3$ V (mA) | 1.11 | 2.11 | 3.48 | 3.77 | 4.97 | 5.69 | 5.91 | 5.99 |

Without the $\lambda$ factor in triode, the 3-V curve reads 1.10, 2.09, 3.69, 4.80, 5.43 and 5.59 mA at 0.25–2.4 V.

### Step 5 — The characteristics

![ID–VDS curves: zero for VGS = 0.5 V, saturating at 0.80 mA for 1.5 V and at 5.9 mA for 3 V, with the triode/active boundary parabola](/q/G019/solution-curves.svg)

Each conducting curve is a parabola from the origin up to $V_{DS}=V_{ov}$ (0.9 V and 2.4 V), where it meets the boundary parabola with zero slope apart from the $\lambda$ term, and then continues as a nearly flat line rising by $\lambda$ per volt: 0.80→0.84 mA and 5.91→5.99 mA.
