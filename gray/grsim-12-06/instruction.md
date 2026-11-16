The fully differential op amp in [Fig. 1] has all transistors in the active region with $|V_{ov}| = 0.1$ V and $I_{D5} = 100\ \mu$A ($I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = 50\ \mu$A), $V_{An} = 10$ V, $|V_{Ap}| = 20$ V, no body effect, and $C_{gs} = 180$ fF, $C_{gd} = 20$ fF for all transistors. Use $V_{DD} = V_{SS} = 2.5$ V and an input CM level of 0 V. For simulation, use a 0.8-μm CMOS process with $L_{\text{eff}} = 0.8\ \mu$m: $\mu_nC_{ox} = 127\ \mu\text{A/V}^2$, $\mu_pC_{ox} = 57.5\ \mu\text{A/V}^2$, $V_{tn} = 0.7$ V, $V_{tp} = -0.7$ V, $\lambda_n = 0.1\ \text{V}^{-1}$, $\lambda_p = 0.05\ \text{V}^{-1}$. This gives $(W/L)_{1,2} \approx 79$, $(W/L)_{3,4} \approx 174$, $(W/L)_5 \approx 157$.

The CMFB scheme of [Fig. 2] is used: source followers buffer the outputs, two equal resistors $R_{cs}$ average them, and a CM-sense amplifier compares the average with the (equally shifted) reference and drives the CMC input (gate of $M_5$). The total CM-sense gain from $v_{oc}$ to $v_{cmc}$ is $a_{cms} = 1$; in simulation it may be built from ideal controlled sources.

(a) Calculate $a'_{cm} = v_{oc}/v_{ic}$ with the CMFB loop active.

(b) Use SPICE to plot $|a'_{cm}|$ from 100 Hz to 100 MHz.
