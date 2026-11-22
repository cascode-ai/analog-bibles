# Detailed solution - G076

Relate the saturation current to the base width for a uniformly doped base, then find the base-emitter voltage difference that makes the two collector currents, and hence the two outputs, equal.

### Step 1 — Saturation current and base width

For a uniformly doped base with acceptor concentration $N_A$, the minority-carrier profile is linear across the base width $W_B$, so

$$
I_S=\frac{qAD_nn_i^2}{N_AW_B}\quad\Rightarrow\quad I_S\propto\frac1{W_B}.
$$

All other factors ($A$, $N_A$, $D_n$, $n_i$) are equal for the two transistors, so

$$
\frac{I_{S1}}{I_{S2}}=\frac{W_{B2}}{W_{B1}},\qquad \frac{\Delta I_S}{I_S}=-\frac{\Delta W_B}{W_B}.
$$

### Step 2 — Offset condition

The input offset voltage is the differential input that makes $V_{od}=0$. With equal collector resistors this requires $I_{C1}=I_{C2}$. Using $I_C=I_S\exp(V_{BE}/V_T)$,

$$
V_{OS}=V_{BE1}-V_{BE2}=V_T\ln\frac{I_{C1}}{I_{S1}}-V_T\ln\frac{I_{C2}}{I_{S2}}=V_T\ln\frac{I_{S2}}{I_{S1}}=V_T\ln\frac{W_{B1}}{W_{B2}} .
$$

The tail resistance only sets the common-mode current and does not enter $V_{OS}$, so $R_{\text{TAIL}}\to\infty$ changes nothing.

### Step 3 — Numerical value

For a 10% mismatch, linearizing $\ln(1+x)\approx x$:

$$
|V_{OS}|\approx V_T\frac{\Delta W_B}{W_B}=(26\ \mathrm{mV})(0.1)=2.6\ \mathrm{mV}.
$$

If the 10% is taken relative to one device exactly, $V_T\ln1.1=2.5$ mV. The transistor with the wider base has the smaller $I_S$ and needs the larger $V_{BE}$ to carry the same current. The base-width mismatch also changes $\beta_F$ in proportion, but with no resistance in series with the bases the resulting base-current difference does not create an offset voltage.
