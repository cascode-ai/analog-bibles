# Detailed solution - R069

### Step 1 — Express the drain current at the required bias

The source and bulk are grounded, so $V_{GS}=V_{in}$ and $V_{DS}=V_{out}$. Define the overdrive $V_{ov}=V_{GS}-V_{TH}$ and the voltage margin $\delta=V_{ov}-V_{DS}=0.050\ \mathrm{V}$. The question fixes this margin, so $V_{out}=V_{ov}-\delta$.

With $\lambda=0$, the square-law triode model applies when $0<V_{DS}<V_{ov}$. Its current is

$$I_D=\beta\left(V_{ov}V_{DS}-\frac{V_{DS}^2}{2}\right)
=\frac{\beta}{2}\left[V_{ov}^2-(V_{ov}-V_{DS})^2\right]
=\frac{\beta}{2}(V_{ov}^2-\delta^2),$$

where $\beta=\mu_nC_{ox}(W/L)_1=(134\ \mu\mathrm{A/V^2})(50/0.5)=13.4\ \mathrm{mA/V^2}$. Completing the square puts the given margin directly into the current equation.

### Step 2 — Use the load line to solve for the input

With no other output load, the resistor current equals $I_D$, so $V_{out}=V_{DD}-R_DI_D$. Substituting the required output and current gives

$$V_{ov}-\delta=V_{DD}-\frac{\beta R_D}{2}(V_{ov}^2-\delta^2).$$

Set $a=\beta R_D/2=13.4\ \mathrm{V^{-1}}$ and $b=V_{DD}+\delta+a\delta^2=3.0835\ \mathrm{V}$. The equation becomes $aV_{ov}^2+V_{ov}-b=0$. Since the triode condition requires $V_{ov}>\delta$, discard the negative root. The positive root is

$$V_{ov}=\frac{-1+\sqrt{1+4ab}}{2a}
=\frac{-1+\sqrt{1+4(13.4\ \mathrm{V^{-1}})(3.0835\ \mathrm{V})}}{26.8\ \mathrm{V^{-1}}}
\approx 0.4438\ \mathrm{V}.$$

The resulting input and output are

$$V_{in}=V_{TH}+V_{ov}\approx 1.144\ \mathrm{V},\qquad
V_{out}=V_{ov}-\delta\approx 0.394\ \mathrm{V}.$$

This gives $0<V_{DS}<V_{ov}$ and $V_{ov}-V_{DS}=50$ mV, as required. The load line gives $I_D=(3\ \mathrm{V}-0.3938\ \mathrm{V})/(2\ \mathrm{k}\Omega)\approx 1.303\ \mathrm{mA}$, in agreement with the triode current from Step 1.

### Step 3 — Linearize the current around this bias

The variation of $I_D$ with $V_{GS}$ at fixed $V_{DS}$ gives $g_m$. Its variation with $V_{DS}$ at fixed $V_{GS}$ gives $g_{ds}$. Differentiating the triode current in its original two-variable form from Step 1 gives

$$g_m=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{V_{DS}}
=\beta V_{DS}\approx (13.4\ \mathrm{mA/V^2})(0.3938\ \mathrm{V})
\approx 5.28\ \mathrm{mS},$$

$$g_{ds}=\left.\frac{\partial I_D}{\partial V_{DS}}\right|_{V_{GS}}
=\beta(V_{ov}-V_{DS})=(13.4\ \mathrm{mA/V^2})(0.050\ \mathrm{V})
=0.67\ \mathrm{mS}.$$

The 50 mV relationship selects the DC bias. Small-signal variations of gate and drain voltage are independent when taking these partial derivatives. The output conductance corresponds to $r_{ds}=1/g_{ds}\approx 1.49\ \mathrm{k}\Omega$.

### Step 4 — Write the small-signal output equation

The supply is AC ground, so $R_D$ and $r_{ds}$ both connect the output to AC ground. The controlled drain current is $g_mv_{in}$, where lowercase voltages denote small-signal variations.

<!-- diagram: diagram-01.cir -->

Summing the small-signal currents leaving the output node gives

$$g_mv_{in}+g_{ds}v_{out}+\frac{v_{out}}{R_D}=0.$$

Solving for the gain,

$$A_v=\frac{v_{out}}{v_{in}}
=-\frac{g_m}{g_{ds}+1/R_D}
\approx-\frac{5.28\ \mathrm{mS}}{0.67\ \mathrm{mS}+0.50\ \mathrm{mS}}
\approx -4.51\ \mathrm{V/V}.$$

### Compare with the saturation boundary

At the boundary $V_{DS}=V_{ov}$, Step 2 applies with $\delta=0$, giving $V_{ov}\approx 0.4373\ \mathrm{V}$ and $V_{in}\approx 1.1373\ \mathrm{V}$. Here Step 3 gives $g_{ds}=0$ and $g_m\approx 5.86\ \mathrm{mS}$, so Step 4 gives $A_v\approx -11.7\ \mathrm{V/V}$. A roughly 6.5 mV increase in input from that boundary reaches the requested bias. At the new bias, $r_{ds}$ shunts $R_D$ and reduces the effective output resistance to $1/(g_{ds}+1/R_D)\approx 0.855\ \mathrm{k}\Omega$, accounting for most of the reduction in gain magnitude.
