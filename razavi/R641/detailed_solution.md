# Detailed solution - R641

**Approach.** With all of $I_T$ steered to $M_1$–$M_2$, the cross-coupled pair is off and each stage is a plain resistively loaded differential pair with one dominant pole at its outputs. A three-stage ring oscillates only if each stage has a low-frequency gain of at least 2. We compute $g_{m1,2}$ at the resulting bias and solve $g_{m1,2}R \ge 2$ for $R$.

### Step 1 — The stage

Reading the figure:

- $M_1$–$M_2$ is the input differential pair, with load resistors $R_1$ and $R_2$ to $V_{DD}$; $V_{in}$ drives their gates and their common source is node P.
- $M_3$–$M_4$ is a cross-coupled pair connected to the same two output nodes ($V_{out}$).
- $M_5$ and $M_6$ form a steering pair fed by $I_T$. $M_5$ delivers $I_{SS}$ to node P (the tail of $M_1$–$M_2$), and $M_6$ delivers $I_1$ to the tail of $M_3$–$M_4$, according to the control voltages $V_{cont1}$ and $V_{cont2}$.
- $I_H$ (drawn grey) is neglected here.

In the case considered, $M_6$ is off, so $I_1 = 0$ and $M_3$–$M_4$ carry no current; they have $g_m = 0$ and simply disappear from the small-signal circuit. All of $I_T$ flows into $M_1$–$M_2$: $I_{SS} = I_T = 1$ mA.

### Step 2 — Transconductance of $M_1$ and $M_2$

The oscillation condition concerns the small-signal loop gain around the balanced point (at the edge of oscillation the swings are tiny), where each input transistor carries half the tail current:

$$I_{D1} = I_{D2} = \frac{I_T}{2} = 0.5\ \mathrm{mA}.$$

The aspect ratio is $(W/L)_{1,2} = 50/0.5 = 100$. The **square-law transconductance** is

$$g_{m1,2} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_D} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

Equivalently $g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_T}$. The corresponding overdrive is $V_{ov} = 2I_D/g_m = 1\ \mathrm{mA}/3.66\ \mathrm{mS} = 0.27$ V.

### Step 3 — Small-signal model of one stage

For differential signals node P is a virtual ground, so each side is a common-source stage: a controlled current $g_{m1,2}v_{in}$ into the output node, which has the resistance $R$ to AC ground and a capacitance $C$ (the gates of the next stage plus junction capacitances). With $\lambda = 0$:

$$\frac{v_{out}}{v_{in}} = -\frac{g_{m1,2}R}{1 + sRC} = -\frac{A_0}{1 + s/\omega_0}, \qquad A_0 = g_{m1,2}R, \qquad \omega_0 = \frac{1}{RC}.$$

### Step 4 — Oscillation condition of a three-stage ring

Three identical stages give the loop gain

$$H(s) = -\frac{A_0^3}{(1 + s/\omega_0)^3}.$$

The three inversions provide 180° at DC; the three poles must add the remaining 180°, i.e. 60° each:

$$\tan^{-1}\frac{\omega_{osc}}{\omega_0} = 60^\circ \quad\Longrightarrow\quad \omega_{osc} = \sqrt3\,\omega_0 .$$

There, each stage's gain has dropped to $A_0/\sqrt{1 + 3} = A_0/2$, so the loop gain is $A_0^3/8$. Barkhausen's magnitude condition gives

$$\frac{A_0^3}{8} \ge 1 \quad\Longrightarrow\quad A_0 \ge 2 .$$

The capacitance $C$ cancels out of the condition; it only sets the frequency.

### Step 5 — Minimum $R$

$$g_{m1,2}R \ge 2 \quad\Longrightarrow\quad R \ge \frac{2}{g_{m1,2}} = \frac{2}{3.66\times10^{-3}\ \mathrm{S}} = 546\ \Omega .$$

At $R = 546\ \Omega$ the loop gain at $\sqrt3\,\omega_0$ is exactly 1: this is the critical value. To guarantee that the oscillation starts and grows, $R$ must be at least this value, and in practice slightly larger.

| $R$ | $A_0 = g_{m1,2}R$ | $A_0^3/8$ | Behaviour |
|---|---|---|---|
| 400 Ω | 1.46 | 0.39 | no oscillation |
| 546 Ω | 2.00 | 1.00 | edge of oscillation |
| 700 Ω | 2.56 | 2.10 | oscillates |

### Result

With all of $I_T$ in $M_1$–$M_2$ (0.5 mA each), $g_{m1,2} = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_T} = 3.66$ mS. A three-stage ring needs a low-frequency gain of at least 2 per stage, so

$$R_{min} = \frac{2}{g_{m1,2}} \approx 546\ \Omega .$$

**Common mistake.** Requiring a per-stage gain of 1 (or $\sqrt2$), which gives 273 Ω (or 386 Ω). At the frequency where the three poles supply 180°, each pole has already halved the stage gain, so the low-frequency gain must be 2.

**Common mistake.** Computing $g_m$ with the full 1 mA in one transistor, $g_m = \sqrt{2\mu_nC_{ox}(W/L)(1\ \mathrm{mA})} = 5.18$ mS, which gives 386 Ω. At balance the tail current divides equally, 0.5 mA per device.

**Common mistake.** Including the cross-coupled pair with some assumed size. In the case asked about, $M_3$–$M_4$ carry no current, so their transconductance is zero and they do not affect the gain.
