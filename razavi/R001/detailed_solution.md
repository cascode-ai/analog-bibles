# Detailed solution - R001

**Approach.** With source and bulk tied there is no body effect, and $|V_{DS}| = 3$ V keeps both devices saturated over the whole sweep, so each curve is the square-law saturation current $I_D = \tfrac12\mu C_{ox}(W/L)(|V_{GS}| - |V_{TH}|)^2$, evaluated point by point.

### Step 1 — Thresholds and region of operation

Both devices have $W/L = 50\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 100$, taking $L = 0.5\ \mu$m as the effective length. Source and bulk are tied, so $V_{SB} = 0$ and the thresholds stay at

$$V_{TH,n} = V_{TH0,n} = 0.7\ \mathrm{V}, \qquad |V_{TH,p}| = |V_{TH0,p}| = 0.8\ \mathrm{V}.$$

Below threshold the square-law model gives $I_D = 0$ (the small subthreshold current is ignored). Above it, the largest overdrive occurs at $|V_{GS}| = 3$ V:

$$
\begin{aligned}
\text{NFET:}\quad V_{ov,\max} &= 3\ \mathrm{V} - 0.7\ \mathrm{V} = 2.3\ \mathrm{V} < 3\ \mathrm{V} = |V_{DS}|,\\
\text{PFET:}\quad V_{ov,\max} &= 3\ \mathrm{V} - 0.8\ \mathrm{V} = 2.2\ \mathrm{V} < 3\ \mathrm{V} = |V_{DS}|.
\end{aligned}
$$

So **both devices are saturated wherever they conduct**, and the curves are parabolas, not straight lines.

### Step 2 — Saturation-current formulas

$$|I_D| = \frac12\,\mu C_{ox}\frac{W}{L}\left(|V_{GS}| - |V_{TH}|\right)^2\left(1 + \lambda|V_{DS}|\right).$$

With $|V_{DS}|$ fixed, channel-length modulation (CLM) only scales each whole curve by a constant, so results are given both without and with it. The prefactors and CLM factors are

$$
\begin{aligned}
\text{NFET:}\quad \frac12\,\mu_nC_{ox}\frac{W}{L} &= \frac12\,(134\ \mu\mathrm{A/V^2})(100) = 6700\ \mu\mathrm{A/V^2} = 6.70\ \mathrm{mA/V^2},\\
\text{PFET:}\quad \frac12\,\mu_pC_{ox}\frac{W}{L} &= \frac12\,(38.4\ \mu\mathrm{A/V^2})(100) = 1920\ \mu\mathrm{A/V^2} = 1.92\ \mathrm{mA/V^2},\\
\text{NFET:}\quad 1 + \lambda_n|V_{DS}| &= 1 + (0.1\ \mathrm{V^{-1}})(3\ \mathrm{V}) = 1.3,\\
\text{PFET:}\quad 1 + \lambda_p|V_{DS}| &= 1 + (0.2\ \mathrm{V^{-1}})(3\ \mathrm{V}) = 1.6.
\end{aligned}
$$

So the two curves are

$$
\begin{aligned}
I_{D,n} &= 6.70\ \mathrm{mA/V^2}\,(V_{GS} - 0.7\ \mathrm{V})^2 \quad (\times 1.3 \text{ with CLM}), && V_{GS} > 0.7\ \mathrm{V},\\
|I_{D,p}| &= 1.92\ \mathrm{mA/V^2}\,(|V_{GS}| - 0.8\ \mathrm{V})^2 \quad (\times 1.6 \text{ with CLM}), && |V_{GS}| > 0.8\ \mathrm{V},
\end{aligned}
$$

and zero below the respective thresholds.

### Step 3 — NFET current, point by point

Overdrive, overdrive squared, times 6.70 mA/V²:

$$
\begin{aligned}
V_{GS} = 1.0\ \mathrm{V}:&\quad (0.3\ \mathrm{V})^2 = 0.09\ \mathrm{V^2}, & I_D &= 6.70 \times 0.09 = 0.603\ \mathrm{mA},\\
V_{GS} = 1.5\ \mathrm{V}:&\quad (0.8\ \mathrm{V})^2 = 0.64\ \mathrm{V^2}, & I_D &= 6.70 \times 0.64 = 4.29\ \mathrm{mA},\\
V_{GS} = 2.0\ \mathrm{V}:&\quad (1.3\ \mathrm{V})^2 = 1.69\ \mathrm{V^2}, & I_D &= 6.70 \times 1.69 = 11.3\ \mathrm{mA},\\
V_{GS} = 2.5\ \mathrm{V}:&\quad (1.8\ \mathrm{V})^2 = 3.24\ \mathrm{V^2}, & I_D &= 6.70 \times 3.24 = 21.7\ \mathrm{mA},\\
V_{GS} = 3.0\ \mathrm{V}:&\quad (2.3\ \mathrm{V})^2 = 5.29\ \mathrm{V^2}, & I_D &= 6.70 \times 5.29 = 35.4\ \mathrm{mA}.
\end{aligned}
$$

With CLM (×1.3): 0.78, 5.57, 14.7, 28.2 and 46.1 mA.

### Step 4 — PFET current, point by point

Same procedure with $|V_{TH}| = 0.8$ V and 1.92 mA/V²:

$$
\begin{aligned}
|V_{GS}| = 1.0\ \mathrm{V}:&\quad (0.2\ \mathrm{V})^2 = 0.04\ \mathrm{V^2}, & |I_D| &= 1.92 \times 0.04 = 0.077\ \mathrm{mA},\\
|V_{GS}| = 1.5\ \mathrm{V}:&\quad (0.7\ \mathrm{V})^2 = 0.49\ \mathrm{V^2}, & |I_D| &= 1.92 \times 0.49 = 0.941\ \mathrm{mA},\\
|V_{GS}| = 2.0\ \mathrm{V}:&\quad (1.2\ \mathrm{V})^2 = 1.44\ \mathrm{V^2}, & |I_D| &= 1.92 \times 1.44 = 2.76\ \mathrm{mA},\\
|V_{GS}| = 2.5\ \mathrm{V}:&\quad (1.7\ \mathrm{V})^2 = 2.89\ \mathrm{V^2}, & |I_D| &= 1.92 \times 2.89 = 5.55\ \mathrm{mA},\\
|V_{GS}| = 3.0\ \mathrm{V}:&\quad (2.2\ \mathrm{V})^2 = 4.84\ \mathrm{V^2}, & |I_D| &= 1.92 \times 4.84 = 9.29\ \mathrm{mA}.
\end{aligned}
$$

With CLM (×1.6): 0.12, 1.51, 4.42, 8.88 and 14.9 mA. The PFET's signed drain current is negative (it flows out of the drain); the plot uses its magnitude.

### Step 5 — The plot

| $\lvert V_{GS}\rvert$ (V) | NFET $I_D$ (mA) | NFET with CLM (mA) | PFET $\lvert I_D\rvert$ (mA) | PFET with CLM (mA) |
|---|---|---|---|---|
| 0 – 0.7 | 0 | 0 | 0 | 0 |
| 0.8 | 0.067 | 0.087 | 0 | 0 |
| 1.0 | 0.603 | 0.784 | 0.077 | 0.123 |
| 1.5 | 4.29 | 5.57 | 0.941 | 1.51 |
| 2.0 | 11.3 | 14.7 | 2.76 | 4.42 |
| 2.5 | 21.7 | 28.2 | 5.55 | 8.88 |
| 3.0 | 35.4 | 46.1 | 9.29 | 14.9 |

- **Flat at zero** up to the threshold: 0.7 V for the NFET, 0.8 V for the PFET.
- **Parabola** above threshold, $I_D \propto (|V_{GS}| - |V_{TH}|)^2$: each curve leaves the axis with zero slope and is concave up all the way to 3 V.
- **Slope** $g_m = dI_D/d|V_{GS}| = \mu C_{ox}(W/L)(|V_{GS}| - |V_{TH}|)$, growing linearly with overdrive. At $|V_{GS}| = 3$ V (no CLM):
$$
\begin{aligned}
g_{m,n} &= (134\ \mu\mathrm{A/V^2})(100)(2.3\ \mathrm{V}) = 30.8\ \mathrm{mA/V},\\
g_{m,p} &= (38.4\ \mu\mathrm{A/V^2})(100)(2.2\ \mathrm{V}) = 8.45\ \mathrm{mA/V}.
\end{aligned}
$$

At full gate drive the ratio of currents is

$$\frac{I_{D,n}}{|I_{D,p}|} = \frac{35.4\ \mathrm{mA}}{9.29\ \mathrm{mA}} = 3.8 \quad\text{(no CLM)}, \qquad \frac{46.1\ \mathrm{mA}}{14.9\ \mathrm{mA}} = 3.1 \quad\text{(with CLM)}.$$

Most of the gap is the mobility ratio $\mu_nC_{ox}/\mu_pC_{ox} = 134/38.4 = 3.49$; the larger PFET threshold widens it slightly, and the PFET's larger $\lambda$ narrows it a little with CLM. (In a real device with $L = 0.5\ \mu$m, velocity saturation would make the curves rise more slowly than a parabola at large overdrive; the square law is the model asked for here.)

### Result

Both curves are zero below threshold and **square-law parabolas** above it, and both devices stay **saturated over the whole sweep** because $|V_{DS}| = 3$ V exceeds the largest overdrive (2.3 V and 2.2 V).

- NFET: $I_D = 6.70\ \mathrm{mA/V^2}\,(V_{GS} - 0.7\ \mathrm{V})^2$, reaching **≈ 35.4 mA** at $V_{GS} = 3$ V (**≈ 46.1 mA** with the factor $1 + \lambda|V_{DS}| = 1.3$).
- PFET: $|I_D| = 1.92\ \mathrm{mA/V^2}\,(|V_{GS}| - 0.8\ \mathrm{V})^2$, reaching **≈ 9.3 mA** at $|V_{GS}| = 3$ V (**≈ 14.9 mA** with $1 + \lambda|V_{DS}| = 1.6$).
- At full gate drive the NFET carries about 3.8 times (3.1 times with CLM) the PFET current.

**Common mistake.** Using the triode formula, or drawing the curves as straight lines. With $|V_{DS}| = 3$ V the drain voltage always exceeds the overdrive, so both devices are saturated and $I_D$ grows with the *square* of $|V_{GS}| - |V_{TH}|$.

**Common mistake.** Using $\mu_nC_{ox}$ for the PFET, which leaves the curves differing only by the threshold shift instead of by the factor of roughly 3.5–4, or forgetting the factor $\tfrac12$, which doubles every current.

**Common mistake.** Applying channel-length modulation as a divisor, $I_D/(1 + \lambda|V_{DS}|)$, or as $(1 + \lambda)$ without the voltage. A larger $|V_{DS}|$ *increases* the saturation current, so the factor multiplies and must include $|V_{DS}|$ (giving 1.3 and 1.6 here).
