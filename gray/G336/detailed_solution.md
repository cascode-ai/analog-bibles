# Detailed solution - G336

Each emitter-coupled pair splits its tail current according to the tanh law. The lower pair $Q_1$–$Q_2$ splits $I_{EE}$ according to $V_2$, and each upper pair splits its share according to $V_1$. The cross-coupled collectors then subtract the two upper differences, which leaves the product of two tanh functions. For each $V_1$, the curve versus $V_2$ is a tanh scaled by $\tanh(V_1/2V_T)$.

### Step 1 — Tanh law of a bipolar pair

For two identical forward-active transistors with tied emitters and tail current $I$, $I_{c,a}/I_{c,b}=\exp(V_{id}/V_T)$, where $V_{id}=V_{b,a}-V_{b,b}$, and $I_{c,a}+I_{c,b}=I$ when base currents are neglected. Hence
$$
I_{c,a}-I_{c,b}=I\tanh\!\left(\frac{V_{id}}{2V_T}\right).
$$

### Step 2 — Lower and upper pairs

The + terminal of $V_2$ drives $Q_1$, so
$$
I_{c1}-I_{c2}=I_{EE}\tanh\!\left(\frac{V_2}{2V_T}\right).
$$
The + terminal of $V_1$ drives the bases of $Q_3$ and $Q_6$, and the − terminal drives $Q_4$ and $Q_5$. Applying the tanh law to each upper pair:
$$
I_{c3}-I_{c4}=I_{c1}\tanh\!\left(\frac{V_1}{2V_T}\right),\qquad
I_{c6}-I_{c5}=I_{c2}\tanh\!\left(\frac{V_1}{2V_T}\right).
$$

### Step 3 — Output current

The collectors of $Q_3$ and $Q_5$ are joined, as are those of $Q_4$ and $Q_6$:
$$
I_{\text{out}}=(I_{c3}+I_{c5})-(I_{c4}+I_{c6})=(I_{c3}-I_{c4})-(I_{c6}-I_{c5})=(I_{c1}-I_{c2})\tanh\!\left(\frac{V_1}{2V_T}\right),
$$
$$
I_{\text{out}}=I_{EE}\tanh\!\left(\frac{V_1}{2V_T}\right)\tanh\!\left(\frac{V_2}{2V_T}\right).
$$
$I_{\text{out}}$ has the sign of $V_1V_2$, and for small inputs $I_{\text{out}}\approx I_{EE}V_1V_2/(4V_T^2)$.

### Step 4 — Curves for the three values of $V_1$

For fixed $V_1$, $I_{\text{out}}(V_2)$ is an odd tanh curve through the origin. Its saturation level is $\pm I_{EE}\tanh(V_1/2V_T)$, and its slope at the origin is half that level divided by $V_T$:

| $V_1$ | $\tanh(V_1/2V_T)$ | Saturation level | Slope at $V_2=0$ |
|---|---|---|---|
| $0.1V_T$ | 0.050 | $\pm0.050\,I_{EE}$ | $0.025\,I_{EE}/V_T$ |
| $0.5V_T$ | 0.245 | $\pm0.245\,I_{EE}$ | $0.122\,I_{EE}/V_T$ |
| $V_T$ | 0.462 | $\pm0.462\,I_{EE}$ | $0.231\,I_{EE}/V_T$ |

For example, at $V_1=V_T$, $\tanh(0.5)=0.462$, so $I_{\text{out}}$ approaches $\pm0.462\,I_{EE}$.

All three curves have the same shape in $V_2$. Each is close to linear for $|V_2|\lesssim V_T$, reaches $\tanh(0.5)=46\%$ of its limit at $V_2=V_T$, 76% at $2V_T$, and 96% at $4V_T$, and is flat beyond about $\pm4V_T$.

![Iout/IEE versus V2/VT from −6 to 6 for V1 = 0.1VT, 0.5VT and VT: three tanh curves through the origin saturating at ±0.050, ±0.245 and ±0.462 IEE](/q/G336/solution-curves.svg)

The saturation levels are in the ratio 1 : 4.9 : 9.2 rather than 1 : 5 : 10. At $V_1=V_T$, the upper pairs are already compressing $V_1$ through their own tanh characteristic, so the multiplier is linear in $V_1$ only for $|V_1|\ll2V_T$.
