# Detailed solution - A075

While $\phi_1$ is high, M1 is a nonsaturated switch charging $C_1$ toward 2 V. Model it as a resistor, taking the largest ON resistance it presents during the charge, so the RC time constant gives a conservative estimate of the time to reach 99%. Then check this estimate against the exact large-signal charging.

### Step 1 — Worst-case ON resistance

The capacitor side of the switch is its source (the lower-voltage terminal), at $v_{out}$; the drain is at 2 V. As $v_{out}$ rises toward 2 V, $V_{GS}=5\ \mathrm V-v_{out}$ falls and $V_{SB}=v_{out}$ rises, so the ON resistance is largest near the end of charging. At $v_{out}\to2$ V:

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V,
\qquad
r_{ON}=\frac{1}{K'(W/L)(V_{GS}-V_T)}=\frac{1}{(550\ \mu\mathrm{A/V^2})(3\ \mathrm V-1.023\ \mathrm V)}=920\ \Omega .
$$

### Step 2 — Time to reach 99%

With $r_{ON}$ fixed, the capacitor voltage is $v_{out}(t)=2\ \mathrm V\,(1-e^{-t/\tau})$ with

$$
\tau=r_{ON}C_1=(920\ \Omega)(30\ \mathrm{fF})=27.6\ \mathrm{ps}.
$$

Reaching 99% of the final value requires $e^{-t/\tau}=0.01$:

$$
t_{99\%}=\tau\ln100=4.6\tau=4.6(27.6\ \mathrm{ps})=127\ \mathrm{ps}.
$$

### Step 3 — Check with the large-signal transient

Early in the transient the switch conducts better ($V_{GS}$ up to 5 V and $V_{SB}$ near 0, $r_{ON}\approx423\ \Omega$ at the start), so the true charging is faster than the worst-case exponential. Integrating $C_1\,dv_{out}/dt=K'(W/L)\big[(5-v_{out}-V_T(v_{out}))(2-v_{out})-\tfrac12(2-v_{out})^2\big]$ numerically from $v_{out}=0$ (M1 stays in nonsaturation throughout, since $2-v_{out}<5-v_{out}-V_T$) gives $v_{out}=1.98$ V after 114 ps. The worst-case estimate of about 127 ps is therefore a safe design value: $\phi_1$ must stay high for roughly 0.13 ns, in addition to its 10 ns rise edge, during which the switch is only partly on.
