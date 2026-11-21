# Detailed solution - G277

Take the controlled source $g_mv_{be}$ as the reference. Compute its return ratio with the input current source open, the asymptotic gain and the direct feedthrough, then use Blackman's formula for the port resistances. Because $r_\pi$ connects the base to ground, $R_F$ carries current even with the input open, so it loads the collector in the return-ratio calculation.

### Step 1 — Small-signal parameters

$g_m=I_C/V_T=38.46$ mA/V, $r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$, $r_o=V_A/I_C=100\ \mathrm{k\Omega}$; let $R'_L=R_L\parallel r_o=1961\ \Omega$.

### Step 2 — Return ratio

With $i_i=0$, replace $g_mv_{be}$ by a test current $i_t$ drawn from the collector node. That node sees $R'_L$ in parallel with the path $R_F+r_\pi$ to ground, and $r_\pi$ takes a fraction of the collector voltage back to the base:

$$
R_c=R'_L\parallel(R_F+r_\pi)=1961\ \Omega\parallel7.2\ \mathrm{k\Omega}=1541\ \Omega,\qquad
\frac{v_{be}}{v_c}=\frac{r_\pi}{r_\pi+R_F}=0.722 .
$$

With $v_c=-i_tR_c$, the returned current is $g_mv_{be}=-g_m(0.722)R_c\,i_t$:

$$
\mathcal R=g_m R_c\,(0.722)=(38.46\ \mathrm{mA/V})(1541\ \Omega)(0.722)=42.8 .
$$

### Step 3 — Transresistance

As $g_m\to\infty$, $v_{be}\to0$; no current flows in $r_\pi$, all of $i_i$ flows through $R_F$, and $A_\infty=-R_F=-2\ \mathrm{k\Omega}$.

With $g_m=0$, $i_i$ sees $r_\pi\parallel(R_F+R'_L)=2248\ \Omega$, and $R_F$, $R'_L$ divide that voltage to the output:

$$
d=2248\ \Omega\cdot\frac{1961\ \Omega}{2\ \mathrm{k\Omega}+1961\ \Omega}=1113\ \Omega .
$$

$$
\frac{v_o}{i_i}=(-2000\ \Omega)\frac{42.8}{43.8}+\frac{1113\ \Omega}{43.8}=-1954\ \Omega+25.4\ \Omega=-1929\ \Omega\approx-1.93\ \mathrm{k\Omega}.
$$

The feedthrough contributes about 1.3% of the result.

### Step 4 — Input and output resistances (Blackman)

In both cases shorting the port makes $v_{be}=0$ (input) or $v_c=0$ (output), so $\mathcal R(\text{short})=0$; with the port open, $\mathcal R(\text{open})=42.8$.

$$
R_{in}=\frac{r_\pi\parallel(R_F+R'_L)}{1+\mathcal R}=\frac{2248\ \Omega}{43.8}=51.3\ \Omega,\qquad
R_{out}=\frac{R'_L\parallel(R_F+r_\pi)}{1+\mathcal R}=\frac{1541\ \Omega}{43.8}=35.2\ \Omega .
$$

These are exact (they match a direct nodal solution), whereas the two-port method gives slightly different values (50.7 Ω, 34.7 Ω) because it neglects the feedforward through $R_F$.
