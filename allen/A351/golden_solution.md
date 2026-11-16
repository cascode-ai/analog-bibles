# Golden Solution - A351

## Reference answer

$A_v \approx 7.6\times10^4$ V/V (97.7 dB); $GB = g_{m1}/C_c = 7.69\times10^{-7}\ \mathrm{S}/C_c$ (122 kHz for $C_c$ = 1 pF); $SR = I_5/C_c = 100\ \mathrm{nA}/C_c$ (0.1 V/µs for 1 pF); $P_{diss}$ = 0.9 µW. Design: $(W/L)_{12} = 5$, $(W/L)_{13} = (W/L)_{14} \approx 0.77$, $(W/L)_{15} \approx 2.15$.

- Currents: M1–M4 carry 50 nA; the mirror ratio $b = S_6/S_4 = S_8/S_3 = 1$ and M9:M7 = 1:1, so $I_6 = I_7 = I_8 = 50$ nA.
- The whole differential signal current reaches the output (M4 → M6 directly, M3 → M8 → M9 → M7), so $i_{out} = b\,g_{m1}v_{in}$ with $g_{m1} = 50\ \mathrm{nA}/(2.5\times26\ \mathrm{mV}) = 0.769$ µS.
- $R_{out} = (g_{m10}r_{ds10}r_{ds6})\,\|\,(g_{m11}r_{ds11}r_{ds7})$: $g_{m10} = 1.28$ µS, $r_{ds6} = r_{ds10} = 400$ MΩ → 205 GΩ; $g_{m11} = 0.769$ µS, $r_{ds7} = r_{ds11} = 500$ MΩ → 192 GΩ; $R_{out}$ = 99.3 GΩ.
- $A_v = g_{m1}R_{out} \approx 76{,}400$, equivalently $A_v = \dfrac{I_5}{2I_7}\,\dfrac{b/n_n}{V_t^2(\lambda_P^2n_p + \lambda_N^2n_n)} = \dfrac{0.4}{(6.76\times10^{-4})(0.00775)}$.
- $GB = b\,g_{m1}/C_c$; the largest output current is $bI_5$ = 100 nA, so $SR = 100\ \mathrm{nA}/C_c$.
- $P_{diss}$: $V_{DD}$ supplies M3 + M4 (100 nA), M8 (50 nA), M6 (50 nA), M13 (50 nA) and M14 (50 nA): 300 nA × 3 V = 0.9 µW.
- Swing: $v_{out}(\max) = V_{DD} - V_{SD6}(sat) - V_{SD10}(sat) = 1.3$ V requires $V_{SD6} = 0.1$ V. The gate of M10 is at $V_{DD} - V_{SG13}$ and its source at $V_{DD} - V_{SG13} + V_{SG10}$, so $V_{SG13} - V_{SG10} = 0.1$ V. In weak inversion $V_{SG} = n_pV_t\ln[I/((W/L)I_{DO})]$; with $I_{13} = I_{10} = 50$ nA: $(W/L)_{13} = (W/L)_{10}\,e^{-0.1/(n_pV_t)} = 10\,e^{-2.564} = 0.77$. M14 shares M13's gate and must supply M15's 50 nA: $(W/L)_{14} = 0.77$.
- M15 sets the gate of M11: $V_{GS15} - V_{GS11} = V_{DS7}(sat) = 0.1$ V with equal currents → $(W/L)_{15} = 10\,e^{-0.1/(n_nV_t)} = 10\,e^{-1.538} = 2.15$; then $v_{out}(\min) = V_{SS} + 0.2$ V = −1.3 V.
- M12 has the gate voltage of M5 (100 nA at W/L = 10); for 50 nA, $(W/L)_{12} = 5$.
- (Absolute values with $I_{DO}$ = 2 nA: $V_{SG10}$ = 36 mV, $V_{SG13}$ = 136 mV; $V_{GS11}$ = 60 mV, $V_{GS15}$ = 160 mV.)

## Grading notes

+2: gain within ±6 % of 76,400 (the book's 73,846 is acceptable), GB = $g_{m1}/C_c$ and SR = 100 nA/$C_c$ (or numbers for a stated $C_c$), $P_{diss}$ = 0.9 µW, and the cascode-bias design with M13 (and M14) smaller than M10 by $e^{-0.1/(n_pV_t)}$ (0.69–0.80) and M15 smaller than M11 by $e^{-0.1/(n_nV_t)}$ (2.0–2.2), M12 = 5 (or its current/size relation to M5 stated). +1: one quantity wrong or missing (e.g. M12 or M14 not sized, or $P_{diss}$ counting only $I_5$), rest right. 0: correct performance numbers but no valid swing design, or a correct design with the performance part wrong. −2 (asserted as fact): strong-inversion square-law relations used for these nanoampere currents, the bias transistors made larger than M10/M11 (which lowers the cascode gate overdrive in the wrong direction and starves M6/M7 of $V_{DS}$), a gain of order $g_mr_{ds}$ (single-stage, ~100–1000), or a numeric GB/SR claimed without stating any $C_c$. $P_{diss}$ = 0.6 µW (main circuit only, $I_5 + I_6 + I_8$ = 200 nA) is accepted in place of 0.9 µW when the answer states that it excludes the M12–M15 bias branches, whose currents the question gives only in the second part; unlabelled it is the +1 case. A $g_m$ (and hence $A_v$, GB) off by 1000 through an mS/µS unit slip, with $g_m = I/(nV_t)$, $GB = g_{m1}/C_c$ and $R_{out} = (g_{m10}r_{ds10}r_{ds6})\|(g_{m11}r_{ds11}r_{ds7})$ written correctly, is a computational slip (those parts at most 0), not a wrong model; a $g_mr_{ds}$-order gain offered only as a conditional alternative ("if a simplified model is intended") beside that correctly formulated main result is a minor error, not the −2 case.
