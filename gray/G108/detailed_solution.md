# Detailed solution - G108

The structure of the offset is the same as without the resistors. $V_{OS}=V_{BE1}-V_{BE2}$ has three parts: the npn $I_S$ mismatch, the current mismatch produced by the pnp mirror, and the systematic base-current term $2/\beta_F$. Only the mirror term changes. Emitter degeneration divides the pnp $I_S$ mismatch by $1+g_mR/\alpha_F$, but adds the resistor and $\alpha_F$ mismatches with weight $(g_mR/\alpha_F)/(1+g_mR/\alpha_F)$. Linearize the mirror's KVL, evaluate the weights, and add all terms in the worst-case direction.

### Step 1 — Bias values

Each side carries $I_C=50\ \mu\mathrm A$, and the pnp devices have $\alpha_F=\beta_F/(1+\beta_F)=15/16=0.9375$:

$$
g_m=\frac{50\ \mu\mathrm A}{26\ \mathrm{mV}}=1.92\ \mathrm{mA/V},\qquad
\frac{g_mR}{\alpha_F}=\frac{(1.92\ \mathrm{mA/V})(2\ \mathrm{k\Omega})}{0.9375}=4.10 .
$$

The emitter resistors drop $I_ER=(53.3\ \mu\mathrm A)(2\ \mathrm{k\Omega})=107$ mV.

### Step 2 — Mismatch of the degenerated mirror

$Q_3$ and $Q_4$ share the base node, and their emitters return to the supply through $R_3$ and $R_4$, so KVL gives

$$
\frac{I_{C3}}{\alpha_{F3}}R_3+V_T\ln\frac{I_{C3}}{I_{S3}}=\frac{I_{C4}}{\alpha_{F4}}R_4+V_T\ln\frac{I_{C4}}{I_{S4}} .
$$

Writing each quantity as its average plus a difference ($\Delta x=x_4-x_3$) and expanding to first order,

$$
\frac{\Delta I_C}{I_C}=\frac1{1+g_mR/\alpha_F}\frac{\Delta I_S}{I_S}+\frac{g_mR/\alpha_F}{1+g_mR/\alpha_F}\left(-\frac{\Delta R}R+\frac{\Delta\alpha_F}{\alpha_F}\right).
$$

The $\beta_F$ mismatch enters through $\alpha_F$: $\dfrac{\Delta\alpha_F}{\alpha_F}=\dfrac1{1+\beta_F}\dfrac{\Delta\beta_F}{\beta_F}=\dfrac{0.10}{16}=0.00625$.

### Step 3 — Worst-case mirror term

All three load mismatches take their worst-case magnitudes with signs that add:

$$
\left|\frac{\Delta I_C}{I_C}\right|_{\text{load}}=\frac{0.05}{5.10}+\frac{4.10}{5.10}(0.005+0.00625)=0.0098+0.0090=0.0188 .
$$

Without the resistors this term was 0.05. Degeneration has cut the $I_S$ part fivefold, but the resistor and $\alpha_F$ mismatches now add almost as much again.

### Step 4 — Total offset

The other two terms are unchanged. The npn pair contributes $\Delta I_{SN}/I_{SN}=0.05$. KCL at the diode node still gives $I_{C1}\approx I_{C3}(1+2/\beta_F)$, so the base-current term remains $2/\beta_F=2/15=0.133$:

$$
|V_{OS}|=V_T\left(0.05+0.0188+0.133\right)=(26\ \mathrm{mV})(0.202)=5.3\ \mathrm{mV}.
$$

Solving the nonlinear circuit equations exactly at the worst corner ($I_{S1}<I_{S2}$, $I_{S3}>I_{S4}$, $R_3<R_4$, $\beta_3>\beta_4$) gives 5.03 mV. The offset falls only from about 6.1 mV to 5.0–5.3 mV, because the dominant contribution, the $2/\beta_F$ loss of the low-$\beta$ pnp mirror (3.3 mV by itself), is not affected by emitter degeneration.
