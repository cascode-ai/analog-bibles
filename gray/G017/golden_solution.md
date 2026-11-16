# Golden Solution - G017

## Reference answer

Only the area-dependent parasitics change: the junction capacitances $C_{je}$, $C_\mu$, $C_{cs}$ double, and the parasitic resistances $r_b$, $r_c$, $r_{ex}$ halve. $g_m$, $r_\pi$, $r_o$, $r_\mu$ and the base-charging capacitance $C_b$ are unchanged.

- Each device carries $I_C/2$, so each has half the $g_m$, $C_b = \tau_Fg_m$, and twice $r_\pi$, $r_o$, $r_\mu$; two in parallel restore the original totals: $g_m = I_C/V_T$, $r_\pi = \beta_0/g_m$, $r_o = V_A/I_C$, $r_\mu$, $C_b = \tau_Fg_m$ depend only on the total current (same β, $V_A$, $\tau_F$).
- Depletion capacitances scale with junction area: $C_{je}' = 2C_{je}$, $C_\mu' = 2C_\mu$, $C_{cs}' = 2C_{cs}$ (so $C_\pi' = C_b + 2C_{je}$).
- Ohmic parasitics are two equal resistances in parallel: $r_b' = r_b/2$, $r_c' = r_c/2$, $r_{ex}' = r_{ex}/2$.
- Consequences: $f_T$ falls at low currents, where $(C_{je}+C_\mu)/g_m$ dominates $\tau_T$, and is unchanged at high currents; $I_S$ doubles, so $V_{BE}$ drops by $V_T\ln2 \approx 18$ mV (a dc effect). Second-order: the lower current density can change β and $\tau_F$ slightly (less high-level injection).

## Grading notes

+2: capacitances ($C_{je}$, $C_\mu$, $C_{cs}$) doubled, resistances ($r_b$, $r_c$, $r_{ex}$) halved, and $g_m$, $r_\pi$, $r_o$, $r_\mu$, $C_b$ stated unchanged. Omitting $r_{ex}$ or the $f_T$/$V_{BE}$ remarks is fine. +1: the main groups right but one element misclassified in a minor way (e.g. $C_{cs}$ said unchanged). 0: only one of the two groups (capacitances or resistances) identified correctly, the rest missing. -2 (asserted as fact): $g_m$ doubled or halved, $r_\pi$ or $r_o$ halved, $C_b$ doubled, or the capacitances claimed unchanged.
