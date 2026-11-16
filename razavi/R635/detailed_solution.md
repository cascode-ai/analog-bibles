# Detailed solution - R635

**Approach.** *Start-up:* at the edge of oscillation the swings are tiny, so the pair sits at balance with $I_{SS}/2$ per transistor; the loop consists of two inverting tuned stages, each with gain $g_mR_P$ at resonance, and oscillation needs $g_mR_P \ge 1$. *Triode limit:* in steady state the pair switches the whole tail current back and forth, so each tank is driven by a square-wave current whose fundamental sets the voltage amplitude. Because of the cross-coupling, a drain is lowest exactly when its gate is highest, and saturation limits that difference to $V_{TH}$.

### Step 1 — Small-signal transconductance at balance

Call the common source node of $M_1$ and $M_2$ P; $R_P$ is each tank's resistance at resonance, $\omega_0 = 1/\sqrt{L_PC_P}$. At the edge of oscillation each transistor carries $I_{D1} = I_{D2} = I_{SS}/2$, so

$$g_m = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}\frac{I_{SS}}{2}} = \sqrt{\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_{SS}} .$$

For differential signals P is a virtual ground, so each transistor is a common-source stage with grounded source, and the body effect does not change the small-signal gain.

### Step 2 — Start-up condition: $g_mR_P \ge 1$

Break the loop at the gate of $M_1$ and apply a small $v_t$ at $\omega_0$, where each tank is just $R_P$. KCL at X and then at Y (the gate of $M_2$ is at X):

$$v_X = -g_mR_P\,v_t, \qquad v_Y = -g_mR_P\,v_X = (g_mR_P)^2\,v_t .$$

$v_Y$ returns to the gate of $M_1$, so the loop gain at resonance is $(g_mR_P)^2$ with zero phase (two inversions), which meets the Barkhausen phase condition. The magnitude condition requires

$$(g_mR_P)^2 \ge 1 \quad\Longrightarrow\quad g_mR_P \ge 1 .$$

Equivalently, the cross-coupled pair presents $-2/g_m$ between X and Y against the tanks' $2R_P$, and oscillation requires $2/g_m \le 2R_P$.

### Step 3 — Minimum tail current

Substituting $g_m$ from Step 1 and squaring:

$$\sqrt{\mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_{SS}}\;R_P \ge 1 \quad\Longrightarrow\quad \mu_nC_{ox}\left(\frac{W}{L}\right)_{1,2}I_{SS}R_P^2 \ge 1 ,$$

$$I_{SS,min} = \frac{1}{\mu_nC_{ox}(W/L)_{1,2}R_P^2} = \frac{1}{(134\ \mu\mathrm{A/V^2})(W/L)_{1,2}R_P^2} = \frac{7.46\times10^3\ \mathrm{A\,\Omega^2}}{(W/L)_{1,2}R_P^2}.$$

### Step 4 — Oscillation amplitude when the pair switches fully

Above start-up the amplitude grows until the pair switches the entire tail current each half cycle, so each drain current is approximately a square wave between 0 and $I_{SS}$:

$$I_{D1}(t) \approx \frac{I_{SS}}{2} + \frac{2I_{SS}}{\pi}\cos\omega_0t + (\text{odd harmonics}),$$

since a square wave of peak-to-peak value $I_{SS}$ has a fundamental of $\tfrac4\pi\cdot\tfrac{I_{SS}}{2} = \tfrac{2}{\pi}I_{SS}$. The dc part flows through $L_P$ with no drop (drains centred at $V_{DD}$), the fundamental sees $R_P$, and the harmonics see a much smaller tank impedance and are negligible. With $A$ the single-ended amplitude,

$$V_X(t) \approx V_{DD} - A\cos\omega_0t, \qquad V_Y(t) \approx V_{DD} + A\cos\omega_0t, \qquad A \approx \frac{2}{\pi}I_{SS}R_P ,$$

and the differential amplitude is $2A = (4/\pi)I_{SS}R_P$.

### Step 5 — Condition for $M_1$ to stay out of the triode region

$M_1$ has its **gate at Y** and its **drain at X**, so it stays saturated while

$$V_{DS1} \ge V_{GS1} - V_{TH} \quad\Longleftrightarrow\quad V_X - V_P \ge V_Y - V_P - V_{TH} \quad\Longleftrightarrow\quad V_Y - V_X \le V_{TH} .$$

The worst instant is when $M_1$ conducts hardest: its gate is at its highest, $V_Y = V_{DD} + A$, and its drain at its lowest, $V_X = V_{DD} - A$, so $V_Y - V_X = 2A$. Hence

$$2A \le V_{TH} \quad\Longrightarrow\quad \frac{4}{\pi}I_{SS}R_P \le V_{TH} \quad\Longrightarrow\quad I_{SS} \le \frac{\pi V_{TH}}{4R_P} ,$$

and by symmetry the same holds for $M_2$ half a period later.

### Step 6 — Numerical value of the threshold

**Without body effect**, $V_{TH} = V_{TH0} = 0.7$ V:

$$I_{SS,max} \approx \frac{\pi(0.7\ \mathrm{V})}{4R_P} = \frac{0.55\ \mathrm{V}}{R_P}.$$

**With body effect.** The bulks are at ground, and with the gates centred at $V_{DD} = 3$ V the sources sit at $V_P \approx V_{DD} - V_{GS}$, about 2 V for a small overdrive. With $V_{SB} \approx 2$ V:

$$
\begin{aligned}
V_{TH} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right)\\
&= 0.7 + 0.45\left(\sqrt{0.9 + 2} - \sqrt{0.9}\right)\ \mathrm{V}\\
&= 0.7 + 0.45\,(1.703 - 0.949)\ \mathrm{V} = 0.7 + 0.34\ \mathrm{V} \approx 1.04\ \mathrm{V}.
\end{aligned}
$$

(Consistency: $V_P = 3 - 1.04 \approx 1.96$ V, close to the assumed 2 V.) Then

$$I_{SS,max} \approx \frac{\pi(1.04\ \mathrm{V})}{4R_P} \approx \frac{0.8\ \mathrm{V}}{R_P}.$$

The higher threshold allows a somewhat larger swing before the drain falls a threshold below the gate.

### Step 7 — Remarks and an example

- **The design window** requires $I_{SS,min} < I_{SS,max}$, i.e. $(W/L)_{1,2}R_P > 4/(\pi V_{TH}\mu_nC_{ox})$, about 13.6 kΩ for $V_{TH} = 0.7$ V. For example, with $(W/L)_{1,2} = 100$ and $R_P = 500\ \Omega$: $I_{SS,min} = 7.46\times10^3/(100\times500^2) = 0.30$ mA, and $I_{SS,max} \approx 0.55/500 = 1.1$ mA (about 1.6 mA with the body effect).
- **Accuracy.** The amplitude $(2/\pi)I_{SS}R_P$ assumes complete switching (a differential swing much larger than $\sqrt2\,(V_{GS} - V_{TH})_{eq}$); incomplete switching gives a smaller swing, so the bound is on the safe side. A cruder estimate that takes the single-ended peak swing as $I_{SS}R_P$ gives $I_{SS} \le V_{TH}/(2R_P)$.

### Result

**Minimum (start-up):** with $g_m = \sqrt{\mu_nC_{ox}(W/L)_{1,2}I_{SS}}$ at balance, the loop gain at resonance is $(g_mR_P)^2 \ge 1$, so

$$I_{SS,min} = \frac{1}{\mu_nC_{ox}(W/L)_{1,2}R_P^2} \approx \frac{7.46\times10^3\ \mathrm{A\,\Omega^2}}{(W/L)_{1,2}R_P^2}.$$

**Maximum (no triode):** with full switching each drain swings by $A \approx (2/\pi)I_{SS}R_P$ around $V_{DD}$, and $M_1$ stays saturated only if $V_Y - V_X = 2A \le V_{TH}$:

$$I_{SS,max} \approx \frac{\pi V_{TH}}{4R_P} \approx \frac{0.55\ \mathrm{V}}{R_P}\ (V_{TH} = 0.7\ \mathrm{V}),\quad\text{or}\quad \approx \frac{0.8\ \mathrm{V}}{R_P}\ \text{with the body effect}\ (V_{TH} \approx 1.04\ \mathrm{V}).$$

**Common mistake.** Using a start-up condition from another oscillator, such as $g_mR_P \ge 2$ (three-stage ring). The cross-coupled pair has two inverting stages with zero phase shift at resonance, so $(g_mR_P)^2 = 1$ suffices.

**Common mistake.** Computing $g_m$ with the whole tail current in one transistor, which gives half the correct minimum current. At the edge of oscillation the pair is balanced, with $I_{SS}/2$ per device.

**Common mistake.** Checking the triode condition with the gate held at $V_{DD}$, i.e. requiring only $A \le V_{TH}$. The gate of $M_1$ is driven by Y, which rises by $A$ exactly when X falls by $A$, so the gate–drain difference reaches $2A$.
