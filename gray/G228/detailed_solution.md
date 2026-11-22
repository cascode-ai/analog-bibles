# Detailed solution - G228

Apply the zero-value time-constant method to both circuits: for each capacitor, find the resistance it sees with every other capacitor open and all sources zeroed, sum the products $R_{j0}C_j$ into $T_0$, and take $f_{-3\mathrm{dB}}\approx1/(2\pi T_0)$. The comparison hinges on the resistance seen by $C_{gd1}$.

### Step 1 — Device parameters

All devices carry 0.5 mA in saturation with $W/L=100/1.6=62.5$. From the square law, $g_m=\sqrt{2k_n'(W/L)I_D}$:

$$
g_m=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(62.5)(0.5\ \mathrm{mA})}=1.936\ \mathrm{mA/V},\qquad \frac1{g_m}=516\ \Omega .
$$

$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

Both stages have the same low-frequency gain, $-g_mR_L=-38.7$, because with $\lambda=0$ the common-gate device passes the signal current unchanged.

### Step 2 — Common-source stage

- $C_{gs}$ sees the source resistance: $R_{gs0}=R_S=10\ \mathrm{k\Omega}$.
- $C_{gd}$: a test current $i_x$ from gate to drain raises the gate by $i_xR_S$; the drain falls by $i_xR_L$ plus $g_m(i_xR_S)R_L$ from the controlled source. Hence

$$
R_{gd0}=R_S+R_L+g_mR_LR_S=10\ \mathrm{k\Omega}+20\ \mathrm{k\Omega}+(1.936\ \mathrm{mA/V})(20\ \mathrm{k\Omega})(10\ \mathrm{k\Omega})=417\ \mathrm{k\Omega}.
$$

$$
T_0=(10\ \mathrm{k\Omega})(74.7\ \mathrm{fF})+(417\ \mathrm{k\Omega})(14\ \mathrm{fF})=0.747\ \mathrm{ns}+5.84\ \mathrm{ns}=6.59\ \mathrm{ns},
\qquad f_{-3\mathrm{dB}}\approx\frac1{2\pi T_0}=24.2\ \mathrm{MHz}.
$$

The Miller term ($g_mR_L=38.7$ times $R_S$) makes $C_{gd}$ dominate.

### Step 3 — Cascode stage

Now the drain of $M_1$ is the source of $M_2$, node $x$. With all capacitors open, $v_{gs1}=0$ (no current in $R_S$), and the resistance looking into the source of $M_2$ (gate grounded, $\lambda=\gamma=0$) is $R_x=1/g_{m2}=516\ \Omega$.

- $C_{gs1}$: $R_S=10\ \mathrm{k\Omega}$, as before.
- $C_{gd1}$: the same test-current argument with $R_x$ replacing $R_L$:

$$
R_{gd1,0}=R_S+R_x+g_{m1}R_xR_S=10\ \mathrm{k\Omega}+516\ \Omega+\frac{g_{m1}}{g_{m2}}(10\ \mathrm{k\Omega})=20.5\ \mathrm{k\Omega}.
$$

- $C_{gs2}$ connects $x$ to ac ground: $R_{gs2,0}=1/g_{m2}=516\ \Omega$.
- $C_{gd2}$ connects the output to ac ground; looking into the drain of $M_2$ gives infinite resistance (because $\lambda=0$), so it sees $R_L=20\ \mathrm{k\Omega}$.

| Capacitor | $C$ (fF) | $R_{j0}$ | $R_{j0}C_j$ (ns) |
|---|---|---|---|
| $C_{gs1}$ | 74.7 | 10 kΩ | 0.747 |
| $C_{gd1}$ | 14 | 20.5 kΩ | 0.287 |
| $C_{gs2}$ | 74.7 | 516 Ω | 0.039 |
| $C_{gd2}$ | 14 | 20 kΩ | 0.280 |
| Sum $T_0$ | | | 1.35 |

$$
f_{-3\mathrm{dB}}\approx\frac1{2\pi(1.35\ \mathrm{ns})}=118\ \mathrm{MHz}.
$$

### Step 4 — Comparison

The cascode stage is about $6.59/1.35\approx4.9$ times faster at the same gain of −38.7. The gain from the gate to the drain of $M_1$ drops from $-g_mR_L=-38.7$ to $-g_{m1}/g_{m2}=-1$, so the Miller multiplication of $C_{gd1}$ disappears; its time constant falls from 5.84 ns to 0.287 ns. $C_{gd2}$ still sees $R_L$, but it is not multiplied because the gate of $M_2$ is grounded.

Solving the circuits exactly gives 24.3 MHz for the common-source stage and 144 MHz for the cascode. The estimate for the cascode is conservative because its time constants are of similar size, so the poles are not well separated.
