# Golden Solution - R396

## Reference answer

$Z_{in} = 1/g_{m1}$, $Z_{out} = \dfrac{1}{g_{m2}(1 + g_{m1}R_S)}$, $\dfrac{V_{out}}{V_{in}} = -\dfrac{g_{m1}}{g_{m2}(1 + g_{m1}R_S)} = -\dfrac{1/g_{m2}}{R_S + 1/g_{m1}}$.

- Topology: $M_1$ is a common-source amplifier; the common-gate PMOS $M_2$ has its source at $V_{out}$ and its drain at the input node N, so it senses $V_{out}$ and injects $g_{m2}v_{out}$ into N: shunt–shunt feedback, negative.
- Open loop: the output node sees $1/g_{m2}$ (looking into $M_2$'s source), the input node sees only $R_S$ (drain of $M_2$ and $I_1$ are open), loop gain $T = g_{m1}R_S$.
- $Z_{out} = (1/g_{m2})/(1 + g_{m1}R_S)$.
- Input: including $R_S$ the closed-loop resistance at N is $R_S/(1 + g_{m1}R_S) = R_S\|(1/g_{m1})$, so the impedance looking into N alone is $1/g_{m1}$. Directly: with a test current at N, KCL at the output gives $g_{m2}v_{out} = -g_{m1}v_N$, so the returned current is $-g_{m1}v_N$.
- Gain: open-loop transimpedance (Norton input $V_{in}/R_S$) $-g_{m1}R_S/g_{m2}$, closed-loop $-g_{m1}R_S/[g_{m2}(1+g_{m1}R_S)]$, divided by $R_S$.

## Grading notes

+2: all three results correct (with $R_S$ included, $Z_{in} = R_S + 1/g_{m1}$ or the node resistance $R_S\|(1/g_{m1})$ is acceptable if clearly defined). +1: two correct, the third with a minor slip. 0: one correct with a sound method. -2 (asserted as fact): $M_2$ treated as a source follower or as an NMOS, $Z_{out} = 1/g_{m2}$ unchanged by feedback, a positive gain, or $Z_{in}$ infinite.
