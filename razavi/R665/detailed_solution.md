# Detailed solution - R665

**Approach.** Model each S/D region as an abrupt $n^+$–$p$ junction (S/D doping $N_D$, substrate doping $N_A$) and as a thin resistive layer of depth $x_j$. Compare ideal scaling ($N_D \to \alpha N_D$) with $N_D$ fixed for the depletion width and junction capacitance, the sheet and contact resistance, and the channel-side reach of the drain depletion region, which controls DIBL.

### Step 1 — The junction depletion width

For reverse bias $V_R$ much larger than the built-in potential,

$$W_d = \sqrt{\frac{2\epsilon_{si}}{q}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)V_R},$$

split by charge neutrality ($qN_Ax_p = qN_Dx_n$) into a channel-side part $x_p$ and an $n^+$-side part $x_n$:

$$x_p = W_d\,\frac{N_D}{N_A + N_D}, \qquad x_n = W_d\,\frac{N_A}{N_A + N_D}.$$

**Ideal scaling** ($N_A \to \alpha N_A$, $N_D \to \alpha N_D$, $V_R \to V_R/\alpha$):

$$W_d \to \sqrt{\frac{2\epsilon_{si}}{q}\cdot\frac{1}{\alpha}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)\cdot\frac{V_R}{\alpha}} = \frac{W_d}{\alpha}.$$

**$N_D$ held constant** ($N_A \to \alpha N_A$, $V_R \to V_R/\alpha$):

$$
\begin{aligned}
W_d' &= \sqrt{\frac{2\epsilon_{si}}{q}\left(\frac{1}{\alpha N_A} + \frac{1}{N_D}\right)\frac{V_R}{\alpha}}\\
&= \frac{1}{\alpha}\sqrt{\frac{2\epsilon_{si}}{q}\left(\frac{1}{N_A} + \frac{\alpha}{N_D}\right)V_R} .
\end{aligned}
$$

Since $\alpha/N_D > 1/N_D$, $W_d' > W_d/\alpha$: **the depletion width shrinks by less than $\alpha$**, because the S/D side is now relatively less heavily doped and more depletion extends into it.

### Step 2 — Junction capacitance

With $C_j = \epsilon_{si}/W_d$ per unit area (ideally rising by $\alpha$):

$$
\begin{aligned}
\frac{C_j'}{C_j} = \frac{W_d}{W_d'} &= \alpha\sqrt{\frac{1/N_A + 1/N_D}{1/N_A + \alpha/N_D}}\\
&= \alpha\sqrt{\frac{N_D + N_A}{N_D + \alpha N_A}} \;<\; \alpha .
\end{aligned}
$$

- **Bottom-plate capacitance** = area × $C_j$. The area ($W \times E$, $E$ being the S/D length) falls by $\alpha^2$, so the total falls by $\alpha^2/[\alpha\sqrt{(N_D+N_A)/(N_D+\alpha N_A)}]$, i.e. by **slightly more than $\alpha$**.
- **Sidewall capacitance** per unit perimeter is about $C_jx_j$; with $x_j \to x_j/\alpha$ it changes by $\sqrt{(N_D+N_A)/(N_D+\alpha N_A)}$, a slight *decrease* instead of staying constant. With the perimeter falling by $\alpha$, the total again falls by slightly more than $\alpha$.

For a strongly one-sided junction the effect is tiny:

| $N_A$ (cm⁻³) | $N_D$ (cm⁻³) | $\alpha$ | $C_j$ per area rises by | Total $C$ falls by |
|---|---|---|---|---|
| $10^{17}$ | $10^{20}$ | 2 | 1.999 (ideal 2) | 2.001 |
| $10^{17}$ | $10^{20}$ | 10 | 9.96 (ideal 10) | 10.04 |
| $10^{18}$ | $10^{20}$ | 10 | 9.58 (ideal 10) | 10.4 |

So the junction capacitance is a small *benefit*, noticeable only when $\alpha N_A$ approaches $N_D$. (The built-in potential, $V_T\ln(N_AN_D/n_i^2)$, also rises a little less: by $V_T\ln\alpha$ instead of $2V_T\ln\alpha$.)

### Step 3 — Series resistance of the S/D regions

The sheet resistance of a layer of depth $x_j$ is

$$R_\square = \frac{\rho}{x_j} = \frac{1}{q\mu_nN_Dx_j}.$$

- Ideal scaling: $N_D \times\alpha$ and $x_j/\alpha$ keep $N_Dx_j$, and hence $R_\square$, **constant**.
- $N_D$ fixed: only $x_j$ shrinks, so $R_\square \to \alpha R_\square$.

The S/D region between the gate edge and the contact has $E/W$ squares, unchanged by scaling, so

$$R_{S/D} = R_\square\,\frac{E}{W} \;\to\; \alpha\,R_{S/D}\quad\text{(instead of staying constant)}.$$

**Contact resistance.** $R_c = \rho_c/A_c$, with specific contact resistivity $\rho_c$ and contact area $A_c$. $A_c$ falls by $\alpha^2$, and with $N_D$ fixed $\rho_c$ does not improve (a higher surface doping would thin the metal–silicon barrier), so $R_c$ can rise by up to $\alpha^2$.

### Step 4 — Why the higher series resistance matters

The channel on-resistance in triode stays constant under scaling ($C_{ox} \times\alpha$, $W/L$ unchanged, overdrive $/\alpha$):

$$R_{on} = \frac{1}{\mu C_{ox}\,(W/L)\,(V_{GS} - V_{TH})} \;\to\; \frac{1}{\alpha\cdot1\cdot(1/\alpha)}\cdot\frac{1}{\mu C_{ox}(W/L)V_{ov}} = R_{on}.$$

The parasitic S/D resistance grows by $\alpha$ while the channel resistance does not, so the parasitics take a growing share:

- **source degeneration:** $g_{m,eff} = g_m/(1 + g_mR_S)$; with $g_m$ constant and $R_S \times\alpha$, $g_mR_S$ grows by $\alpha$;
- **lower drive current** and a larger on-resistance of MOS switches.

This is the main penalty of the solid-solubility limit.

### Step 5 — DIBL: how far the drain depletion reaches into the channel

DIBL depends on the depletion width on the **channel (p) side**, $x_p$, compared with $L$. From Step 1,

$$x_p^2 = W_d^2\left(\frac{N_D}{N_A + N_D}\right)^2 = \frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A\,(N_A + N_D)} .$$

**Ideal scaling:**

$$x_p^2 \to \frac{2\epsilon_{si}V_R}{q\alpha}\cdot\frac{\alpha N_D}{\alpha N_A\,(\alpha N_A + \alpha N_D)} = \frac{1}{\alpha^2}\cdot\frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A(N_A + N_D)} = \frac{x_p^2}{\alpha^2}.$$

**$N_D$ fixed:**

$$x_p'^2 = \frac{2\epsilon_{si}V_R}{q\alpha}\cdot\frac{N_D}{\alpha N_A\,(\alpha N_A + N_D)} = \frac{1}{\alpha^2}\cdot\frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A(\alpha N_A + N_D)} .$$

Since $\alpha N_A + N_D > N_A + N_D$,

$$\frac{x_p'}{x_p/\alpha} = \sqrt{\frac{N_A + N_D}{\alpha N_A + N_D}} < 1 :$$

the channel-side penetration shrinks **at least as fast as $L$** (slightly faster). The extra depletion width of Step 1 lies on the $n^+$ side: $x_n' = x_p'\,\alpha N_A/N_D$ exceeds its ideally scaled value $x_n/\alpha$ (so it is larger relative to $L$), but it is inside the drain, where it does not lower the source barrier. Under current, the larger drain series resistance also lowers the internal drain–source voltage that causes DIBL.

**Conclusion:** keeping the S/D doping constant does **not** make DIBL more significant; if anything it becomes slightly less significant, and for a strongly one-sided junction it is essentially unchanged.

**A separate caveat.** In practice the built-in and bulk Fermi potentials do not scale with $1/\alpha$, so all depletion widths shrink more slowly than $L$: the junction capacitance per area rises by less than $\alpha$ (between about $\sqrt\alpha$ at zero bias and $\alpha$), and DIBL does get worse with real scaling. That happens even if $N_D$ could be scaled; it is not caused by the fixed S/D doping.

### Result

- **Junction capacitance:** the depletion width shrinks by less than $\alpha$, so the capacitance per unit area rises by $\alpha\sqrt{(N_A+N_D)/(\alpha N_A+N_D)} < \alpha$, and the total S/D capacitance falls by slightly more than $\alpha$ (a small benefit, negligible while $N_D \gg \alpha N_A$).
- **Series resistance:** $R_\square = 1/(q\mu_nN_Dx_j)$ rises by $\alpha$ because $x_j$ shrinks while $N_D$ does not, so the S/D resistance rises by about $\alpha$ (contact resistance by up to $\alpha^2$) instead of staying constant, while the channel resistance stays constant. This is the main penalty: more source degeneration and less drive current.
- **DIBL:** not more significant. The channel-side depletion $x_p$ shrinks at least as fast as $L$; the extra depletion appears on the S/D side, where it does not lower the source barrier. DIBL is slightly less significant, or essentially unchanged for a strongly one-sided junction.

**Common mistake.** Claiming that the series resistance stays the same because the device is smaller. Ideal scaling keeps $R_\square$ constant only because $N_D$ rises as $x_j$ falls; with $N_D$ capped, the thinner layer has higher resistance.

**Common mistake.** Concluding that DIBL gets worse because the *total* drain depletion width does not shrink by $\alpha$. The part that matters is on the channel side, and it shrinks slightly faster than $L$.

**Common mistake.** Claiming that the total junction capacitance increases. The capacitance per area increases (by somewhat less than $\alpha$), but the area falls by $\alpha^2$.
