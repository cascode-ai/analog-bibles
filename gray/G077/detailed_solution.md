# Detailed solution - G077

Zero differential output with identical loads requires equal drain currents. Find the gate-source voltage each device needs to carry the same current, linearize the difference in the $W/L$ mismatch, and evaluate it at the bias overdrive.

### Step 1 — Bias overdrive

$L_{\text{eff}}=1\ \mu\mathrm m-2(0.09\ \mu\mathrm m)=0.82\ \mu$m, so $W/L_{\text{eff}}=10/0.82=12.20$. With $R_{\text{TAIL}}\to\infty$, each device carries $I_D=I_{\text{TAIL}}/2=25\ \mu$A at balance. From the square law,

$$
V_{ov}=V_{GS}-V_t=\sqrt{\frac{2I_D}{k'(W/L_{\text{eff}})}}=\sqrt{\frac{2(25\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(12.20)}}=0.1454\ \mathrm V .
$$

### Step 2 — Offset expression

The offset is the gate-voltage difference that gives $I_{D1}=I_{D2}=I_D$:

$$
V_{OS}=V_{GS1}-V_{GS2}=(V_{t1}-V_{t2})+\sqrt{\frac{2I_D}{k'(W/L)_1}}-\sqrt{\frac{2I_D}{k'(W/L)_2}} .
$$

Write $(W/L)_{1,2}=(W/L)(1\pm\tfrac12\delta)$ with $\delta=\Delta(W/L)/(W/L)$. Since $\sqrt{2I_D/k'(W/L)}\propto(W/L)^{-1/2}$, a first-order expansion gives

$$
V_{OS}\approx\Delta V_t-\frac{V_{ov}}2\,\frac{\Delta(W/L)}{W/L}.
$$

The factor $1/2$ comes from the square root: a fractional change in $W/L$ needs only half that fractional change in overdrive to restore the current.

### Step 3 — Numerical value

With identical thresholds, $\Delta V_t=0$, and the worst-case mismatch is $|\delta|=0.02$:

$$
|V_{OS}|=\frac{0.1454\ \mathrm V}{2}(0.02)=1.45\ \mathrm{mV}.
$$

The device with the larger $W/L$ needs the smaller $V_{GS}$. The tail resistance sets only the common-mode current and does not enter the offset. The offset grows with $V_{ov}$, so a MOS pair biased at a low overdrive has a smaller $W/L$-mismatch offset; here $V_{ov}/2=73$ mV plays the role that $V_T=26$ mV plays in a bipolar pair.
