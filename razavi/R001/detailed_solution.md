# Detailed solution - R001

**Approach.** Use the square-law model of a long-channel MOSFET. First check which region each device is in over the whole sweep (it turns out both stay in saturation), then write the saturation current $I_D = \tfrac12\mu C_{ox}(W/L)(|V_{GS}| - |V_{TH}|)^2$ for each device, evaluate it point by point, and describe the two curves.

### Step 1 — Set-up, symbols and threshold voltages

Both transistors have the same geometry:

$$\frac{W}{L} = \frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 100 .$$

Here $W$ is the channel width and $L$ the channel length; we take $L = 0.5\ \mu$m as the effective length (no correction for lateral diffusion is given).

Symbols used below:

- $V_{GS}$, $V_{DS}$: gate–source and drain–source voltages. For the PFET they are negative, so we work with magnitudes $|V_{GS}|$, $|V_{DS}|$.
- $V_{TH}$: threshold voltage; $V_{TH0}$ is its value when the source–bulk voltage $V_{SB}$ is zero.
- $\mu C_{ox}$: process transconductance parameter (mobility times gate-oxide capacitance per unit area), $\mu_nC_{ox}$ for the NFET and $\mu_pC_{ox}$ for the PFET.
- $\lambda$: channel-length modulation coefficient.

**No body effect.** The source and bulk of each device are tied together, so $V_{SB} = 0$ and the threshold stays at its zero-bias value for the whole sweep:

$$V_{TH,n} = V_{TH0,n} = 0.7\ \mathrm{V}, \qquad |V_{TH,p}| = |V_{TH0,p}| = 0.8\ \mathrm{V}.$$

The test set-up is simple: the drain–source voltage is held at $|V_{DS}| = 3$ V while the gate–source voltage is swept from 0 to 3 V in magnitude.

### Step 2 — Region of operation over the sweep

**Below threshold.** For $|V_{GS}| < |V_{TH}|$ no inversion channel forms. In the square-law model the device is **off** and $I_D = 0$. (In reality a small subthreshold current flows, decaying exponentially as $|V_{GS}|$ falls; the square law ignores it.)

**Above threshold.** The device is in saturation when the drain–source voltage is at least the overdrive voltage $V_{ov} = |V_{GS}| - |V_{TH}|$:

$$|V_{DS}| \ge |V_{GS}| - |V_{TH}| .$$

The largest overdrive occurs at the end of the sweep, $|V_{GS}| = 3$ V:

$$
\begin{aligned}
\text{NFET:}\quad V_{ov,\max} &= 3\ \mathrm{V} - 0.7\ \mathrm{V} = 2.3\ \mathrm{V} < 3\ \mathrm{V} = |V_{DS}|,\\
\text{PFET:}\quad V_{ov,\max} &= 3\ \mathrm{V} - 0.8\ \mathrm{V} = 2.2\ \mathrm{V} < 3\ \mathrm{V} = |V_{DS}|.
\end{aligned}
$$

Since even the largest overdrive is below $|V_{DS}| = 3$ V, **both devices are in saturation everywhere they conduct**. The triode-region formula is never needed, and the curves will be parabolas, not straight lines.

### Step 3 — Saturation-current formulas

The square-law saturation current (magnitude, valid for both device types) is

$$|I_D| = \frac12\,\mu C_{ox}\frac{W}{L}\left(|V_{GS}| - |V_{TH}|\right)^2\left(1 + \lambda|V_{DS}|\right).$$

The factor $(1 + \lambda|V_{DS}|)$ models channel-length modulation (CLM): a larger $|V_{DS}|$ shortens the effective channel slightly and raises the current. Many hand calculations drop it (first-order model). Here $|V_{DS}|$ is fixed, so CLM only multiplies each whole curve by a constant; we give results both without and with it.

**NFET prefactor:**

$$\frac12\,\mu_nC_{ox}\frac{W}{L} = \frac12\,(134\ \mu\mathrm{A/V^2})(100) = 6700\ \mu\mathrm{A/V^2} = 6.70\ \mathrm{mA/V^2}.$$

**PFET prefactor:**

$$\frac12\,\mu_pC_{ox}\frac{W}{L} = \frac12\,(38.4\ \mu\mathrm{A/V^2})(100) = 1920\ \mu\mathrm{A/V^2} = 1.92\ \mathrm{mA/V^2}.$$

**CLM factors** at $|V_{DS}| = 3$ V:

$$
\begin{aligned}
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

### Step 4 — NFET current, point by point

Each line is: overdrive, overdrive squared, times 6.70 mA/V².

$$
\begin{aligned}
V_{GS} = 1.0\ \mathrm{V}:&\quad (0.3\ \mathrm{V})^2 = 0.09\ \mathrm{V^2}, & I_D &= 6.70 \times 0.09 = 0.603\ \mathrm{mA},\\
V_{GS} = 1.5\ \mathrm{V}:&\quad (0.8\ \mathrm{V})^2 = 0.64\ \mathrm{V^2}, & I_D &= 6.70 \times 0.64 = 4.29\ \mathrm{mA},\\
V_{GS} = 2.0\ \mathrm{V}:&\quad (1.3\ \mathrm{V})^2 = 1.69\ \mathrm{V^2}, & I_D &= 6.70 \times 1.69 = 11.3\ \mathrm{mA},\\
V_{GS} = 2.5\ \mathrm{V}:&\quad (1.8\ \mathrm{V})^2 = 3.24\ \mathrm{V^2}, & I_D &= 6.70 \times 3.24 = 21.7\ \mathrm{mA},\\
V_{GS} = 3.0\ \mathrm{V}:&\quad (2.3\ \mathrm{V})^2 = 5.29\ \mathrm{V^2}, & I_D &= 6.70 \times 5.29 = 35.4\ \mathrm{mA}.
\end{aligned}
$$

With CLM, multiply each value by 1.3: 0.78, 5.57, 14.7, 28.2 and 46.1 mA.

### Step 5 — PFET current, point by point

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

With CLM, multiply each value by 1.6: 0.12, 1.51, 4.42, 8.88 and 14.9 mA.

For the PFET the current flows *out of* the drain (from source to drain inside the device), so the signed drain current is negative; the plot uses its magnitude, as the problem asks for $|V_{GS}|$ on the horizontal axis.

### Step 6 — The plot

Collecting the values:

| $\lvert V_{GS}\rvert$ (V) | NFET $I_D$ (mA) | NFET with CLM (mA) | PFET $\lvert I_D\rvert$ (mA) | PFET with CLM (mA) |
|---|---|---|---|---|
| 0 – 0.7 | 0 | 0 | 0 | 0 |
| 0.8 | 0.067 | 0.087 | 0 | 0 |
| 1.0 | 0.603 | 0.784 | 0.077 | 0.123 |
| 1.5 | 4.29 | 5.57 | 0.941 | 1.51 |
| 2.0 | 11.3 | 14.7 | 2.76 | 4.42 |
| 2.5 | 21.7 | 28.2 | 5.55 | 8.88 |
| 3.0 | 35.4 | 46.1 | 9.29 | 14.9 |

**Shape of each curve.**

- **Flat at zero** up to the threshold: 0.7 V for the NFET, 0.8 V for the PFET.
- **Parabola** above threshold: $I_D \propto (|V_{GS}| - |V_{TH}|)^2$. The curve leaves the axis with zero slope and bends upward (concave up) all the way to 3 V.
- **Slope** = transconductance $g_m = dI_D/d|V_{GS}| = \mu C_{ox}(W/L)(|V_{GS}| - |V_{TH}|)$, which grows linearly with overdrive. At $|V_{GS}| = 3$ V (no CLM):
$$
\begin{aligned}
g_{m,n} &= (134\ \mu\mathrm{A/V^2})(100)(2.3\ \mathrm{V}) = 30.8\ \mathrm{mA/V},\\
g_{m,p} &= (38.4\ \mu\mathrm{A/V^2})(100)(2.2\ \mathrm{V}) = 8.45\ \mathrm{mA/V}.
\end{aligned}
$$

**Comparing the two devices.** At full gate drive the ratio of currents is

$$\frac{I_{D,n}}{|I_{D,p}|} = \frac{35.4\ \mathrm{mA}}{9.29\ \mathrm{mA}} = 3.8 \quad\text{(no CLM)}, \qquad \frac{46.1\ \mathrm{mA}}{14.9\ \mathrm{mA}} = 3.1 \quad\text{(with CLM)}.$$

Most of this comes from the mobility ratio $\mu_nC_{ox}/\mu_pC_{ox} = 134/38.4 = 3.49$: electrons move about 3.5 times faster than holes. The slightly larger PFET threshold adds to the gap. The PFET's larger $\lambda$ narrows it a little when CLM is included.

**Physical intuition.** Above threshold the gate charges an inversion layer whose charge grows linearly with overdrive, and in saturation the current is set by that charge *and* by the lateral field it creates, so it grows as the square of the overdrive. In a real short-channel device ($L = 0.5\ \mu$m) velocity saturation would make the curves rise more slowly than a parabola at large overdrive, but the square law is the model asked for here.

### Result

Both curves are zero below threshold and **square-law parabolas** above it, and both devices stay **saturated over the whole sweep** because $|V_{DS}| = 3$ V exceeds the largest overdrive (2.3 V and 2.2 V).

- NFET: $I_D = 6.70\ \mathrm{mA/V^2}\,(V_{GS} - 0.7\ \mathrm{V})^2$, reaching **≈ 35.4 mA** at $V_{GS} = 3$ V (**≈ 46.1 mA** with the factor $1 + \lambda|V_{DS}| = 1.3$).
- PFET: $|I_D| = 1.92\ \mathrm{mA/V^2}\,(|V_{GS}| - 0.8\ \mathrm{V})^2$, reaching **≈ 9.3 mA** at $|V_{GS}| = 3$ V (**≈ 14.9 mA** with $1 + \lambda|V_{DS}| = 1.6$).
- At full gate drive the NFET carries about 3.8 times (3.1 times with CLM) the PFET current.

**Common mistake.** Using the triode formula, or drawing the curves as straight lines. With $|V_{DS}| = 3$ V the drain voltage always exceeds the overdrive, so both devices are saturated and $I_D$ grows with the *square* of $|V_{GS}| - |V_{TH}|$.

**Common mistake.** Using $\mu_nC_{ox}$ for the PFET, or forgetting the factor $\tfrac12$. The first makes the two curves differ only by the threshold shift, and the second doubles every current; both break the correct result that the PFET carries roughly 3.5–4 times less current than an identically sized NFET.

**Common mistake.** Applying channel-length modulation as a divisor, $I_D/(1 + \lambda|V_{DS}|)$, or as $(1 + \lambda)$ without the voltage. A larger $|V_{DS}|$ *increases* the saturation current, so the factor multiplies, and it must include $|V_{DS}|$ (giving 1.3 and 1.6 here).
