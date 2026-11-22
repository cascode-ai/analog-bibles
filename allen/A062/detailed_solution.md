# Detailed solution - A062

Differentiate the square-law current with respect to $v_{GS}$, $v_{BS}$ and $v_{DS}$ at the dc operating point. In saturation the parameters are expressed through the dc current; in nonsaturation they follow from the terminal voltages after the body-effect threshold is found. Magnitudes are used throughout, so the same formulas serve the p-channel device.

### Step 1 — Small-signal parameters in each region

With $\beta=K'W/L$ and the body-effect threshold $|V_T|=|V_{T0}|+\gamma(\sqrt{2|\phi_F|+|V_{SB}|}-\sqrt{2|\phi_F|})$, so that $\partial|V_T|/\partial|V_{SB}|=\gamma/(2\sqrt{2|\phi_F|+|V_{SB}|})$:

$$
\begin{aligned}
\text{saturation, } |I_D|=\tfrac\beta2(|V_{GS}|-|V_T|)^2(1+\lambda|V_{DS}|):&\quad
g_m\approx\sqrt{2\beta|I_D|},\quad
g_{mbs}=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+|V_{SB}|}},\quad
g_{ds}\approx\lambda|I_D|,\\
\text{nonsaturation, } |I_D|=\beta\big[(|V_{GS}|-|V_T|)|V_{DS}|-\tfrac12|V_{DS}|^2\big]:&\quad
g_m=\beta|V_{DS}|,\quad
g_{mbs}=\frac{\beta\gamma|V_{DS}|}{2\sqrt{2|\phi_F|+|V_{SB}|}},\quad
g_{ds}=\beta\big(|V_{GS}|-|V_T|-|V_{DS}|\big).
\end{aligned}
$$

Both devices have $W/L=100\ \mu\mathrm m/10\ \mu\mathrm m=10$, so $\beta_n=1.1\ \mathrm{mA/V^2}$ and $\beta_p=0.5\ \mathrm{mA/V^2}$.

### Step 2 — (i) Saturation at $|I_D|=50\ \mu$A, $|V_{SB}|=2$ V

Representative substitution for the n-channel device:

$$
g_m=\sqrt{2(1.1\ \mathrm{mA/V^2})(50\ \mu\mathrm A)}=332\ \mu\mathrm S,\qquad
\frac{\gamma}{2\sqrt{2|\phi_F|+|V_{SB}|}}=\frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{2.7\ \mathrm V}}=0.122,
$$

so $g_{mbs}=0.122\times332\ \mu\mathrm S=40.4\ \mu\mathrm S$ and $g_{ds}=(0.01\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=0.5\ \mu\mathrm S$.

| Device | $g_m$ (µS) | $g_{mbs}/g_m$ | $g_{mbs}$ (µS) | $g_{ds}$ (µS) |
|---|---|---|---|---|
| n-channel | 332 | 0.122 | 40.4 | 0.5 |
| p-channel | 224 | 0.170 | 38.1 | 0.5 |

For the p-channel device $\gamma/(2\sqrt{2.8\ \mathrm V})=0.57/3.347=0.170$. The two $g_{ds}$ values are equal because they depend only on $\lambda$ and the current.

### Step 3 — (ii) Threshold and region at $|V_{GS}|=5$ V, $|V_{DS}|=1$ V, $|V_{BS}|=2$ V

$$
|V_{Tn}|=0.7+0.4\big(\sqrt{2.7}-\sqrt{0.7}\big)=1.023\ \mathrm V,\qquad
|V_{Tp}|=0.7+0.57\big(\sqrt{2.8}-\sqrt{0.8}\big)=1.144\ \mathrm V .
$$

Both have $|V_{DS}|=1\ \mathrm V<|V_{GS}|-|V_T|$ (3.977 V and 3.856 V), so both are in nonsaturation. Their dc currents are $\beta[(|V_{GS}|-|V_T|)|V_{DS}|-|V_{DS}|^2/2]=3.83$ mA (n) and 1.68 mA (p).

### Step 4 — (ii) Nonsaturation parameters

For the n-channel device:

$$
g_m=(1.1\ \mathrm{mA/V^2})(1\ \mathrm V)=1.1\ \mathrm{mS},\quad
g_{mbs}=0.122\times1.1\ \mathrm{mS}=134\ \mu\mathrm S,\quad
g_{ds}=(1.1\ \mathrm{mA/V^2})(5-1.023-1)\ \mathrm V=3.28\ \mathrm{mS}.
$$

| Device | $g_m$ (mS) | $g_{mbs}$ (µS) | $g_{ds}$ (mS) | $r_{ds}$ (Ω) |
|---|---|---|---|---|
| n-channel | 1.1 | 134 | 3.28 | 305 |
| p-channel | 0.5 | 85.2 | 1.43 | 700 |

In nonsaturation $g_{ds}$ exceeds $g_m$, the opposite of saturation, where $g_{ds}$ is three orders of magnitude below $g_m$: a device in this region behaves mainly as a voltage-controlled resistor. The factor $(1+\lambda|V_{DS}|)$, if included, changes these values by about 1%.
