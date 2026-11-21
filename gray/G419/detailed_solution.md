# Detailed solution - G419

Both loops pass through the same Miller-compensated second stage, so each loop gain behaves as an integrator $T(s)\approx G_{m,\mathrm{loop}}/(sC)$ up to the second pole $p_2=-g_{m6}/C_2$. A loop has 45° phase margin when its unity-gain frequency $G_{m,\mathrm{loop}}/C$ equals $|p_2|=g_{m6}/C_2$. Evaluate the effective first-stage transconductance and the output load $C_2$ separately for the DM loop and the CMFB loop, solve each for $C$, and keep the larger value.

### Step 1 — Why the loop gain is $G_m/(sC)$

In a Miller-compensated two-stage amplifier, between $|p_1|$ and $|p_2|$ the first-stage signal current flows into the compensation capacitor and the output voltage is $v_o\approx G_mv_{in}/(sC)$, independent of the second stage. The dominant-pole loop gain is therefore (loop transmission factor) × $G_m/(sC)$, with magnitude 1 at

$$
\omega_u=\frac{(\text{loop factor})\,G_m}{C}.
$$

Setting $\omega_u=|p_2|=g_{m6}/C_2$ gives the 45° condition used below.

### Step 2 — DM loop

For DM signals the op-amp input node carries $C_S$ (to the ac-grounded source), $C_F$ (to the output) and $C_{idh}$. The feedback factor and the load on each output are

$$
\begin{aligned}
f_{dm}&=\frac{C_F}{C_F+C_S+C_{idh}}=\frac{5\ \mathrm{pF}}{10.9\ \mathrm{pF}}=0.459,\\
C_{2d}&=C_L+\frac{C_F(C_S+C_{idh})}{C_F+C_S+C_{idh}}=2\ \mathrm{pF}+\frac{(5)(5.9)}{10.9}\ \mathrm{pF}=4.71\ \mathrm{pF}.
\end{aligned}
$$

With $G_m=g_{m2}$:

$$
\frac{g_{m2}f_{dm}}{C}=\frac{g_{m6}}{C_{2d}}
\;\Rightarrow\;
C=\frac{g_{m2}}{g_{m6}}f_{dm}C_{2d}=\frac{1.0}{1.55}(0.459)(4.71\ \mathrm{pF})=1.39\ \mathrm{pF}.
$$

### Step 3 — CMFB loop

Break the CMFB loop at $v_{cmc}$. A CMC signal reaches the first stage through half the tail, so the first-stage CM transconductance is $g_{m5h}=0.4$ mA/V. The sense amplifier then multiplies $v_{oc}$ by $|a_{cms0}|=2.5$ on the way back.

For CM signals the op-amp input capacitance is negligible, so each input node has only $C_S$ to the source (ac ground) and $C_F$ to the output. The CM load on each output is

$$
C_{2c}=C_L+\frac{C_FC_S}{C_F+C_S}=2\ \mathrm{pF}+\frac{(5)(2)}{7}\ \mathrm{pF}=3.43\ \mathrm{pF}.
$$

(The resulting CM swing at the op-amp inputs is applied to a degenerated, low-CM-gain input pair and does not add appreciably to this loop.) The 45° condition is

$$
\frac{g_{m5h}|a_{cms0}|}{C}=\frac{g_{m6}}{C_{2c}}
\;\Rightarrow\;
C=\frac{g_{m5h}}{g_{m6}}|a_{cms0}|C_{2c}=\frac{0.4}{1.55}(2.5)(3.43\ \mathrm{pF})=2.21\ \mathrm{pF}.
$$

### Step 4 — Choice of $C$

A larger $C$ lowers both unity-gain frequencies without changing $|p_2|$, so it increases both phase margins. Both loops reach at least 45° with

$$
C\approx2.2\ \mathrm{pF},
$$

set by the CMFB loop. The DM loop is then overcompensated: its crossover moves to $0.55|p_2|$ and its phase margin rises to about 61°, at the cost of DM bandwidth. Keeping $C=1.39$ pF instead would require reducing the CMC transconductance, for example by splitting $M_5$ so only part of it is driven by $v_{cmc}$.

### Step 5 — Note on the 45° criterion

The calculation above uses the dominant-pole estimate of the crossover. With the exact two-pole magnitude, at $\omega=|p_2|$ the loop gain is $1/\sqrt2$, so the actual crossover is at $0.79|p_2|$ and the CMFB loop has about 52° phase margin. Requiring the exact magnitude to equal 1 at $|p_2|$ (exactly 45°) would allow $C=2.21/\sqrt2\approx1.56$ pF, still set by the CMFB loop (the DM loop would need 0.98 pF).
