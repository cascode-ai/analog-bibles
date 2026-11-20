# Detailed solution - R004

Hold $V_{DS}$ fixed and use the saturation condition to locate where each gate-voltage sweep changes region.

### Step 1 — Piecewise current and operating regions

Source and bulk are grounded, so $V_{TH}=0.7$ V without body-effect shift. Use the strong-inversion square-law model, neglecting CLM and subthreshold current. Let $u=V_{GS}-V_{TH}$ and $\beta=\mu_nC_{ox}(W/L)$, in A/V². Since $\beta$ is unspecified, plot $I_D/\beta$, in V².

For $V_{DS}>0$, a device is off for $u\le0$, saturated for $0<u\le V_{DS}$, and in triode for $u>V_{DS}$. The model currents are

$$
\frac{I_D}{\beta}=\begin{cases}
0,&u\le0,\\
u^2/2,&0<u\le V_{DS},\\
uV_{DS}-V_{DS}^2/2,&u>V_{DS}.
\end{cases}
$$

At fixed $V_{DS}$, saturation requires $V_{DS}\ge V_{GS}-V_{TH}$, or $V_{GS}\le V_{TH}+V_{DS}$. Hence increasing $V_{GS}$ gives **cutoff → saturation → triode**, with boundaries
$$
V_{GS,1}=0.7\ \mathrm V,\qquad V_{GS,2}=0.7\ \mathrm V+V_{DS}.
$$

### Step 2 — Shape and continuity at the boundary

The saturation segment is the same parabola $I_D=\beta u^2/2$ for every $V_{DS}$, starting with zero slope at threshold. At $u=V_{DS}$, substitution in both branches gives

$$
I_{D,\mathrm{sat}}=\tfrac12\beta V_{DS}^2,
\qquad I_{D,\mathrm{tri}}=\beta(V_{DS}^2-\tfrac12V_{DS}^2)=\tfrac12\beta V_{DS}^2.
$$
$$
\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{\mathrm{sat}}=\beta u=\beta V_{DS}
=\left.\frac{\partial I_D}{\partial V_{GS}}\right|_{\mathrm{tri}}.
$$

Thus each triode branch is a straight tangent to the parabola, with slope $\beta V_{DS}$. The second break point changes curvature, not slope; a larger $V_{DS}$ extends the common parabolic segment and produces a steeper line.

### Step 3 — Plot the family and verify key values

For the three fixed drain voltages, the boundary coordinates follow from $V_{GS,2}=0.7\ \mathrm V+V_{DS}$ and $I_D/\beta=V_{DS}^2/2$:

| $V_{DS}$ (V) | $V_{GS,2}$ (V) | $I_D/\beta$ at boundary (V²) |
|---|---|---|
| 0.2 | 0.9 | 0.020 |
| 0.5 | 1.2 | 0.125 |
| 1.0 | 1.7 | 0.500 |

![Transfer characteristics, normalized current and smooth region boundaries](/q/R004/solution-curves.svg)

For example, at $V_{GS}=2$ V and $V_{DS}=0.5$ V, $u=1.3$ V exceeds $V_{DS}$, so the triode formula gives
$$
\frac{I_D}{\beta}=(1.3\ \mathrm V)(0.5\ \mathrm V)-\frac{(0.5\ \mathrm V)^2}{2}=0.525\ \mathrm{V^2}.
$$
For $V_{DS}\ge2.3$ V the entire conducting part of the 0–3 V sweep is saturated, giving the dashed parabolic envelope. The $V_{DS}=2.3$ V boundary is at the right endpoint. At $V_{DS}=0$, all currents are zero; for $0<V_{DS}\ll u$, neglecting $V_{DS}^2/2$ gives the deep-triode approximation $I_D\approx\beta uV_{DS}$.


**Model note:** If channel-length modulation is added, state the chosen piecewise extension explicitly. Multiplying both branches by the same fixed factor preserves the tangent join in this approximation; multiplying only the saturation branch creates a discontinuity.
