# Detailed solution - grsim-08-23

$M_2$ and $R_1$ set a reference current that $M_3$ and $M_5$ mirror into the drains of $M_1$ and $M_6$. Because $V_{GD6}=0$, the drain of $M_1$ and the output are at the same dc voltage, so $M_4$ has $V_{DS}=0$: it carries no dc current and acts as a linear resistor whose value is set by $V_c$. First solve the bias. Then find $M_4$'s resistance (with body effect), derive the gain and output resistance from the node equations, and compare with ngspice. Finally, explain the large-signal transfer characteristic for both control voltages.

### Step 1 — Bias currents

$M_2$ is diode-connected and saturated, with $\tfrac12\mu_pC_{ox}(W/L)=300\ \mu\mathrm{A/V^2}$, so

$$
300\ \mu\mathrm{A/V^2}\,(V_{SG2}-0.8)^2=\frac{5-V_{SG2}}{10\ \mathrm{k\Omega}}\ \Rightarrow\ V_{SG2}=1.828\ \mathrm{V},\qquad I=317\ \mu\mathrm{A}.
$$

$M_3$ and $M_5$ have the same $W/L$ and $V_{SG}$, and $\lambda=0$, so they also carry 317 µA. With no dc current in $M_4$, all of $M_3$'s current flows in $M_1$, and all of $M_5$'s current in $M_6$:

$$
I_{D1}=I_{D6}=317\ \mu\mathrm{A},\qquad V_{GS1}=V_{GS6}=0.8+\sqrt{\frac{317\ \mu\mathrm{A}}{600\ \mu\mathrm{A/V^2}}}=1.527\ \mathrm{V}.
$$

The input bias is therefore $V_i=V_{GS1}=1.527$ V, and $V_o=V_{GS6}=1.527$ V; $M_1$ and $M_6$ have $V_{DS}=V_{GS}$ and are saturated. $I_{D4}=0$.

### Step 2 — $M_4$ as a controlled resistor

At $V_{DS}=0$ the triode equation $I_D=\mu_nC_{ox}(W/L)[(V_{GS}-V_t)V_{DS}-V_{DS}^2/2]$ gives a small-signal channel resistance

$$
R_4=\frac{1}{\mu_nC_{ox}(W/L)_4(V_{GS4}-V_{t4})},\qquad \mu_nC_{ox}(W/L)_4=(60\ \mu\mathrm{A/V^2})(5/2)=150\ \mu\mathrm{A/V^2}.
$$

Both channel ends sit at 1.527 V above the grounded body, so the threshold includes the body effect:

$$
V_{t4}=0.8+0.5\left(\sqrt{0.6+1.527}-\sqrt{0.6}\right)=1.142\ \mathrm{V}.
$$

| $V_c$ | $V_{GS4}-V_{t4}$ | $R_4$ |
|---|---|---|
| 3 V | $3-1.527-1.142=0.331$ V | 20.1 kΩ |
| 4 V | 1.331 V | 5.01 kΩ |

Ignoring the body effect would give $V_{t4}=0.8$ V and quite different resistances (9.9 kΩ and 4.0 kΩ, gains of about 7.6 and 2.5).

### Step 3 — Small-signal gain and output resistance

$g_{m1}=g_{m6}=2I_D/(V_{GS}-V_t)=2(317\ \mu\mathrm{A})/0.727\ \mathrm{V}=0.872$ mS. With $\lambda=0$, $M_3$ and $M_5$ are open circuits for signals. Let $v_a$ be the drain of $M_1$. KCL at node $a$ and at the output $o$ gives:

$$
\begin{aligned}
a:&\quad \frac{v_o-v_a}{R_4}=g_{m1}v_i,\\
o:&\quad g_{m6}v_a+\frac{v_o-v_a}{R_4}=0 .
\end{aligned}
$$

The second equation gives $v_a=-(g_{m1}/g_{m6})v_i=-v_i$, and the first then gives $v_o=v_a+g_{m1}R_4v_i$:

$$
\frac{v_o}{v_i}=g_{m1}R_4-\frac{g_{m1}}{g_{m6}}=g_{m1}R_4-1 .
$$

| $V_c$ | $g_{m1}R_4$ | $v_o/v_i$ |
|---|---|---|
| 3 V | 17.5 | 16.5 |
| 4 V | 4.37 | 3.37 |

The gain is non-inverting: $M_1$ inverts into node $a$, and $M_6$ inverts again.

For the output resistance, short the input. Then $M_1$ carries no signal current, so no current flows in $M_4$ and $v_a=v_o$: $M_6$ behaves as a diode-connected device, and

$$
R_{\text{out}}=\frac{1}{g_{m6}}=1.15\ \mathrm{k\Omega},
$$

independent of $V_c$.

### Step 4 — SPICE comparison

Level-1 models with the given $\mu C_{ox}$, $V_t$, $\lambda=0$, $\gamma=0.5\ \mathrm{V^{1/2}}$ and $2\phi_f=0.6$ V (`phi=0.6`) are used, with all bodies at their supply rails (NMOS at ground, PMOS at $V_{DD}$). $V_i$ is set to the computed 1.52708 V. The output resistance uses a 1-A ac current into the output with the input source's ac value set to zero.

```spice
* grsim-08-23 variable-gain amplifier
.model nm nmos level=1 kp=60u vto=0.8 lambda=0 gamma=0.5 phi=0.6
.model pm pmos level=1 kp=30u vto=-0.8 lambda=0 gamma=0.5 phi=0.6
VDD vdd 0 5
M2 g2 g2 vdd vdd pm w=20u l=1u
R1 g2 0 10k
M3 a g2 vdd vdd pm w=20u l=1u
M5 o g2 vdd vdd pm w=20u l=1u
M1 a in 0 0 nm w=20u l=1u
M6 o a 0 0 nm w=20u l=1u
M4 a vc o 0 nm w=5u l=2u
Vc vc 0 3
Vi in 0 dc 1.52708 ac 1
.op
.ac lin 1 1k 1k
.dc Vi 0 3 2m
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $I_{D1}$, $I_{D2}$, $I_{D3}$, $I_{D5}$, $I_{D6}$ | 317 µA | 317.2 µA |
| $I_{D4}$ | 0 | −0.01 µA |
| $V_o$ | 1.527 V | 1.5273 V |
| $R_4$, $V_c=3$ V / 4 V | 20.1 kΩ / 5.01 kΩ | 20.15 kΩ / 5.01 kΩ |
| Gain, $V_c=3$ V | 16.5 | 16.58 |
| Gain, $V_c=4$ V | 3.37 | 3.370 |
| $R_{\text{out}}$ (both) | 1.15 kΩ | 1.147 kΩ / 1.146 kΩ |

### Step 5 — Large-signal transfer characteristic

![Output voltage versus input voltage from 0 to 3 V for Vc = 3 V (solid) and Vc = 4 V (dashed): both pass through 1.527 V at Vi = 1.527 V; the 3-V curve rises steeply to a peak of 4.84 V and then sags to 4.37 V; the 4-V curve rises more gently to about 4.16 V near Vi = 1.78 V and then falls back to about 1.1 V](/q/grsim-08-23/solution-transfer.svg)

- **$V_i$ below about 1 V.** $M_1$ is off, so $M_3$'s 317 µA flows through $M_4$ into the output node, where $M_6$ (gate pulled high) sinks it with a small $V_{DS}$. The output is low: 0.15 V for $V_c=3$ V, and 0.69 V for $V_c=4$ V, where $M_4$ conducts more strongly.
- **Around the operating point.** Both curves pass through $V_i=V_o=1.527$ V with the slopes found above (16.6 and 3.37). The higher gain gives the narrower linear input range: about 1.50–1.56 V for $V_c=3$ V versus about 1.3–1.75 V for $V_c=4$ V.
- **Large $V_i$.** $M_1$ pulls node $a$ low and $M_6$ turns off. The output current of $M_5$ (at most 317 µA) can then only flow through $M_4$ into $M_1$, so the output settles where $M_4$ can pass that current.
  - **$V_c=3$ V.** At $V_i=3$ V, node $a$ is near 0.25 V, and $M_4$ ($V_{GS4}-V_{t4}\approx1.87$ V) saturates at $\tfrac12(150\ \mu\mathrm{A/V^2})(1.87)^2\approx264\ \mu$A, less than 317 µA. $M_5$ therefore enters the triode region and the output stays high: it peaks at 4.84 V near $V_i=1.6$ V and sags slowly to 4.37 V at $V_i=3$ V.
  - **$V_c=4$ V.** $M_4$ ($V_{GS4}-V_{t4}\approx2.87$ V) can pass 317 µA in the triode region with only about 0.87 V across it. The output therefore rises only to about 4.16 V (near $V_i=1.78$ V) and then falls back toward $v_a+0.87\ \mathrm{V}\approx1.1$ V. The two steep segments near $V_i=1.75$ V and 1.82 V are where $M_4$ passes between saturation and triode.

The characteristic is non-inverting around the operating point, but it is not monotonic over the whole input range, especially for $V_c=4$ V.
