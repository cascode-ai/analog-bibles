# Golden Solution - G088

## Reference answer

$R_o \approx 25$ MΩ and $v_o/v_i \approx +2.3\times10^4$.

- Each transistor carries 50 µA. n-channel: $g_m = 0.913$ mS, $r_o = 190$ kΩ; p-channel: $g_m = 0.948$ mS, $r_o = 320$ kΩ.
- Looking down into $M_4$ (cascode on $M_2$): $R_{down} \approx r_{o4}(1 + g_{m4}r_{o2}) + r_{o2} \approx 33$ MΩ. ($M_2$'s source sees $1/g_{m1}$, which doubles its effective resistance, but the current flowing into $M_1$'s source is mirrored back to the output; the two effects cancel, as in the simple active-load stage.)
- Looking up into $M_6$ (cascode on $M_8$; $M_5$–$M_8$ form a cascode mirror): $R_{up} \approx r_{o6}(1 + g_{m6}r_{o8}) + r_{o8} \approx 98$ MΩ.
- $R_o = R_{down}\|R_{up} \approx 24.9$ MΩ; $v_o/v_i = g_{m1}R_o \approx 0.913\ \mathrm{mS}\times24.9\ \mathrm{M\Omega} \approx 2.27\times10^4$ (a full small-signal solution gives $2.26\times10^4$).

## Grading notes

+2: $R_o$ 22–28 MΩ and gain (2.0–2.55)×10⁴, with both halves cascoded ($g_mr_o^2$-type resistances; dropping the "+r_o" terms is fine). +1: one slip or one half's resistance off by a modest amount. 0: $M_2$'s resistance doubled without the mirror cancellation ($R_{down}$ ≈ 66 MΩ, $R_o$ ≈ 39 MΩ, gain ≈ 3.6×10⁴), or $R_o$ right with the gain missing, or $g_m$ computed with the drawn length $L$ = 1 µm instead of $L_{\text{eff}}$ in an otherwise correct cascode analysis ($R_o$ ≈ 21.3 MΩ, gain ≈ 1.69×10⁴), whether or not the $L_{\text{eff}}$ result is also offered as a conditional alternative. -2 (asserted as fact): non-cascode result ($R_o = r_{o2}\|r_{o4}$ ≈ 119 kΩ, gain ≈ 109), gain computed as $g_mR_o/2$, or the output resistance taken as only the upper or only the lower half.
