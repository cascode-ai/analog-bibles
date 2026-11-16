# Detailed solution - R687

**Approach.** Channeling sends much of the acceptor dose deep below the surface. The threshold expression shows that an acceptor sheet shifts $V_{TH}$ less the deeper it lies: fully at the surface, partly inside the depletion region, hardly at all beyond it. So only part of the intended positive shift is realized, and both thresholds end up lower (less positive) than their targets.

### Step 1 — What the implant was supposed to do

Acceptors just below the surface add negative charge that the gate must overcome before the NMOS channel inverts, and that partly cancels the n-type background of the PMOS; either way both thresholds shift in the **positive** direction:

| Device | Without implant | Target | Required shift |
|---|---|---|---|
| NMOS | $\approx 0$ V | $+0.7$ V | $+0.7$ V |
| PMOS | $\approx -1$ V | $-0.8$ V | $+0.2$ V |

### Step 2 — What channeling does

When the beam is aligned with a major crystal axis (e.g. normal incidence on a (100) wafer), many ions enter the open channels between atomic rows, suffer far fewer nuclear collisions and travel much deeper than the projected range for an amorphous target, leaving a long, deep tail instead of a shallow peak. Wafers are therefore normally tilted by about 7° (and rotated). Here the wafer was not tilted and channeling was severe, so **a large part of the dose ended up well below the surface**; the thin gate oxide scatters the ions only slightly and does not prevent this.

### Step 3 — How the depth of the dopants affects the threshold

An implant changes the threshold through the depletion charge $Q_{dep}$ in

$$V_{TH} = \phi_{MS} + 2\phi_F + \frac{Q_{dep}}{C_{ox}}.$$

**Effect of an acceptor sheet at depth $x$.** Add a dose $D$ (ions per unit area) at depth $x$ inside a depletion region of width $x_d$ (substrate doping $N_A$). At threshold the surface potential is pinned at $2\phi_F$, and the field at depth $y$ is set by all the charge below $y$, so

$$\psi_s = \frac{q}{\epsilon_{si}}\left[\frac{N_Ax_d'^2}{2} + Dx\right] = 2\phi_F .$$

Without the sheet, $qN_Ax_d^2/(2\epsilon_{si}) = 2\phi_F$. Equating the two:

$$
\begin{aligned}
\frac{N_Ax_d'^2}{2} + Dx &= \frac{N_Ax_d^2}{2}\\
x_d'^2 &= x_d^2 - \frac{2Dx}{N_A}\\
x_d' &\approx x_d - \frac{Dx}{N_Ax_d}\qquad\text{(small dose)}.
\end{aligned}
$$

The depletion region shrinks slightly, and the total depletion charge becomes

$$Q_{dep}' = qN_Ax_d' + qD \approx qN_Ax_d - qD\,\frac{x}{x_d} + qD = Q_{dep} + qD\left(1 - \frac{x}{x_d}\right),$$

so

$$\Delta V_{TH} \approx \frac{qD}{C_{ox}}\left(1 - \frac{x}{x_d}\right)\qquad(0 \le x \le x_d).$$

- A sheet at the surface ($x = 0$) gives the full shift $qD/C_{ox}$.
- A sheet halfway down ($x = x_d/2$) gives only half of it.
- A sheet at or beyond the depletion edge ($x \ge x_d$) gives essentially nothing: it only raises the doping of the neutral bulk.

Charge near the surface is imaged almost entirely on the gate; charge deep down is mostly imaged on the neutral substrate below it.

### Step 4 — The resulting thresholds

The dose was chosen for a shallow, fully effective profile. With channeling much of it sits where $(1 - x/x_d)$ is small or zero, so the positive shift is **smaller than intended** for both devices:

- **NMOS:** $V_{THN}$ ends up **below** the 0.7-V target, between its native value (≈ 0 V) and 0.7 V.
- **PMOS:** $V_{THP}$ ends up **below** (more negative than) the −0.8-V target, between −1 V and −0.8 V; $|V_{THP}|$ is *larger* than intended.

**Illustration.** If half the dose lands at $x \approx x_d/2$ and half beyond $x_d$, the achieved shift is $0.5\times0.5 + 0.5\times0 = 25\ \%$ of the design value: $V_{THN} \approx 0 + 0.25\times0.7 \approx 0.18$ V and $V_{THP} \approx -1 + 0.25\times0.2 = -0.95$ V. (The actual numbers depend on the real profile; only the direction is certain.)

**Side effects.** The deep acceptors raise the effective substrate doping, which increases the NMOS body effect (and adds junction capacitance where the profile reaches the source/drain depth), and the poorly controlled channeled tail makes the thresholds vary more from wafer to wafer.

### Result

Both thresholds come out **lower (less positive) than the targets**: the NMOS threshold is below 0.7 V (between about 0 and 0.7 V), and the PMOS threshold is more negative than −0.8 V (between about −1 and −0.8 V, i.e. a larger $|V_{THP}|$). Channeling drives the acceptors much deeper than the intended shallow sheet, and an acceptor at depth $x$ shifts $V_{TH}$ only by about $qD(1 - x/x_d)/C_{ox}$. Deep dopants therefore contribute little or nothing, and only part of the intended positive shift is realized.

**Common mistake.** Arguing that channeling lets "more dopant into the silicon" and therefore raises the thresholds further. The dose is the same either way; only its depth changes, and deeper charge is less effective.

**Common mistake.** Getting the PMOS direction wrong by thinking in magnitudes. A smaller positive shift leaves $V_{THP}$ closer to −1 V, i.e. *lower* (more negative) than the target, with a *larger* magnitude.
