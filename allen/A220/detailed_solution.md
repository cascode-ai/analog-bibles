# Detailed solution - A220

Each follower's output node sees the follower's transconductance driving it from the input, and a load conductance to ac ground set by the second transistor. Write that conductance for each circuit, express all quantities in terms of the n-channel values using the given ratios, and compare the gains.

### Step 1 — Relating n- and p-channel parameters

All devices have the same $W/L$ and current $I$, so with the square law

$$
g_{m}=\sqrt{2K'\frac WL I}\quad\Rightarrow\quad g_{mP}=\sqrt{\frac{K'_P}{K'_N}}\,g_{mN}=\frac{g_{mN}}{\sqrt2},
$$

$$
g_{ds}=\lambda I\quad\Rightarrow\quad g_{dsP}=2g_{dsN}.
$$

### Step 2 — Small-signal model of a follower stage

Let the follower have transconductance $g_{mF}$ and output conductance $g_{dsF}$, with its gate at $v_{in}$ and its source at $v_{out}$, so $v_{gs}=\pm(v_{in}-v_{out})$ with the polarity sign the same on both sides. The second transistor connects $v_{out}$ to an ac ground and presents a load conductance $G_L$. KCL at the unloaded output:

$$
g_{mF}(v_{in}-v_{out})=(g_{dsF}+G_L)\,v_{out}\quad\Rightarrow\quad
A_v=\frac{g_{mF}}{g_{mF}+g_{dsF}+G_L}.
$$

The load conductance depends on how the second device is connected:

- **Diode-type load** (gate tied to a node that is at ac ground on the other side, so $|v_{gs}|=|v_{out}|$): $G_L=g_{m,load}+g_{ds,load}$. In Circuit 1 the n-channel M2 has gate and drain at the output; in Circuit 2 the p-channel M2 likewise. In Circuit 3 the p-channel M2 has its source at the output and its gate and drain at ground; in Circuit 4 the n-channel M2 has its source at the output and its gate and drain at $V_{DD}$. In all four, $v_{gs2}$ equals $\pm v_{out}$.
- **Current-source load** (gate at a fixed bias $V_{BN}$ or $V_{BP}$, Circuits 5 and 6): $v_{gs}=0$, so $G_L=g_{ds,load}$ only.

### Step 3 — Gains of the six circuits

Using $g_m\gg g_{ds}$ for the diode-loaded circuits and Step 1 for the ratios:

| Circuit | Follower | Load | $A_v$ | Value |
|---|---|---|---|---|
| 1 | n (M1) | n diode | $\dfrac{g_{mN}}{2g_{mN}+2g_{dsN}}$ | ≈ 0.5 |
| 2 | p (M1) | p diode | $\dfrac{g_{mP}}{2g_{mP}+2g_{dsP}}$ | ≈ 0.5 |
| 3 | n (M1) | p diode to ground | $\dfrac{g_{mN}}{g_{mN}+g_{mP}}=\dfrac{\sqrt2}{1+\sqrt2}$ | ≈ 0.586 |
| 4 | p (M1) | n diode from $V_{DD}$ | $\dfrac{g_{mP}}{g_{mP}+g_{mN}}=\dfrac{1}{1+\sqrt2}$ | ≈ 0.414 |
| 5 | n (M1) | n current sink | $\dfrac{g_{mN}}{g_{mN}+2g_{dsN}}$ | ≈ $1-2g_{dsN}/g_{mN}$ |
| 6 | p (M2) | p current source | $\dfrac{g_{mP}}{g_{mP}+2g_{dsP}}$ | ≈ $1-2g_{dsP}/g_{mP}$ |

The diode-loaded followers (1–4) form a divider between two transconductances and cannot exceed about 0.59. The current-source-loaded followers (5, 6) are close to 1.

### Step 4 — Highest gain: Circuit 5

Compare the shortfall from unity of Circuits 5 and 6, using $g_{dsP}=2g_{dsN}$ and $g_{mP}=g_{mN}/\sqrt2$:

$$
1-A_{v5}\approx\frac{2g_{dsN}}{g_{mN}},\qquad
1-A_{v6}\approx\frac{2g_{dsP}}{g_{mP}}=\frac{2(2g_{dsN})}{g_{mN}/\sqrt2}=4\sqrt2\,\frac{g_{dsN}}{g_{mN}} .
$$

The p-channel shortfall is $2\sqrt2\approx2.8$ times larger, because the p-channel devices have both the smaller $g_m$ and the larger $g_{ds}$. Hence **Circuit 5**, the n-channel follower with an n-channel current-sink load, has the highest small-signal voltage gain, $A_v\approx1-2g_{dsN}/g_{mN}$.
