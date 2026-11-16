# Golden Solution - R487

## Reference answer

(i) 0.5 V/ns (500 V/µs) in both directions, limited at node X. (ii) Rising 0.5 V/ns; falling ≈ 0.42 V/ns (417 V/µs), limited at the output.
- Node X: $M_3$ supplies a constant $I_{SS}/2$ = 0.25 mA. With $M_2$ off (large positive differential input), $C_X$ charges at 0.25 mA/0.5 pF = 0.5 V/ns. With $M_2$ carrying all of $I_{SS}$ = 0.5 mA, the net discharge current is 0.5 − 0.25 = 0.25 mA, so again 0.5 V/ns.
- Output Y (source follower): rising, $M_4$ can source more than $I_1$ (its $V_{GS}$ grows), so Y follows X. Falling, $M_4$ can at most turn off and $C_Y$ is discharged by $I_1$ alone: slope $I_1/C_Y$.
- (i) $I_1/C_Y$ = 1 V/ns > 0.5 V/ns, so the slew rate is 0.5 V/ns both ways.
- (ii) $I_1/C_Y$ = 0.5 mA/1.2 pF ≈ 0.42 V/ns < 0.5 V/ns: the negative slew rate falls to ≈ 0.42 V/ns. The positive one stays 0.5 V/ns ($M_4$ then supplies $I_1 + C_Y \times 0.5$ V/ns ≈ 1.1 mA).

## Grading notes

+2: both cases with the limiting mechanism: 0.5 V/ns set by $(I_{SS}/2)/C_X$, and in (ii) the falling edge limited to $I_1/C_Y$ ≈ 0.42 V/ns. Saying that $I_1/C_Y$ applies to the falling edge ($M_4$ off, $I_1$ discharging $C_Y$) is enough; the answer need not separately state that the rising edge in (ii) stays at 0.5 V/ns. +1: correct values with a vague mechanism, e.g., 0.42 V/ns given as the slew rate of case (ii) without saying which edge it limits. 0: only one case right, e.g., case (ii) given as 0.5 V/ns symmetric (output limit missed), $I_1/C_Y$ = 1 V/ns claimed as the limit in case (i), or the output stage claimed to limit the rising edge in (ii). -2 (asserted as fact): the node-X limit taken as $I_{SS}/C_X$ = 1 V/ns (full tail current charging $C_X$), which makes case (i) and the X-limited edge of (ii) wrong, or other errors that make both cases wrong.
