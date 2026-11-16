The fully differential op amp in [Fig. 1] has all transistors active with $|V_{ov}| = 0.2$ V, $I_{D5} = 200\ \mu$A ($I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = 100\ \mu$A), $V_{An} = 10$ V, $|V_{Ap}| = 20$ V ($r_o = |V_A|/|I_D|$), no body effect. For simulation use a 0.8-μm process with $L_{\text{eff}} = 0.8\ \mu$m, $\mu_nC_{ox} = 127\ \mu\text{A/V}^2$, $\mu_pC_{ox} = 57.5\ \mu\text{A/V}^2$, $V_{tn} = 0.7$ V, $V_{tp} = -0.7$ V, $\lambda_n = 0.1\ \text{V}^{-1}$, $\lambda_p = 0.05\ \text{V}^{-1}$, $V_{DD} = V_{SS} = 2.5$ V. It is used with the CMFB scheme shown in [Fig. 2]: source followers buffer the outputs, the CM-sense resistors average them, and the CM-sense amplifier drives the CMC input (gate of $M_5$). The circuit is perfectly balanced except that the CM-sense resistors are mismatched, with the upper resistor (fed from $V_{o1}$) $R_{cs1} = 10.1$ kΩ and the lower resistor (fed from $V_{o2}$) $R_{cs2} = 9.9$ kΩ. Assume the source followers and the CM-sense amplifier are ideal with gains of unity.

(a) Compute the gains $a_{cms}$ and $a_{dm-cms}$ in $v_{cms} = a_{cms}v_{oc} + a_{dm-cms}v_{od}$.

(b) Compute the low-frequency op-amp gains $v_{od}/v_{id}$, $v_{oc}/v_{ic}$, $v_{od}/v_{ic}$ and $v_{oc}/v_{id}$ with the CMFB active.

(c) Use SPICE to simulate these gains.
