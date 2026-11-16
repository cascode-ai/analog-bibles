# Detailed solution - R696

**Approach.** Write the small-signal gain of the differential pair with an active current-mirror load in terms of device parameters at the given (target) tail current, then check which parameters each fabrication error changes. Because the bias current is fixed, anything that enters only through the threshold voltage drops out; what matters is $\mu_nC_{ox}(W/L)$ of the input pair and the $\lambda$'s.

### Step 1 — The gain at a fixed tail current

Call the NMOS input pair $M_1$, $M_2$ (tail current $I_{SS}$), the PMOS mirror $M_3$ (diode-connected, on the $M_1$ side) and $M_4$, with the output at the drains of $M_2$ and $M_4$; at balance each device carries $I_D = I_{SS}/2$. The standard result for this stage is $G_m \approx g_{m1}$ (the mirror copies $M_1$'s current to the output) and $R_{out} \approx r_{O2}\parallel r_{O4}$, so

$$|A_v| = G_mR_{out} = g_{m1}\,(r_{O2}\parallel r_{O4}).$$

With $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1\frac{I_{SS}}{2}} = \sqrt{\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1I_{SS}},\\
r_{O2}\parallel r_{O4} &= \frac{1}{\lambda_n\dfrac{I_{SS}}{2} + \lambda_p\dfrac{I_{SS}}{2}} = \frac{2}{(\lambda_n + \lambda_p)I_{SS}},\\
|A_v| &= \sqrt{\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1I_{SS}}\cdot\frac{2}{(\lambda_n + \lambda_p)I_{SS}} = \frac{2}{\lambda_n + \lambda_p}\sqrt{\frac{\mu_nC_{ox}(W/L)_1}{I_{SS}}} .
\end{aligned}
$$

With $I_{SS}$ on target, the gain can fall only if

- $\mu_nC_{ox}$ of the **input** transistors falls (lower $g_{m1}$), or
- $\lambda_n$ or $\lambda_p$ rises (lower $r_O$), or
- a device leaves saturation because of lost headroom (a bias-point problem).

The threshold voltages, the PMOS mobility and $g_{m3}$ are **absent**: the mirror's transconductance sets the mirror pole (speed), not the low-frequency gain.

### Step 2 — (a) Heavy n-well implantation: not a cause

A heavier n-well implant affects only the **PMOS** devices $M_3$, $M_4$; the NMOS input pair is in the substrate.

- **$|V_{THP}|$ increases** (more depletion charge). At fixed current this does not enter the gain.
- **Hole mobility decreases** (more impurity scattering). This lowers $g_{m3}$, which affects only the mirror pole.
- **The drain depletion region is narrower** in the more heavily doped well, so $\lambda_p$ decreases and $r_{O4}$ **increases**. If anything, the gain goes *up*.
- The well and drain junction capacitances increase, which affects speed, not the DC gain.

The only way (a) could hurt is through **headroom**: $|V_{GS3}| = |V_{THP}| + |V_{ov3}|$ grows (higher threshold and, with lower mobility, larger overdrive), so the drains of $M_1$ and $M_2$ sit lower, at $V_{DD} - |V_{GS3}|$, and at a high input common-mode level $M_1$, $M_2$ could enter triode. That depends on the bias levels and is not an intrinsic gain reduction. **Verdict: not the explanation.**

### Step 3 — (b) Heavy threshold-adjust implantation: not a cause

A heavier dose of the usual p-type (boron) adjust implant raises $V_{THN}$ and lowers $|V_{THP}|$.

- **At a fixed current, $V_{TH}$ does not enter the gain.** $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ and $r_O = 1/(\lambda I_D)$ contain no threshold; the devices just settle at different $V_{GS} = V_{TH} + V_{ov}$ with the same $V_{ov}$.
- **Headroom.** A smaller $|V_{THP}|$ makes $|V_{GS3}|$ smaller, so the drains of $M_1$, $M_2$ sit *higher*, giving the input pair more room. A larger $V_{THN}$ shifts the input common-mode range up but does not by itself push anything into triode; the tail current is on target.
- **Second-order effects.** Heavier channel doping slightly degrades mobility (slightly lower $g_{m1}$) and slightly reduces $\lambda$ (larger $r_O$); these roughly offset and are minor.

**Verdict: not the explanation.**

### Step 4 — (c) A long gate oxidation cycle: the cause

A longer oxidation grows a **thicker gate oxide**, so $C_{ox} = \varepsilon_{ox}/t_{ox}$ **decreases** for all transistors. At the target tail current:

- **$g_{m1}$ falls:**
$$g_{m1} = \sqrt{\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1I_{SS}} \;\propto\; \sqrt{C_{ox}} .$$
The same current needs a larger overdrive, and $g_m = 2I_D/V_{ov}$ is then smaller.
- **$r_O$ is essentially unchanged**, because $r_O = 1/(\lambda I_D)$ does not depend on $C_{ox}$. (If anything, the weaker gate control of a thicker oxide makes channel-length modulation slightly worse.)

Therefore

$$|A_v| = \frac{2}{\lambda_n + \lambda_p}\sqrt{\frac{\mu_nC_{ox}(W/L)_1}{I_{SS}}} \;\propto\; \sqrt{C_{ox}} \;\propto\; \frac{1}{\sqrt{t_{ox}}}$$

drops. For example, an oxide 30 % thicker than intended gives

$$\frac{|A_v|_{\text{actual}}}{|A_v|_{\text{target}}} = \sqrt{\frac{t_{ox,\text{target}}}{t_{ox,\text{actual}}}} = \sqrt{\frac{1}{1.3}} = 0.877,$$

i.e. about 12 % less gain; doubling the oxide thickness would cut the gain to $1/\sqrt2 \approx 0.71$ of its target. **Verdict: yes, this explains the low gain.**

### Result

- **(a) Heavy n-well implant — no.** It affects only the PMOS load: higher $|V_{THP}|$, lower hole mobility and a smaller $\lambda_p$ (larger $r_{O4}$). None of these lowers $g_{m1}(r_{O2}\parallel r_{O4})$; only a headroom loss at a high input common-mode level could hurt.
- **(b) Heavy threshold-adjust implant — no.** It shifts the thresholds, but at a fixed bias current $g_m$ and $r_O$ do not depend on $V_{TH}$; headroom for the input pair even improves.
- **(c) Long gate oxidation — yes.** The thicker oxide reduces $C_{ox}$, so at the target current $g_{m1} = \sqrt{\mu_nC_{ox}(W/L)_1I_{SS}}$ falls as $\sqrt{C_{ox}}$ while $r_O$ is unchanged; the gain $|A_v| = g_{m1}(r_{O2}\parallel r_{O4})$ drops accordingly.

**Common mistake.** Choosing (b) because "a higher threshold lowers $g_m$". That holds only at a fixed $V_{GS}$; here the tail current is fixed, so the overdrive and $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ are unchanged.

**Common mistake.** Choosing (a) because the PMOS devices get worse. The mirror's transconductance does not appear in the low-frequency gain, and the heavier well doping actually *raises* $r_{O4}$.

**Common mistake.** Arguing that a thicker oxide raises the gain because "$r_O$ increases when $g_m$ drops". At fixed bias current $r_O = 1/(\lambda I_D)$ does not change; only $g_m$ falls.
