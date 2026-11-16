# Golden Solution - A374

## Reference answer

$V_{OH} \approx 2.43$ V, $V_{OL} = V_{SS} = -2.5$ V, $A_v(0) \approx 3300$ V/V, $V_{in}(\min) \approx 1.5$ mV, $p_1 = -6.75\times10^6$ rad/s (1.07 MHz), $p_2 = -4.21\times10^6$ rad/s (0.67 MHz).

- $V_{OH}$: M6 in triode with $V_{SG6} = 2.5$ V, M7 sinking $I_7 = 234\ \mu$A: $V_{OH} = V_{DD} - (V_{DD}-V_{G6}-|V_{TP}|)\left[1-\sqrt{1-\dfrac{2I_7}{\beta_6(V_{DD}-V_{G6}-|V_{TP}|)^2}}\right]$ with $\beta_6 = 50\times38 = 1900\ \mu\mathrm{A/V^2}$: $2.5 - 1.8\,[1-\sqrt{1-0.0760}] = 2.5 - 0.070 = 2.43$ V.
- $V_{OL}$: M6 off, M7 pulls the output to $V_{SS} = -2.5$ V.
- Gain: $g_{m1} = \sqrt{2\cdot110\cdot3\cdot15}\ \mu\mathrm{S} = 99.5\ \mu$S, $g_{ds2}+g_{ds4} = 15\ \mu\mathrm{A}(0.04+0.05) = 1.35\ \mu$S → first stage 73.7; $g_{m6} = \sqrt{2\cdot50\cdot38\cdot234}\ \mu\mathrm{S} = 943\ \mu$S, $g_{ds6}+g_{ds7} = 234\ \mu\mathrm{A}(0.09) = 21.1\ \mu$S → second stage 44.8; $A_v(0) \approx 3300$.
- $V_{in}(\min) = (2.43+2.5)/3300 \approx 1.49$ mV.
- $p_1 = -(g_{ds2}+g_{ds4})/C_I = -1.35\ \mu\mathrm{S}/0.2\ \mathrm{pF} = -6.75\times10^6$ rad/s; $p_2 = -(g_{ds6}+g_{ds7})/C_{II} = -21.06\ \mu\mathrm{S}/5\ \mathrm{pF} = -4.21\times10^6$ rad/s.

## Grading notes

+2: all six quantities within ±5 % ($V_{OH}$ 2.42–2.44 V, $V_{OL}$ = −2.5 V, $A_v$ 3100–3500, $V_{in}(\min)$ ≈ 1.4–1.6 mV, $|p_1|$ ≈ 6.75 Mrad/s or 1.07 MHz, $|p_2|$ ≈ 4.2 Mrad/s or 0.67 MHz). Either rad/s or Hz is fine if labelled. Including $(1+\lambda V_{DS})$ factors is acceptable. +1: one quantity wrong through an arithmetic slip. 0: about half the quantities right (e.g., the poles and gain right but $V_{OH}$ taken as $V_{DD}$ with no calculation and $V_{OL}$ wrong). −2 (asserted as fact): poles computed with $g_m$ instead of output conductances, gain formula using the wrong currents (e.g., 30 µA for the first-stage $g_{ds}$), mixing up which capacitance belongs to which stage, or rad/s and Hz confused so that a pole is off by $2\pi$ without labelling.
