# Detailed solution - G070

Find the bias current (including the small extra current in $R_{\text{TAIL}}$), then use the symmetry of the pair: a differential input leaves the tail node at ac ground, while a common-mode input sees each emitter loaded by $R_E$ plus twice the tail resistance. Each half circuit is a common-emitter stage with an emitter resistor, so one formula serves both modes.

### Step 1 — DC bias

With zero dc inputs, each base is at 0 V and the tail node is at $V_X=-V_{BE}-I_ER_E$. The tail branch carries $I_{\text{TAIL}}$ plus the current in $R_{\text{TAIL}}$, which returns to $-V_{EE}$:

$$
2I_E=I_{\text{TAIL}}+\frac{V_X+V_{EE}}{R_{\text{TAIL}}},\qquad V_{BE}=V_T\ln\frac{I_C}{I_S},\qquad I_C=\frac{\beta_0}{\beta_0+1}I_E .
$$

Starting from $I_E=10\ \mu$A and iterating twice: $V_{BE}=26\ \mathrm{mV}\cdot\ln(10.17\ \mu\mathrm A/5\ \mathrm{fA})=0.557$ V, $V_X=-0.557\ \mathrm V-(10.2\ \mu\mathrm A)(4\ \mathrm{k\Omega})=-0.598$ V, and

$$
2I_E=20\ \mu\mathrm A+\frac{-0.598\ \mathrm V+5\ \mathrm V}{10\ \mathrm{M\Omega}}=20.44\ \mu\mathrm A,\qquad I_C=\frac{200}{201}(10.22\ \mu\mathrm A)=10.17\ \mu\mathrm A .
$$

The small-signal parameters are

$$
g_m=\frac{I_C}{V_T}=\frac{10.17\ \mu\mathrm A}{26\ \mathrm{mV}}=0.3911\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=511\ \mathrm{k\Omega}.
$$

### Step 2 — Half-circuit gain with an emitter resistor

For a common-emitter stage with total emitter resistance $R_{E,\text{tot}}$, the emitter current is $(g_m+1/r_\pi)v_{be}=g_m(1+1/\beta_0)v_{be}$, so KVL from base to ground and the collector current give

$$
v_i=v_{be}\left[1+g_mR_{E,\text{tot}}\left(1+\frac1{\beta_0}\right)\right],\qquad v_o=-g_mR_Cv_{be}
\quad\Rightarrow\quad
\frac{v_o}{v_i}=-\frac{g_mR_C}{1+g_mR_{E,\text{tot}}(1+1/\beta_0)} .
$$

The input resistance of the half circuit, looking into the base, is $r_\pi+(\beta_0+1)R_{E,\text{tot}}$.

### Step 3 — Differential mode

For $v_{i1}=-v_{i2}=v_{id}/2$ the currents of the two halves change in opposite directions, so the tail node does not move: $R_{E,\text{tot}}=R_E$. Then $v_{o1}=-v_{o2}$ and $v_{od}/v_{id}$ equals the half-circuit gain:

$$
g_mR_C=39.11,\qquad g_mR_E\left(1+\frac1{\beta_0}\right)=(0.3911\ \mathrm{mA/V})(4\ \mathrm{k\Omega})(1.005)=1.572,
$$

$$
A_{dm}=-\frac{39.11}{1+1.572}=-15.2\qquad\left(\approx-\frac{R_C}{R_E+1/g_m}\right).
$$

Each base receives $v_{id}/2$, so

$$
R_{id}=\frac{v_{id}}{i_b}=2\left[r_\pi+(\beta_0+1)R_E\right]=2(511\ \mathrm{k\Omega}+804\ \mathrm{k\Omega})=2.63\ \mathrm{M\Omega}.
$$

### Step 4 — Common mode

For $v_{i1}=v_{i2}=v_{ic}$ both halves push the same current into the tail node, so the tail resistance carries twice one half's current. Splitting $R_{\text{TAIL}}$ into two parallel $2R_{\text{TAIL}}$ resistors gives each half $R_{E,\text{tot}}=R_E+2R_{\text{TAIL}}=20.004\ \mathrm{M\Omega}$ (the ideal tail source has infinite resistance):

$$
A_{cm}=-\frac{39.11}{1+(0.3911\ \mathrm{mA/V})(20.004\ \mathrm{M\Omega})(1.005)}=-\frac{39.11}{7864}=-4.97\times10^{-3}
\qquad\left(\approx-\frac{R_C}{R_E+2R_{\text{TAIL}}}\right),
$$

$$
R_{ic}=\frac{v_{ic}}{i_b}=r_\pi+(\beta_0+1)(R_E+2R_{\text{TAIL}})=0.511\ \mathrm{M\Omega}+201(20.004\ \mathrm{M\Omega})=4.02\ \mathrm{G\Omega}.
$$

### Step 5 — CMRR

The numerators $g_mR_C$ cancel in the ratio:

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=\frac{1+g_m(R_E+2R_{\text{TAIL}})(1+1/\beta_0)}{1+g_mR_E(1+1/\beta_0)}=\frac{7864}{2.572}=3.06\times10^3\ (69.7\ \mathrm{dB}).
$$

Compared with the pair without $R_E$ ($A_{dm}=-39.1$, CMRR ≈ 7900, $R_{id}=2r_\pi=1.02\ \mathrm{M\Omega}$), the degeneration resistors trade differential gain and CMRR for a higher differential input resistance and a wider linear input range, while $A_{cm}$ and $R_{ic}$ barely change because they are dominated by $2R_{\text{TAIL}}$.
