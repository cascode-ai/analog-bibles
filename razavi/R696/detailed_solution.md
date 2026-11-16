# Detailed solution - R696

**Approach.** Write the small-signal gain of the differential pair with an active current-mirror load in terms of device parameters at the given (target) tail current. Then check which parameters each fabrication error changes. Because the bias current is fixed, anything that enters only through the threshold voltage drops out; what matters is $\mu_nC_{ox}(W/L)$ of the input pair and the channel-length modulation coefficients $\lambda$.

### Step 1 — The circuit and its gain

Name the devices: NMOS input pair $M_1$, $M_2$ with tail current $I_{SS}$; PMOS mirror load in the n-well, $M_3$ (diode-connected, on the $M_1$ side) and $M_4$ (on the $M_2$ side); the output is the common drain of $M_2$ and $M_4$. At balance each device carries $I_D = I_{SS}/2$.

**Gain.** Use the "transconductance × output resistance" view:

- **Short-circuit output current.** With the output held at AC ground and a differential input $v_{in}$, $M_1$ and $M_2$ carry small-signal currents $\pm g_{m1}v_{in}/2$. The mirror $M_3$–$M_4$ copies $M_1$'s current to the output, where it adds to $M_2$'s, so the output current is $g_{m1}v_{in}$: the overall transconductance is $G_m \approx g_{m1}$.
- **Output resistance.** Looking into the output node, the drain of $M_2$ presents $r_{O2}$ (its source sees a low impedance) and the drain of $M_4$ presents $r_{O4}$, so $R_{out} \approx r_{O2}\parallel r_{O4}$.

Hence

$$|A_v| = G_mR_{out} = g_{m1}\,(r_{O2}\parallel r_{O4}).$$

**In terms of device parameters at the fixed bias current.** With the square-law transconductance and $r_O = 1/(\lambda I_D)$, where $\lambda$ is the channel-length modulation coefficient:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1\frac{I_{SS}}{2}} = \sqrt{\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1I_{SS}},\\
r_{O2}\parallel r_{O4} &= \frac{1}{\lambda_n\dfrac{I_{SS}}{2} + \lambda_p\dfrac{I_{SS}}{2}} = \frac{2}{(\lambda_n + \lambda_p)I_{SS}},\\
|A_v| &= \sqrt{\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1I_{SS}}\cdot\frac{2}{(\lambda_n + \lambda_p)I_{SS}} = \frac{2}{\lambda_n + \lambda_p}\sqrt{\frac{\mu_nC_{ox}(W/L)_1}{I_{SS}}} .
\end{aligned}
$$

**What this tells us.** With $I_{SS}$ at its target value, the gain can fall only if

- $\mu_nC_{ox}$ of the **input** transistors falls (lower $g_{m1}$), or
- $\lambda_n$ or $\lambda_p$ rises (lower $r_O$), or
- a device leaves saturation because of lost headroom (a bias-point problem).

Notice what is **absent**: the threshold voltages, the PMOS mobility and $g_{m3}$. The PMOS mirror only copies a current; its transconductance sets the mirror pole (speed), not the low-frequency gain.

### Step 2 — (a) Heavy n-well implantation: not a cause

A heavier n-well implant raises the doping of the region in which the **PMOS** devices $M_3$, $M_4$ are built. The NMOS input pair is in the substrate and is unaffected. For the PMOS devices:

- **$|V_{THP}|$ increases** (more depletion charge must be overcome to invert the surface). At fixed current this does not enter the gain.
- **Hole mobility decreases** (more impurity scattering). This lowers $g_{m3}$, which affects only the mirror pole, not $g_{m1}(r_{O2}\parallel r_{O4})$.
- **The drain depletion region is narrower** in the more heavily doped well, so the drain voltage modulates the effective channel length less: $\lambda_p$ decreases and $r_{O4}$ **increases**. If anything, the gain goes *up*.
- The well-to-substrate and drain junction capacitances increase, which affects speed, not the DC gain.

The only way (a) could hurt is through **headroom**: $|V_{GS3}| = |V_{THP}| + |V_{ov3}|$ grows (higher threshold and, with lower mobility, larger overdrive), so the drains of $M_1$ and $M_2$ sit lower, at $V_{DD} - |V_{GS3}|$. At a high input common-mode level $M_1$, $M_2$ could then enter the triode region and lose gain. That depends on the bias levels and is not an intrinsic gain reduction. **Verdict: not the explanation.**

### Step 3 — (b) Heavy threshold-adjust implantation: not a cause

The threshold-adjust implant is a shallow implant into the channel regions whose purpose is to set the thresholds. A heavier dose shifts both thresholds; for the usual p-type (boron) adjust implant in an n-well process, $V_{THN}$ rises and $|V_{THP}|$ falls.

- **At a fixed current, $V_{TH}$ does not enter the gain.** The square-law $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ and $r_O = 1/(\lambda I_D)$ contain no threshold. The devices simply settle at different gate–source voltages ($V_{GS} = V_{TH} + V_{ov}$ with the same $V_{ov}$) and carry the same current.
- **Headroom.** A smaller $|V_{THP}|$ makes $|V_{GS3}|$ smaller, so the drains of $M_1$, $M_2$ sit *higher*, giving the input pair more room to stay saturated. A larger $V_{THN}$ shifts the input common-mode range up but does not by itself push anything into triode; the tail current is stated to be on target.
- **Second-order effects.** Heavier channel doping slightly degrades mobility (small reduction of $g_{m1}$) and slightly reduces $\lambda$ (larger $r_O$); these roughly offset and are minor.

**Verdict: not the explanation.**

### Step 4 — (c) A long gate oxidation cycle: the cause

A longer oxidation cycle grows a **thicker gate oxide**, so

$$C_{ox} = \frac{\varepsilon_{ox}}{t_{ox}}$$

**decreases** for all transistors. At the target tail current:

- **$g_{m1}$ falls:**
$$g_{m1} = \sqrt{\mu_nC_{ox}\Big(\frac{W}{L}\Big)_1I_{SS}} \;\propto\; \sqrt{C_{ox}} .$$
To push the same current through a device with less oxide capacitance, a larger overdrive is needed, and $g_m = 2I_D/V_{ov}$ is then smaller.
- **$r_O$ is essentially unchanged**, because $r_O = 1/(\lambda I_D)$ depends on the current and $\lambda$, not on $C_{ox}$. (If anything, the weaker gate control of a thicker oxide makes channel-length modulation slightly worse, lowering $r_O$ further.)

Therefore

$$|A_v| = \frac{2}{\lambda_n + \lambda_p}\sqrt{\frac{\mu_nC_{ox}(W/L)_1}{I_{SS}}} \;\propto\; \sqrt{C_{ox}} \;\propto\; \frac{1}{\sqrt{t_{ox}}}$$

drops. For example, an oxide 30 % thicker than intended gives

$$\frac{|A_v|_{\text{actual}}}{|A_v|_{\text{target}}} = \sqrt{\frac{t_{ox,\text{target}}}{t_{ox,\text{actual}}}} = \sqrt{\frac{1}{1.3}} = 0.877,$$

i.e. about 12 % less gain; doubling the oxide thickness would cut the gain to $1/\sqrt2 \approx 0.71$ of its target. **Verdict: yes, this explains the low gain.**

### Result

- **(a) Heavy n-well implant — no.** It affects only the PMOS load: higher $|V_{THP}|$, lower hole mobility and a smaller $\lambda_p$ (larger $r_{O4}$). None of these lowers $g_{m1}(r_{O2}\parallel r_{O4})$; only a headroom loss at a high input common-mode level could hurt.
- **(b) Heavy threshold-adjust implant — no.** It shifts the thresholds, but at a fixed bias current $g_m$ and $r_O$ do not depend on $V_{TH}$; headroom for the input pair even improves.
- **(c) Long gate oxidation — yes.** The thicker oxide reduces $C_{ox}$, so at the target current $g_{m1} = \sqrt{\mu_nC_{ox}(W/L)_1I_{SS}}$ falls as $\sqrt{C_{ox}}$ while $r_O$ is unchanged; the gain $|A_v| = g_{m1}(r_{O2}\parallel r_{O4})$ drops accordingly.

**Common mistake.** Choosing (b) with the argument "a higher threshold lowers $g_m$". That is true only at a fixed gate–source voltage. Here the tail current is fixed, so the overdrive is the same and $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ is unchanged; the device just sits at a larger $V_{GS}$.

**Common mistake.** Choosing (a) because the PMOS devices get worse (lower mobility, higher threshold). The PMOS mirror's transconductance does not appear in the low-frequency gain, and the heavier well doping actually *raises* $r_{O4}$.

**Common mistake.** Arguing that a thicker oxide raises the gain because "$r_O$ increases when $g_m$ drops". At fixed bias current, $r_O = 1/(\lambda I_D)$ does not change; only $g_m$ falls, so the intrinsic gain falls.
