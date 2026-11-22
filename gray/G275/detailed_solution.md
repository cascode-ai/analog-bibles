# Detailed solution - G275

Take the controlled source $g_mv_{gs}$ as the reference. Find its return ratio with the input current source zeroed (open), the asymptotic gain $A_\infty$ ($g_m\to\infty$) and the feedthrough $d$ ($g_m=0$), and use Blackman's formula for both port resistances. Because the gate draws no current and $r_o=\infty$, every quantity has a simple closed form and the results are exact.

### Step 1 — Transconductance

$$
g_m=\sqrt{2k'(W/L)I_D}=\sqrt{2\left(180\ \mu\mathrm{A/V^2}\right)(100)(0.5\ \mathrm{mA})}=4.243\ \mathrm{mA/V}.
$$

### Step 2 — Return ratio

With $i_i=0$ the gate node connects only to $R_F$, so $R_F$ carries no current: $v_g=v_d$. Replace $g_mv_{gs}$ by a test current $i_t$ drawn from the drain node. It flows through $R_L$ alone, so $v_d=-i_tR_L$ and $v_{gs}=v_d$. The returned current is $g_mv_{gs}=-g_mR_L\,i_t$:

$$
\mathcal R=g_mR_L=(4.243\ \mathrm{mA/V})(15\ \mathrm{k\Omega})=63.6 .
$$

This is larger than the two-port loop gain (55.3) because, with the input open, $R_F$ does not load the drain.

### Step 3 — Asymptotic gain, feedthrough and transresistance

As $g_m\to\infty$, $v_{gs}\to0$, so the gate is a virtual ground and $i_i$ flows entirely through $R_F$: $A_\infty=-R_F=-100\ \mathrm{k\Omega}$.

With $g_m=0$, $i_i$ flows through $R_F$ into $R_L$, so $d=v_o/i_i=+R_L=15\ \mathrm{k\Omega}$.

$$
\frac{v_o}{i_i}=(-100\ \mathrm{k\Omega})\frac{63.64}{64.64}+\frac{15\ \mathrm{k\Omega}}{64.64}=-98{,}453\ \Omega+232\ \Omega=-98.2\ \mathrm{k\Omega},
$$

which equals the exact closed form $R_L(1-g_mR_F)/(1+g_mR_L)$.

### Step 4 — Input and output resistances (Blackman)

- Input: with $g_m=0$, $i_i$ sees $R_F+R_L=115\ \mathrm{k\Omega}$. Shorting the input forces $v_{gs}=0$, so $\mathcal R(\text{short})=0$; with the input open, $\mathcal R(\text{open})=63.6$.

$$
R_{in}=\frac{115\ \mathrm{k\Omega}}{1+63.64}=1.78\ \mathrm{k\Omega}.
$$

- Output: with $g_m=0$ the output sees $R_L$ ($R_F$ leads only to the open gate). Shorting the output makes $v_g=v_d=0$, so $\mathcal R(\text{short})=0$; otherwise $\mathcal R=63.6$.

$$
R_{out}=\frac{15\ \mathrm{k\Omega}}{1+63.64}=232\ \Omega .
$$

All four results coincide with the direct nodal solution; the return-ratio method includes the feedforward through $R_F$ (the term $d$), which the two-port method neglects.
