# Golden Solution - R027

## Reference answer

After the switch opens, node X and the source node S form an island that is connected to the rest of the circuit only through $I_1$ (the gate draws no current, and $C_1$ floats between X and S). KCL then gives an inconsistency for ideal elements: at X, $I_X = -i_{C1}$; at S, $I_X + i_{C1} = I_1$, i.e. $0 = I_1$. So $C_1$ cannot supply $I_1$; the only return path is through the grounded bulk (junctions) or small parasitic capacitances. Taking the normal bias before $t = 0$ ($M_1$ on and carrying $I_X(0^-) = I_1$ from the battery):
- $V_S$ (and with it $V_X$, since $V_X - V_S = 3$ V cannot jump) drops abruptly, at a rate set only by the small parasitic capacitance from these nodes to ground ($dV_S/dt \approx -I_1/C_p$, "instantaneous" in the ideal model), until the source–bulk junction forward-biases ($V_S \approx -0.6$ to $-0.7$ V) and supplies $I_1$. $V_X$ steps from the battery voltage to about $3 - 0.7 \approx 2.3$ V.
- The falling $V_S$ raises $V_{GS} = V_b - V_S$, so $M_1$, already on, conducts harder: $I_X$ jumps above $I_1$, stays roughly flat while $M_1$ is saturated ($V_X$ ramps down at $I_X/C_1$), then decays to zero in triode as $V_X - V_S \to 0$.
- Final state: $C_1$ discharged, $V_X \approx V_S \approx -0.6$ V (both junctions sharing $I_1$), $I_X = 0$. With a real (transistor) current source the fall stops instead near 0 V, where the source runs out of compliance; either way $V_X$ ends near 0 V or slightly below.
- In particular, $V_X$ does not ramp down linearly at $I_1/C_1$ with $I_X = I_1$ as it would if $C_1$ were grounded or the source node were held fixed.
- Edge case: if $V_b$ were so low that $M_1$ is off even at $V_S \approx -0.7$ V, $M_1$ was also off before $t = 0$, $I_1$ already flowed through the junction, and nothing changes: $V_X$ constant, $I_X = 0$.
(Level-1 simulation with $V_b = 1.5$ V, $I_1 = 100$ µA, $C_1 = 1$ pF, $\beta = 1$ mA/V², junction $I_S = 10^{-14}$ A: $V_S$ 0.35 → −0.59 V and $V_X$ 3.35 → 2.25 V at the switching instant, $I_X$ 0.1 → 0.97 mA, flat then decaying to 0 within ≈ 10 ns, final $V_X \approx -0.56$ V.)

## Grading notes

+2: recognizes that $C_1$ is floating between drain and source so it cannot supply $I_1$ (KCL inconsistency or parasitic-capacitance argument), that both nodes drop rapidly until a junction (or the current source's compliance) takes over, that $M_1$ turns on harder and discharges $C_1$ ($I_X$ a positive pulse above $I_1$ that decays to zero), and that the final state has $C_1$ discharged with $V_X$ near 0 V or slightly negative. Extra detail (saturation plateau, triode decay, the cutoff edge case for very low $V_b$ stated as a separate condition) is fine.
+1: the floating-capacitor issue and the rapid drop are identified but the final state or $I_X$ is vague.
0: the ideal-circuit KCL inconsistency (and the need for a junction or parasitic path) correctly shown, but no sketch or physical resolution given; the grounded bulk is stated in the question, so declaring the waveform undetermined is honest but incomplete.
-1: the $-I_1/C_1$ ramp with $I_X = I_1$ given as the main sketch, but explicitly conditioned on an assumed large capacitance at the source node, with the floating-node behaviour (source falling, $I_X$ rising above $I_1$) described as the alternative.
-2 (asserted as fact): $V_X$ ramping linearly with slope $-I_1/C_1$ and $I_X = I_1$ (treating $C_1$ as grounded or $V_S$ as fixed) without such a caveat, or $V_X$ staying at its initial value with $M_1$ conducting.
