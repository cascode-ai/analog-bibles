# Golden Solution - R467

## Reference answer

$|A_v| = g_{m1}(r_{O1}\|r_{O3})\cdot(g_{m5} + Kg_{m9})(r_{O5}\|r_{O7})$; with $Kg_{m9} = g_{m5}$, the second-stage transconductance is doubled: $|A_v| = 2g_{m1}(r_{O1}\|r_{O3})\,g_{m5}(r_{O5}\|r_{O7})$.

- First stage: $v_X = -v_Y = \mp g_{m1}(r_{O1}\|r_{O3})v_{in}/2$ (PMOS pair, current-source loads; nodes X, Y see only gate capacitances).
- Output 1: $M_5$ (gate at X) sinks $g_{m5}v_X$; $M_9$ (gate at Y) changes the current of the diode $M_{11}$ by $g_{m9}v_Y$, which $M_7$ copies with ratio K into $V_{out1}$. Since $v_Y = -v_X$, the pull-up current falls exactly when the pull-down current rises: net current $-(g_{m5} + Kg_{m9})v_X$ into $r_{O5}\|r_{O7}$.
- Output 2 is symmetric ($M_6$ with gate at Y, $M_8$ via $M_{10}$/$M_{12}$ driven by X).
- Overall: $A_v = g_{m1}(r_{O1}\|r_{O3})(g_{m5}+Kg_{m9})(r_{O5}\|r_{O7})$.

## Grading notes

+2: product of $g_{m1}(r_{O1}\|r_{O3})$ and $(g_{m5} + Kg_{m9})(r_{O5}\|r_{O7})$ (or the doubled form $2g_{m5}$ under a stated symmetric design), with the cross-connection (M7's current controlled by Y, opposite in phase to X) correctly used. An optional generalization to unmatched devices that relies on a stated assumption (e.g., the tail node as an ac virtual ground) is not a false claim, and a notation slip that does not affect the result is trivial. +1: correct result with K implicitly 1 and not stated, or a correct structure with a minor sign slip in an intermediate step. 0: second stage taken as only $g_{m5}(r_{O5}\|r_{O7})$ (the active-load contribution missed) with otherwise correct work. -2 (asserted as fact): the $M_7$ path claimed to subtract from the gain (in-phase pull-up), the first-stage load taken as diode-connected ($1/g_{m3}$), or the topology misread (e.g., $M_9$ driven by X).
