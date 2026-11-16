# Golden Solution - A246

## Reference answer

With current mirrors replacing the I→I stage, M4 and M5 become diode-connected NMOS loads for M1 and M2; M4 is mirrored by M7 (drain to the output node), and M5 is mirrored by M6 (drain into the diode side M8/M10 of the PMOS cascode mirror, which mirrors it to the output through M9/M11). The output current is $i_{out} = B g_{m1}v_{id}$, B being the mirror ratio $(W/L)_7/(W/L)_4 = (W/L)_6/(W/L)_5$. (The other pairing, M4→M6 and M5→M7, works equally, with the output polarity reversed.)

Gain: the output node sees $r_{ds7}$ of the simple NMOS mirror output in parallel with the cascode PMOS output ($\approx g_{m9}r_{ds9}r_{ds11}$), so $R_{out} \approx r_{ds7}$ and $A_v \approx Bg_{m1}r_{ds7} = \dfrac{Bg_{m1}}{\lambda_N I_7} = \dfrac{2g_{m1}}{\lambda_N I_3}$ (with $I_7 = BI_3/2$): a single-stage ($g_m r_{ds}$-level) gain; the cascoded PMOS side cannot raise it because the resistances are in parallel.

To make it equivalent to a two-stage op amp:
- Cascode the NMOS output mirror (put a cascode device on top of M7, or use a cascode/Wilson mirror for M4–M7), so that both sides of the output are cascoded: $R_{out} \approx (g_m r_{ds}^2)_N \| (g_m r_{ds}^2)_P$ and $A_v \approx Bg_{m1}R_{out} \sim (g_m r_{ds})^2$.
- Alternatively, add a common-source gain stage after the output node (a true two-stage amplifier, which then needs Miller compensation).
- A mirror ratio B > 1 (W/L of M7 relative to M4 and of M6 relative to M5) raises GB $= Bg_{m1}/C_L$ and the slew rate, but not the dc gain: $I_7 = BI_3/2$, so $A_v \approx Bg_{m1}/(\lambda_N I_7) = 2g_{m1}/(\lambda_N I_3)$ is independent of B.

## Grading notes

+2: describes the mirrored circuit (diode-connected loads on M1/M2, one mirrored to the output and the other to the PMOS mirror M8–M11; either pairing of M4/M5 with M6/M7 is fine), recognizes that the output resistance is set by the uncascoded NMOS mirror device ($\approx r_{ds}$) and proposes cascoding the NMOS output mirror, or adding a further gain stage, to reach $(g_m r_{ds})^2$-level gain. +1: the cascode idea without analysis of the resulting circuit; a correct analysis with the additional claim that B > 1 also raises the dc gain; or the simpler reading in which M1–M2 drive an NMOS current-mirror load directly (five-transistor OTA, M8–M11 unused), analyzed consistently (gain ≈ $g_{m1}/(g_{ds2} + g_{ds4})$, single-stage level) with a valid gain-raising method (cascoding, or a second stage). 0: only "increase the mirror ratio B" (B cancels from the dc gain because $I_7 = BI_3/2$; it raises only GB and SR); or a reading in which M8–M11 becomes a voltage-driven second gain stage (not realizable with the mirror as drawn) together with a sound gain-raising idea. −2 (asserted as fact): claiming that the output resistance is still $\approx g_m r_{ds}^2$ with a simple NMOS mirror output (gain already at the two-stage level).
