# Detailed solution - G075

Write the large-signal transfer characteristic of the square-law source-coupled pair, express the 85% condition in a normalized variable, and combine it with the small-signal transconductance at balance; the two specifications then give two equations for $k'(W/L_{\text{eff}})$ and $I_{\text{TAIL}}$.

### Step 1 — Large-signal characteristic

Let $k=k'(W/L_{\text{eff}})$. Both devices are in saturation with equal thresholds (no body effect, no CLM), so $\sqrt{2I_{d1}/k}-\sqrt{2I_{d2}/k}=V_{GS1}-V_{GS2}=V_{id}$, and $I_{d1}+I_{d2}=I_{\text{TAIL}}$. Squaring the first relation and eliminating the product $I_{d1}I_{d2}$ gives

$$
\Delta I_d=I_{d1}-I_{d2}=\frac k2V_{id}\sqrt{\frac{4I_{\text{TAIL}}}{k}-V_{id}^2},
\qquad |V_{id}|\le\sqrt{\frac{2I_{\text{TAIL}}}{k}} ,
$$

beyond which one device is off and $|\Delta I_d|=I_{\text{TAIL}}$, the maximum value.

### Step 2 — Normalized form of the 85% condition

Define $u=kV_{id}^2/(4I_{\text{TAIL}})$. Then

$$
\frac{\Delta I_d}{I_{\text{TAIL}}}=2\sqrt{u(1-u)},
$$

which rises to 1 at $u=1/2$, the edge of the formula's validity. Setting it to 0.85:

$$
4u(1-u)=0.7225\quad\Rightarrow\quad u=\frac{1-\sqrt{1-0.7225}}{2}=0.23661 ,
$$

taking the root below $1/2$ (the other root lies outside the valid range). With $V_{id}=0.2$ V,

$$
\frac{k}{I_{\text{TAIL}}}=\frac{4u}{V_{id}^2}=\frac{4(0.23661)}{(0.2\ \mathrm V)^2}=23.66\ \mathrm{V^{-2}} .
$$

### Step 3 — Transconductance at balance

Differentiating Step 1 at $V_{id}=0$:

$$
\left.\frac{d\Delta I_d}{dV_{id}}\right|_{V_{id}=0}=\frac k2\sqrt{\frac{4I_{\text{TAIL}}}{k}}=\sqrt{kI_{\text{TAIL}}}=1\ \mathrm{mA/V}
\quad\Rightarrow\quad kI_{\text{TAIL}}=10^{-6}\ \mathrm{A^2/V^2} .
$$

This equals the $g_m$ of one device at $I_{\text{TAIL}}/2$, since $\Delta I_d$ changes by $g_m$ times the full $V_{id}$ when each gate moves by $V_{id}/2$.

### Step 4 — Solve for $k$ and $I_{\text{TAIL}}$

Multiplying and dividing the results of Steps 2 and 3:

$$
k=\sqrt{(23.66\ \mathrm{V^{-2}})(10^{-6}\ \mathrm{A^2/V^2})}=4.864\ \mathrm{mA/V^2},\qquad
I_{\text{TAIL}}=\frac{4.864\ \mathrm{mA/V^2}}{23.66\ \mathrm{V^{-2}}}=205.6\ \mu\mathrm A .
$$

### Step 5 — Device size

$$
\frac W{L_{\text{eff}}}=\frac{k}{k'_n}=\frac{4.864\ \mathrm{mA/V^2}}{194\ \mu\mathrm{A/V^2}}=25.07,\qquad
L_{\text{eff}}=1\ \mu\mathrm m-2(0.09\ \mu\mathrm m)=0.82\ \mu\mathrm m ,
$$

$$
W=25.07\times0.82\ \mu\mathrm m=20.6\ \mu\mathrm m\quad(L_{\text{drwn}}=1\ \mu\mathrm m).
$$

### Step 6 — Check

At balance each device carries 102.8 µA with $V_{ov}=\sqrt{I_{\text{TAIL}}/k}=0.206$ V, so $g_m=2(I_{\text{TAIL}}/2)/V_{ov}=1.0$ mA/V. The pair switches fully at $\sqrt2V_{ov}=0.291$ V, beyond 0.2 V, and substituting $V_{id}=0.2$ V into Step 1 returns $\Delta I_d=0.850\,I_{\text{TAIL}}$. The design is $I_{\text{TAIL}}\approx206\ \mu$A with $W/L_{\text{eff}}\approx25$, i.e. $W\approx20.5\ \mu$m at a drawn length of 1 µm.
