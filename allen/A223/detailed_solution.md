# Detailed solution - A223

The output resistance of a follower is the inverse of the total conductance at its output node with the input at ac ground: the follower's own $g_m$ plus whatever the second transistor adds. Write that conductance for each circuit, express it in units of $1/g_{mN}$ using the given ratios, and compare.

### Step 1 — Relating n- and p-channel parameters

All devices have the same $W/L$ and current $I$, so with the square law

$$
g_{m}=\sqrt{2K'\frac WL I}\quad\Rightarrow\quad g_{mP}=\sqrt{\frac{K'_P}{K'_N}}\,g_{mN}=\frac{g_{mN}}{\sqrt2},
$$

$$
g_{ds}=\lambda I\quad\Rightarrow\quad g_{dsP}=2g_{dsN}.
$$

### Step 2 — Output resistance of a follower stage

Let the follower have transconductance $g_{mF}$ and output conductance $g_{dsF}$, with its gate at $v_{in}$ and its source at the output. The second transistor connects the output to an ac ground and presents a load conductance $G_L$. Set $v_{in}=0$ and apply a test voltage $v_t$ at the output: the follower's gate–source voltage is then $\mp v_t$, so its controlled source draws $g_{mF}v_t$ out of the node, and

$$
i_t=(g_{mF}+g_{dsF}+G_L)\,v_t\quad\Rightarrow\quad
R_{out}=\frac{1}{g_{mF}+g_{dsF}+G_L}.
$$

The load conductance depends on how the second device is connected:

- **Diode-type load** (gate tied to a node that is at ac ground on the other side, so $|v_{gs}|=|v_{out}|$): $G_L=g_{m,load}+g_{ds,load}$. In Circuit 1 the n-channel M2 has gate and drain at the output; in Circuit 2 the p-channel M2 likewise. In Circuit 3 the p-channel M2 has its source at the output and its gate and drain at ground; in Circuit 4 the n-channel M2 has its source at the output and its gate and drain at $V_{DD}$. In all four, $v_{gs2}$ equals $\pm v_{out}$.
- **Current-source load** (gate at a fixed bias $V_{BN}$ or $V_{BP}$, Circuits 5 and 6): $v_{gs}=0$, so $G_L=g_{ds,load}$ only.

### Step 3 — Output resistances of the six circuits

Neglecting the $g_{ds}$ terms against the transconductances ($g_m\gg g_{ds}$) and using $g_{mP}=g_{mN}/\sqrt2$:

| Circuit | Follower | Load | $R_{out}$ | In units of $1/g_{mN}$ |
|---|---|---|---|---|
| 1 | n (M1) | n diode | $\dfrac{1}{2g_{mN}}$ | 0.50 |
| 2 | p (M1) | p diode | $\dfrac{1}{2g_{mP}}=\dfrac{\sqrt2}{2g_{mN}}$ | 0.71 |
| 3 | n (M1) | p diode to ground | $\dfrac{1}{g_{mN}+g_{mP}}$ | 0.59 |
| 4 | p (M1) | n diode from $V_{DD}$ | $\dfrac{1}{g_{mP}+g_{mN}}$ | 0.59 |
| 5 | n (M1) | n current sink | $\dfrac{1}{g_{mN}+2g_{dsN}}\approx\dfrac1{g_{mN}}$ | 1.00 |
| 6 | p (M2) | p current source | $\dfrac{1}{g_{mP}+2g_{dsP}}\approx\dfrac{\sqrt2}{g_{mN}}$ | 1.41 |

A representative entry, Circuit 3: $1/(g_{mN}+g_{mN}/\sqrt2)=(1/g_{mN})/1.707=0.586/g_{mN}$.

### Step 4 — Lowest output resistance: Circuit 1

The diode-loaded circuits (1–4) have two transconductances in parallel at the output, so the lowest value is among them. The largest sum is obtained when both are the larger n-channel value:

$$
R_{out,1}=\frac{1}{g_{mN}+g_{mN}}=\frac{1}{2g_{mN}}
<\frac{1}{g_{mN}+g_{mP}}=R_{out,3}=R_{out,4}
<\frac{1}{2g_{mP}}=R_{out,2}.
$$

Hence **Circuit 1**, the n-channel follower with an n-channel diode-connected load, has the lowest small-signal output resistance, $R_{out}=1/(2g_{mN})$. Circuits 1 and 2 are not a tie: $K'_N=2K'_P$ makes $g_{mN}=\sqrt2\,g_{mP}$.
