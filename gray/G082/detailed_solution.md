# Detailed solution - G082

First find the bias point and the usual cascode output resistance. Then find the drain–source voltage of the output cascode device $M_2$ at each $V_{OUT}$ and linearize the impact-ionization current around it. The leakage flows from the output node into the grounded substrate, so its incremental resistance $r_{db}$ appears in parallel with the cascode resistance. Because $I_{DB}$ grows exponentially with the excess drain voltage, the comparison changes sharply between 2 V and 3 V.

### Step 1 — Bias point and small-signal parameters

All four devices carry $I_{IN}=100\ \mu\mathrm A$, with $W/L_{\text{eff}}=100/0.82=121.95$. From the square law in saturation,

$$
V_{ov}=\sqrt{\frac{2I_D}{k'(W/L_{\text{eff}})}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(121.95)}}=0.0919\ \mathrm V,\qquad V_{GS}=V_t+V_{ov}=0.692\ \mathrm V,
$$

$$
g_m=\frac{2I_D}{V_{ov}}=2.175\ \mathrm{mA/V},\qquad r_o=\frac1{\lambda I_D}=\frac1{(0.0244\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=410\ \mathrm{k\Omega},\qquad g_mr_o=892 .
$$

### Step 2 — Cascode output resistance without leakage

$M_1$ is a common-source device whose gate is held by $M_3$; looking down from the source of $M_2$, it is just $r_{o1}$. $M_2$ has a fixed gate and source degeneration $r_{o1}$. With the body effect ignored,

$$
R_{o,\text{casc}}=r_{o2}(1+g_{m2}r_{o1})+r_{o1}=(410\ \mathrm{k\Omega})(1+892)+410\ \mathrm{k\Omega}=366.5\ \mathrm{M\Omega}\approx g_mr_o^2 .
$$

### Step 3 — Operating voltages of $M_2$

The gate of $M_2$ sits at $V_{GS3}+V_{GS4}=2V_{GS}$, and its source sits one $V_{GS}$ lower. So

$$
V_{DS1}=V_{GS}=0.692\ \mathrm V,\qquad V_{DS2}=V_{OUT}-V_{GS}.
$$

The edge of the active region is $V_{DS(\text{act})}=V_{ov}=0.092$ V, so the excess drain voltage $x=V_{DS2}-V_{DS(\text{act})}=V_{OUT}-V_{GS}-V_{ov}$ is

$$
x=1.216\ \mathrm V\ (V_{OUT}=2\ \mathrm V),\qquad x=2.216\ \mathrm V\ (V_{OUT}=3\ \mathrm V).
$$

For $M_1$, $x=V_{DS1}-V_{ov}=0.6$ V, so its factor $e^{-30/0.6}=e^{-50}$ makes its leakage utterly negligible. Any small current at its drain is in any case shielded from the output by the cascode.

### Step 4 — Small-signal leakage conductance

The source of $M_2$ is held nearly fixed by the cascode, and $I_D$ is constant to within $1/R_{o,\text{casc}}$. A change in $V_{OUT}$ therefore changes $x$ one-for-one. Differentiating $I_{DB}=K_1xI_De^{-K_2/x}$ with respect to $x$,

$$
g_{db}=\frac{\partial I_{DB}}{\partial V_{OUT}}=K_1I_De^{-K_2/x}\left(1+\frac{K_2}x\right)=\frac{I_{DB}}x\left(1+\frac{K_2}x\right)\approx\frac{K_2I_{DB}}{x^2}.
$$

The exponential dominates because $K_2/x\gg1$. At $V_{OUT}=3$ V:

$$
I_{DB}=(5\ \mathrm{V^{-1}})(2.216\ \mathrm V)(100\ \mu\mathrm A)\,e^{-30/2.216}=(1.108\ \mathrm{mA})(1.32\times10^{-6})=1.46\ \mathrm{nA},
$$

$$
g_{db}=\frac{1.46\ \mathrm{nA}}{2.216\ \mathrm V}\left(1+\frac{30}{2.216}\right)=9.60\times10^{-9}\ \mathrm S,\qquad r_{db}=104.2\ \mathrm{M\Omega}.
$$

| $V_{OUT}$ | $x$ (V) | $e^{-K_2/x}$ | $I_{DB}$ | $r_{db}=1/g_{db}$ |
|---|---|---|---|---|
| 2 V | 1.216 | $1.9\times10^{-11}$ | $1.2\times10^{-14}$ A | $4.0\times10^{12}\ \Omega$ |
| 3 V | 2.216 | $1.3\times10^{-6}$ | $1.46\times10^{-9}$ A | $1.04\times10^{8}\ \Omega$ |

Raising $V_{OUT}$ by 1 V raises the leakage by a factor of about $10^5$.

### Step 5 — Output resistance including leakage

$I_{DB}$ leaves the output node through the drain of $M_2$ into the grounded substrate. It never passes through the source of $M_2$, so the cascode feedback does not raise $r_{db}$. It is simply in parallel with the cascode:

$$
R_o=R_{o,\text{casc}}\,\|\,r_{db}.
$$

$$
V_{OUT}=2\ \mathrm V:\quad R_o=366.5\ \mathrm{M\Omega}\,\|\,4.0\times10^{12}\ \Omega=366.4\ \mathrm{M\Omega}\approx R_{o,\text{casc}}.
$$

$$
V_{OUT}=3\ \mathrm V:\quad R_o=\frac{(366.5\ \mathrm{M\Omega})(104.2\ \mathrm{M\Omega})}{366.5\ \mathrm{M\Omega}+104.2\ \mathrm{M\Omega}}=81\ \mathrm{M\Omega}.
$$

At 2 V the substrate leakage is negligible. At 3 V it dominates and cuts the output resistance by a factor of about 4.5. Using the approximate form $g_{db}\approx K_2I_{DB}/x^2$ gives $r_{db}=112\ \mathrm{M\Omega}$ and $R_o=86\ \mathrm{M\Omega}$, with the same conclusion.
