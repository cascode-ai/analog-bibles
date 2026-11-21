# Detailed solution - G287

Compute each measure with its own definition: the two-port loop gains split the circuit into a unilateral basic amplifier $a$ and a feedback network $f$, using $h$-parameters for the series-shunt connection of [Fig. 1] and $y$-parameters for the shunt-shunt connection of [Fig. 2]; the return ratio breaks the loop at the controlled source $a_v$ with all independent sources zeroed. Then trace the difference to what each method treats as "no feedback".

### Step 1 — $h$-parameter loop gain of [Fig. 1]

For the $R_1$–$R_2$ network, $h_{11f}=R_1\|R_2=66.7\ \mathrm{k\Omega}$ (output shorted) is placed in series with the op-amp input, $1/h_{22f}=R_1+R_2=300\ \mathrm{k\Omega}$ (input open) across the output, and $f=h_{12f}=R_1/(R_1+R_2)=2/3$. The loaded basic amplifier is two dividers times $a_v$:
$$
a=a_v\frac{R_i}{R_i+h_{11f}}\cdot\frac{R_1+R_2}{R_1+R_2+R_o}
=1000\cdot\frac{50}{116.7}\cdot\frac{300}{1300}=98.9,
\qquad T_h=af=65.9 .
$$

### Step 2 — $y$-parameter loop gain of [Fig. 2]

For the network $R_2$, $1/y_{11f}=1/y_{22f}=R_2$ load both ports and $f=y_{12f}=-1/R_2$. The input current flows into $R_1\|R_2\|R_i=28.57\ \mathrm{k\Omega}$, with $v_x=-v_-$, and $a_vv_x$ drives $R_2$ through $R_o$:
$$
a=-(R_1\|R_2\|R_i)\,a_v\frac{R_2}{R_2+R_o}=-(28.57\ \mathrm{k\Omega})(1000)\frac{100}{1100}=-2.60\ \mathrm{M\Omega},
\qquad T_y=af=26.0 .
$$

### Step 3 — Return ratio of $a_v$

Zeroing $V_i$ (short) in [Fig. 1] or $I_i$ (open) in [Fig. 2] leaves the same network: the non-inverting input grounded, $R_1\|R_i=40\ \mathrm{k\Omega}$ from the inverting node to ground, and $R_o+R_2$ from the controlled source to that node. A test source $v_t$ produces $v_x=-v_-$, so
$$
\mathcal R=a_v\frac{R_1\|R_i}{R_o+R_2+R_1\|R_i}=1000\cdot\frac{40}{1140}=35.1
$$
for both circuits.

### Step 4 — Why the three numbers differ

The $h$ and $y$ descriptions of each two-port are exact; the difference comes from how each split defines the loop. A two-port $T$ takes "no feedback" as $h_{12f}=0$ (or $y_{12f}=0$) while freezing the network's loading at its short- or open-circuit value. The return ratio takes "no feedback" as $a_v=0$ and keeps the network's bilateral coupling. In $h$-parameter form,
$$
\mathcal R=\frac{-h_{21a}h_{12f}}{h_{11}h_{22}-h_{21f}h_{12f}},
$$
with $h_{11}$, $h_{22}$ the summed port parameters; the $h_{21f}h_{12f}$ term is absent from $af$ (and likewise for $y$).

The physical effect is the load seen by the op-amp output resistance $R_o$, which is large here:

| Method | Load on $R_o$ | Loop measure |
|---|---|---|
| $h$ split | $R_1+R_2=300\ \mathrm{k\Omega}$ | 65.9 |
| $y$ split | $R_2=100\ \mathrm{k\Omega}$ | 26.0 |
| return ratio | $R_2+R_1\|R_i=140\ \mathrm{k\Omega}$ | 35.1 |

Only the return-ratio load is the actual one. Dropping the feed-forward terms $h_{21f}$, $y_{21f}$ is not the cause: keeping them gives 66.8 and 25.7, within about 1% of 65.9 and 26.0. The ratios $T_h/\mathcal R=171/91=1.88$ and $T_y/\mathcal R=57/77=0.74$ are independent of $a_v$. They are far from 1 because $R_o$ is large compared with the feedback resistors and $R_i$ is comparable to them; with $R_o\to0$ all three become 285.7.

The return ratio is defined for one controlled source with all independent sources zeroed, so it is unique for a given circuit and the same for both input connections, whereas each two-port $T$ depends on the representation chosen for the feedback type. Despite the different $T$ values, the closed-loop gains agree closely: for [Fig. 1], $a/(1+T_h)=1.4776$, while the return-ratio result with $A_\infty=1.5$ and $d=0.70$ is $A_\infty\mathcal R/(1+\mathcal R)+d/(1+\mathcal R)=1.4779$.
