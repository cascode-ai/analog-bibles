# Golden Solution - alsim-06-6-07

## Reference answer

Form PSRR = $A_v/A_{dd}$ as the ratio of two outputs driven by the same ac source:
- Op amp 1: differential gain $A_v$: differential ac input $v$, quiet supplies, dc operating point stabilized by an ac-open feedback (large RC) path, $v_{o1} = A_v v$.
- Op amp 2 (identical, same load and dc stabilization): inputs at ac ground, ac source $v$ in series with $V_{DD}$ (for PSRR⁺) or $V_{SS}$ (for PSRR⁻), $v_{o2} = A_{dd}v$ (or $A_{ss}v$).
- PSRR⁺(jω) = $v_{o1}/v_{o2}$ (plot V(o1)/V(o2) or VDB(o1) − VDB(o2)); repeat with the source in $V_{SS}$ for PSRR⁻. The dc-stabilizing networks must be identical so that they do not change the comparison.
- Expected result for a Miller-compensated two-stage op amp: PSRR⁺ starting near 80–90 dB and falling from a few hundred Hz to about 0 dB near $GB$; PSRR⁻ higher, falling from tens of kHz.

## Grading notes

A correct answer configures one op amp for $A_v$ and an identical one for the supply gain (ripple in series with $V_{DD}$, then $V_{SS}$), both biased in the linear region with the same load, and forms the ratio. A correct simulation agrees within a few dB with the reciprocal of the direct (follower) configuration. Treating PSRR as $A_{dd}/A_v$, or using a configuration whose output saturates, is wrong.
