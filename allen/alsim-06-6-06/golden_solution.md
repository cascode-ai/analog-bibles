# Golden Solution - alsim-06-6-06

## Reference answer

Use one op amp to produce $A_v\cdot v$ and the other to produce $A_c\cdot v$ from the same ac source, then take the ratio:
- Op amp 1 (differential gain): driven by a differential ac source $v$ (e.g. $\pm v/2$ on the two inputs, or $v$ on one input with the other at ac ground), with its dc operating point stabilized by a feedback path that is open for ac (e.g. a very large R from output to the inverting input with a large capacitor to ground, or an ideal dc servo), so $v_{o1} = A_v(j\omega)\,v$.
- Op amp 2 (identical, same load and bias stabilization): both inputs driven by the same ac source $v$ (common mode), so $v_{o2} = A_c(j\omega)\,v$.
- With $v = 1$ V ac, $\mathrm{CMRR}(j\omega) = v_{o1}/v_{o2}$; plot $V(o1)/V(o2)$ (or VDB(o1) − VDB(o2) in dB) with the simulator's postprocessor, which gives a quantity directly proportional to CMRR versus frequency, including phase.
- Alternatives: a behavioral source computing the ratio, or a feedback arrangement that places the 1/CMRR network in the feedback path of a high-gain amplifier; with an identical op amp as that amplifier the loop gain is only ≈ $A_v/\mathrm{CMRR} = |A_c|$, too small for accuracy, so the ratio method is preferred.
- Expected result (e.g. for the two-stage op amp of the earlier design example, $A_v$ ≈ 8×10³, CMRR of order 80 dB): a flat CMRR at low frequency that starts to fall at tens to hundreds of kHz, the same curve as the reciprocal of the direct configuration.

## Grading notes

A correct answer configures one op amp for the differential gain and an identical one for the common-mode gain (both with a stabilized dc operating point and the same load), drives both from the same ac source and forms $v_{o1}/v_{o2} = A_v/A_c$ = CMRR (via postprocessing or an equivalent method). A correct simulation shows CMRR(f) equal to the reciprocal of the direct-configuration result within a few dB. An open-loop differential configuration with no dc stabilization (output saturated), or a "CMRR" formed as $A_c/A_v$, is wrong.
