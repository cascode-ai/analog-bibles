# Detailed solution - R170

**Approach.** A threshold mismatch makes the two input transistors carry slightly different overdrives, and hence slightly different transconductances $g_{m1} \neq g_{m2}$, even with identical sizes and loads. A common-mode input then produces unequal current changes in the two halves, and part of the common-mode noise appears at the differential output with gain $\Delta g_mR_D/(1 + 2g_mR_{SS})$. The differential signal is amplified by $g_mR_D$, and the SNR is the ratio of the two output amplitudes.

### Step 1 — Bias quantities

**Tail impedance.** The tail current source is an NMOS device carrying $I_{SS} = 1$ mA:

$$R_{SS} = r_O = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

**Input devices.** Each carries about $I_{SS}/2 = 0.5$ mA. With $\beta = \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2I_D}{\beta}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V},\\
g_m &= \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS}.
\end{aligned}
$$

### Step 2 — Transconductance mismatch caused by the threshold mismatch

Both gates sit at the same common-mode voltage and both sources at $P$, so $V_{GS1} = V_{GS2}$. With $V_{TH2} = V_{TH1} + \Delta V_{TH}$, the overdrives differ by exactly $\Delta V_{TH}$:

$$V_{ov1} - V_{ov2} = (V_{GS} - V_{TH1}) - (V_{GS} - V_{TH2}) = \Delta V_{TH} = 1\ \mathrm{mV}.$$

In saturation $g_m = \beta V_{ov}$, so

$$
\begin{aligned}
\Delta g_m = g_{m1} - g_{m2} &= \beta\,\Delta V_{TH} = (13.4\ \mathrm{mA/V^2})(1\ \mathrm{mV}) = 13.4\ \mu\mathrm{S},\\
\frac{\Delta g_m}{g_m} &= \frac{\Delta V_{TH}}{V_{ov}} = \frac{1\ \mathrm{mV}}{273\ \mathrm{mV}} = 0.37\ \%.
\end{aligned}
$$

### Step 3 — Differential gain (signal path)

For a differential input, the tail node is (to first order) an AC ground, and each half is a common-source stage. With equal loads,

$$|A_{DM}| \approx g_mR_D = (3.66\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 7.32 .$$

(The 0.37 % $g_m$ difference has a negligible effect on it, because the differential gain depends on the *average* $(g_{m1} + g_{m2})/2$.) The 10-mV peak-to-peak input gives

$$v_{out,signal} = 7.32\times 10\ \mathrm{mV} = 73.2\ \mathrm{mV}\ \text{peak-to-peak}.$$

### Step 4 — Common-mode to differential conversion (noise path)

Apply a common-mode change $v_{cm}$ to both gates. Small-signal model: transistor $k$ is a current source $g_{mk}v_{gs}$ from its drain to $P$, with the same $v_{gs} = v_{cm} - v_P$ for both. $R_{SS}$ connects $P$ to ground, and the equal loads $R_D$ connect the drains to AC ground.

<!-- diagram: diagram-01.cir -->

KCL at $P$, where both currents flow into $R_{SS}$:

$$
\begin{aligned}
v_P &= (g_{m1} + g_{m2})(v_{cm} - v_P)R_{SS}\\
v_{cm} - v_P &= \frac{v_{cm}}{1 + (g_{m1} + g_{m2})R_{SS}} .
\end{aligned}
$$

The two currents are unequal, $i_1 = g_{m1}(v_{cm} - v_P)$ and $i_2 = g_{m2}(v_{cm} - v_P)$, and flow through equal loads:

$$
\begin{aligned}
v_X - v_Y &= -R_D(i_1 - i_2) = -R_D\,\Delta g_m\,(v_{cm} - v_P)\\
|A_{CM-DM}| &= \frac{\Delta g_m R_D}{1 + (g_{m1} + g_{m2})R_{SS}} \approx \frac{\Delta g_m R_D}{1 + 2g_mR_{SS}} .
\end{aligned}
$$

Numerically:

$$
\begin{aligned}
1 + 2g_mR_{SS} &= 1 + 2(3.66\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 74.2,\\
\Delta g_mR_D &= (13.4\ \mu\mathrm{S})(2\ \mathrm{k}\Omega) = 0.0268,\\
|A_{CM-DM}| &= \frac{0.0268}{74.2} = 3.61\times10^{-4}.
\end{aligned}
$$

The 100-mV peak-to-peak common-mode noise therefore appears at the differential output as

$$v_{out,noise} = (3.61\times10^{-4})(100\ \mathrm{mV}) = 36.1\ \mu\mathrm{V}\ \text{peak-to-peak}.$$

### Step 5 — Signal-to-noise ratio

$$\mathrm{SNR} = \frac{73.2\ \mathrm{mV}}{36.1\ \mu\mathrm{V}} \approx 2.03\times10^3, \qquad 20\log_{10}(2030) \approx 66.1\ \mathrm{dB}.$$

**Cross-check.** $\mathrm{CMRR} = A_{DM}/A_{CM-DM} = (g_m/\Delta g_m)(1 + 2g_mR_{SS}) = 273\times 74.2 = 2.03\times10^4$. The input SNR is 0.1, so the output SNR is $2.03\times10^4\times 0.1 = 2.03\times10^3$. ✓

(The threshold mismatch also produces a constant differential output offset of about $g_mR_D\times 1\ \mathrm{mV} = 7.3$ mV. That is a fixed DC error, not part of the noise, and it does not enter the SNR.)

### Result

$$\mathrm{SNR} = \frac{g_mR_D\times 10\ \mathrm{mV}}{\dfrac{\Delta g_mR_D}{1 + 2g_mR_{SS}}\times 100\ \mathrm{mV}} = \frac{73.2\ \mathrm{mV}}{36.1\ \mu\mathrm{V}} \approx 2{,}030\quad(\approx 66.1\ \mathrm{dB}),$$

with $g_m = 3.66$ mS, $\Delta g_m = \beta\Delta V_{TH} = 13.4\ \mu$S and $R_{SS} = 10$ kΩ.

**Common mistake.** Treating the 1-mV mismatch as an extra input signal that leaves the noise unaffected. The mismatch does add a DC offset, but it also makes $g_{m1} \neq g_{m2}$, which is what converts the common-mode noise into a differential output.

**Common mistake.** Getting $\Delta g_m$ from a wrong relation, such as $\Delta g_m/g_m = \Delta V_{TH}/V_{GS}$ or $2\Delta V_{TH}/V_{ov}$. Since $g_m = \beta V_{ov}$ and the overdrives differ by $\Delta V_{TH}$, $\Delta g_m/g_m = \Delta V_{TH}/V_{ov} = 0.37$ %.

**Common mistake.** Omitting the factor $1 + 2g_mR_{SS}$, i.e. using $\Delta g_mR_D$ as the conversion gain. The tail impedance degenerates the common-mode current by a factor of 74, so leaving it out underestimates the SNR by that factor.
