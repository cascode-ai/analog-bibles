# Detailed solution - R215

**Approach.** A common-mode input produces a differential output only through some asymmetry. Here the asymmetry is a threshold mismatch $\Delta V$ between the current sources $M_5$ and $M_6$. With $\lambda = 0$ these devices carry no signal current, so the mismatch acts **indirectly**. It changes their DC currents, which changes the DC currents left for the diode loads $M_3$, $M_4$, so the diodes end up with different transconductances and therefore different load resistances $1/g_{m3} \ne 1/g_{m4}$. We find that load mismatch, the common-mode-to-differential gain (including the tail resistance $R_{SS}$), the differential gain, and their ratio.

### Step 1 — Reading the circuit and the bias currents

From the figure:

- $M_1$, $M_2$: matched NMOS input pair on a tail current source $I_{SS}$ with output resistance $R_{SS}$. The input $V_{in}$ is applied between their gates.
- At each output, a diode-connected PMOS ($M_3$ or $M_4$) is in parallel with a PMOS current source ($M_5$ or $M_6$, gate at the fixed bias $V_b$).
- Nominally $|I_{D5}| = |I_{D6}| = 0.8\,(I_{SS}/2)$.
- $V_{out}$ is the difference between the two drain nodes X (left) and Y (right).
- $\lambda = \gamma = 0$; all devices saturated.

**Nominal currents.** Each input device carries $I_{D1} = I_{D2} = I_{SS}/2$. KCL at each output node: the input device's current is supplied by the current source and the diode together. So each diode carries

$$I_0 = I_{D1} - |I_{D5}| = \frac{I_{SS}}{2} - 0.8\frac{I_{SS}}{2} = 0.2\frac{I_{SS}}{2}.$$

### Step 2 — Effect of the threshold mismatch on the DC currents

Let the thresholds of $M_5$ and $M_6$ differ by $\Delta V$ (split as $\pm\Delta V/2$ about the nominal value). A threshold change $\delta V_{TH}$ at fixed $V_{SG}$ changes a saturated device's current by $-g_m\,\delta V_{TH}$. Hence

$$|I_{D5}| = I_P - \frac{\Delta I}{2}, \qquad |I_{D6}| = I_P + \frac{\Delta I}{2}, \qquad \Delta I = g_{m5}\Delta V,$$

where $I_P$ is the nominal current and $g_{m5}$ the transconductance of $M_5$.

The input-device currents do **not** change: at DC both gates are at the same voltage and $\lambda = 0$, so $I_{D1} = I_{D2} = I_{SS}/2$ regardless of the drain voltages. The whole mismatch is therefore absorbed by the diodes:

$$I_{D3} = I_{D1} - |I_{D5}| = I_0 + \frac{\Delta I}{2}, \qquad I_{D4} = I_0 - \frac{\Delta I}{2}.$$

(The sign depends on which device has the higher threshold; only the magnitude matters for the CMRR.)

### Step 3 — The resulting load mismatch

A diode-connected device presents $1/g_m$, with $g_m = \sqrt{2\mu_pC_{ox}(W/L)I_D} \propto \sqrt{I_D}$. Thus $1/g_m \propto I_D^{-1/2}$. To first order:

$$
\begin{aligned}
\frac{1}{g_{m3}} &= \frac{1}{g_{m0}}\left(1 + \frac{\Delta I}{2I_0}\right)^{-1/2} \approx \frac{1}{g_{m0}}\left(1 - \frac{\Delta I}{4I_0}\right),\\
\frac{1}{g_{m4}} &\approx \frac{1}{g_{m0}}\left(1 + \frac{\Delta I}{4I_0}\right),\\
\frac{1}{g_{m4}} - \frac{1}{g_{m3}} &\approx \frac{1}{g_{m0}}\cdot\frac{\Delta I}{2I_0}, \qquad \frac{1}{g_{m3}} + \frac{1}{g_{m4}} \approx \frac{2}{g_{m0}},
\end{aligned}
$$

where $g_{m0}$ is the nominal diode transconductance at current $I_0$.

$M_5$ and $M_6$ themselves contribute nothing to the small-signal load: their gates sit at a fixed bias and $\lambda = 0$, so they are open circuits for signals.

### Step 4 — Common-mode gain (common-mode input to differential output)

Apply $v_{in1} = v_{in2} = v_{CM}$. The input pair is matched, so both devices carry the same signal current $i$, and the tail node moves by $v_P = 2iR_{SS}$ (both currents flow into $R_{SS}$). The square law gives

$$
\begin{aligned}
i &= g_{m1}(v_{CM} - v_P) = g_{m1}(v_{CM} - 2iR_{SS})\\
i &= \frac{g_{m1}v_{CM}}{1 + 2g_{m1}R_{SS}} .
\end{aligned}
$$

Each output is $-i$ times its load resistance: $v_X = -i/g_{m3}$ and $v_Y = -i/g_{m4}$. So

$$A_{CM\text{-}DM} = \frac{v_X - v_Y}{v_{CM}} = -\frac{g_{m1}}{1 + 2g_{m1}R_{SS}}\left(\frac{1}{g_{m3}} - \frac{1}{g_{m4}}\right),\qquad |A_{CM\text{-}DM}| \approx \frac{g_{m1}}{1 + 2g_{m1}R_{SS}}\cdot\frac{1}{g_{m0}}\cdot\frac{\Delta I}{2I_0}.$$

<!-- diagram: diagram-01.cir -->

### Step 5 — Differential gain

Apply $v_{in1} = +v_d/2$, $v_{in2} = -v_d/2$. Because $g_{m1} = g_{m2}$, the two signal currents are equal and opposite and the tail node does not move: $i_1 = g_{m1}v_d/2 = -i_2$. Then

$$
\begin{aligned}
v_X - v_Y &= -\frac{i_1}{g_{m3}} + \frac{i_2}{g_{m4}} = -\frac{g_{m1}v_d}{2}\left(\frac{1}{g_{m3}} + \frac{1}{g_{m4}}\right),\\
|A_{DM}| &\approx \frac{g_{m1}}{g_{m0}} .
\end{aligned}
$$

### Step 6 — CMRR

$$
\begin{aligned}
\mathrm{CMRR} &= \left|\frac{A_{DM}}{A_{CM\text{-}DM}}\right| = \frac{g_{m1}/g_{m0}}{\dfrac{g_{m1}}{1 + 2g_{m1}R_{SS}}\cdot\dfrac{1}{g_{m0}}\cdot\dfrac{\Delta I}{2I_0}}\\
&= (1 + 2g_{m1}R_{SS})\,\frac{2I_0}{\Delta I} = (1 + 2g_{m1}R_{SS})\,\frac{2\,(I_{D1} - |I_{D5}|)}{g_{m5}\Delta V}.
\end{aligned}
$$

**With the given ratio** $|I_{D5}| = 0.8I_{D1}$: $I_0 = 0.2I_{D1} = |I_{D5}|/4$, and $g_{m5} = 2|I_{D5}|/|V_{GS5} - V_{TH5}|$. Then

$$\frac{2I_0}{g_{m5}\Delta V} = \frac{2\,|I_{D5}|/4}{\left(2|I_{D5}|/|V_{GS5} - V_{TH5}|\right)\Delta V} = \frac{|V_{GS5} - V_{TH5}|}{4\,\Delta V},$$

$$\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\frac{|V_{GS5} - V_{TH5}|}{4\,\Delta V}.$$

**Why the mismatch is amplified.** The current error $\Delta I = g_{m5}\Delta V$ is a small fraction of $|I_{D5}|$, but it lands entirely on the diodes, which carry only 20 % of the branch current. Relative to $I_0$ it is four times larger than relative to $|I_{D5}|$. The same trick that boosts the differential gain (starving the diode loads) makes the circuit more sensitive to load mismatch.

*Numerical feel:* with $|V_{GS5} - V_{TH5}| = 0.3$ V, $\Delta V = 5$ mV, $g_{m1} = 3.66$ mS and $R_{SS} = 10\ \mathrm{k}\Omega$:

$$\mathrm{CMRR} \approx (1 + 73.2)\times\frac{0.3}{0.02} = 74.2\times15 \approx 1100\ (61\ \mathrm{dB}).$$

### Result

$$\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\frac{2(I_{D1} - |I_{D5}|)}{g_{m5}\Delta V},$$

which for $|I_{D5}| = 0.8I_{D1}$ (with $I_{D1} = I_{SS}/2$) becomes

$$\mathrm{CMRR} \approx (1 + 2g_{m1}R_{SS})\,\frac{|V_{GS5} - V_{TH5}|}{4\,\Delta V} .$$

The mechanism: the threshold mismatch of $M_5$/$M_6$ causes a DC current mismatch $g_{m5}\Delta V$, which is absorbed entirely by the diode loads. That makes their small-signal resistances $1/g_{m3}$, $1/g_{m4}$ unequal ($\Delta(1/g_m)/(1/g_m) \approx \Delta I/(2I_0)$). A common-mode input, attenuated by $1 + 2g_{m1}R_{SS}$, then produces a differential output, while $A_{DM} \approx g_{m1}/g_{m3}$.

**Common mistake.** Declaring the CMRR infinite because $M_5$ and $M_6$ are "just current sources". They indeed carry no signal current, but their *DC* mismatch changes the bias, and hence the $g_m$, of the diode loads, which do carry signal.

**Common mistake.** Taking the relative load mismatch as $\Delta I/|I_{D5}|$ (or treating it as a mismatch of the input pair). The input devices keep equal currents. The diodes absorb all of $\Delta I$, and since they carry only $I_0 = |I_{D5}|/4$, the relevant ratio is $\Delta I/I_0$, four times larger.

**Common mistake.** Forgetting the factor $1/2$ from $g_m \propto \sqrt{I}$, i.e. writing $\Delta(1/g_m)/(1/g_m) = \Delta I/I_0$. This gives a CMRR that is too small by a factor of 2.
