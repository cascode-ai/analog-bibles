# Detailed solution - A078

Find the switch threshold at its operating point (with body effect), compute the quantities common to both cases, decide the regime of each fall time from the slow/fast criterion, and evaluate the corresponding error expression.

### Step 1 — Operating point and common quantities

Before the switch opens, $C_L$ has charged to $V_S=1.5$ V, so the switch has $V_{SB}=1.5$ V:

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.2\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=0.959\ \mathrm V,\qquad
V_{HT}=5-1.5-0.959=2.541\ \mathrm V .
$$

With $\beta=K'W/L=(110\ \mu\mathrm{A/V^2})(2)=220\ \mu\mathrm{A/V^2}$:

$$
W\cdot\mathrm{CGDO}=(1.6\ \mu\mathrm m)(220\ \mathrm{pF/m})=0.352\ \mathrm{fF},\qquad
C_{channel}=(1.6\ \mu\mathrm m)(0.8\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})=3.16\ \mathrm{fF},
$$

$$
\frac{W\cdot\mathrm{CGDO}+C_{channel}/2}{C_L}=\frac{0.352+1.581}{150}=0.01289 .
$$

The overlap term, common to both regimes, is the feedthrough after the switch turns off at $v_G=V_S+V_T$:

$$
\frac{W\cdot\mathrm{CGDO}}{C_L}(V_S+V_T-V_L)=\frac{0.352\ \mathrm{fF}}{150\ \mathrm{fF}}(1.5+0.959-0)\ \mathrm V=5.77\ \mathrm{mV}.
$$

### Step 2 — Regime of each fall time

The criterion compares $U$ with

$$
\frac{\beta V_{HT}^2}{2C_L}=\frac{(220\ \mu\mathrm{A/V^2})(2.541\ \mathrm V)^2}{2(150\ \mathrm{fF})}=4.74\times10^{9}\ \mathrm{V/s}.
$$

| Case | Fall time | $U$ (V/s) | $\beta V_{HT}^2/(2C_LU)$ | Regime |
|---|---|---|---|---|
| 1 | 0.1 ns | $5\times10^{10}$ | 0.095 | fast |
| 2 | 8 ns | $6.25\times10^{8}$ | 7.6 | slow |

### Step 3 — Case 1: fast regime

The gate falls so quickly that the channel charge has little time to flow back to the source:

$$
\frac{\beta V_{HT}^3}{6UC_L}=\frac{(220\ \mu\mathrm{A/V^2})(2.541\ \mathrm V)^3}{6(5\times10^{10}\ \mathrm{V/s})(150\ \mathrm{fF})}=0.080\ \mathrm V,
$$

$$
V_{error}=0.01289\,(2.541-0.080)\ \mathrm V+5.77\ \mathrm{mV}=31.7+5.8=37.5\ \mathrm{mV},\qquad v_{CL}=1.5-0.0375=1.4625\ \mathrm V .
$$

### Step 4 — Case 2: slow regime

$$
\sqrt{\frac{\pi UC_L}{2\beta}}=\sqrt{\frac{\pi(6.25\times10^{8}\ \mathrm{V/s})(150\ \mathrm{fF})}{2(220\ \mu\mathrm{A/V^2})}}=0.818\ \mathrm V,
$$

$$
V_{error}=0.01289\times0.818\ \mathrm V+5.77\ \mathrm{mV}=10.5+5.8=16.3\ \mathrm{mV},\qquad v_{CL}=1.5-0.0163=1.4837\ \mathrm V .
$$

| Case | Regime | Channel term (mV) | Overlap term (mV) | $V_{error}$ (mV) | Final $v_{CL}$ (V) |
|---|---|---|---|---|---|
| 1 (0.1 ns) | fast | 31.7 | 5.8 | 37.5 | 1.4625 |
| 2 (8 ns) | slow | 10.5 | 5.8 | 16.3 | 1.4837 |

The slower edge gives less than half the error: while the switch is still on, most of the channel charge flows back into the source instead of onto $C_L$. Both errors lower $v_{CL}$, because the n-channel switch releases electrons onto the capacitor.
