# Detailed solution - A221

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

### Step 4 — Lowest gain: Circuit 4

Only the diode-loaded circuits (1–4) are far from unity, so the lowest gain is among them. Each is a divider between the follower's $g_m$ and the load's $g_m$:

$$
A_{v1}\approx\frac{g_{mN}}{g_{mN}+g_{mN}}=0.5,\qquad A_{v2}\approx\frac{g_{mP}}{g_{mP}+g_{mP}}=0.5,
$$

$$
A_{v3}\approx\frac{g_{mN}}{g_{mN}+g_{mP}}=\frac{1}{1+1/\sqrt2}=0.586,\qquad
A_{v4}\approx\frac{g_{mP}}{g_{mP}+g_{mN}}=\frac{1}{1+\sqrt2}=0.414 .
$$

When follower and load are of the same type (Circuits 1, 2) the two transconductances are equal and the gain is one half. In Circuit 4 the weaker p-channel follower ($g_{mP}=g_{mN}/\sqrt2$) drives the stronger n-channel diode load, so the divider ratio drops below one half. Hence **Circuit 4**, the p-channel follower M1 with the n-channel diode-type load M2 from $V_{DD}$, has the lowest small-signal voltage gain, $A_v=g_{mP}/(g_{mP}+g_{mN})=1/(1+\sqrt2)\approx0.41$. Circuits 5 and 6 are near 1.
