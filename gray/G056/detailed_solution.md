# Detailed solution - G056

The gain of the stage, $v_o/v_i=-\beta_0(R_C\parallel r_o)/(R_S+r_\pi)$, depends on $I_C$ through $r_\pi=\beta_0V_T/I_C$ and $r_o=V_A/I_C$. Maximizing it over $I_C$ gives the optimum current; then evaluate the dc drop across $R_C$ and the small-signal parameters at that current.

### Step 1 — Optimum collector current

With $r_b=0$, the input divider and the collector load give

$$
\frac{v_o}{v_i}=-\frac{\beta_0(R_C\parallel r_o)}{R_S+r_\pi}=-\frac{\beta_0R_CV_AI_C}{(V_A+I_CR_C)(I_CR_S+\beta_0V_T)} .
$$

Setting the derivative of $I_C/[(V_A+I_CR_C)(I_CR_S+\beta_0V_T)]$ to zero gives $R_CR_SI_C^2=\beta_0V_TV_A$:

$$
I_{C,\text{opt}}=\sqrt{\frac{\beta_0V_TV_A}{R_SR_C}}=\sqrt{\frac{(200)(0.026\ \mathrm V)(130\ \mathrm V)}{(50\ \mathrm{k\Omega})^2}}=\frac{26\ \mathrm V}{50\ \mathrm{k\Omega}}=520\ \mu\mathrm A .
$$

### Step 2 — DC drop across $R_C$

$$
V_{R_C}=I_{C,\text{opt}}R_C=(520\ \mu\mathrm A)(50\ \mathrm{k\Omega})=26\ \mathrm V .
$$

Keeping the transistor out of saturation would need a supply of at least about 27 V, so this optimum is impractical in a low-voltage circuit.

### Step 3 — Voltage gain

At 520 µA:

$$
g_m=\frac{520\ \mu\mathrm A}{26\ \mathrm{mV}}=20\ \mathrm{mA/V},\qquad r_\pi=\frac{200}{20\ \mathrm{mA/V}}=10\ \mathrm{k\Omega},\qquad r_o=\frac{130\ \mathrm V}{520\ \mu\mathrm A}=250\ \mathrm{k\Omega},
$$
$$
R_C\parallel r_o=41.7\ \mathrm{k\Omega},\qquad
\frac{v_o}{v_i}=-\frac{(200)(41.7\ \mathrm{k\Omega})}{50\ \mathrm{k\Omega}+10\ \mathrm{k\Omega}}=-139 .
$$

As a check, $R_C/r_o=50/250=0.2=r_\pi/R_S$, the balance condition at the optimum.

Results: $I_C=520\ \mu$A, a 26-V drop across $R_C$, and $v_o/v_i\approx-139$.
