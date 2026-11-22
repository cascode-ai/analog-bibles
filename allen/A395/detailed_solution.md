# Detailed solution - A395

Find the balanced bias currents from the mirror relations between the diode loads and the cross-coupled devices. Then break the loop at the gate of M6 and follow a test signal around it: each cross-coupled transistor is a transconductor driving the opposite output node, which is loaded mainly by its diode.

### Step 1 — Balanced bias currents

At balance $i_1=i_2=i_5/2=10\ \mu$A. M6 has its gate at $v_{o1}$, the gate and drain of diode M3, so M6 and M3 share $V_{SG}$ and M6 mirrors M3 with ratio $(W/L)_6/(W/L)_3=10/2=5$; likewise M7 mirrors M4. Hence $i_6=5i_3$ and $i_7=5i_4$.

KCL at $v_{o1}$: M1 draws $i_1$, supplied by the diode M3 and by M7, whose drain is at $v_{o1}$. By symmetry $i_3=i_4$, so

$$
i_1=i_3+i_7=i_3+5i_3=6i_3
\quad\Rightarrow\quad
i_3=i_4=\frac{10\ \mu\mathrm A}6=1.67\ \mu\mathrm A,\qquad i_6=i_7=8.33\ \mu\mathrm A .
$$

### Step 2 — Small-signal parameters

With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

| Parameter | Value |
|---|---|
| $g_{m3}=g_{m4}=\sqrt{2(50)(2)(1.67)}\ \mu\mathrm S$ | 18.26 µS |
| $g_{m6}=g_{m7}=\sqrt{2(50)(10)(8.33)}\ \mu\mathrm S$ | 91.29 µS |
| $g_{ds3}=g_{ds4}=0.05(1.67)\ \mu\mathrm S$ | 0.083 µS |
| $g_{ds6}=g_{ds7}=0.05(8.33)\ \mu\mathrm S$ | 0.417 µS |
| $g_{ds1}=g_{ds2}=0.04(10)\ \mu\mathrm S$ | 0.400 µS |

### Step 3 — Break the loop and trace the signal

Disconnect the gate of M6 from $v_{o1}$ and apply a test voltage $v_t$ to it. With the tail node an ac ground for this antisymmetric signal, M6 changes the current it sources into $v_{o2}$ by $-g_{m6}v_t$ (a higher gate voltage lowers the PMOS current). The total conductance at $v_{o2}$ is the diode M4 plus the output conductances of M4, M6 and M2:

$$
G_2=g_{m4}+g_{ds4}+g_{ds6}+g_{ds2}=18.26+0.083+0.417+0.400=19.16\ \mu\mathrm S,
\qquad v_{o2}=-\frac{g_{m6}}{G_2}v_t .
$$

M7, with its gate at $v_{o2}$, acts the same way on $v_{o1}$, whose conductance $G_1=g_{m3}+g_{ds3}+g_{ds7}+g_{ds1}$ equals $G_2$ by symmetry:

$$
v_{o1}=-\frac{g_{m7}}{G_1}v_{o2}=\frac{g_{m6}g_{m7}}{G_1G_2}v_t .
$$

### Step 4 — Loop gain

The two inversions cancel, so the feedback is positive:

$$
LG=\frac{g_{m6}g_{m7}}{G_1G_2}=\left(\frac{91.29\ \mu\mathrm S}{19.16\ \mu\mathrm S}\right)^2=(4.77)^2=22.7 .
$$

If the output conductances are neglected, $G\approx g_{m3}$ and, because M6 and M3 share $V_{SG}$, $g_{m6}/g_{m3}=i_6/i_3=5$, so $LG=5^2=25$.

A positive loop gain greater than 1 means the balanced state is unstable: any imbalance is regenerated until one cross-coupled device takes over, so the stage latches and exhibits hysteresis. The loop gain drops below 1, and the hysteresis disappears, only when $(W/L)_6/(W/L)_3<1$.
