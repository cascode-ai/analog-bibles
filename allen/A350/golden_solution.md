# Golden Solution - A350

## Reference answer

$A_v \approx 2.7\times10^4$ V/V (≈ 88.5 dB); $GB \approx 3.85\times10^5$ rad/s ≈ 61 kHz; $SR = 0.05$ V/µs; $P_{diss} = 0.9$ µW.

- Currents: M1, M2 carry 50 nA ($I_3$ = 100 nA); M4, M5 carry 150 nA; the cascode branches M6–M8–M10 and M7–M9–M11 carry 150 − 50 = 100 nA.
- Transconductances: $g_{m1} = 50\ \mathrm{nA}/(2.5\times26\ \mathrm{mV}) = 0.769$ µS; $g_{m7}$ (p) $= 100\ \mathrm{nA}/(1.5\times26\ \mathrm{mV}) = 2.56$ µS; $g_{m9}$ (n) $= 100\ \mathrm{nA}/(2.5\times26\ \mathrm{mV}) = 1.54$ µS.
- Output resistances: $r_{ds1,2} = 1/(0.04\times50\ \mathrm{nA}) = 500$ MΩ; $r_{ds4,5} = 1/(0.05\times150\ \mathrm{nA}) = 133$ MΩ; $r_{ds6,7} = 1/(0.05\times100\ \mathrm{nA}) = 200$ MΩ; $r_{ds8\text{–}11} = 1/(0.04\times100\ \mathrm{nA}) = 250$ MΩ.
- $R_{out} \approx (g_{m9}r_{ds9}r_{ds11})\,\|\,[g_{m7}r_{ds7}(r_{ds2}\|r_{ds5})] = 96.2\ \mathrm{G\Omega}\,\|\,(2.56\ \mu\mathrm{S}\times200\ \mathrm{M\Omega}\times105.3\ \mathrm{M\Omega} = 54.0\ \mathrm{G\Omega}) = 34.6$ GΩ.
- With the output ac-shorted, the source of M7 is a low-resistance node (≈ $1/g_{m7}$ = 0.39 MΩ ≪ $r_{ds2}\|r_{ds5}$), so practically all of M2's signal current enters M7, and M1's signal current reaches the output through M6 and the M8–M11 mirror: $G_m \approx g_{m1}$. Hence $A_v = g_{m1}R_{out} \approx 0.769\ \mu\mathrm{S}\times34.6\ \mathrm{G\Omega} \approx 26{,}600$ (a full nodal analysis of the small-signal circuit gives 26,640).
- $GB = g_{m1}/C_L = 0.769\ \mu\mathrm{S}/2\ \mathrm{pF} = 3.85\times10^5$ rad/s → 61.2 kHz.
- $SR = I_3/C_L = 100\ \mathrm{nA}/2\ \mathrm{pF} = 0.05$ V/µs ($I_4 = I_5 > I_3$, so the cascode currents never reach zero).
- $P_{diss} = (V_{DD} - V_{SS})(I_4 + I_5) = 3\ \mathrm{V}\times300\ \mathrm{nA} = 0.9$ µW: all supply current enters through M4 and M5; $I_3$ and the 100-nA mirror currents are parts of it, not additional currents.

## Grading notes

+2: all four results right: $A_v$ in 24,000–29,000 (from $g_{m1}R_{out}$ with the cascoded $R_{out}$ ≈ 33–36 GΩ), GB 58–64 kHz (or 3.7–4.0×10⁵ rad/s), SR = 0.05 V/µs, $P_{diss}$ = 0.9 µW, with weak-inversion $g_m = I_D/(nV_t)$. Using $V_t$ = 25.9 mV is fine. +1: exactly one of the four quantities wrong, for example $A_v$ ≈ 18,000–20,500 obtained from the unbalance-factor formula $[(2+k)/(2+2k)]g_{m1}R_{out}$ (k ≈ 1.78) or from $\tfrac34 g_{m1}R_{out}$, or $P_{diss}$ = 1.2 µW from counting $I_3$ on top of $I_4 + I_5$ (1.35 µW if 150 nA is added). 0: correct method but two quantities wrong, or GB and SR right with no gain computed. Critical errors: strong-inversion square-law $g_m = \sqrt{2K'(W/L)I_D}$ used for these 50-nA currents, $R_{out}$ taken as a single $r_{ds}$ (gain of a few hundred), slew rate set by $I_4$ or $I_4 + I_5$, or GB computed with $g_{m}$ of the cascode devices. Asserted as fact, such an error caps the score at 0 when it makes only one or two of the four quantities wrong (for example only $A_v$ wrong from an un-cascoded $R_{out}$, with GB, SR and $P_{diss}$ right: 0), and is −2 when the wrong quantities are most of the answer. An answer that also gives a second set of values as applying to the circuit shown (for example gain, GB and SR halved for a "single-ended" reading of $v_{OUT}$; the M8–M11 mirror already delivers the full differential current to $v_{OUT}$) offers conflicting conclusions: at most 0.
