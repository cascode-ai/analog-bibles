# Golden Solution - A224

## Reference answer

Circuit 6: with $v_{in}$ high the p-channel follower M2 turns off and the p-channel current source M1 pulls the unloaded output all the way to $V_{DD}$.

$v_o(\max)$ of all six:
- C1: $v_{in} = V_{DD}$, M1 and the diode M2 are identical n-channel devices carrying the same current, so $V_{GS1} = V_{GS2}$ → $V_{DD}/2$.
- C2: p-follower off, the p-channel diode load lets the output rise until its current vanishes → $V_{DD} - V_T$.
- C3: n-follower at $v_{in} = V_{DD}$ against a p-diode to ground: $\sqrt2(V_{DD}-v_o-V_T) = v_o - V_T$ → $v_o = [\sqrt2 V_{DD} - (\sqrt2-1)V_T]/(1+\sqrt2) \approx 0.59V_{DD} - 0.17V_T$.
- C4: p-follower off, the n-channel device from $V_{DD}$ (gate at $V_{DD}$) pulls up until its current vanishes → $V_{DD} - V_T$.
- C5: n-follower at $v_{in} = V_{DD}$ carrying the sink current $I$ → $V_{DD} - V_T - \sqrt{2I/\beta_N}$.
- C6: → $V_{DD}$.

## Grading notes

+2: Circuit 6 (reaches $V_{DD}$), with Circuits 2 and 4 recognized as next ($V_{DD}-V_T$). +1: Circuits 2, 4 and 6 named together as the high group (p-channel followers) with a reasonable argument. 0: no choice or the C6 behaviour misargued while the answer is right. −2 (asserted as fact): an n-channel follower circuit (1, 3, 5) named as highest, or Circuit 2 and/or Circuit 4 named as highest with Circuit 6 excluded (e.g. Circuit 6 claimed to be limited below $V_{DD} - V_T$).
