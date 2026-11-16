# Detailed solution - R687

**Approach.** First explain what channeling does to the depth of the implanted acceptors. Then use the threshold-voltage expression to show how much an acceptor sheet shifts $V_{TH}$ depending on its depth: dopants right under the surface are fully effective, deeper ones less so, and those beyond the depletion region hardly at all. Since channeling sends much of the dose deep, the intended positive shift is only partly realized, and both thresholds end up lower (less positive) than their targets.

### Step 1 — What the implant was supposed to do

The threshold-adjust implant places a thin sheet of p-type (acceptor) dopants just below the silicon surface, under the gate oxide. Negative charge near the surface must be overcome by the gate before the channel inverts (NMOS), or it partly cancels the n-type background (PMOS). Either way it shifts both thresholds in the **positive** direction:

| Device | Without implant | Target | Required shift |
|---|---|---|---|
| NMOS | $\approx 0$ V | $+0.7$ V | $+0.7$ V |
| PMOS | $\approx -1$ V | $-0.8$ V | $+0.2$ V |

### Step 2 — What channeling does

Silicon is a crystal. When the ion beam is aligned with a major crystal axis (e.g. normal incidence on a (100) wafer), some ions enter the open "channels" between rows of atoms. Inside a channel they suffer far fewer close nuclear collisions, so they lose energy slowly and travel much deeper than the projected range expected for an amorphous target. The result is a profile with a long, deep tail instead of a shallow peak.

To avoid this, wafers are normally tilted by about 7° (and rotated) so that the beam sees a "random" crystal direction. Here the wafer was not tilted and the channeling was severe, so **a large part of the dose ended up well below the surface**. The thin gate oxide scatters the ions only slightly and does not prevent this.

### Step 3 — How the depth of the dopants affects the threshold

The threshold voltage of an NMOS device is

$$V_{TH} = \phi_{MS} + 2\phi_F + \frac{Q_{dep}}{C_{ox}},$$

where $\phi_{MS}$ is the gate–substrate work-function difference, $\phi_F$ the Fermi potential, $Q_{dep}$ the magnitude of the depletion charge per unit area under the gate at threshold, and $C_{ox}$ the oxide capacitance per unit area. An implant changes $V_{TH}$ by changing $Q_{dep}$.

**Effect of an acceptor sheet at depth $x$.** Add a dose $D$ (ions per unit area) at depth $x$ inside a depletion region of width $x_d$ (substrate doping $N_A$). At threshold the surface potential is pinned at $2\phi_F$, so the total potential drop across the depletion region must not change. The field at depth $y$ is set by all the charge below $y$, so the potential drop is

$$\psi_s = \frac{q}{\epsilon_{si}}\left[\frac{N_Ax_d'^2}{2} + Dx\right] = 2\phi_F .$$

Without the sheet, $qN_Ax_d^2/(2\epsilon_{si}) = 2\phi_F$. Equating the two:

$$
\begin{aligned}
\frac{N_Ax_d'^2}{2} + Dx &= \frac{N_Ax_d^2}{2}\\
x_d'^2 &= x_d^2 - \frac{2Dx}{N_A}\\
x_d' &\approx x_d - \frac{Dx}{N_Ax_d}\qquad\text{(small dose)}.
\end{aligned}
$$

The depletion region shrinks slightly. The total depletion charge becomes

$$Q_{dep}' = qN_Ax_d' + qD \approx qN_Ax_d - qD\,\frac{x}{x_d} + qD = Q_{dep} + qD\left(1 - \frac{x}{x_d}\right),$$

so the threshold shift is

$$\Delta V_{TH} \approx \frac{qD}{C_{ox}}\left(1 - \frac{x}{x_d}\right)\qquad(0 \le x \le x_d).$$

- A sheet at the surface ($x = 0$) gives the full shift $qD/C_{ox}$.
- A sheet halfway down ($x = x_d/2$) gives only half of it.
- A sheet at or beyond the depletion edge ($x \ge x_d$) gives essentially nothing: it only raises the doping of the neutral bulk.

**Intuition.** The gate "sees" a charge through a capacitive divider: charge close to the surface is imaged almost entirely on the gate, while charge deep down is mostly imaged on the neutral substrate below it.

### Step 4 — The resulting thresholds

The dose was chosen assuming a shallow profile, i.e. full effectiveness. With channeling, much of it sits deep, where the factor $(1 - x/x_d)$ is small or zero. The positive shift actually achieved is therefore **smaller than intended** for both devices:

- **NMOS:** $V_{THN}$ ends up **below** the 0.7-V target, somewhere between its native value (≈ 0 V) and 0.7 V.
- **PMOS:** $V_{THP}$ ends up **below** (more negative than) the −0.8-V target, somewhere between −1 V and −0.8 V; its magnitude $|V_{THP}|$ is *larger* than intended.

**Illustration.** Suppose half the dose lands at $x \approx x_d/2$ and half beyond $x_d$. The achieved shift is $0.5\times0.5 + 0.5\times0 = 25\ \%$ of the design value: $V_{THN} \approx 0 + 0.25\times0.7 \approx 0.18$ V and $V_{THP} \approx -1 + 0.25\times0.2 = -0.95$ V. (The actual numbers depend on the real profile; only the direction is certain.)

**Side effects.** The deep acceptors raise the effective substrate doping below the surface, which increases the NMOS body effect (and adds junction capacitance where the profile reaches the source/drain depth). The channeled tail is also poorly controlled, so the thresholds vary more from wafer to wafer.

### Result

Both thresholds come out **lower (less positive) than the targets**: the NMOS threshold is below 0.7 V (between about 0 and 0.7 V), and the PMOS threshold is more negative than −0.8 V (between about −1 and −0.8 V, i.e. a larger $|V_{THP}|$). Channeling drives the acceptors much deeper than the intended shallow sheet, and an acceptor at depth $x$ shifts $V_{TH}$ only by about $qD(1 - x/x_d)/C_{ox}$. Deep dopants therefore contribute little or nothing, and only part of the intended positive shift is realized.

**Common mistake.** Arguing that channeling lets "more dopant into the silicon" and therefore raises the thresholds further. The same dose is implanted either way; what changes is its depth, and deeper charge is less effective at shifting the threshold.

**Common mistake.** Getting the PMOS direction wrong by thinking in magnitudes. The implant was meant to move $V_{THP}$ from −1 V toward −0.8 V; a smaller positive shift leaves it closer to −1 V, i.e. *lower* (more negative) than the target, with a *larger* magnitude.
