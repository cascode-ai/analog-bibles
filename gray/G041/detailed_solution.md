# Detailed solution - G041

Two points on the active-region square law determine its two unknowns. Taking the ratio of the currents eliminates $\mu_nC_{ox}(W/L)$, leaving an equation for $V_t$ alone; either current then gives the transconductance parameter.

### Step 1 — Model

In the active region with constant mobility,

$$
I_D=\frac12\mu_nC_{ox}\frac WL(V_{GS}-V_t)^2 .
$$

If both points are taken at the same $V_{DS}$, any channel-length-modulation factor cancels in the ratio.

### Step 2 — Threshold voltage

Dividing the two measurements and taking the square root:

$$
\sqrt{\frac{100\ \mu\mathrm A}{10\ \mu\mathrm A}}=\frac{1.5\ \mathrm V-V_t}{0.8\ \mathrm V-V_t}
\quad\Rightarrow\quad 3.162(0.8-V_t)=1.5-V_t ,
$$

$$
V_t=\frac{3.162(0.8)-1.5}{3.162-1}\ \mathrm V=\frac{2.530-1.5}{2.162}\ \mathrm V=0.476\ \mathrm V .
$$

The positive square root is used because both overdrives must be positive for the device to conduct.

### Step 3 — Transconductance parameter

From the 100-µA point, $V_{ov}=1.5-0.476=1.024$ V:

$$
\mu_nC_{ox}\frac WL=\frac{2I_D}{V_{ov}^2}=\frac{2(100\ \mu\mathrm A)}{(1.024\ \mathrm V)^2}=191\ \mu\mathrm{A/V^2}.
$$

Check with the other point: $\tfrac12(191\ \mu\mathrm{A/V^2})(0.8-0.476)^2\ \mathrm{V^2}=\tfrac12(191)(0.324)^2\ \mu\mathrm A=10\ \mu$A.

Results: $V_t\approx0.476$ V and $\mu_nC_{ox}(W/L)\approx191\ \mu\mathrm{A/V^2}$.
