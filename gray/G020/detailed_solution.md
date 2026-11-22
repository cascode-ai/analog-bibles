# Detailed solution - G020

Compute the body-effect coefficient $\gamma$ from the substrate doping and oxide thickness, find the threshold voltage at each $V_{SB}$, check the operating region at $V_{DS}=2$ V, and evaluate the square-law current over the $V_{GS}$ sweep.

### Step 1 — Body-effect coefficient

The oxide capacitance per unit area and $\gamma$ are

$$
C_{ox}=\frac{\epsilon_{ox}}{t_{ox}}=\frac{3.45\times10^{-13}\ \mathrm{F/cm}}{80\times10^{-8}\ \mathrm{cm}}=4.31\times10^{-7}\ \mathrm{F/cm^2},
$$
$$
\gamma=\frac{\sqrt{2q\epsilon_{Si}N_A}}{C_{ox}}=\frac{\sqrt{2(1.6\times10^{-19}\ \mathrm C)(1.04\times10^{-12}\ \mathrm{F/cm})(5\times10^{15}\ \mathrm{cm^{-3}})}}{4.31\times10^{-7}\ \mathrm{F/cm^2}}=\frac{4.08\times10^{-8}}{4.31\times10^{-7}}\ \mathrm{V^{1/2}}=0.0946\ \mathrm{V^{1/2}}.
$$

The thin oxide and light substrate doping make $\gamma$ small.

### Step 2 — Threshold voltages

Reverse bias between source and body widens the depletion region under the channel and raises the threshold:

$$
V_t=V_{t0}+\gamma\left(\sqrt{2\phi_f+V_{SB}}-\sqrt{2\phi_f}\right),\qquad \sqrt{2\phi_f}=\sqrt{0.6\ \mathrm V}=0.775\ \mathrm{V^{1/2}}.
$$

For $V_{SB}=1$ V: $V_t=0.6+0.0946(1.265-0.775)=0.646$ V.

| $V_{SB}$ (V) | $\sqrt{2\phi_f+V_{SB}}$ (V$^{1/2}$) | $V_t$ (V) | Shift (mV) |
|---|---|---|---|
| 0 | 0.775 | 0.600 | 0 |
| 0.5 | 1.049 | 0.626 | 26 |
| 1 | 1.265 | 0.646 | 46 |

### Step 3 — Region and current

The largest overdrive in the sweep is $2-0.6=1.4$ V, below $V_{DS}=2$ V, so the device is in the active region whenever it conducts. Thus

$$
I_D=\frac{k'}2\frac WL(V_{GS}-V_t)^2(1+\lambda V_{DS})=\frac{1.94\ \mathrm{mA/V^2}}2(1.048)(V_{GS}-V_t)^2=1.017\ \mathrm{mA/V^2}\,(V_{GS}-V_t)^2
$$

for $V_{GS}>V_t$, and $I_D=0$ below threshold (subthreshold conduction ignored). For $V_{SB}=0$ at $V_{GS}=1.5$ V: $I_D=(1.017\ \mathrm{mA/V^2})(0.9\ \mathrm V)^2=0.823$ mA.

| $V_{GS}$ (V) | 1 | 1.5 | 2 |
|---|---|---|---|
| $I_D$, $V_{SB}=0$ (mA) | 0.163 | 0.823 | 1.99 |
| $I_D$, $V_{SB}=0.5$ V (mA) | 0.142 | 0.777 | 1.92 |
| $I_D$, $V_{SB}=1$ V (mA) | 0.127 | 0.741 | 1.86 |

Without the $1+\lambda V_{DS}$ factor the values at 2 V are 1.90, 1.83 and 1.78 mA.

### Step 4 — The characteristics

![ID–VGS square-law curves at VDS = 2 V for VSB = 0, 0.5 and 1 V, starting at 0.600, 0.626 and 0.646 V](/q/G020/solution-curves.svg)

The three curves are nearly identical parabolas, zero below $V_t$ and shifted right by only 26 mV and 46 mV; the body effect is weak because $\gamma$ is small.
