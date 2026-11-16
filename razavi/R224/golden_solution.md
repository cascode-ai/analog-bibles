# Golden Solution - R224

## Reference answer

CMRR is infinite (to first order): a threshold mismatch of the diode loads produces only a dc output offset of ≈ 1 mV, not common-mode-to-differential conversion.
- $M_1$ and $M_2$ are matched and have equal $V_{GS}$, so (λ = 0) they carry equal currents, 0.25 mA each, regardless of the load voltages; the loads carry these same currents.
- A diode-connected device carrying a fixed current $I$ has $g_m = \sqrt{2\mu_pC_{ox}(W/L)I}$, independent of $V_{TH}$: $g_{m3} = g_{m4} = 0.62$ mS. The mismatch only shifts $|V_{GS3}|$ relative to $|V_{GS4}|$ by 1 mV, i.e. $V_X - V_Y = 1$ mV of offset.
- A CM input changes both drain currents equally ($\Delta I = g_{m1}v_{CM}/(1 + 2g_{m1}R_{SS})$, $R_{SS}$ = 20 kΩ), and equal load resistances turn this into equal output changes, so $A_{CM-DM} = 0$ while $A_{DM} = g_{m1}/g_{m3} \approx 4.2$.
- Within the stated model the CMRR is exactly infinite. Effects outside the given data would make it finite (channel-length modulation of $M_1$, $M_2$ seeing drain voltages that differ by 1 mV; a $\beta$ mismatch of the loads, which gives a direct $\Delta g_m/g_m = \tfrac12\Delta\beta/\beta$), but their size cannot be estimated from the data given.

## Grading notes

+2: CMRR infinite (or "extremely large, limited only by second-order effects") with the reason that the loads' $g_m$ depends on current, not $V_{TH}$, and the currents are equal. +1: correct conclusion with incomplete reasoning, or a very large finite CMRR from a correctly argued second-order effect. 0: hedged answer with partly correct analysis. -2 (asserted as fact): a finite CMRR computed as if the 1-mV mismatch produced a $g_m$ mismatch (e.g., $\Delta g_m/g_m = \Delta V/V_{ov}$ giving ≈ 85,000–110,000) or a load-resistance mismatch.
