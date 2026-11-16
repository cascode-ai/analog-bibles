# Detailed solution - R171

**Approach.** The 1-mV threshold mismatch gives the two input devices slightly different overdrives, hence $g_{m1} \neq g_{m2}$. Solve the small-signal circuit for a differential and for a common-mode input, keeping $g_{m1} \neq g_{m2}$ and the finite tail resistance $R_{SS}$, and take the ratio of the two gains.

### Step 1 — Bias quantities

**Tail.** The NMOS current source carries $I_{SS} = 1$ mA, so

$$R_{SS} = r_O = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

**Input pair.** $\beta = \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$, and each device carries about 0.5 mA:

$$V_{ov} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}, \qquad g_m = \beta V_{ov} = 3.66\ \mathrm{mS}.$$

**Mismatch.** Both devices have the same $V_{GS}$ (common gate voltage, common source node), so their overdrives differ by $\Delta V_{TH} = 1$ mV, and with $g_m = \beta V_{ov}$:

$$\Delta g_m = g_{m1} - g_{m2} = \beta\Delta V_{TH} = (13.4\ \mathrm{mA/V^2})(1\ \mathrm{mV}) = 13.4\ \mu\mathrm{S}, \qquad \frac{g_m}{\Delta g_m} = \frac{V_{ov}}{\Delta V_{TH}} = 273 .$$

### Step 2 — Small-signal model

Each transistor is a current source $g_{mk}v_{gsk}$ from its drain ($X$ or $Y$) to $P$ (channel-length modulation and body effect neglected); $R_{SS}$ connects $P$ to ground, and the equal loads $R_D = 2$ kΩ connect $X$ and $Y$ to ac ground.

<!-- diagram: diagram-01.cir -->

KCL at $P$: $v_P = (i_1 + i_2)R_{SS}$, with $i_1 = g_{m1}(v_{in1} - v_P)$ and $i_2 = g_{m2}(v_{in2} - v_P)$. The differential output is $v_X - v_Y = -R_D(i_1 - i_2)$.

### Step 3 — Common-mode input → differential output

Set $v_{in1} = v_{in2} = v_{cm}$:

$$
\begin{aligned}
v_P &= (g_{m1} + g_{m2})(v_{cm} - v_P)R_{SS}\\
v_{cm} - v_P &= \frac{v_{cm}}{1 + (g_{m1} + g_{m2})R_{SS}}\\
i_1 - i_2 &= (g_{m1} - g_{m2})(v_{cm} - v_P) = \frac{\Delta g_m\,v_{cm}}{1 + (g_{m1} + g_{m2})R_{SS}}\\
|A_{CM-DM}| &= \frac{\Delta g_mR_D}{1 + (g_{m1} + g_{m2})R_{SS}} .
\end{aligned}
$$

### Step 4 — Differential input → differential output

Set $v_{in1} = +v_d/2$ and $v_{in2} = -v_d/2$. Because $g_{m1} \neq g_{m2}$, the currents do not cancel exactly at $P$:

$$
\begin{aligned}
i_1 + i_2 &= \Delta g_m\frac{v_d}{2} - (g_{m1} + g_{m2})v_P = \frac{v_P}{R_{SS}}\\
v_P &= \frac{\Delta g_m R_{SS}}{1 + (g_{m1} + g_{m2})R_{SS}}\cdot\frac{v_d}{2},\\
i_1 - i_2 &= (g_{m1} + g_{m2})\frac{v_d}{2} - \Delta g_m v_P\\
&= \frac{v_d}{2}\cdot\frac{(g_{m1} + g_{m2})\left[1 + (g_{m1} + g_{m2})R_{SS}\right] - \Delta g_m^2R_{SS}}{1 + (g_{m1} + g_{m2})R_{SS}} .
\end{aligned}
$$

Since $(g_{m1} + g_{m2})^2 - (g_{m1} - g_{m2})^2 = 4g_{m1}g_{m2}$, the numerator simplifies to $g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}$, and

$$|A_{DM}| = \frac{R_D\left(g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}\right)}{2\left[1 + (g_{m1} + g_{m2})R_{SS}\right]} \approx g_mR_D = 7.32 .$$

### Step 5 — CMRR

Dividing the two gains, $R_D$ and the common denominator cancel:

$$\mathrm{CMRR} = \frac{|A_{DM}|}{|A_{CM-DM}|} = \frac{g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}}{2\Delta g_m} .$$

With $g_{m1} \approx g_{m2} \approx g_m$ (they differ by only 0.37 %):

$$\mathrm{CMRR} \approx \frac{2g_m + 4g_m^2R_{SS}}{2\Delta g_m} = \frac{g_m}{\Delta g_m}\left(1 + 2g_mR_{SS}\right).$$

Numerically:

$$
\begin{aligned}
1 + 2g_mR_{SS} &= 1 + 2(3.66\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 74.2,\\
\mathrm{CMRR} &= 273\times 74.2 \approx 2.03\times10^4,\\
20\log_{10}(20{,}300) &\approx 86.1\ \mathrm{dB}.
\end{aligned}
$$

(Equivalently: $A_{CM-DM} = (13.4\ \mu\mathrm{S})(2\ \mathrm{k}\Omega)/74.2 = 3.61\times10^{-4}$ and $7.32/3.61\times10^{-4} = 2.03\times10^4$.)

As in the load-mismatch case, the CMRR is the product of the inverse relative mismatch $g_m/\Delta g_m = V_{ov}/\Delta V_{TH} = 273$ and the tail's common-mode degeneration $1 + 2g_mR_{SS} = 74$. A larger overdrive makes the pair less sensitive to a given threshold mismatch, and a better tail source raises the second factor.

### Result

$$\mathrm{CMRR} = \frac{g_{m1} + g_{m2} + 4g_{m1}g_{m2}R_{SS}}{2\Delta g_m} \approx \frac{g_m}{\Delta g_m}\left(1 + 2g_mR_{SS}\right) = 273\times 74.2 \approx 20{,}300\quad(\approx 86.1\ \mathrm{dB}),$$

with $g_m = 3.66$ mS, $\Delta g_m = 13.4\ \mu$S and $R_{SS} = 10$ kΩ.

**Common mistake.** Stopping at CMRR $= g_m/\Delta g_m = 273$, i.e. treating the tail as an ac ground. The tail degenerates the common-mode current by $1 + 2g_mR_{SS} = 74$, and this factor is part of the CMRR.

**Common mistake.** Using the common-mode gain of the *symmetric* pair, $R_D/(2R_{SS})$, in the ratio. That gain describes the output common-mode level; it is the *mismatch* $\Delta g_m$ that turns a common-mode input into a differential output.

**Common mistake.** Getting $\Delta g_m$ wrong, for example from $\Delta g_m/g_m = \Delta V_{TH}/V_{GS}$ or $2\Delta V_{TH}/V_{ov}$. With equal $V_{GS}$ the overdrives differ by exactly $\Delta V_{TH}$, so $\Delta g_m/g_m = \Delta V_{TH}/V_{ov}$.
