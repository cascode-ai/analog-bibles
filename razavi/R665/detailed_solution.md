# Detailed solution - R665

**Approach.** Model each source/drain (S/D) region as an abrupt $n^+$–$p$ junction (S/D doping $N_D$, substrate doping $N_A$) and as a thin resistive layer of depth $x_j$. Compare ideal scaling ($N_D \to \alpha N_D$) with the constrained case ($N_D$ fixed) for three things: the depletion width and junction capacitance, the sheet and contact resistance, and how far the drain depletion region reaches into the channel, which controls DIBL.

### Step 1 — The junction depletion width

For an abrupt pn junction with reverse bias $V_R$ (assumed much larger than the built-in potential), the total depletion width is

$$W_d = \sqrt{\frac{2\epsilon_{si}}{q}\left(\frac{1}{N_A} + \frac{1}{N_D}\right)V_R},$$

where $\epsilon_{si}$ is the permittivity of silicon and $q$ the electron charge. Charge neutrality ($qN_Ax_p = qN_Dx_n$) splits it into a part $x_p$ in the p-substrate (the channel side) and a part $x_n$ in the $n^+$ region:

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

Since $\alpha/N_D > 1/N_D$, the depletion width is larger than its ideally scaled value $W_d/\alpha$: **it shrinks by less than $\alpha$**. The S/D side is now relatively less heavily doped, so more depletion extends into it.

### Step 2 — Junction capacitance

The junction capacitance per unit area is $C_j = \epsilon_{si}/W_d$. Ideally it rises by $\alpha$. With $N_D$ fixed, take the ratio:

$$
\begin{aligned}
\frac{C_j'}{C_j} = \frac{W_d}{W_d'} &= \alpha\sqrt{\frac{1/N_A + 1/N_D}{1/N_A + \alpha/N_D}}\\
&= \alpha\sqrt{\frac{N_D + N_A}{N_D + \alpha N_A}} \;<\; \alpha
\end{aligned}
$$

(the second line multiplies numerator and denominator inside the root by $N_AN_D$).

- **Bottom-plate capacitance** = area × $C_j$. The area ($W \times E$, $E$ being the S/D length) falls by $\alpha^2$, so the total falls by $\alpha^2/[\alpha\sqrt{(N_D+N_A)/(N_D+\alpha N_A)}]$, i.e. by **slightly more than $\alpha$**.
- **Sidewall capacitance** per unit perimeter is about $C_jx_j$. With $x_j \to x_j/\alpha$ it changes by $\sqrt{(N_D+N_A)/(N_D+\alpha N_A)}$, a slight *decrease* instead of staying constant; with the perimeter falling by $\alpha$, the total again falls by slightly more than $\alpha$.

**How large is the effect?** For a strongly one-sided junction it is tiny:

| $N_A$ (cm⁻³) | $N_D$ (cm⁻³) | $\alpha$ | $C_j$ per area rises by | Total $C$ falls by |
|---|---|---|---|---|
| $10^{17}$ | $10^{20}$ | 2 | 1.999 (ideal 2) | 2.001 |
| $10^{17}$ | $10^{20}$ | 10 | 9.96 (ideal 10) | 10.04 |
| $10^{18}$ | $10^{20}$ | 10 | 9.58 (ideal 10) | 10.4 |

So the junction capacitance is a small *benefit*, noticeable only when $\alpha N_A$ approaches $N_D$. (The built-in potential, $V_T\ln(N_AN_D/n_i^2)$, also rises a little less: by $V_T\ln\alpha$ instead of $2V_T\ln\alpha$.)

### Step 3 — Series resistance of the S/D regions

A thin doped layer of depth $x_j$ and doping $N_D$ has a **sheet resistance** (resistance per square)

$$R_\square = \frac{\rho}{x_j} = \frac{1}{q\mu_nN_Dx_j},$$

where $\rho = 1/(q\mu_nN_D)$ is the resistivity and $\mu_n$ the electron mobility.

- Ideal scaling: $N_D \times\alpha$ and $x_j/\alpha$, so $N_Dx_j$ is unchanged and $R_\square$ stays **constant**.
- $N_D$ fixed: only $x_j$ shrinks, so $R_\square \to \alpha R_\square$.

The S/D region between the gate edge and the contact has $E/W$ squares, which is unchanged by scaling (both divide by $\alpha$). Its resistance is therefore

$$R_{S/D} = R_\square\,\frac{E}{W} \;\to\; \alpha\,R_{S/D}\quad\text{(instead of staying constant)}.$$

**Contact resistance.** $R_c = \rho_c/A_c$, where $\rho_c$ is the specific contact resistivity and $A_c$ the contact area. $A_c$ falls by $\alpha^2$. A higher surface doping would normally reduce $\rho_c$ (it makes the metal–silicon barrier thinner), but with $N_D$ fixed $\rho_c$ does not improve, so $R_c$ can rise by up to $\alpha^2$.

### Step 4 — Why the higher series resistance matters

Compare with the channel itself. The on-resistance of the channel in the triode region is

$$R_{on} = \frac{1}{\mu C_{ox}\,(W/L)\,(V_{GS} - V_{TH})} \;\to\; \frac{1}{\alpha\cdot1\cdot(1/\alpha)}\cdot\frac{1}{\mu C_{ox}(W/L)V_{ov}} = R_{on},$$

constant under scaling (since $C_{ox} \times\alpha$, $W/L$ unchanged, overdrive $/\alpha$). The parasitic S/D resistance grows by $\alpha$ while the channel resistance does not, so the parasitics take a growing share of the total. Consequences:

- **source degeneration:** the effective transconductance becomes $g_{m,eff} = g_m/(1 + g_mR_S)$; with $g_m$ constant and $R_S \times\alpha$, $g_mR_S$ grows by $\alpha$;
- **lower drive current** and a larger on-resistance of MOS switches.

This is the main penalty of the solid-solubility limit.

### Step 5 — DIBL: how far the drain depletion reaches into the channel

Drain-induced barrier lowering occurs when the drain's depletion region and field reach toward the source and lower the source–channel barrier. What matters is the depletion width on the **channel (p) side**, $x_p$, compared with $L$. Square the expression of Step 1 and substitute $W_d^2$:

$$x_p^2 = W_d^2\left(\frac{N_D}{N_A + N_D}\right)^2 = \frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A\,(N_A + N_D)} .$$

**Ideal scaling:**

$$x_p^2 \to \frac{2\epsilon_{si}V_R}{q\alpha}\cdot\frac{\alpha N_D}{\alpha N_A\,(\alpha N_A + \alpha N_D)} = \frac{1}{\alpha^2}\cdot\frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A(N_A + N_D)} = \frac{x_p^2}{\alpha^2}.$$

**$N_D$ fixed:**

$$x_p'^2 = \frac{2\epsilon_{si}V_R}{q\alpha}\cdot\frac{N_D}{\alpha N_A\,(\alpha N_A + N_D)} = \frac{1}{\alpha^2}\cdot\frac{2\epsilon_{si}V_R}{q}\cdot\frac{N_D}{N_A(\alpha N_A + N_D)} .$$

Because $\alpha N_A + N_D > N_A + N_D$, this is smaller than the ideal value:

$$\frac{x_p'}{x_p/\alpha} = \sqrt{\frac{N_A + N_D}{\alpha N_A + N_D}} < 1 .$$

The channel-side penetration shrinks **at least as fast as $L$** (slightly faster). The extra depletion width found in Step 1 lies on the $n^+$ side: $x_n' = x_p'\,\alpha N_A/N_D$ is larger than its ideally scaled value $x_n/\alpha$ (so larger relative to $L$), but it is inside the drain region, where it does not lower the source barrier.

In addition, under current the larger drain series resistance drops part of the applied voltage, which lowers the internal drain–source voltage that causes DIBL.

**Conclusion:** keeping the S/D doping constant does **not** make DIBL more significant; if anything it becomes slightly less significant, and for a strongly one-sided junction it is essentially unchanged.

**A separate caveat.** In practice the built-in potential and the bulk Fermi potential do not scale with $1/\alpha$. Then all depletion widths shrink more slowly than $L$, the junction capacitance per area rises by less than $\alpha$ (between about $\sqrt\alpha$ at zero bias and $\alpha$), and DIBL does get worse with real scaling. That effect exists even if $N_D$ could be scaled; it is not caused by the fixed S/D doping.

### Result

- **Junction capacitance:** the depletion width shrinks by less than $\alpha$, so the capacitance per unit area rises by $\alpha\sqrt{(N_A+N_D)/(\alpha N_A+N_D)} < \alpha$, and the total S/D capacitance falls by slightly more than $\alpha$ (a small benefit, negligible while $N_D \gg \alpha N_A$).
- **Series resistance:** $R_\square = 1/(q\mu_nN_Dx_j)$ rises by $\alpha$ because $x_j$ shrinks while $N_D$ does not, so the S/D resistance rises by about $\alpha$ (contact resistance by up to $\alpha^2$) instead of staying constant, while the channel resistance stays constant. This is the main penalty: more source degeneration and less drive current.
- **DIBL:** not more significant. The channel-side depletion $x_p$ shrinks at least as fast as $L$; the extra depletion appears on the S/D side, where it does not lower the source barrier. DIBL is slightly less significant, or essentially unchanged for a strongly one-sided junction.

**Common mistake.** Claiming that the series resistance stays the same (or falls) because the device is smaller. Ideal scaling keeps $R_\square$ constant only because $N_D$ rises as $x_j$ falls; with $N_D$ capped, the thinner layer has proportionally fewer carriers per unit area and higher resistance.

**Common mistake.** Concluding that DIBL gets worse because the *total* drain depletion width does not shrink by $\alpha$. The part that matters is on the channel side, and that part actually shrinks slightly faster than $L$; the extra width is on the heavily doped S/D side.

**Common mistake.** Claiming that the total junction capacitance increases. The capacitance per area increases (by somewhat less than $\alpha$), but the area falls by $\alpha^2$, so the total still decreases, by slightly more than $\alpha$.
