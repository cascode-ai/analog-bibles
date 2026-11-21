# Detailed solution - G106

Both sources share the base voltage, so KVL equates $V_{BE}+I_CR$ on the two sides. Linearize that equation in the small mismatches. Emitter degeneration divides the $V_{BE}$ mismatch by $V_T+I_CR$, but lets the resistor mismatch through with weight $I_CR/(V_T+I_CR)$. Adding both worst-case contributions and requiring the result to stay within 1 % fixes the minimum drop $V_R=I_CR$.

### Step 1 — Mismatch equation

For each source, $V_B=V_{BE}+I_CR$ with $V_{BE}=V_T\ln(I_C/I_S)$. Write the two sources as average values plus differences ($\Delta I_C$, $\Delta I_S$, $\Delta R$), and expand the difference of the two KVL equations to first order:

$$
V_T\left(\frac{\Delta I_C}{I_C}-\frac{\Delta I_S}{I_S}\right)+I_CR\left(\frac{\Delta I_C}{I_C}+\frac{\Delta R}R\right)=0 .
$$

A $V_{BE}$ mismatch at equal currents is $\Delta V_{BE}=-V_T\Delta I_S/I_S$. With $V_R=I_CR$,

$$
\frac{\Delta I_C}{I_C}=-\frac{\Delta V_{BE}+V_R\,\Delta R/R}{V_T+V_R}
=\frac1{1+g_mR}\frac{\Delta I_S}{I_S}-\frac{g_mR}{1+g_mR}\frac{\Delta R}R,
$$

where $g_mR=V_R/V_T$. With no resistor ($V_R=0$), a 2-mV mismatch gives $2/26=7.7$ % current mismatch. Degeneration shrinks this term, while the resistor term approaches $\Delta R/R$.

### Step 2 — Worst case

The signs of the two mismatches are independent, so in the worst case their magnitudes add:

$$
\left|\frac{\Delta I_C}{I_C}\right|_{\max}=\frac{2\ \mathrm{mV}+0.005\,V_R}{26\ \mathrm{mV}+V_R}\le0.01 .
$$

### Step 3 — Required drop

$$
2\ \mathrm{mV}+0.005\,V_R\le0.26\ \mathrm{mV}+0.01\,V_R
\quad\Rightarrow\quad
V_R\ge\frac{2\ \mathrm{mV}-0.26\ \mathrm{mV}}{0.01-0.005}=348\ \mathrm{mV}.
$$

At least about 0.35 V must be dropped across each emitter resistor, which is $g_mR=13.4$. The resistor mismatch alone already uses half of the 1 % budget (0.5 %), so the degeneration must cut the 7.7 % from $V_{BE}$ mismatch to the remaining 0.5 % or less.
