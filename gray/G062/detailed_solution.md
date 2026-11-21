# Detailed solution - G062

Fix the drain current from the 200-µA source, invert the square law for $V_{GS}$ to get the dc output, and then evaluate the follower gain with the small-signal resistance at the source node.

### Step 1 — Drain current and gate-source voltage

With $R\to\infty$ the resistor carries no current, so the whole 200 µA of the current source flows through the transistor: $I_D=200\ \mu$A. The body effect is ignored, so $V_t=V_{t0}=0.7$ V. In saturation

$$
I_D=\frac{\mu_nC_{ox}}2\frac WL(V_{GS}-V_t)^2
\quad\Rightarrow\quad
V_{GS}=V_t+\sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} .
$$

$$
V_{GS}=0.7\ \mathrm V+\sqrt{\frac{2(200\ \mu\mathrm A)}{(90\ \mu\mathrm{A/V^2})(10)}}=0.7\ \mathrm V+0.667\ \mathrm V=1.367\ \mathrm V .
$$

### Step 2 — DC output voltage and region check

The gate is at the 3-V bias (with $v_i=0$), so

$$
V_O=V_G-V_{GS}=3\ \mathrm V-1.367\ \mathrm V=1.633\ \mathrm V .
$$

Region check: $V_{DS}=5\ \mathrm V-1.633\ \mathrm V=3.37$ V exceeds $V_{GS}-V_t=0.667$ V, so the transistor is saturated as assumed.

### Step 3 — Small-signal gain

The transconductance at this bias is

$$
g_m=\sqrt{2\mu_nC_{ox}\frac WL I_D}=\sqrt{2(90\ \mu\mathrm{A/V^2})(10)(200\ \mu\mathrm A)}=0.60\ \mathrm{mA/V}.
$$

The source node is loaded by $R_{\mathrm{eff}}$, the parallel combination of $R$, the current source's output resistance and $r_o$. With $v_{gs}=v_i-v_o$ and the drain at ac ground, KCL at the source gives $g_m(v_i-v_o)=v_o/R_{\mathrm{eff}}$, so

$$
\frac{v_o}{v_i}=\frac{g_mR_{\mathrm{eff}}}{1+g_mR_{\mathrm{eff}}} .
$$

Here $R\to\infty$, the current source is ideal and $\lambda=0$, so $R_{\mathrm{eff}}\to\infty$; with no body effect there is no $g_{mb}$ term either. Hence

$$
\frac{v_o}{v_i}=1 .
$$

Because the transistor current cannot change, $v_{gs}$ stays constant and the source follows the gate exactly; the value of $g_m$ does not enter the result. The answers are $V_O=1.63$ V and $v_o/v_i=1$.
