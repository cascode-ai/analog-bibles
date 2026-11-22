# Detailed solution - A353

M1 and M2 share the same gate–source voltage, set by the diode-connected M1 carrying $i_1$. When M2 is saturated, the mirror ratio equals the size ratio, which fixes $W_2/L_2$. When M2 is in the active region, its current also depends on $V_{DS2}$; setting it equal to $i_1$ gives a quadratic for $V_{DS2}$.

### Step 1 — Overdrive set by M1

M1 is diode-connected, hence saturated:

$$
V_{GS}-V_T=\sqrt{\frac{2i_1}{K'_N(W_1/L_1)}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.1348\ \mathrm V .
$$

M2 has the same gate–source voltage, so the same overdrive.

### Step 2 — Size of M2 for the boosted output

With M2 saturated and the same overdrive, the currents scale with W/L:

$$
\frac{i_2}{i_1}=\frac{W_2/L_2}{W_1/L_1}\quad\Rightarrow\quad\frac{W_2}{L_2}=10\times\frac{100\ \mu\mathrm A}{10\ \mu\mathrm A}=100 .
$$

### Step 3 — $V_{DS2}$ for $i_2=10\ \mu$A in the active region

With $V_{DS2}<V_{GS}-V_T$, the active-region equation gives

$$
10\ \mu\mathrm A=(110\ \mu\mathrm{A/V^2})(100)\Bigl[(0.1348\ \mathrm V)V_{DS2}-\frac{V_{DS2}^2}2\Bigr],
$$
$$
V_{DS2}^2-0.2697\,V_{DS2}+1.818\times10^{-3}=0\quad(V_{DS2}\ \text{in V}).
$$

The root that satisfies the active-region condition is

$$
V_{DS2}=0.1348-\sqrt{0.1348^2-2(9.09\times10^{-4})}=0.1348-0.1279=6.9\ \mathrm{mV}.
$$

The other root, 0.263 V, exceeds $V_{GS}-V_T$ and is not in the active region, so it is rejected.

### Step 4 — Interpretation

With $V_{DS2}\approx7$ mV, M2 acts as a small resistor and the mirror passes $i_2=i_1=10\ \mu$A. When the load lets $V_{DS2}$ rise above $V_{GS}-V_T\approx0.135$ V, M2 saturates and the output becomes 100 µA, a current boost of 10.

| Quantity | Value |
|---|---|
| $W_2/L_2$ | 100 |
| $V_{DS2}$ at $i_2=10\ \mu$A | 6.9 mV |
