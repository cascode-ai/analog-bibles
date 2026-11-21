# Detailed solution - G073

The MOS version keeps the symmetry of the bipolar circuit: $R_L$ and $R_E$ are the only elements crossing the center line. In the differential mode their midpoints are at ac ground; in the common mode they carry no current. The only change from the bipolar analysis is that the gate draws no current, so there is no $r_\pi$ or $\beta_0$.

### Step 1 — Differential-mode half circuit

With $v_{i1}=v_{id}/2$ and $v_{i2}=-v_{id}/2$, antisymmetry holds the midpoints of $R_L$ and $R_E$ at 0 V. The left half circuit is a common-source stage with

- drain load $R_C\,\|\,(R_L/2)$,
- source resistor $R_E/2$ to ground (the ideal $I_{EE}$ is open for signals).

### Step 2 — Differential-mode gain

With no body effect and $\lambda=0$, the drain current is $i_d=g_mv_{gs}$ and it flows entirely through the source resistor, so

$$
v_g=v_{gs}+i_d\frac{R_E}2=v_{gs}\left(1+g_m\frac{R_E}2\right)
\quad\Rightarrow\quad
G_m=\frac{i_d}{v_g}=\frac{g_m}{1+g_mR_E/2}.
$$

The drain current flows through the load, $v_{o1}=-i_d\left(R_C\|\tfrac{R_L}2\right)$. With $v_g=v_{id}/2$ and $v_{o1}=v_{od}/2$,

$$
A_{dm}=\frac{v_{od}}{v_{id}}=-\frac{g_m\left(R_C\,\|\,\tfrac{R_L}{2}\right)}{1+g_mR_E/2}.
$$

### Step 3 — Common-mode gain

With $v_{i1}=v_{i2}=v_{ic}$, both ends of $R_L$ and of $R_E$ move together, so neither carries current. Each source node then connects only to an ideal current source $I_{EE}$, so KCL at the source forces the small-signal drain current to zero: the source simply follows the gate with $v_{gs}=0$. No drain current change means no output change:

$$
v_{o1}=v_{o2}=0\quad\Rightarrow\quad A_{cm}=0,
$$

and the CMRR is infinite under these idealizations. Both input resistances are infinite, since the gates draw no current. Here $g_m=\sqrt{2\mu_nC_{ox}(W/L)I_{EE}}$ at the bias current $I_{EE}$.
