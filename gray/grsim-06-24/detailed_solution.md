# Detailed solution - grsim-06-24

For part (a), write the voltage of each node in the signal path relative to $-V_{SS}$ and require every transistor to stay in the active region. For part (b), the level shift is two stacked gate-source drops, and its small-signal resistance is $1/g_m$ of the device that carries the battery current. A dc sweep in ngspice gives the $I$–$V$ curve.

### Step 1 — (a) Node voltages in the first stage

Call the input transistors $M_1$ (threshold $V_{t1}$), the diode-connected mirror device $M_3$ (threshold $V_{t3}$), and the tail transistor $M_T$. All n-channel devices have overdrive $V_{ovn}$ and the p-channel sources $|V_{ovp}|$; a device is active when $|V_{DS}|\ge|V_{ov}|$.

The mirror diode sits at $-V_{SS}+V_{t3}+V_{ovn}$. The battery adds $V$, so each input drain sits at

$$
V_{D1}=-V_{SS}+V_{t3}+V_{ovn}+V ,
$$

independent of the input common-mode level $V_{IC}$. The common source of the input pair is at $V_{IC}-V_{t1}-V_{ovn}$.

### Step 2 — (a) Input common-mode range

- **Lower limit**: the tail transistor needs $V_{DS}\ge V_{ovn}$, i.e. $V_{IC}-V_{t1}-V_{ovn}\ge-V_{SS}+V_{ovn}$.
- **Upper limit**: the input transistors need $V_{GD}\le V_{t1}$, i.e. $V_{IC}\le V_{D1}+V_{t1}$.

$$
-V_{SS}+V_{t1}+2V_{ovn}\;\le\;V_{IC}\;\le\;-V_{SS}+V_{t1}+V_{t3}+V_{ovn}+V .
$$

The p-channel sources $I_3$ must also stay active, $V_{DD}-V_{D1}\ge|V_{ovp}|$, which limits the level shift:

$$
V\le V_{DD}+V_{SS}-V_{t3}-V_{ovn}-|V_{ovp}| .
$$

At that largest $V$ the upper limit becomes $V_{DD}-|V_{ovp}|+V_{t1}$, above $V_{DD}$. The level shift therefore lets the first-stage drains sit high, so the input range can include the positive supply, while the mirror and the second-stage gate stay one $V_{GS}$ above $-V_{SS}$.

### Step 3 — (a) Output swing

Only the common-source n-channel driver and its p-channel load $I_2$ are in the output path, so

$$
-V_{SS}+V_{ovn}\;\le\;V_O\;\le\;V_{DD}-|V_{ovp}|,\qquad
V_{O,\text{p-p}}=V_{DD}+V_{SS}-V_{ovn}-|V_{ovp}| .
$$

The swing does not depend on $V$ or on any threshold.

### Step 4 — (b) Battery voltage and small-signal resistance

In [Fig. 2], $M_1$ (gate at +, drain at $V_{DD}$) carries the fixed $I_B$, and its source drives the gate of $M_2$, which carries the battery current $I$ from + to −. Going from + down through $V_{GS1}$ and then $V_{GS2}$:

$$
V=V_{GS1}+V_{GS2}=2V_t+V_{ov1}+V_{ov2}.
$$

For a small change $v$ at fixed $I_B$, $v_{gs1}=0$, so $v_{gs2}=v$ and the current changes by $g_{m2}v$:

$$
r=\frac{v}{i}=\frac1{g_{m2}}=\frac{V_{ov2}}{2I}.
$$

### Step 5 — (b) Design for 1.5 V and $r<1\ \mathrm{k\Omega}$ at 100 µA

$V=1.5$ V with $V_t=0.6$ V requires $V_{ov1}+V_{ov2}=0.3$ V, and $r<1\ \mathrm{k\Omega}$ at 100 µA requires $V_{ov2}<2(100\ \mu\mathrm A)(1\ \mathrm{k\Omega})=0.2$ V. Choose $V_{ov1}=V_{ov2}=0.15$ V:

$$
\left(\frac WL\right)_1=\left(\frac WL\right)_2=\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.15\ \mathrm V)^2}=45.8,\qquad
r=\frac{0.15\ \mathrm V}{2(100\ \mu\mathrm A)}=750\ \Omega .
$$

(Another valid choice is $V_{ov2}=0.1$ V, $V_{ov1}=0.2$ V, giving $(W/L)_2=103$, $(W/L)_1=25.8$ and $r=500\ \Omega$.)

### Step 6 — (b) Large-signal $I$–$V$ characteristic

With the lower end at $-V_{SS}$, $M_2$'s gate-source voltage is $V-V_{GS1}=V-0.75$ V. It conducts once that exceeds $V_t$, i.e. for $V>1.35$ V. It is then saturated, since $V_{DS2}=V>V_{GS2}-V_t=V-1.35$ V, so

$$
I=\tfrac12\mu_nC_{ox}\left(\tfrac WL\right)_2(V-1.35\ \mathrm V)^2=100\ \mu\mathrm A\left(\frac{V-1.35\ \mathrm V}{0.15\ \mathrm V}\right)^2\quad(V>1.35\ \mathrm V),
$$

and $I=0$ below. This gives 100 µA at 1.5 V and 400 µA at 1.65 V.

```spice
* grsim-06-24 active level shift (Fig. 2), lower end at -VSS
.model nm nmos level=1 kp=194u vto=0.6 lambda=0 gamma=0
VDD vdd 0 1.65
VSS vss 0 -1.65
IB  s vss 100u
M1  vdd p s   vss nm w=45.8u l=1u
M2  p   s vss vss nm w=45.8u l=1u
VV  p vss 0
.dc VV 0 1.65 1m
.end
```

![Simulated I–V of the level shift: zero below 1.35 V, then a parabola through 100 µA at 1.5 V](/q/grsim-06-24/solution-iv.svg)

| $V$ (V) | ≤ 1.35 | 1.40 | 1.45 | 1.50 | 1.55 | 1.60 | 1.65 |
|---|---|---|---|---|---|---|---|
| $I$, hand (µA) | 0 | 11.1 | 44.4 | 100 | 178 | 278 | 400 |
| $I$, ngspice (µA) | 0 | 11.1 | 44.4 | 99.9 | 177.6 | 277.6 | 399.8 |

The simulation gives a battery voltage of 1.5001 V at 100 µA and a slope resistance of 750 Ω there, meeting both specifications. Below about $V_{GS1}=0.75$ V the ideal $I_B$ pulls $M_1$'s source below $-V_{SS}$. A transistor current source would instead collapse in that region, which does not matter because $I$ is already zero.
