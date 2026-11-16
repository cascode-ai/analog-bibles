# Golden Solution - R678

## Reference answer

$A_v = -g_mR_D = -WC_{ox}v_{sat}R_D$.
- Complete velocity saturation: $I_D = v_{sat}Q_d = v_{sat}WC_{ox}(V_{GS}-V_{TH})$, so $g_m = \partial I_D/\partial V_{GS} = WC_{ox}v_{sat}$, independent of L and $I_D$.
- With λ = 0, the gain of the common-source stage is $-g_mR_D = -WC_{ox}v_{sat}R_D$.
- Unlike the square-law case ($-\sqrt{2\mu_nC_{ox}(W/L)I_D}\,R_D$), raising the bias current or shortening L does not increase $g_m$; only W does.

## Grading notes

- +2: $-WC_{ox}v_{sat}R_D$ (with the minus sign, or the inverting nature stated), with $g_m = WC_{ox}v_{sat}$ derived from $I_D = WC_{ox}v_{sat}(V_{GS}-V_{TH})$.
- +1: correct magnitude, sign omitted.
- 0: $g_m$ derived correctly, but the gain expression has a slip (e.g., $C_{ox}$ dropped).
- -2 (asserted as fact): the square-law $g_m$ used, a gain that depends on L or $I_D$, or an extra factor such as ½ in $g_m$.
