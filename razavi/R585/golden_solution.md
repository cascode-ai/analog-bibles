# Golden Solution - R585

## Reference answer

Key result: the final output is $V_{out} = (C_1/C_2)V_{in0} + \Delta V_2$, where $V_{in0}$ is the input when $S_2$ turned off and $\Delta V_2$ is a constant offset from $S_2$. $S_1$, $S_3$ and the input change after $S_2$ opens leave no trace in the final value.

Waveform, segment by segment:
1. Sampling ($S_1$, $S_2$ on): $V_{out} = V_X \approx 0$.
2. $S_2$ turns off at $t_1$ (sampling instant, $V_{in} = V_{in0}$): $V_{out}$ makes a small positive step $\Delta V_2 \approx [\alpha_2WLC_{ox}(V_{DD} - V_{TH} - V_X) + WC_{ov}V_{DD}]/C_2$. The electrons injected onto X, plus the coupling of the falling gate, end up on $C_2$. Since X ≈ 0, this step is the same for every input level: a constant offset. The part injected into the op-amp output is absorbed.
3. From $t_1$ to $t_1 + \Delta t$ ($S_1$ still on): the circuit is an inverting amplifier for changes at P, so $V_{out} = \Delta V_2 - (C_1/C_2)[V_{in}(t) - V_{in0}]$. For the rising input of the inset, $V_{out}$ ramps down.
4. $S_1$ turns off at $t_1 + \Delta t$: its input-dependent channel charge and gate feedthrough lower $V_P$ by $\Delta V_P$, so $V_{out}$ jumps up by $(C_1/C_2)\Delta V_P$. It then stays flat for Δt, because P floats and the charge at X is conserved.
5. $S_3$ turns on at $t_1 + 2\Delta t$: P is driven to 0 V. The channel charge of $S_3$ and its rising-gate feedthrough are supplied by ground, causing at most a brief glitch. $V_{out}$ moves, with the amplifier's settling (or slewing), by $(C_1/C_2)[V_{in}(t_1 + \Delta t) - \Delta V_P]$ to the final value $(C_1/C_2)V_{in0} + \Delta V_2$.

## Grading notes

+2: the five segments with correct directions: the offset step when $S_2$ turns off, the output following $-(C_1/C_2)\Delta V_{in}$ during the first Δt, a jump when $S_1$ turns off and then a flat segment, and final settling to $(C_1/C_2)V_{in0}$ plus a constant offset; with the explicit statement that $S_1$, $S_3$ and the input change after $S_2$ opens do not affect the final value. +1: final value and key insight right, with one intermediate segment missing or in the wrong direction, or the wrong sign of the $S_2$ offset. 0: only the final value $(C_1/C_2)V_{in0}$ plus an offset. -2 (asserted as fact): a final output that depends on $S_1$'s charge injection or on $V_{in}$ at $S_1$'s turn-off, an offset from $S_2$ that depends on the input level, or the output tracking $V_{in}$ with a positive gain during the first Δt. Polarity check: the NMOS channel charge (electrons) and the falling-gate feedthrough act in the same direction, so both the $S_2$ and the $S_1$ turn-off steps are upward in $V_{out}$. An answer that says a falling gate injects positive charge (giving downward steps) has both the $S_2$ offset sign and the $S_1$ jump direction wrong: two errors (0), not one. Saying the net polarity is undetermined or depends on sizing counts as leaving those segments missing.
