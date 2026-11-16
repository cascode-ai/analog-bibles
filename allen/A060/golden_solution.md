# Golden Solution - A060

## Reference answer

$\dfrac{v_{out}(s)}{v_{in}(s)} = \dfrac{1}{1 + s/\omega_p}$: a single-pole low-pass with unity dc gain and $\omega_p = 1/(R_{on1}C) \approx 1.2\times10^{10}$ rad/s (≈ 2.0 GHz), with $R_{on1}$ ≈ 1.84 kΩ and $C$ ≈ 44 fF. (Counting only the oxide capacitance of M2, 39.5 fF: $\omega_p$ ≈ 1.38×10¹⁰ rad/s, 2.19 GHz.)

- DC: the gate of M2 draws no current, so M1 carries no dc current: $V_{out} = V_{in}$ = 2 V and $V_{DS1}$ = 0. M1 (gate at 5 V) is a conducting switch in nonsaturation, i.e. a resistor; M2 (gate at 2 V; source, drain and bulk grounded) is a MOS capacitor.
- M1: $V_{GS1}$ = 3 V, $V_{SB1}$ = 2 V → $V_{T1} = 0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7})$ = 1.023 V; $r_{ds1} = 1/[K'(W/L)(V_{GS1} - V_{T1} - V_{DS1})] = 1/(110\ \mu\mathrm{A/V^2}\times2.5\times1.977\ \mathrm{V})$ = 1.84 kΩ.
- M2: $V_{GS2}$ = 2 V > $V_T$ and $V_{DS2}$ = 0, so the channel is formed (nonsaturation) and the whole gate capacitance goes to ground: $C = C_{ox}WL + 2\,\mathrm{CGSO}\cdot W + \mathrm{CGBO}\cdot L$ = 39.5 + 1.76 + 2.8 = 44.1 fF.
- $\omega_p = 1/(1.84\ \mathrm{k\Omega}\times44.1\ \mathrm{fF})$ = 1.23×10¹⁰ rad/s: $v_{out}/v_{in} = 1/(1 + s/1.23\times10^{10})$. (M1's own gate–drain capacitance, ≈ 2.4 fF to its gate, an ac ground, would lower $\omega_p$ by about 5%.)

## Grading notes

+2: a first-order low-pass $1/(1 + sR_{on}C)$ with unity dc gain, M1 recognized as a nonsaturated ($V_{DS}$ = 0) resistor including the body effect ($V_T$ ≈ 1.02 V, $R_{on}$ ≈ 1.84 kΩ) and M2 as a gate capacitor of about 39–47 fF, giving $\omega_p$ ≈ 1.15–1.45×10¹⁰ rad/s (1.8–2.3 GHz). +1: body effect neglected ($R_{on}$ = 1.58 kΩ, $\omega_p$ ≈ 1.4–1.6×10¹⁰ rad/s) with everything else right, or one minor slip that leaves $\omega_p$ in the +2 range. A computational slip that moves $\omega_p$ outside that range (e.g. M1's oxide capacitance taken 10 times too large, giving C ≈ 58 fF and $\omega_p$ ≈ 0.94×10¹⁰ rad/s) is a slip in the final value: 0. Describing $V_{DS1}$ = 0 as an edge of the triode (linear) region is accurate and not a false claim, provided M1 is treated with the linear-region conductance. 0: correct structure (RC low-pass) but $R_{on}$ or C off by about a factor of 2 through a calculation error. −2 (asserted as fact): M1 treated as a saturated amplifier or source follower, a high-pass response or a dc gain other than 1, M2's capacitance taken as overlap only (a few fF), or $\omega_p$ off by an order of magnitude.
