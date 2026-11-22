# Detailed solution - G083

All three gates in the stack share one node, so fix that node's voltage from the saturated top device $M_8$. Then find which region $M_7$ and $M_6$ are in, and choose their sizes so they carry the same current at $V_{DS}=V_{ov}$. The three nodes of the stack differ by exactly one overdrive. Raised by one $V_t+V_{ov}$, they provide the three gate voltages a double-cascode output branch needs to keep every device at the edge of saturation. The mirror results follow from the cascode output-resistance formula applied twice and from the voltages along each branch. Let $I=\tfrac{k'}2(W/L)V_{ov}^2$ be the current set by $M_8$.

### Step 1 — Voltages in the stack

Measure voltages from the source of $M_6$. With $V_{DS6}=V_{DS7}=V_{ov}$, the source of $M_8$ is at $2V_{ov}$. $M_8$ is diode-connected, so it is saturated with $V_{GS8}=V_t+V_{ov}$, and the common gate is at

$$
V_G=2V_{ov}+V_t+V_{ov}=V_t+3V_{ov}.
$$

$M_7$ then has $V_{GS7}=V_G-V_{ov}=V_t+2V_{ov}$ and $M_6$ has $V_{GS6}=V_t+3V_{ov}$. In both, $V_{DS}=V_{ov}$ is less than $V_{GS}-V_t$ ($2V_{ov}$ and $3V_{ov}$), so both are in the triode region.

### Step 2 — Size $M_7$ and $M_6$ with the triode equation

Each must carry $I$ in the triode region, $I_D=k'(W/L)[(V_{GS}-V_t)V_{DS}-V_{DS}^2/2]$. For $M_7$:

$$
I=k'\left(\frac WL\right)_7\left[(2V_{ov})V_{ov}-\frac{V_{ov}^2}2\right]=\frac32k'\left(\frac WL\right)_7V_{ov}^2=\frac{k'}2\frac WLV_{ov}^2
\quad\Rightarrow\quad\left(\frac WL\right)_7=\frac13\frac WL .
$$

For $M_6$:

$$
I=k'\left(\frac WL\right)_6\left[(3V_{ov})V_{ov}-\frac{V_{ov}^2}2\right]=\frac52k'\left(\frac WL\right)_6V_{ov}^2
\quad\Rightarrow\quad\left(\frac WL\right)_6=\frac15\frac WL .
$$

The lower device sees a larger gate drive, so it must be narrower to drop the same $V_{ov}$.

### Step 3 — The double-cascode mirror

An output branch $M_1$ (bottom), $M_2$, $M_3$, all of size $W/L$ and carrying $I$, is held at the edge of saturation with $V_{DS1}=V_{DS2}=V_{ov}$ when its gates are at

$$
V_{G1}=V_t+V_{ov},\qquad V_{G2}=V_{ov}+(V_t+V_{ov})=V_t+2V_{ov},\qquad V_{G3}=2V_{ov}+(V_t+V_{ov})=V_t+3V_{ov}.
$$

If the source of $M_6$ sits at $V_t+V_{ov}$ instead of ground, the stack nodes are at $V_t+V_{ov}$ (source of $M_6$), $V_t+2V_{ov}$ (drain of $M_6$) and $V_t+3V_{ov}$ (drain of $M_7$), exactly these three values.

The input branch, carrying $I_{IN}$ from the top, is the stack $M_8$, $M_7$, $M_6$ placed on a replica of the output branch: $M_C$, $M_B$, $M_A$ (top to bottom, all $W/L$). The source of $M_6$ connects to the drain of $M_C$, and that node drives the gates of $M_A$ and $M_1$. The drain of $M_6$ drives the gates of $M_B$ and $M_2$. The drain of $M_7$ drives the gates of $M_C$ and $M_3$. The output is the drain of $M_3$.

<!-- diagram: diagram-01.cir -->

The replica branch acts as one diode: its top node feeds back to the gate of $M_A$, which sets $V_{GS}=V_t+V_{ov}$ for $I_{IN}$. Its internal nodes settle at $V_{ov}$ and $2V_{ov}$, as in the output branch. A level-1 simulation with $V_t=0.6$ V and $V_{ov}=0.2$ V gives the node voltages 0.2, 0.4, 0.8, 1.0, 1.2 and 2.0 V exactly as predicted. $M_C$ has its drain at $V_t+V_{ov}$ and its source at $2V_{ov}$, so $V_{DS,C}=V_t-V_{ov}$. It stays saturated only if $V_t\ge2V_{ov}$.

### Step 4 — Output resistance

$M_1$ has fixed gate and source, so it presents $r_{o1}$. Each cascode device multiplies the resistance below it, $R_{\text{up}}=r_o(1+g_mR_{\text{down}})+R_{\text{down}}$:

$$
R_{o2}=r_{o2}(1+g_{m2}r_{o1})+r_{o1}\approx g_mr_o^2,
$$

$$
R_o=r_{o3}(1+g_{m3}R_{o2})+R_{o2}\approx r_o(1+g_mr_o)^2\approx g_m^2r_o^3 .
$$

### Step 5 — Minimum output voltage and input-branch voltage

The output branch stays in the active region while $V_{DS1}\ge V_{ov}$, $V_{DS2}\ge V_{ov}$ and $V_{DS3}\ge V_{ov}$. The bias holds the first two at exactly $V_{ov}$, so

$$
V_{OUT(\min)}=V_{DS1}+V_{DS2}+V_{ov3}=3V_{ov}.
$$

The input branch drops $V_t+V_{ov}$ across the replica ($M_A$–$M_C$), plus $V_{ov}+V_{ov}$ across $M_6$ and $M_7$, plus $V_t+V_{ov}$ across $M_8$:

$$
V_{IN}=(V_t+V_{ov})+2V_{ov}+(V_t+V_{ov})=2V_t+4V_{ov}.
$$

### Step 6 — Systematic gain error

$M_A$ and $M_1$ have the same gate voltage and the same $V_{DS}=V_{ov}$, and so do $M_B$ and $M_2$. The only mismatch in terminal voltages is $V_{DS}$ of $M_C$ ($V_t-V_{ov}$) versus $M_3$ ($V_{OUT}-2V_{ov}$). Its effect on the current reaching $M_1$ is attenuated by the two cascode levels, roughly by $(g_mr_o)^2$. The systematic gain error is therefore

$$
\epsilon\approx0 .
$$

If a single diode-connected device of size $W/L$ replaced the replica branch, the gate voltages and the results of Steps 4–5 would be unchanged. That device would sit at $V_{DS}=V_t+V_{ov}$ while $M_1$ sits at $V_{ov}$, however, giving $\epsilon\approx-\lambda V_t$, a few percent.
