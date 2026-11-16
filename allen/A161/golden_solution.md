# Golden Solution - A161

## Reference answer

$\dfrac{V_3(s)}{V_{in}(s)} = -\dfrac{g_{m1}}{2}\,\dfrac{sC_2 + g_{m5} + g_{m6}}{(sC_1 + g_{ds1} + g_{ds5})(sC_2 + g_{m6})} \;\to\; -\dfrac{g_{m1}}{g_{ds1} + g_{ds5}}$ as $s \to 0$ ($g_{m5} = g_{m6}$).

Numbers: low-frequency gain ≈ −73.7 V/V. Poles $p_1 = -4.5\times10^6$ rad/s (716 kHz) and $p_2 = -g_{m6}/C_2 = -2.24\times10^8$ rad/s (35.6 MHz). LHP zero $z_1 = -(g_{m5}+g_{m6})/C_2 = -4.47\times10^8$ rad/s (71.2 MHz). $C_3$ and $C_4$ do not appear in $V_3/V_{in}$.

- Each of M1–M4 carries $I/4 = 50\ \mu$A. M1 and M2 have their gates at $V_1$, M3 and M4 at $V_2$. M1 drives $V_3$ (load M5). M3 drives the diode node X of M6, which M5 mirrors to $V_3$. M2 drives the diode M7 and M4 drives $V_4$ (load M8). For a symmetric differential input the common source node is an ac ground.
- Node X: M3's drain current is $-g_{m3}V_{in}/2$ (gate at $-V_{in}/2$). Drawing it from the diode node gives $V_X = +g_{m3}(V_{in}/2)/(g_{m6} + sC_2)$. M5 then delivers $-g_{m5}V_X$ into node 3, while M1 draws $g_{m1}V_{in}/2$ from it.
- Node $V_3$: $(sC_1 + g_{ds1} + g_{ds5})V_3 = -g_{m1}V_{in}/2 - \dfrac{g_{m5}g_{m3}V_{in}/2}{g_{m6} + sC_2}$, which gives the result. Including $g_{ds3} + g_{ds6}$ at node X ($G_X = g_{m6} + g_{ds3} + g_{ds6}$) changes the numbers slightly: DC gain −73.0, $p_2 = -2.28\times10^8$ rad/s, $z_1 = -4.52\times10^8$ rad/s.
- Parameters: $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 10 \cdot 50\ \mu} = 331.7\ \mu$S, $g_{m5} = g_{m6} = \sqrt{2 \cdot 50\ \mu \cdot 10 \cdot 50\ \mu} = 223.6\ \mu$S, $g_{ds1} + g_{ds5} = (0.04 + 0.05) \cdot 50\ \mu = 4.5\ \mu$S. Gain $= -331.7/4.5 = -73.7$.

## Grading notes

Credit: about one half for the algebraic form, one half for the numbers. +2: a transfer function equivalent to the reference (one LHP zero at $-(g_{m5}+g_{m6})/C_2$, poles at $-(g_{ds1}+g_{ds5})/C_1$ and $-g_{m6}/C_2$), DC gain −72 to −75, $p_1 \approx -4.5\times10^6$ rad/s, $p_2 \approx -2.2\times10^8$ to $-2.3\times10^8$ rad/s, $z_1 \approx -4.5\times10^8$ rad/s. Writing the zero as $-2g_{m6}/C_2$ (since $g_{m5} = g_{m6}$) is equivalent and earns full credit. Values in Hz are fine if labelled. +1: correct structure with one numerical slip. 0: low-frequency gain right but the frequency-dependent part wrong (e.g. the mirror pole/zero pair missing). −2 (asserted as fact): the cross-coupling misread so that $V_3$ is fed by M2 or by the M7 mirror, $C_3$/$C_4$ claimed to set poles of $V_3$, a RHP zero, or the gain computed with $g_{ds}$ at 200 µA.
